let userScore = 0
let computerScore = 0

const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")

const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector('.result > p')

const rock_div = document.getElementById("R")
const paper_div = document.getElementById("P")
const scissors_div = document.getElementById("S")

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    result_div.innerHTML = converToWord(userChoice) + " beats " + converToWord(computerChoice) + ". You win!"

}

function lose(userChoice, computerChoice) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = converToWord(computerChoice) + " beats " + converToWord(userChoice) + ". You lose."

}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = converToWord(computerChoice) + " equals " + converToWord(userChoice) + ". Its a Draw!"

}

function converToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock"
        case "p":
            return "Paper"
        default:
            return "Scissors"
    }
}

function getComputerChoice() {
    const choises = ['r', 'p', 's']
    return choises[Math.floor(Math.random() * 3)]
}

function game(userChoice) {

    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }

}

function main() {

    rock_div.addEventListener('click', () => {
        game("r")
    })
    paper_div.addEventListener('click', () => {
        game("p")
    })
    scissors_div.addEventListener('click', () => {
        game("s")
    })

}

main()
