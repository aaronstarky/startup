import './matchesStyles.css'

export default function Match({ uuid, player1, player2, player1Score, player2Score, date }) {
    return (
        <div className="match-list-item" id={uuid}>
            <div className="date">
                {date}
            </div>
            <div className="scoring-summary">
                <div className="score-card-team-info">
                    <h1 className="score">
                        {player1Score}
                    </h1>
                    <div className="team-mate">
                        {player1}
                    </div>
                </div>
                <div className="score-card-team-info">
                    <h1 className="score">
                        {player2Score}
                    </h1>
                    <div className="team-mate">
                        {player2}
                    </div>
                </div>
            </div>
        </div>
    )
}