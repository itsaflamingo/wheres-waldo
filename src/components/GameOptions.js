import React from "react";
import GameOption from "./GameOption";

function GameOptions(props) {

    const {games} = props;

    return (
        <div id='choose-game'>
        {games.map((game) => {
            return(
                <div className="game" 
                    id={game.name} 
                    key={game.id}>
                    <GameOption game={game} />
                </div>
            )
        })}
        
        </div>
    )
}

export default GameOptions;