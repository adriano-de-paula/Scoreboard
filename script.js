let teamAScore = 0;
let teamBScore = 0;

let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

let teamADecrementButton = document.getElementById("teamA-decrement");
let teamBDecrementButton = document.getElementById("teamB-decrement");

window.onload = () => {
    teamADecrementButton.disabled = true;
    teamBDecrementButton.disabled = true;
};

let incrementScore = (team) => {
    if(team == "teamA") {
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
        teamADecrementButton.disabled = false; 
    } else if(team == "teamB") {
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
        teamBDecrementButton.disabled = false; 
    }
}

let decrementScore = (team) => {
    if(team == "teamA" && teamAScore > 0) {
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
        if (teamAScore === 0) {
            teamADecrementButton.disabled = true; 
        }
    } else if(team == "teamB" && teamBScore > 0) {
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
        if (teamBScore === 0) {
            teamBDecrementButton.disabled = true; 
        }
    }
}

let resetScores = () => {
    teamAScore = 0;
    teamBScore = 0;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent = teamBScore;
    teamADecrementButton.disabled = true; 
    teamBDecrementButton.disabled = true; 
}

