import React from "react";

function Leaderboard(props) {

    const {scores} = props;

    return (
        <div id='leaderboard'>
            {scores.map((score) => {
                return(
                    <div className="score" key={score.id}>
                        <p>{score.name}</p>
                        <p>{score.time}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Leaderboard;