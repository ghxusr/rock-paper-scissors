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

function getHumanChoice() {
    let input = ""
    do {
        input = (prompt("Please enter your choice between rock paper scissors")).toLowerCase();
    }
    while ((input != "rock") && (input != "paper") && (input != "scissors"));
    
    return input;
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
                return console.log(result);
            }
            else if (computerChoice === "scissors") {
                     ++humanScore;
                     result = "You Win! Rock Beats Scissors";
                     return console.log(result);
            }
            else result = "You Draw! Both players chose Rock";
            return console.log(result)
            break;
            case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                result = "You Win! Paper beats Rock";
                return console.log(result);
            }
            else if (computerChoice === "scissors") {
                     ++computerScore;
                     result = "You Lose! Scissors Beats Paper";
                     return console.log(result);
            }
            else result = "You Draw! Both players chose Paper";
            return console.log(result);
            break;
            case "scissors":
            if (computerChoice === "paper") {
                ++humanScore;
                result = "You Win! Scissors beats Paper";
                return console.log(result);
            }
            else if (computerChoice === "rock") {
                     ++computerScore;
                     result = "You Lose! Rock Beats Scissors";
                     return console.log(result);
            }
            else result = "You Draw! Both players chose Scissors";
            return console.log(result);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`${humanScore}`);
console.log(`${computerScore}`);