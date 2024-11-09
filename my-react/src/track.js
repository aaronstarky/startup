import './track-styles.css'
import React from 'react';

let actions = [];

export default function Track() {
    let [team1Score, updateTeam1Score] = React.useState(0);
    let [team2Score, updateTeam2Score] = React.useState(0);
    

    const incrementScore = (team) => {
        if (team === "team1") {
            updateTeam1Score(team1Score + 1);
            actions.push("t1");
        } else {
            updateTeam2Score(team2Score + 1);
            actions.push("t2");
        }
    }

    const undo = () => {
        let lastAction = actions.pop();
        if (lastAction === "t1") {
            updateTeam1Score(team1Score - 1);
        } else {
            if (team2Score != 0)
                updateTeam2Score(team2Score - 1);
        }
    }
    
    return (
        <div>
            <h1>Track</h1>
            <div id="scoring-area">
                <div class="score-button" id="team1" onClick={()=> incrementScore("team1")}>
                    <div class="score" id="team1Score">
                        {team1Score}
                    </div>
                    <div class="team-name" id="team1Name">
                        Team 1
                    </div>
                </div>
                <div class="score-button" id="team2" onClick={()=> incrementScore("team2")}>
                    <div class="score" id="team2Score">
                        {team2Score}
                    </div>
                    <div class="team-name" id="team2Name">
                        Team 2
                    </div>
                </div>
                <div class="score-button setting" id="team2" onClick={undo}>
                    <div>
                        Undo
                    </div>
                </div>
            </div>
        </div>
    )
}