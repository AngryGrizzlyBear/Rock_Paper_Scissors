
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Test what your function returns by using return.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.


// playRound(humanSelection, computerSelection);

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.

const rock = document.querySelector("#rockbtn")
const paper = document.querySelector("#paperbtn")
const scissors = document.querySelector("#scissorbtn")


function getComputerChoice() {
    num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return ("rock")
    } else if (num == 1) {
        return ("paper")
    } else if (num == 2) {
        return ("scissors")
    } else {
        return ("try again!")
    }
}

// function getHumanChoice() {
//     // let choice = prompt("Pick Rock, Paper, or Scissors")
//     // return (choice.toLowerCase());
// }


function playGame() {
    let getHumanChoice = '';
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;




    rock.addEventListener("click", () => {
        getHumanChoice = "rock";
        let computerChoice = getComputerChoice();
        playRound(getHumanChoice, computerChoice);
    })
    paper.addEventListener("click", () => {
        getHumanChoice = "paper";
        let computerChoice = getComputerChoice();
        playRound(getHumanChoice, computerChoice);
    })
    scissors.addEventListener("click", () => {
        getHumanChoice = "scissors";
        let computerChoice = getComputerChoice();
        playRound(getHumanChoice, computerChoice);
    })


    async function playRound(getHumanChoice, getComputerChoice) {
        round++
        if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
            console.log(" Scissors beats Paper! You win!")
            const keepscore = document.querySelector("#keepscore")
            keepscore.textContent = "Round " + round + " " + "Scissors Beats Paper! You Win!"
            humanScore++

        } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
            const keepscore = document.querySelector("#keepscore")
            console.log("Rock beats Scissors! You Win!")
            keepscore.textContent = "Round " + round + " " + "Rock Beats Scissors! You Win!"
            humanScore++;
        } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
            const keepscore = document.querySelector("#keepscore")
            console.log("Paper beats Rock! You win!")
            keepscore.textContent = "Round " + round + " " + "Paper beats Rock! You Win!"
            humanScore++;
        } else {
            keepscore.textContent = "Round " + round + " " + "The Computer Wins! You Lose!"
            console.log("The Computer Wins! You Lose!")
            computerScore++;
        }
      
        console.log(round)

        if (round === 5) {
            if (humanScore > computerScore) {
                const paragraph = document.createElement("p");
                paragraph.classList.add("paragraph");
                paragraph.textContent = "Congratulations! You Win!";
                paragraph.style.color = "Blue";
                console.log("Congrats! You win!")

                keepscore.appendChild(paragraph)
            } else {
                const paragraph = document.createElement("p");
                paragraph.classList.add("paragraph");
                paragraph.textContent = "You Lost!";
                paragraph.style.color = "red";
                console.log("You Lost!")
                keepscore.appendChild(paragraph)
            }
        } else {
            console.log("Keep Playing!")
        }
    }



    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }
    // if (humanScore > computerScore) {
    //     console.log("You Win The Game!")
    // } else {
    //     console.log("You Lost the Game...")
    // }

}



playGame()



