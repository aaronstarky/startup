import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Match from './match';
import './matchesStyles.css';

export default function Matches() {
    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect to login page if no token
        } else {
            getMatches();
        }
    }, [token, navigate]);

    async function getMatches() {
        try {
            const encodedUrl = encodeURI(`http://localhost:4000/api/match/${email}`);
            const response = await fetch(encodedUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setMatches(data.matches);
            console.log(data.matches);
        } catch (error) {
            console.error('Error fetching matches:', error);
        }
    }
    if (!token) {
        return <h1>Log in to access matches.</h1>;
    }

    return (
        <div>
            <h1>Matches</h1>
            <div className="match-list">
                {matches.map((match, index) => (
                    <Match
                        key={index}
                        player1={match.player1}
                        player2={match.player2}
                        player1Score={match.score1}
                        player2Score={match.score2}
                        date={match.date}
                    />
                ))}
            </div>
        </div>
    );
}