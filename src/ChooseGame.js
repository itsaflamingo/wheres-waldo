import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/SetGame.css';
import "react-alice-carousel/lib/alice-carousel.css";
import SetGame from "./components/SetGame.js";
import MakeBackgrounds from "./components/Backgrounds";
import ChooseGameDiv from "./components/ChooseGameDiv";

function ChooseGame(props) {

    const {game, setGame} = props;
    const [showGame, setShowGame] = useState(false);
    const [games, setGames] = useState(MakeBackgrounds());

    const startGame = () => setShowGame(true);

    useEffect(() => {
        if(showGame === false) return;
        navToGame();
    }, [showGame])
    
    useEffect(() => {
        if(game.name === undefined || showGame === false) return;
        navToGame();
    }, [game])

    const chooseGame = (e) => {
        const chosenGame = games.filter(game => game.name === e.target.id);
        setGame(chosenGame[0]);
        console.log(game);
    }

    const nav = useNavigate();
    const navToGame = () => {
        nav('/play');
    }

    return(
        <div id='page'>
                <ChooseGameDiv games={games} chooseGame={chooseGame} />
                <div id='start-btn'>
                    <button id='start'
                    onClick={() => startGame()}>Start</button>
            </div>
            {showGame && <SetGame game={game} />}
        </div>
    )
}

export default ChooseGame;