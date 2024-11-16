import './matchesStyles.css'

export default function Match({ player1, player2, player1Score, player2Score, date }) {
    return (
        <div class="match-list-item">
            <div class="date">
                {date}
            </div>
            <div class="scoring-summary">
                <div class="score-card-team-info">
                    <div class="score">
                        {player1Score}
                    </div>
                    <div class="team-mate">
                        {player1}
                    </div>
                </div>
                <div class="score-card-team-info">
                    <div class="score">
                        {player2Score}
                    </div>
                    <div class="team-mate">
                        {player2}
                    </div>
                </div>
            </div>
        </div>
    )
}