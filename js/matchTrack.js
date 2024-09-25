
let team1Button = document.getElementById('team1Button');
let team2Button = document.getElementById('team2Button');
let undoButton = document.getElementById('undo');

var team1Score = 0;
var team2Score = 0;
var actions = [];

console.log(team1Button);
console.log(team2Button);
console.log(undoButton);

team1Button.addEventListener('click', function() {
    team1Score++;
    actions.push('t1');
    if (team1Score >= 11 && team1Score-2 >= team2Score) {
        console.log("Team 1 victory!");
    }
    document.getElementById('team1Score').innerHTML = team1Score;
});

team2Button.addEventListener('click', function() {
    team2Score++;
    actions.push('t2');
    if (team2Score >= 11 && team2Score-2 >= team1Score) {
        console.log("Team 1 victory!");
    }
    document.getElementById('team2Score').innerHTML = team2Score;
});

undoButton.addEventListener('click', function() {
    let lastAction = actions.pop();
    if (lastAction === 't1') {
        team1Score--;
        document.getElementById('team1Score').innerHTML = team1Score;
    } else if (lastAction === 't2') {
        team2Score--;
        document.getElementById('team2Score').innerHTML = team2Score;
    }
});