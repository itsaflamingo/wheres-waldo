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
    const [charactersFound, setCharactersFound] = useState([]);
    const [showGame, setShowGame] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [message, setMessage] = useState('');
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [scores, setScores] = useState([{
      name: 'lisa',
      time: 0.04,
      id: 1 
    }, {
      name: 'cookie',
      time: 0.06,
      id: 2
    },{
      name: 'toki',
      time: 0.06,
      id: 3 
  }]);

    useEffect(() => {
      if(game.name === undefined) return;
      setBackground(game);
      setShowGame(true);
    })

    useEffect(() => {
      if(showGame === false) return;
      background.characters.map((char) => saveCharacters(char))
  
    }, [showGame])

    // Cursor movement
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

    // Display character option div when page is clicked
    useEffect(() => {
      const charDiv = document.querySelector('.character-options');
      
      const setDivPosition = (e) => {
        e.stopPropagation();

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
        if (charactersFound.length < 3) return;
        document.removeEventListener('click', e => setDivPosition(e));
        charDiv.removeEventListener('click', e => getChosenCharacter(e));
      }
    }, [displayCharacters])

    useEffect(() => {
      if(charactersFound.length !== 3) return;
      
      setMessage(() => `You found ${charactersFound[charactersFound.length-1]}!`)
      setShowInput(true);
    }, [charactersFound])

    
    const toggleDisplay = () => setDisplayCharacters(!displayCharacters);

    const handleMouseMove = (e) => {
      setCoordinates({
          x: e.pageX - e.target.offsetLeft,
          y: e.pageY - e.target.offsetTop
      })
  }

    const checkIfCharacter = (obj, name) => {
      const location = obj[name].location;

      if(((coordinates.x + 120) > location.x &&
          (coordinates.x - 120) < location.x) && 
          (coordinates.y + 120) > location.y &&
          (coordinates.y - 120) < location.y) {
        checkIfFound(name);
      }
    }

    const checkIfFound = (name) => {
      if(charactersFound.includes(name)) return;
      setCharactersFound(() => charactersFound.concat(name));
    }

  return (
    <div className="App" onClick={() => toggleDisplay()}>
      <MakeCursor />
      {showGame && (<GameOne 
                    background={background} 
                    displayCharacters={displayCharacters}
                    toggleDisplay={toggleDisplay}
                    handleMouseMove={handleMouseMove}
                    message={message} 
                    setShowInput={setShowInput}
                    showInput={showInput} 
                    showLeaderboard={showLeaderboard} 
                    setShowLeaderboard={setShowLeaderboard} 
                    scores={scores}
                    setScores={setScores} /> )}
    </div>
  );
}

export default SetGame;
