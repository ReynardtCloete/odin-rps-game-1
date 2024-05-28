let humanScore
let computerScore

/////////////////////////////////

const getComputerChoice = () => {
    const randomNum = Math.random()

    if (randomNum < 1/3 ) {
        return "rock"
    } else if (randomNum < 2/3 ) {
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice());

/////////////////////////////////

const getHumanChoice = () => {
    let choice = prompt("Enter your choice (rock, paper or scissors)").toLowerCase() 

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper or scissors.").toLowerCase()
    }
    return choice
}
console.log(getHumanChoice())

////////////////////////////////

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase()

    let result = ""

    if (humanChoice === computerChoice) {
        result = "It's a tie"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win: ${humanChoice.charAt(0).toUpperase()} + ${humanChoice.slice(1)} + beats ${computerChoice}`
        humanScore ++
    } else {
        result = `You lose: ${computerChoice.charAt(0).toUpperase()} + ${computerChoice.slice(1)} + beats ${humanChoice}`
        computerScore ++
    }
}
console.log(playRound())

////////////////////////////////

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const humanSelection = humanChoice()
        const computerSelection = computerChoice()
        playRound(humanSelection, computerSelection)
    }
}