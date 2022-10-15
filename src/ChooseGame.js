import React, { useState } from "react";
import './styles/SetGame.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import SetGame from "./components/SetGame.js";

function ChooseGame() {

    const [showGame, setShowGame] = useState(false);
    const [game, SetGame] = useState({});

    

    const startGame = (e) => {
        setShowGame(true)
    }
    return(
        <div id='page'>
            <div id='choose-game'>
                <div className="game">
                    <div className="background"></div>
                    <div className="characters">
                        <div className="character-div">
                            <div className="character"></div>
                            <div className="name"></div>
                        </div>
                        <div className="character-div">
                            <div className="character"></div>
                            <div className="name"></div>
                        </div>
                        <div className="character-div">
                            <div className="character"></div>
                            <div className="name"></div>
                        </div>
                    </div>
                </div>
                <div id='startBtn'>
                    <button id='start'
                    onClick={(e) => startGame(e)}>Start</button>
                </div>
            </div>
            {/* {showGame && <SetGame game={game} />} */}
        </div>
    )
}

export default ChooseGame;