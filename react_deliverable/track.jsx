import './track-styles.css'
import React from 'react';

let actions = [];

export default function Track() {
    let [team1Score, updateTeam1Score] = React.useState(0);
    let [team2Score, updateTeam2Score] = React.useState(0);
    

    async function sendScoreUpdate(team1Score, team2Score) {
        const encodedUrl = encodeURI(`http://localhost:4000/api/match/update/${localStorage.getItem("matchId")}/${team1Score}/${team2Score}`);
        console.log(encodedUrl);
        const response = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            return;
        }
        else {
            alert("Error updating score");
        }
    }

    const incrementScore = async (team) => {
        if (team === "team1") {
            updateTeam1Score(team1Score + 1);
            await sendScoreUpdate(team1Score, team2Score);
            actions.push("t1");
        } else {
            updateTeam2Score(team2Score + 1);
            await sendScoreUpdate(team1Score, team2Score);
            actions.push("t2");
        }
        
    }

    const undo = async () => {
        let lastAction = actions.pop();
        if (lastAction === "t1") {
            updateTeam1Score(team1Score - 1);
        } else {
            if (team2Score != 0)
                updateTeam2Score(team2Score - 1);
        }
        await sendScoreUpdate(team1Score, team2Score);
    }
    
    return (
        <div>
            <h1>Track</h1>
            <div id="scoring-area">
                <div className="score-button" id="team1" onClick={()=> incrementScore("team1")}>
                    <div className="score" id="team1Score">
                        {team1Score}
                    </div>
                    <div className="team-name" id="team1Name">
                        Team 1
                    </div>
                </div>
                <div className="score-button" id="team2" onClick={()=> incrementScore("team2")}>
                    <div className="score" id="team2Score">
                        {team2Score}
                    </div>
                    <div className="team-name" id="team2Name">
                        Team 2
                    </div>
                </div>
                <div className="score-button setting" id="team2" onClick={undo}>
                    <div>
                        Undo
                    </div>
                </div>
            </div>
        </div>
    )
}