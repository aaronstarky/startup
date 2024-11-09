export default function Setup() {
    return (
        <div class="two-part-page">
            <div class="page-info">
                <h1>Setup</h1>
                <div class="interactive-button">
                    <a class="header-link" href="track.html">BEGIN MATCH</a>
                </div>
                <p>Invite friends in real-time to your game by searching for their usernames and clicking "Invite"</p>
            </div>

            <div class="player-search-box">
                <h3>Database info placeholder</h3>
                <div>
                    <label for="playerSearch">Player ID:</label>
                    <input type="text" name="playerSearch" id="playerSearch"/>
                </div>
                <div class="player-list">

                </div>
            </div>
        </div>
    )
}