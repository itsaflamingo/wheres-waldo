import '../styles/SetGame.css';
import React, {useEffect, useState} from 'react';
import GameOne from './GameOne';
import {saveCharacters, saveScores, retrieveScores} from './firebaseConfig';
import MakeCursor from './MakeCursor';
import uniqid from "uniqid";
import EndGame from './EndGame';
import { useNavigate } from "react-router-dom";
import checkIfFound from './confirmCharacterFound';
import {getChosenCharacter} from './getChosenCharacter';
import {setDivPosition} from './setDivPosition';

function SetGame(props) {

    const {game} = props;

    const [background, setBackground] = useState({});
    const [displayCharacters, setDisplayCharacters] = useState(false);
    const [pointer, setPointer] = useState({});
    const [charactersFound, setCharactersFound] = useState([]);
    const [showGame, setShowGame] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [message, setMessage] = useState('');
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [input, setInput] = useState({name: '', timer: 0});
    const [scores, setScores] = useState([]);
    const [endGame, setEndGame] = useState(true);

    // set background only when game object has been set.
    useEffect(() => {
      if(game.name === undefined) return;
      fetchLeaderboard();

      setBackground(game);
      setShowGame(true);
    }, [])

    const fetchLeaderboard = async () => await retrieveScores()
      .then(res => setScores(res));

    //Save characters to database when game is rendered. 
    useEffect(() => {
      if(showGame === false) return;
      background.characters.map((char) => saveCharacters(char));
      retrieveScores();
    }, [showGame])

    // Cursor movement
    useEffect(() => {
      const moveCursor = (e) => {
        const cursor = document.querySelector('#cursor');
        if(cursor === undefined || cursor === null) return;

        const x = e.pageX - 110;
        const y = e.pageY - 110;

        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
      }
      document.addEventListener('mousemove', e => moveCursor(e))
      return () => {
        document.removeEventListener('mousemove', e => moveCursor(e))
      }
    })

    // Display character option div when page is clicked
    useEffect(() => {
      if(background.image === undefined || showInput === true) return;
      const charDiv = document.querySelector('.character-options');

      document.addEventListener('click', e => setDivPosition(e, displayCharacters, charDiv));

      if(charDiv === null) return() => {document.removeEventListener('click', e => setDivPosition(e, displayCharacters, charDiv))}

      charDiv.addEventListener('click', e => getChosenCharacter(e, background, pointer, checkIfFound, charactersFound, setCharactersFound));

      return()=> {
        if (charactersFound.length < 3) return;
        document.removeEventListener('click', e => setDivPosition(e, displayCharacters, charDiv));
        charDiv.removeEventListener('click', e => getChosenCharacter(e, background, pointer, checkIfFound, charactersFound, setCharactersFound));
      }
    }, [displayCharacters])

    // if coordinate selected matches character location, show message for a brief period of time. 
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

    useEffect(() => {
      if(scores.length === 3) return;
      setShowInput(false);
      setShowLeaderboard(true);
    }, [scores])

    useEffect(() => {
      if(scores.length === 3) return;
      scores.map((score) => saveScores(score));
    }, [scores])

    useEffect(() => {
      setEndGame(true);
    }, [input])

    // Set score input to input box value, and set time to current timer result
    const onChange = (e) => {
      const seconds = document.querySelector('#timer').children[1].innerHTML;
      const milliseconds = document.querySelector('#timer').lastChild.innerHTML;
        setInput({name: e.target.value,
                  time: `${seconds}${milliseconds}`,
                  id: uniqid()});
    }

    const nav = useNavigate();

    const navHome = () => {
        nav('/');
    }

    const playAgain = () => {
      setBackground({});
      setPointer({});
      setCharactersFound([]);
      setInput({name: '', timer: 0});
      setEndGame(() => !endGame);
      navHome();
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
                    setShowInput={setShowInput} 
                    showLeaderboard={showLeaderboard} 
                    setShowLeaderboard={setShowLeaderboard} 
                    scores={scores}
                    setScores={setScores} 
                    showMessage={showMessage}
                    onChange={onChange} 
                    input={input} 
                    endGame={setEndGame} /> )}
        {!endGame && (<EndGame playAgain={playAgain} />)}
    </div>
  );
}

export default SetGame;
