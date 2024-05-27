const getComputerChoice = () => {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
};
 const getHumanChoice = () => {
    let choice = prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice, enter rock paper or scissors").toLowerCase();
    }
    return choice
 }
 
 