import React from "react";

const CharacterList = (props) => {

    const {characters, game} = props;
    return(
        <div className='character-options'
            id={`${game}`}>
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