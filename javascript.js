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
    let input = (prompt("Please enter your choice between rock paper scissors")).toLowerCase();

    do {
        input = (prompt("Please enter your choice between rock paper scissors")).toLowerCase();
    }
    while ((input != "rock") && (input != "paper") && (input != "scissors"))
    
    return input;
}
