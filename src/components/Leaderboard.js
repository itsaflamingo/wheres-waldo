
function Leaderboard(props) {

    const {scores} = props;

    return (
        <div id='leaderboard'>
            <div id='title'>
                <h4>Name</h4>
                <h4>Score</h4>
            </div>
            {scores.map((score) => {
                return(
                    <div className="score" key={score.id}>
                        <div>{score.name}</div>
                        <div>{score.time}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Leaderboard;