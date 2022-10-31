import React, { useState } from "react";
import EnhancedBackground from "./EnhancedBackground";
import CharacterList from "./CharacterList";
import Header from "./Header";
import hasSwearWords from "./hasSwearWords";

function GameOne(props) {
    const { background, 
            handleMouseMove, 
            displayCharacters, 
            timer, 
            message, 
            showInput, 
            setShowInput, 
            showLeaderboard, 
            setShowLeaderboard, 
            scores, 
            showMessage, 
            onChange, 
            input, 
            toggleDisplay, 
            setScores, 
            setTimer, 
            endGame } = props;
        const [inputError, setInputError] = useState('');

    const leaderboard = (e) => {
        e.stopPropagation();
        setShowLeaderboard(!showLeaderboard);
    }

    const onFormSubmit = (e) => {
        if(hasSwearWords(input.name, setInputError) === true) return;

        e.stopPropagation();
        e.preventDefault();

        setScores(scores.concat(input));
        endGame(!endGame);
      }

    return (
        <div 
        id='background' 
        data-testid='background'
        onMouseMove={(e) => handleMouseMove(e)}
        onClick={toggleDisplay}>
            <Header 
            timer={timer} 
            setTimer={setTimer} 
            showInput={showInput}
            showLeaderboard={showLeaderboard}
            scores={scores}
            leaderboard={leaderboard}
            showMessage={showMessage}
            message={message}
            onChange={onChange}
            onFormSubmit={onFormSubmit}
            input={input} 
            setShowInput={setShowInput} 
            endGame={endGame}
            inputError={inputError} />
            <img src={background.image} alt='puzzle' />
            {displayCharacters && (<CharacterList characters={background.characters} game={background.name} />)}
        </div>
    )
}

export default EnhancedBackground(GameOne);