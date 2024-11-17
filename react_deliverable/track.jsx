import './track-styles.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

let actions = [];

export default function Track() {
    let [team1Score, updateTeam1Score] = React.useState(0);
    let [team2Score, updateTeam2Score] = React.useState(0);
    let [initial, updateInitial] = React.useState(true);
    const navigate = useNavigate();

    if (initial) {
        const encodedUrl = encodeURI(`http://localhost:4000/api/match/get/${localStorage.getItem("matchId")}`);
        fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(data => {
            updateTeam1Score(Number(data.matches[0].score1));
            updateTeam2Score(Number(data.matches[0].score2));
        }).finally(() => {
            updateInitial(false);
            console.log("Initial state set");
        });
    }


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

    async function submitFinalScore() {
        const encodedUrl = encodeURI(`http://localhost:4000/api/match/submit/${localStorage.getItem("matchId")}`);
        const response = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            navigate("/matches");
            return;
        }
        alert("Error submitting final score");
    }

    async function checkWinner() {
        if (team1Score >= 11 && team1Score - team2Score >= 2) {
            alert("Team 1 wins!");
            await submitFinalScore();
            return true;
        } else if (team2Score >= 11 && team2Score - team1Score >= 2) {
            alert("Team 2 wins!");
            await submitFinalScore();
            return true;
        }
        return false;
    }

    const incrementScore = async (team) => {
        if (team === "team1") {
            updateTeam1Score(team1Score + 1);
            await sendScoreUpdate(team1Score, team2Score);
            await checkWinner();
            actions.push("t1");
        } else {
            updateTeam2Score(team2Score + 1);
            await sendScoreUpdate(team1Score, team2Score);
            await checkWinner();
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
                <div className="score-button" id="team1" onClick={() => incrementScore("team1")}>
                    <div className="score" id="team1Score">
                        {team1Score}
                    </div>
                    <div className="team-name" id="team1Name">
                        Team 1
                    </div>
                </div>
                <div className="score-button" id="team2" onClick={() => incrementScore("team2")}>
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