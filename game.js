
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const displayScore = document.querySelector('.score')
const playerTally = document.querySelector('.playerScore')
const compTally = document.querySelector('.compScore')
//const output = document.querySelector('.total') --> not really needed

let playerScore = 0;
let compScore = 0;


const getComputerChoice = () => {
    const myArrayChoice = ['rock', 'paper', 'scissors']
    const getRandom = myArrayChoice[Math.floor(Math.random() * 3)]
    return getRandom
}

//display.innerText to display results without appending it to the next line. Replaces the text as opposed to compounding. 

function playRound(playerSelection, autoSelection) {
    if (playerSelection === autoSelection) {
        //const p = document.createElement('p')
        displayScore.innerText = `TIED, You Both Picked ${playerSelection}`
        //displayScore.appendChild(p)
    } else if (playerSelection == 'rock' && autoSelection == 'paper') {
        compScore++
        //const p = document.createElement('p')
        displayScore.innerText = 'You Lose'
        //displayScore.appendChild(p)
    } else if (playerSelection == 'scissors' && autoSelection == 'paper') {
        playerScore++
        //const p = document.createElement('p')
        displayScore.innerText = 'You Win'
        //displayScore.appendChild(p)
    } else if (playerSelection == 'rock' && autoSelection == 'scissors') {
        playerScore++
        //const p = document.createElement('p')
        displayScore.innerText = 'You Win'
        //displayScore.appendChild(p)
    } else if (playerSelection == 'paper' && autoSelection == 'scissors') {
        compScore++    
        //const p = document.createElement('p')
        displayScore.innerText = 'You Lose'
        //displayScore.appendChild(p)
    } else if (playerSelection == 'scissors' && autoSelection == 'rock') {
        compScore++
        //const p = document.createElement('p')
        displayScore.innerText = 'You Lose'
        //displayScore.appendChild(p)
    } else if (playerSelection == 'paper' && autoSelection == 'rock') {
        playerScore++
        //const p = document.createElement('p')
        displayScore.innerText = 'You Win'
        //displayScore.appendChild(p)
    } else {
        //const p = document.createElement('p')
        displayScore.innerText = 'Nothing Selected'
        //displayScore.appendChild(p)
    }
}


rock.addEventListener('click', () => {
    const autoSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, autoSelection)
    playerTally.innerText = `Player Score:  ${playerScore}`
    compTally.innerText = `Computer Score: ${compScore}`
    winner (playerScore, compScore)
})
paper.addEventListener('click', () => {
    const autoSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, autoSelection)
    playerTally.innerText = `Player Score:  ${playerScore}`
    compTally.innerText = `Computer Score: ${compScore}`
    winner (playerScore, compScore)
})
scissors.addEventListener('click', () => {
    const autoSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, autoSelection)
    playerTally.innerText = `Player Score:  ${playerScore}`
    compTally.innerText = `Computer Score: ${compScore}`
    winner (playerScore, compScore)
})

function winner (playerScore, compScore) {
    if (playerScore == 5) {
        displayScore.innerText = "You Have WON THE GAME BIG MAN"
    } else if (compScore == 5) {
        displayScore.innerText = "The COMPUTER is the VICTOR TODAY!"
    }
}






