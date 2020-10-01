let playerWins = 0;
let computerWins = 0;
let playerSelects;
let computerSelects;

let btnRock = document.querySelector('.rock');
let btnpaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', () => playRound('ROCK'));
btnpaper.addEventListener('click', () => playRound('PAPER'));
btnScissors.addEventListener('click', () => playRound('SCISSORS'));

function computersChoice() {
    const compChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    const choiceLength = compChoice.length;
    const choiceSelected = compChoice[Math.floor(Math.random() * choiceLength)];
    return choiceSelected;
}

function playRound(playerSelects) {
    if (playerWins === 5 || computerWins === 5) return;
    let computerPlay = computersChoice();
    if (computerPlay === 'ROCK') {
        if (playerSelects === 'SCISSORS') {
            computerWins++;
            roundResult = `You lost this round. Rock beats Scissors.`;
        } else if (playerSelects === 'PAPER') {
            playerWins++;
            roundResult = `You won this round. Paper beats Rock.`;
        } else {
            roundResult = `It's a Tie. Rock can\'t beat Rock.`;
        }
    } else if (computerPlay === 'PAPER') {
        if (playerSelects === 'SCISSORS') {
            playerWins++;
            roundResult = `You won this round. Scissors beat Paper.`;
        } else if (playerSelects === 'ROCK') {
            computerWins++;
            roundResult = `You lost this round. Paper beats Rock.`;
        } else {
            roundResult = `It's a Tie. Paper can't beat Paper.`
        }
    } else if (computerPlay === 'SCISSORS') {
        if (playerSelects === 'ROCK') {
            playerWins++;
            roundResult = `You won this round. Rock beats Scissors.`;
        } else if (playerSelects === 'PAPER') {
            computerWins++;
            roundResult = `You lost this round. Scissors beat Paper.`;
        } else {
            roundResult = `It's a Tie. Scissors can't beat Scissors.`;
        }
    }
    let textContainer = document.querySelector("#textContainer");


    if (playerWins <= 5 && computerWins <= 5) {
        roundText = document.createElement('li');
        roundText.textContent = `${roundResult} Current Score- You: ${playerWins}, Computer: ${computerWins}`;
        textContainer.appendChild(roundText);

    }
    let scoreContainer = document.querySelector('#scoreContainer')
    if (playerWins === 5 && playerWins > computerWins) {
        roundText = document.createElement('h2');
        roundText.textContent = `YOU WON!! FINAL SCORE- YOU: ${playerWins}, COMPUTER: ${computerWins}`;
        scoreContainer.appendChild(roundText);
    } else if (computerWins == 5 && playerWins < computerWins) {
        roundText = document.createElement('h2');
        roundText.textContent = `YOU LOST!! FINAL SCORE- YOU: ${playerWins}, COMPUTER: ${computerWins}`;
        scoreContainer.appendChild(roundText);
    }
}