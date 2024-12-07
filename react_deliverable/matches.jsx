import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Match from './match';
import './matchesStyles.css';

export default function Matches() {
    const [matches, setMatches] = useState([]);
    const [liveMatches, setLiveMatches] = useState([]);
    const [matchesLoaded, setMatchesLoaded] = useState(false);
    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');

    useEffect(() => {
        if (!id) {
            navigate('/login'); // Redirect to login page if no id
        } else {
            getLiveMatches();
            getMatches();
        }
    }, [id, navigate]);

    async function getMatches() {
        setMatchesLoaded(false);
        try {
            const encodedUrl = encodeURI(`/api/match/${email}`);
            const response = await fetch(encodedUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            let liveMatches = [];
            let pastMatches = [];
            for (let i = 0; i < data.matches.length; i++) {
                if (data.matches[i].live) {
                    liveMatches.push(data.matches[i]);
                    continue;
                }
                pastMatches.push(data.matches[i]);
            }
            setLiveMatches(liveMatches);
            setMatches(pastMatches);
            setMatchesLoaded(true);
        } catch (error) {
            console.error('Error fetching matches:', error);
        }
    }

    return (
        <div>
            <h1>Live Matches</h1>
            <div className='match-list'>
                {!matchesLoaded &&
                    <h1>Loading live matches...</h1>
                }
                {matchesLoaded &&
                    <>
                        {liveMatches.map((match, index) => (
                            <Match
                                key={index}
                                player1={match.player1}
                                player2={match.player2}
                                player1Score={match.score1}
                                player2Score={match.score2}
                                date={match.date}
                            />
                        ))}
                    </>
                }
            </div>
            <h1>Past Matches</h1>
            <div className="match-list">
                {!matchesLoaded &&
                    <h1>Loading past matches...</h1>
                }
                {matchesLoaded &&
                    <>
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
                    </>
                }

            </div>
        </div>
    );
}