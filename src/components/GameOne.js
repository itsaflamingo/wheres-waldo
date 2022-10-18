import React from "react";
import EnhancedBackground from "./EnhancedBackground";
import CharacterList from "./CharacterList";

function GameOne(props) {
    const {background, handleMouseMove, displayCharacters} = props;

    return (
        <div 
        id='background' 
        onMouseMove={(e) => handleMouseMove(e)}>
            <img src={background.image} alt='puzzle' />
            {displayCharacters && (<CharacterList characters={background.characters} game={background.name} />)}
        </div>
    )
}

export default EnhancedBackground(GameOne);