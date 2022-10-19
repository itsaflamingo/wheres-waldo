import React from "react";
import EnhancedBackground from "./EnhancedBackground";
import CharacterList from "./CharacterList";
import NameInput from "./NameInput";
import Leaderboard from "./Leaderboard";

function GameOne(props) {
    const {background, handleMouseMove, displayCharacters, timer, message, showInput, setShowInput, showLeaderboard, setShowLeaderboard, scores, setScores} = props;

    const leaderboard = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        console.log('works');
        setShowLeaderboard(!showLeaderboard);
    }

    return (
        <div 
        id='background' 
        onMouseMove={(e) => handleMouseMove(e)}>
            <div id='header'>
                <div id='timer'>
                    <span>{('0'+ Math.floor((timer/60000) % 60)).slice(-2)}:</span>
                    <span>{('0'+ Math.floor((timer/1000) % 60)).slice(-2)}</span>
                </div>
                <button id='show-leaderboard' onClick={(e) => leaderboard(e)}>Leaderboard</button>
            </div>
            <h3 id='message'>{message}</h3>
            <img src={background.image} alt='puzzle' />
            {showLeaderboard && (<Leaderboard scores={scores} />)}
            {showInput && (<NameInput />)}
            {displayCharacters && (<CharacterList characters={background.characters} game={background.name} />)}
        </div>
    )
}

export default EnhancedBackground(GameOne);