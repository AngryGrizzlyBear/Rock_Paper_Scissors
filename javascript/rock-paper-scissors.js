
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
function getComputerChoice() {
    num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return("rock")
    } else if (num == 1) {
        return ("paper")
    } else if (num == 2) {
        return("scissors")
    } else {
        return("try again!")
    }
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Test what your function returns by using return.

function getHumanChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors")
    return(choice.toLowerCase());
}

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        console.log(" Scissors beats Paper! You win!")
        humanScore++;
    } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        console.log("Rock beats Scissors! You Win!")
        humanScore++;
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        console.log("Paper beats Rock! You win!")
        humanScore++;
    } else {
        console.log("The Computer Wins! You Lose!")
        computerScore++;
    }
}


playRound(humanSelection, computerSelection);