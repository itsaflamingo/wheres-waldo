import './styles/App.css';
import React, {useEffect, useState} from 'react';
import GameOne from './components/GameOne';
import puzzleOne from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import hollowKnight from './images/hollow-knight.webp'
import yubaba from './images/yubaba.png'
import bowser from './images/bowser.png'

function App() {

  const [background, setBackground] = useState({
    name: 'puzzle one',
    image: puzzleOne,
    characters: [{
        name: 'Hollow Knight',
        image: hollowKnight,
        location: '',
        id: 1
    }, {
        name: 'Yubaba',
        image: yubaba,
        location: '',
        id: 2
    }, {
        name: 'Bowser',
        image: bowser,
        location: '',
        id: 3
    }]})
    const [displayCharacters, setDisplayCharacters] = useState(false);

    const setDivPosition = (e) => {
      const charDiv = document.querySelector('#character-options');
      console.log(charDiv);
      const x = e.pageX;
      const y = e.pageY;

      charDiv.style.top = y + 'px';
      charDiv.style.left = x + 'px';
    }

    const toggleDisplay = (e) => {
      setDisplayCharacters(!displayCharacters);
      if(displayCharacters === false) return;
      setDivPosition(e);
    }

  return (
    <div className="App">
      <GameOne 
      background={background} 
      displayCharacters={displayCharacters}
      toggleDisplay={toggleDisplay} />
    </div>
  );
}

export default App;
