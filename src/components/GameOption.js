import React from "react";
import GameOptionCharacters from "./GameOptionCharacters";

export default function GameOption(props) {

    const {game} = props;
    
    return (
        <div className="game-container">
                        <h2 className="title">{game.name}</h2>
                    <div className="content">
                        <div className="background"
                        data-testid="background" style={{
                                backgroundImage: `url(${game.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                        <GameOptionCharacters chars={game.characters} />
                    </div>
                    </div>
    )
}