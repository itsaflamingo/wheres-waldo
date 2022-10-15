import './styles/App.css';
import React, {useEffect, useState} from 'react';
import GameOne from './components/GameOne';
import puzzleOne from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import hollowKnight from './images/hollow-knight.webp'
import yubaba from './images/yubaba.png'
import bowser from './images/bowser.png'
import {saveCharacters, retrieve} from './components/firebaseConfig';
import MakeCursor from './components/MakeCursor';

function App() {

  const [background, setBackground] = useState({
    name: 'puzzle one',
    image: puzzleOne,
    characters: [{
        name: 'Hollow Knight',
        image: hollowKnight,
        location: {
          x: 1195,
          y: 12456 },
        id: 1,
        size: 'small'
    }, {
        name: 'Yubaba',
        image: yubaba,
        location: {
          x: 1038,
          y: 5173 },
        id: 2,
        size: 'small'
    }, {
        name: 'Bowser',
        image: bowser,
        location: {
          x: 1672,
          y: 8148 },
        id: 3,
        size: 'medium'
    }]})
    const [displayCharacters, setDisplayCharacters] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const [numFound, setNumFound] = useState(0);

    useEffect(() => {
      background.characters.map((char) => saveCharacters(char))
    }, [])

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
      const charDiv = document.querySelector('#character-options');
      
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
      <GameOne 
      background={background} 
      displayCharacters={displayCharacters}
      toggleDisplay={toggleDisplay}
      handleMouseMove={handleMouseMove} />
    </div>
  );
}

export default App;
