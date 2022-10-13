import React from "react";

const CharacterList = (props) => {

    const {characters} = props;
    return(
        <div id='character-options'>
                    {characters.map((char) => {
                        return (
                            <div 
                            className="character" 
                            id={char.name}
                            key={char.id}>{char.name}</div>
                        )
                    })}
        </div>
    )
}

export default CharacterList;