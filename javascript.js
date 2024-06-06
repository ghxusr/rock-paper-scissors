function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }

    else if (choice === 1) {
        return "paper";
    }

    else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = "";
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                ++computerScore;
                result = "You Lose! Paper beats Rock";
                return result;
            }
            else if (computerChoice === "scissors") {
                     ++humanScore;
                     result = "You Win! Rock Beats Scissors";
                     return result;
            }
            else if (computerChoice === "rock") {
                result = "You Draw! Both players chose Rock";
                return result;
            }
            break;
            case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                result = "You Win! Paper beats Rock";
                return result;
            }
            else if (computerChoice === "scissors") {
                     ++computerScore;
                     result = "You Lose! Scissors Beats Paper";
                     return result;
            }
            else if (computerChoice === "paper") {
                result = "You Draw! Both players chose Paper";
                return result;
            }
            break;
            case "scissors":
            if (computerChoice === "paper") {
                ++humanScore;
                result = "You Win! Scissors beats Paper";
                return result;
            }
            else if (computerChoice === "rock") {
                     ++computerScore;
                     result = "You Lose! Rock Beats Scissors";
                     return result;
            }
            else if (computerChoice === "scissors") {
                     result = "You Draw! Both players chose Scissors";
                     return result;
            }
    }
}

let roundResult = "";

const rockButton = document.querySelector("#rock-button");

rockButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    roundResult = playRound("rock", computerSelection) + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
    if (humanScore === 5) {
        roundResult = "You won the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        roundResult = "You lost the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    document.getElementById("round-result").innerHTML = roundResult; 
});

const paperButton = document.querySelector("#paper-button");

paperButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    roundResult = playRound("paper", computerSelection) + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
    if (humanScore === 5) {
        roundResult = "You won the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        roundResult = "You lost the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    document.getElementById("round-result").innerHTML = roundResult; 
});

const scissorsButton = document.querySelector("#scissors-button");

scissorsButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    roundResult = playRound("scissors", computerSelection) + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
    if (humanScore === 5) {
        roundResult = "You won the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        roundResult = "You lost the game!" + "<br>" + "Score" + "<br>" + "You : " + humanScore + "<br>" + "Computer : " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    document.getElementById("round-result").innerHTML = roundResult; 
});
