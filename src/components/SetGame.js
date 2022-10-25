import '../styles/SetGame.css';
import React, {useEffect, useState} from 'react';
import GameOne from './GameOne';
import {saveCharacters, retrieve} from './firebaseConfig';
import MakeCursor from './MakeCursor';

function SetGame(props) {

    const {game} = props;

    const [background, setBackground] = useState({})
    const [displayCharacters, setDisplayCharacters] = useState(false);
    const [pointer, setPointer] = useState({});
    const [charactersFound, setCharactersFound] = useState([]);
    const [showGame, setShowGame] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [message, setMessage] = useState('');
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [input, setInput] = useState({name: '', timer: 0});
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
      if(background.image === undefined || showInput === true) return;
      const charDiv = document.querySelector('.character-options');
      // const backG = document.querySelector('#background');
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
      if(charactersFound[charactersFound.length-1] === undefined) return;
      setMessage(() => `You found ${charactersFound[charactersFound.length-1]}!`)
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1500);
      if(charactersFound.length === 3) setShowInput(true);

    }, [charactersFound])

    
    const toggleDisplay = () => setDisplayCharacters(!displayCharacters);

    const handleMouseMove = (e) => {
      setPointer({
          x: e.pageX - e.target.offsetLeft,
          y: e.pageY - e.target.offsetTop
      })
  }

    const checkIfCharacter = (obj, name) => {
      const location = obj[name].location;

      console.log((pointer.x + 120) > location.x,
      (pointer.x - 120) < location.x, 
      (pointer.y + 120) > location.y,
      (pointer.y - 120) < location.y)

      if(((pointer.x + 120) > location.x &&
          (pointer.x - 120) < location.x) && 
          (pointer.y + 120) > location.y &&
          (pointer.y - 120) < location.y) {
        checkIfFound(name);
        console.log(`You found ${name}!`)
      }
    }

    const checkIfFound = (name) => {
      if(charactersFound.includes(name));
      setCharactersFound(() => charactersFound.concat(name));
    }

    useEffect(() => {
      if(scores.length === 3) return;
      setShowInput(false);
      setShowLeaderboard(true);
    }, [scores])

  const onChange = (e) => {
    const seconds = document.querySelector('#timer').firstChild.innerHTML;
    const milliseconds = document.querySelector('#timer').lastChild.innerHTML;
      setInput({name: e.target.value,
                time: `${seconds}${milliseconds}`,
                id: 4});
    }

  return (
    <div className="App">
      <MakeCursor />
      {showGame && (<GameOne 
                    background={background} 
                    displayCharacters={displayCharacters}
                    toggleDisplay={toggleDisplay}
                    handleMouseMove={handleMouseMove}
                    message={message} 
                    showInput={showInput} 
                    showLeaderboard={showLeaderboard} 
                    setShowLeaderboard={setShowLeaderboard} 
                    scores={scores}
                    setScores={setScores} 
                    showMessage={showMessage}
                    onChange={onChange} 
                    input={input} /> 
                    )}
    </div>
  );
}

export default SetGame;
