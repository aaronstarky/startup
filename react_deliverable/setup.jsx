import { Link, redirect } from "react-router-dom";

export default function Setup() {
    

    return (
            <div className="two-part-page">
                <div className="page-info">
                    <h1>Setup</h1>
                    <div className="interactive-button">
                        <Link className="header-link" to="/track">BEGIN MATCH</Link>
                    </div>
                    <p>Invite friends in real-time to your game by searching for their usernames and clicking "Invite"</p>
                </div>

                <div className="player-search-box">
                    <h3>Database info placeholder</h3>
                    <div>
                        <label htmlFor="playerSearch">Player ID:</label>
                        <input type="text" name="playerSearch" id="playerSearch" />
                    </div>
                    <div className="player-list">

                    </div>
                </div>
            </div>
        )
    }