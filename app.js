const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;


const getPlayerChoice = ()=>{
    const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS}`).toUpperCase()
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`invalid choice we choose! ${DEFAULT_USER_CHOICE} for you`)
        return DEFAULT_USER_CHOICE
    }
    return selection;
}

const getComputerChoice =()=>{
    const randomValue = Math.random()
    if(randomValue<0.34){
        return ROCK
    }
    else if(randomValue <0.67){
        return PAPER;
    }
    else {
        return SCISSORS
    }
}


const determineWinner=(cChoice , pChoice)=>{
    if(cChoice === pChoice){
        return 'draw'
    }
    else if((cChoice===ROCK && pChoice === PAPER) || (cChoice===PAPER && pChoice === SCISSORS) || (cChoice===SCISSORS && pChoice === ROCK)){
        return 'player winner'
    }
    else{
        return 'computer winner'
    }
}


startGameBtn.addEventListener('click',()=>{
        console.log('started game')
        const playerSelection = getPlayerChoice()
        const computerChoice = getComputerChoice()
        const winner = determineWinner(computerChoice,playerSelection)
        let message = `you picked ${playerSelection} , computer picked ${computerChoice} , therefore you`;
        if(winner === 'draw'){
            message = message + ' had a draw'
        }
        else if (winner === 'player winner'){
            message = message + ' won'
        }
        else {
            message = message + ' lost'
        }
        alert(message)
})