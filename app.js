const computerChoice = document.getElementById("Computer-choice")
const userChoiceDisplay = document.getElementById("Player-choice")
const resultDisplay = document.getElementById("Result")
const possibleChoices = document.querySelectorAll("button")
let userChosen
let computerChosen
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChosen = e.target.id
    userChoiceDisplay.innerHTML = userChosen
    generateComputerChoice()
    getResult(userChosen, computerChosen)
} ))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChosen = "Rock"
    }
    if(randomNumber === 2){
        computerChosen = "Paper"
    }
    if(randomNumber === 3){
        computerChosen = "Scissors"
    }
    computerChoice.innerHTML = computerChosen
    return computerChosen
}

function getResult (p1,p2){
    if (p1 === p2){
        result = "It's a draw!"
    }
    else if ((p1 === "Rock" && p2 === "Scissors") ||  (p1 === "Paper" && p2 === "Rock") || (p1 === "Scissors" && p2 === "Paper")){
        result = "You win!"
    }else{  
        result = "Computer wins!"
    }
    resultDisplay.innerHTML = result
}