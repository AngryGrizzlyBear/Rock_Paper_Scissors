// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    num = Math.floor(Math.random()*3);

    if (num == 0){
        console.log("rock")
    } else if (num == 1) {
        console.log("paper")
    } else if (num == 2) {
        console.log("scissors")
    } else {
        console.log ("try again!")
    }
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Test what your function returns by using console.log.

function getHumanChoice(){
    let choice = prompt("Pick Rock, Paper, or Scissors")
    console.log(choice.toLowerCase());    
}
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.


getComputerChoice()
getHumanChoice()

