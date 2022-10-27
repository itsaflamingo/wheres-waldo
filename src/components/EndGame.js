import React from "react";

export default function EndGame(props) {
    const {playAgain} = props;
    return (
        <div id='end-game'>
            <h4>Congradulations! You found all the characters!</h4>
            <button id='play-again'
            onClick={() => playAgain()}>Play Again</button>
        </div>
    )
}