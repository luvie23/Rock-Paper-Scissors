let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(player, computer){
    let p = player.toLowerCase();
    let c = computer.toLowerCase();
    console.log(p,c);
    if (p == "paper" && c == "rock" || p == "rock" && c == "scissors" || p == "scissors" && c == "paper") {
        return "Player Wins";
    }
    else if (c == "paper" && p == "rock" || c == "rock" && p == "scissors" || c == "scissors" && p == "paper") {
        return "Computer Wins";
    }
    else {
        return "Tie!";
    }
}

function game(){
    let pscore = 0;
    let cscore = 0;
    for (let i = 0; i < 5; i++){
        let p = prompt("Rock, Paper, Scissors:")
        let result = playRound(p, getComputerChoice())
        if (result == "Player Wins"){
            pscore++;
        }
        else if (result == "Computer Wins") {
            cscore++;
        }
    }
    return "Player:" + pscore + "\n" + "Computer:" + cscore
}

console.log(game());