function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, compSelection){
    if (playerSelection === compSelection) {
        return `Its a Tie! You chose ${playerSelection} and Computer chose ${compSelection}`
    } else if (playerSelection === 'rock' && compSelection === 'scissors'){
        return 'You win! Rock Beats Scissors.'
    } else if (playerSelection === 'paper' && compSelection === 'rock'){
        return "You win! Paper beats Rock"
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        return "You win! Scissors beat Paper"
    } else {
        return `You lose.  ${compSelection} beats ${playerSelection}`
    }
}

