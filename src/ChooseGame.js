import React, { useState } from "react";
import './styles/SetGame.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import SetGame from "./components/SetGame.js";
import MakeBackgrounds from "./components/Backgrounds";
import ChooseGameDiv from "./components/ChooseGameDiv";

function ChooseGame() {

    const [showGame, setShowGame] = useState(false);
    const [game, SetGame] = useState({});
    const [games, setGames] = useState(MakeBackgrounds());

    const startGame = (e) => {
        setShowGame(true)
    }

    return(
        <div id='page'>
                <ChooseGameDiv games={games} />
                <div id='startBtn'>
                    <button id='start'
                    onClick={(e) => startGame(e)}>Start</button>
            </div>
            {/* {showGame && <SetGame game={game} />} */}
        </div>
    )
}

export default ChooseGame;