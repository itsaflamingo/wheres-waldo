import React from "react";
import NameInput from "./NameInput";
import Leaderboard from "./Leaderboard";
import Timer from './Timer'

export default function Header(props) {

    const {showLeaderboard, scores, leaderboard, showMessage, message, showInput, onChange, onFormSubmit, input, setShowInput, endGame} = props;

    return(
        <div id='header'>
                <Timer />
                {!showLeaderboard && (<Leaderboard scores={scores} />)}
                <button id='show-leaderboard' onClick={(e) => leaderboard(e)}>Leaderboard</button>
                {showMessage && (<h2 id='message'>{message}</h2>)}
                {showInput && (<NameInput onChange={onChange} onFormSubmit={onFormSubmit} input={input} setShowInput={setShowInput} endGame={endGame} />)}
            </div>
    )
}