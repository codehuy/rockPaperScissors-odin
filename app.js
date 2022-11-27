
function game(){
    let pScore = 0;
    let cScore = 0; 
    const playerScore = document.querySelector('.player-score h3');
    const cpuScore = document.querySelector('.cpu-score h3');

    const playBtn = document.querySelector('.start-game button');
    const startScreen = document.querySelector('.start-game');
    const match = document.querySelector('.game');
    const resetBtn = document.querySelector('.reset button');
   
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const cpuHand = document.querySelector('.cpu-hand');

    const actionDisplay = document.querySelector('.action-display');

    // compare hands 
    const compareHands = (playerSelection, cpuSelection) => {
        // tie 
        if (playerSelection === cpuSelection) {
            return actionDisplay.textContent = 'its a tie!';
        }
        // player choose rock
       if (playerSelection === 'rock'){
            if (cpuSelection === 'scissors') {
                actionDisplay.textContent = `Player win! ${playerSelection} beats ${cpuSelection}`;
                pScore++;
                updateScore();
                return;
            } else {
                actionDisplay.textContent = `You lose. ${cpuSelection} beats ${playerSelection}.`;
                cScore++;
                updateScore();
                return;
            }
        }
        // player choose paper
        if (playerSelection === 'paper'){
            if (cpuSelection === 'rock') {
                 actionDisplay.textContent = `Player win! ${playerSelection} beats ${cpuSelection}`;
                 pScore++;
                 updateScore();
                 return;
            } else {
                actionDisplay.textContent = `You lose. ${cpuSelection} beats ${playerSelection}.`;
                cScore++;
                updateScore();
                return; 
            }
        }
        // player choose scissors
        if (playerSelection === 'scissors'){
            if (cpuSelection === 'paper') {
                actionDisplay.textContent = `Player win! ${playerSelection} beats ${cpuSelection}`;
                pScore++;
                updateScore();
                return
            } else {
                actionDisplay.textContent = `You lose. ${cpuSelection} beats ${playerSelection}.`; 
                cScore++;
                updateScore();
                return;
            }
        }
    };

    // update scores
    const updateScore = () => {
        playerScore.textContent = pScore;
        cpuScore.textContent = cScore;
        if(pScore >= 5) {
            actionDisplay.textContent = 'GAME OVER! Player 🤡 won 5 games';
            cScore = 0;
            pScore = 0;
            console.log('GAME OVER, PLAYER WON 🤡');
        } else if (cScore >= 5 ){
            actionDisplay.textContent = 'GAME OVER! CPU 🤖 won 5 games';
            cScore = 0;
            pScore = 0;
            console.log('GAME OVER, COMPUTER WON 🤖');
        } else {
            return;
        }
    }

   // reset game
   const resetGame = () => {
        resetBtn.addEventListener('click', () => {
            match.classList.remove('fadeIn');
            startScreen.classList.remove('fadeOut');
            console.log('Bye 👋');
            playerScore.textContent = pScore;
            cpuScore.textContent = cScore;
            cScore = 0;
            pScore = 0;
        });
   };

    // start game 
    const startGame = () => {
        playBtn.addEventListener('click', () => {
            startScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            console.log('Hi 👋');
        });
    };
    // game function 
    const playGame = () => {
        options.forEach(option => {
            option.addEventListener('click', function() {
                console.log(`Player chose: ${this.textContent}`);
                // CPU choice for each click
                const cpuOptions = ['rock', 'paper', 'scissors'];
                const cpuNum = Math.floor(Math.random() * 3);
                const cpuPick = cpuOptions[cpuNum];
                console.log(`CPU chose: ${cpuPick}`);
                compareHands(this.textContent, cpuPick);
                // update hand images 
                playerHand.src = `./images/${this.textContent}.png`
                cpuHand.src = `./images/${cpuPick}.png`
            });
        });
        
    };

    // calling the inner functions
    startGame();
    playGame();
    resetGame();
};
// calling the game 
game();