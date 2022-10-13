import React from "react";
import EnhancedBackground from "./EnhancedBackground";
import CharacterList from "./CharacterList";

function GameOne(props) {
    const {background, handleMouseMove, displayCharacters, toggleDisplay} = props;

    return (
        <div 
        id='background' 
        onMouseMove={(e) => handleMouseMove(e)}
        onClick={(e) => toggleDisplay(e)}>
            <img src={background.image} alt='puzzle' />
            {displayCharacters && (<CharacterList characters={background.characters} />)}
        </div>
    )
}

export default EnhancedBackground(GameOne);