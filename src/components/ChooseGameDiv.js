import React from "react";

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
                    <div className="game-container">
                        <h2 className="title">{game.name}</h2>
                    <div className="content">
                        <div className="background" style={{
                                backgroundImage: `url(${game.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                        <div className="characters">
                            <div className="character-div">
                                <div className="character" style={{
                                backgroundImage: `url(${game.characters[0].image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                                <div className="name">{game.characters[0].name}</div>
                            </div>
                            <div className="character-div">
                                <div className="character"style={{
                                backgroundImage: `url(${game.characters[1].image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                                <div className="name">{game.characters[1].name}</div>
                            </div>
                            <div className="character-div">
                                <div className="character"style={{
                                backgroundImage: `url(${game.characters[2].image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                                <div className="name">{game.characters[2].name}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })}
        
        </div>
    )
}

export default ChooseGameDiv;