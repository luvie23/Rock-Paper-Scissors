let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanResult = document.getElementById('human');
let computerResult = document.getElementById('computer');
let whoWon = document.getElementById('winner');
let computerAudio = document.getElementById('computerWins');
let humanAudio = document.getElementById('humanWins');
let computerWins = document.getElementById('computerWon');
let humanWins = document.getElementById('humanWon');
let draw = document.getElementById('draw');
let allAudio = document.getElementsByTagName('audio');
let story = document.getElementById('story');

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(player, computer){
    
    let p = player.toLowerCase();
    let c = computer.toLowerCase();
    
    if (p == "paper" && c == "rock" || p == "rock" && c == "scissors" || p == "scissors" && c == "paper") {
    
        humanScore += 1;
        humanResult.textContent = "Human: " + humanScore;
        playSound('humanWins')
        winner();
    }
    else if (c == "paper" && p == "rock" || c == "rock" && p == "scissors" || c == "scissors" && p == "paper") {
    
        computerScore += 1;
        computerResult.textContent = "Computer: " + computerScore;
        playSound('computerWins');
        winner();
    } else{
        playSound('draw');
    }
}

function playSound(sound){
    const audio = document.getElementById(`${sound}`);
    audio.currentTime = 0;
    audio.play();
    

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

function updateScore(result) {
    if (result === "1"){
        humanScore += 1
    } else if (result === "2"){
        computerScore += 1
    };
    
    
}


const rock = document.querySelector('#button1');
rock.addEventListener('click', () =>{
    rock.classList.add('pressed');
    playRound("rock", getComputerChoice());

});

const paper = document.querySelector('#button2');
paper.addEventListener('click', () =>{
    paper.classList.add('pressed');
    playRound("paper", getComputerChoice());
});

const scissors = document.querySelector('#button3');
scissors.addEventListener('click', () =>{
    scissors.classList.add('pressed');
    
    playRound("scissors", getComputerChoice());
    
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('pressed');
}


const choices = document.querySelectorAll('button');
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

function winner(){
    if (humanScore == 5){
        whoWon.textContent = "You won!";
        humanScore = 0;
        computerScore = 0;
        humanResult.textContent = "Human: " + humanScore;
        computerResult.textContent = "Computer: " + computerScore;
        playSound('humanWon');
        document.getElementById('buttons').style.visibility= 'hidden';
        document.getElementById('html').style.backgroundImage="url('./img/youwon.jpg')";
        story.innerText = 'You won, you escape through the back door and never speak of what happened with anyone.'


        setTimeout(function(){
            location.reload();

        }, 3500); 
        
    } else if(computerScore == 5){
        whoWon.textContent = "Computer Won!";
        humanScore = 0;
        computerScore = 0;
        humanResult.textContent = "Human: " + humanScore;
        computerResult.textContent = "Computer: " + computerScore;
        playSound('computerWon');
        document.getElementById('buttons').style.visibility= 'hidden';
        document.getElementById('html').style.backgroundImage="url('./img/youlose.jpg')";
        document.getElementById('html').style.backgroundPosition='top center';
        story.innerText = "You lost. You're the first to fall in the robot uprising."

        setTimeout(function(){
            location.reload();

        }, 6500); 
        
    }
}
