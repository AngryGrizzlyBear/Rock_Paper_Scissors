// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.


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

getComputerChoice()