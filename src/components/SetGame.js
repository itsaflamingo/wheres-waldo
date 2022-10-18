import '../styles/SetGame.css';
import React, {useEffect, useState} from 'react';
import GameOne from './GameOne';
import {saveCharacters, retrieve} from './firebaseConfig';
import MakeCursor from './MakeCursor';

function SetGame(props) {

    const {game} = props;

    const [background, setBackground] = useState({})
    const [displayCharacters, setDisplayCharacters] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const [numFound, setNumFound] = useState(0);
    const [showGame, setShowGame] = useState(false);

    useEffect(() => {
      if(game.name === undefined) return;
      setBackground(game)
      setShowGame(true);
    })

    useEffect(() => {
      if(showGame === false) return;
      console.log('background set');
      background.characters.map((char) => saveCharacters(char))
  
    }, [showGame])

    useEffect(() => {
      const moveCursor = (e) => {
        const cursor = document.querySelector('#cursor');

        const x = e.pageX - 110;
        const y = e.pageY - 110;

        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
      }
      document.addEventListener('mousemove', e => moveCursor(e))
      return () => {
        document.addEventListener('mousemove', e => moveCursor(e))
      }
    })

    useEffect(() => {
      const charDiv = document.querySelector('.character-options');
      
      const setDivPosition = (e) => {
        if(displayCharacters === false) return;
        const x = e.pageX;
        const y = e.pageY;
  
        charDiv.style.top = y + 'px';
        charDiv.style.left = x + 'px';
      }

      const getChosenCharacter = async (e) => {
        const id = e.target.id;
        const chosenCharacter = background.characters.filter(char => char.name === id);

        const dbChar = await retrieve(chosenCharacter[0].name);
        console.log(dbChar);
        checkIfCharacter(dbChar, id);
      }

      document.addEventListener('click', e => setDivPosition(e));
      if(charDiv === null) return() => {document.removeEventListener('click', e => setDivPosition(e))}
      charDiv.addEventListener('click', e => getChosenCharacter(e));

      return()=> {
        if (numFound < 3) return;
        document.removeEventListener('click', e => setDivPosition(e));
        charDiv.removeEventListener('click', e => getChosenCharacter(e));
      }
    }, [displayCharacters])

    
    const toggleDisplay = () => setDisplayCharacters(!displayCharacters);

    const handleMouseMove = (e) => {
      setCoordinates({
          x: e.pageX - e.target.offsetLeft,
          y: e.pageY - e.target.offsetTop
      })
  }

    const checkIfCharacter = (obj, name) => {
      const location = obj[name].location;

      if(coordinates.x > (location.x - 110) &&
         coordinates.x < (location.x + 110) && 
         coordinates.y < (location.y + 110) &&
         coordinates.y > (location.y - 110)) {
        console.log(`You found ${name}!`)
        setNumFound(() => numFound + 1);
      }
    }

  return (
    <div className="App" onClick={() => toggleDisplay()}>
      <MakeCursor />
      {showGame && (<GameOne 
                    background={background} 
                    displayCharacters={displayCharacters}
                    toggleDisplay={toggleDisplay}
                    handleMouseMove={handleMouseMove} />)}
    </div>
  );
}

export default SetGame;
