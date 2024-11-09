import Match from "./match"
import './matchesStyles.css'

export default function Matches() {
    return (
        <div>
            <h1>Matches</h1>
            <div class="match-list">
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                /> 
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                />
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                />
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                /> 
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                /> 
                <Match 
                    player1={"Aaron Starkweather"}
                    player2={"Bobby Fischer"}
                    player1Score={21}
                    player2Score={19}
                    date={"2021-10-01"}
                /> 
            </div>
        </div>
    )
}