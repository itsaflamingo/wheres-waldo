import React from "react";

export default function GameOptionCharacters(props) {

    const {chars} = props;

    return (
        <div className="characters">
            {chars.map((char) => {
                return (
                <div className="character-div" key={char.id}>
                        <div className="character" style={{
                        backgroundImage: `url(${char.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}></div>
                        <div className="name">{char.name}</div>
                </div>)
            })}
        </div>
    )
}