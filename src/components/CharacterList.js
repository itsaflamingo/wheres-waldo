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
                            key={char.id}>
                                <div className='char-img' style={{
                                backgroundImage: `url(${char.image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                                {char.name}</div>
                        )
                    })}
        </div>
    )
}

export default CharacterList;