export default function Setup() {
    return (
        <div>
            <h1>Setup</h1>
            <div class="interactive-button">
                <a class="header-link" href="track.html">BEGIN MATCH</a>
            </div>
            <p>Invite friends in real-time to your game by searching for their usernames and clicking "Invite"</p>

            <div class="player-search-box">
                <h3>Placeholder for WebSocket Communication</h3>
                <ul id="players">
                </ul>
                <div>
                    <label for="playerSearch">Player ID:</label>
                    <input type="text" name="playerSearch" id="playerSearch"/>
                </div>
            </div>
        </div>
    )
}