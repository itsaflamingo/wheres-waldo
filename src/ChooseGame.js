import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/SetGame.css';
import "react-alice-carousel/lib/alice-carousel.css";
import SetGame from "./components/SetGame.js";
import MakeBackgrounds from "./components/Backgrounds";
import GameOptions from "./components/GameOptions";
import Information from "./components/Information";

function ChooseGame(props) {

    const {game, setGame} = props;
    const [showGame, setShowGame] = useState(false);
    const [games, setGames] = useState(MakeBackgrounds());
    const [showInfo, setShowInfo] = useState(false);

    const startGame = () => {
        if(game.name === undefined || game.name === null) return;
        setShowGame(true)
    };

    useEffect(() => {
        if(showGame === false || game === undefined || game === null) return;
        navToGame();
    }, [showGame])

    useEffect(() => {
        const gameDivs = document.querySelectorAll('.game');

        const chooseGame = (e) => {
            const chosenGame = games.filter(game => game.name === e.target.id);
            setGame(chosenGame[0]);
        }

        gameDivs.forEach(game => game.addEventListener('click', e => chooseGame(e)))

        return(
            gameDivs.forEach(game => game.removeEventListener('click', e => chooseGame(e)))
        )
    })

    const nav = useNavigate();
    const navToGame = () => {
        nav('/play');
    }

    return(
        <div id='page'>
                <div id='info-container'>
                    <button id='show-info'
                    onClick={() => setShowInfo(!showInfo)}>Information</button>
                    {showInfo && <Information />}
                </div>
                <GameOptions games={games} />
                <div id='start-btn'>
                    <button id='start'
                    onClick={() => startGame()}>Start</button>
            </div>
            {showGame && <SetGame game={game} />}
        </div>
    )
}

export default ChooseGame;