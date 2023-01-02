let playerScore = 0;
let compScore = 0;

const getComputerChoice = () => {
    const myArrayChoice = ['rock', 'paper', 'scissors']
    const getRandom = myArrayChoice[Math.floor(Math.random() * 3)]
    return getRandom
}

function playRound(playerSelection, autoSelection) {
    if (playerSelection === autoSelection) {
        return 'TIED';
    } else if (playerSelection == 'rock' && autoSelection == 'paper') {
        compScore++
        return 'You Lose'
    } else if (playerSelection == 'scissors' && autoSelection == 'paper') {
        playerScore++
        return 'You Win'
    } else if (playerSelection == 'rock' && autoSelection == 'scissors') {
        playerScore++
        return 'You Win'
    } else if (playerSelection == 'paper' && autoSelection == 'scissors') {
        compScore++    
        return 'You Lose'
    } else if (playerSelection == 'scissors' && autoSelection == 'rock') {
        compScore++
        return 'You Lose'
    } else if (playerSelection == 'paper' && autoSelection == 'rock') {
        playerScore++
        return 'You Win'
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Select Either Rock, Paper, Scissors!').toLowerCase();
        const autoSelection = getComputerChoice();
        console.log(playRound(playerSelection, autoSelection));
    }
if (playerScore > compScore) {
    return 'You WON Against the Computer, Congrats!'
} else if (playerScore < compScore) {
    return 'You LOST, need some more practice there buddy, ALSO YOU SUCK BIG TIME DUMBASS HAHAHHAHAHHAHHAHAHHHA'
} else {
    return 'You TIED Against the Computer!'
}
}
console.log(game())


