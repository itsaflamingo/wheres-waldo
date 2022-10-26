import React from "react";
import EnhancedBackground from "./EnhancedBackground";
import CharacterList from "./CharacterList";
import Header from "./Header";

function GameOne(props) {
    const {background, handleMouseMove, displayCharacters, timer, message, showInput, showLeaderboard, setShowLeaderboard, scores, showMessage, onChange, input, toggleDisplay, setScores, setTimer} = props;

    const leaderboard = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setShowLeaderboard(!showLeaderboard);
    }

    const onFormSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setScores(scores.concat(input));
        console.log(input);
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
            input={input} />
            <img src={background.image} alt='puzzle' />
            {displayCharacters && (<CharacterList characters={background.characters} game={background.name} />)}
        </div>
    )
}

export default EnhancedBackground(GameOne);