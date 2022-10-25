import React from "react";
import GameOption from "./GameOption";

function ChooseGameDiv(props) {

    const {games, chooseGame} = props;
    return (
        <div id='choose-game'>
        {games.map((game) => {
            return(
                <div className="game" 
                    id={game.name} 
                    key={game.id}
                    onClick={(e) => chooseGame(e)}>
                    <GameOption game={game} />
                </div>
            )
        })}
        
        </div>
    )
}

export default ChooseGameDiv;