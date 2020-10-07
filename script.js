var playerCounter = 0;
var cpuCounter = 0;
var computerSelection;

document.querySelector('.rock').addEventListener('click', playGame);
document.querySelector('.paper').addEventListener('click', playGame);
document.querySelector('.scissors').addEventListener('click', playGame);
document.querySelector('.reset').addEventListener('click', resetGame);
document.getElementById('score').innerHTML = `Player Score: ${playerCounter} | CPU Score: ${cpuCounter}`;
// This function make sure the score is below 5. It assigns a random number from 1 to 3 to computerSelection 
// and grab the name of the selected button from object 'e' and assign it to playerSelection variable.
function playGame (e) {
    
    if (playerCounter < 5 && cpuCounter <5 ) {
        computerSelection = Math.floor(Math.random() * 3);
        var playerSelection = e.target.classList[2].toLowerCase();
        // console.log(e)
        computerPlay();
        // compare(playerSelection, computerSelection)
        document.getElementById('round-winner').innerHTML = compare(playerSelection, computerSelection);
        document.getElementById('score').innerHTML = `Player Score: ${playerCounter} | CPU Score: ${cpuCounter}`;
    } else {
        // (playerCounter > cpuCounter) ? console.log("Player Wins!") : console.log("CPU Wins!");
        document.getElementById('score').innerHTML = `Player Score: ${playerCounter} | CPU Score: ${cpuCounter}`;
        return;
    }
}

function resetGame () {
    playerCounter = 0;
    cpuCounter = 0;
    document.getElementById('score').innerHTML = `Player Score: ${playerCounter} | CPU Score: ${cpuCounter}`;
    document.getElementById('round-winner').innerHTML = 'Play!'
}
// This function converts the random number in computerSelection 
// for the CPU to a selection of "Rock", "Paper" or "Scissors".
function computerPlay () {
    switch (computerSelection) {
        case 0: 
            computerSelection = "Paper"
            break;
        case 1: 
            computerSelection =  "Rock"
            break;
        case 2: 
            computerSelection =  "Scissors"
            break;
    }
    return computerSelection;
} 

// This function compare the selections of Player and CPU and update the counters and anounce 
// round winner.
function compare (playerSelection, computerSelection) {
    if ( playerSelection == "paper" && computerSelection == "Rock") {
            playerCounter++
            console.log(`Player Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'Player Wins!'
    } else if ( playerSelection == "paper" && computerSelection == "Scissors") {
            cpuCounter++
            console.log(`CPU Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'CPU Wins!'
    } else if ( playerSelection == "rock" && computerSelection == "Paper") {
            cpuCounter++
            console.log(`CPU Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'CPU Wins!'
    } else if ( playerSelection == "rock" && computerSelection == "Scissors") {
            playerCounter++
            console.log(`Player Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'Player Wins!'
    } else if ( playerSelection == "scissors" && computerSelection == "Paper") {
            playerCounter++
            console.log(`Player Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'Player Wins!'
    } else if ( playerSelection == "scissors" && computerSelection == "Rock") {
            cpuCounter++
            console.log(`CPU Wins! ${'\n'} Player Score: ${playerCounter} - CPU Score: ${cpuCounter}`)
            return 'CPU Wins!'
    } else {
            return "Tie!"
    }
}


