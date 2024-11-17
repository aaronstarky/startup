import { Link, redirect, useNavigate } from "react-router-dom";

export default function Setup() {
    const navigate = useNavigate();

    async function startMatch() {
        const player1 = document.getElementById("player1").value;
        const player2 = document.getElementById("player2").value;
        const encodedUrl = encodeURI(`http://localhost:4000/api/match/start/${player1}/${player2}/0/0`);
        const response = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        localStorage.setItem("matchId", data.match_id);
        navigate("/track");
    }

    return (
        <div className="auth-box">
            <h1>Match Setup</h1>
            <div id="login-form">
                <input type="text" name="player1" id="player1" placeholder="Player 1" />
                <input type="text" name="player2" id="player2" placeholder="Player 2" />
                <button id="login-button" type="button" onClick={startMatch}>Start Match</button>
            </div>
        </div>
    )
}