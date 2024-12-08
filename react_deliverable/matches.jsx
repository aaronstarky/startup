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
        const ws = new WebSocket('/ws');
        ws.onmessage = function message(event) {
            console.log(`Websocket message received`);
            const reader = new FileReader();
            reader.onload = function() {
                try {
                    const jsonData = JSON.parse(reader.result);
                    console.log("Web socket json data");
                    console.log(jsonData);
                    setLiveMatches(prevLiveMatches => {
                        const newLiveMatches = prevLiveMatches.map(match => {
                            if (match.uuid === jsonData.matchId) {
                                console.log("Updating match score");
                                console.log("t1Score: ", jsonData.t1Score);
                                console.log("t2Score: ", jsonData.t2Score);
                                return { ...match, score1: jsonData.t1Score, score2: jsonData.t2Score };
                            }
                            return match;
                        });
                        return newLiveMatches;
                    });
                } catch (error) {
                    console.error('Error parsing websocket message:', error);
                }
            };
            reader.readAsText(event.data);
        };

        // Clean up the WebSocket connection when the component unmounts
        return () => {
            ws.close();
        };
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        if (!id) {
            navigate('/login'); // Redirect to login page if no id
        } else {
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
                    <h5>Loading live matches...</h5>
                }
                {matchesLoaded && liveMatches.length === 0 &&
                    <h5>No live matches found</h5>
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
                    <h5>Loading past matches...</h5>
                }
                {matchesLoaded && matches.length === 0 &&
                    <h5>No past matches found</h5>
                }
                {matchesLoaded &&
                    <>
                        {matches.map((match, index) => (
                            <Match
                                key={index}
                                uuid={match.uuid}
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