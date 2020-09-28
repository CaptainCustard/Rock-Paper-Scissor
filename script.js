/* var playerCounter = 0;
var cpuCounter = 0;

while (playerCounter < 5 && cpuCounter < 5 ) {
    var computerSelection = Math.floor(Math.random() * 3);
    var playerSelection = prompt("Rock, paper or scissors").toLowerCase();
    computerPlay();
    compare(playerSelection, computerSelection)
}

function compare (playerSelection, computerSelection) {
if ( playerSelection == "paper" && computerSelection == "Rock") {
    playerCounter++
    return "Player wins!"
} else if ( playerSelection == "paper" && computerSelection == "Scissors") {
    cpuCounter++
    return "CPU wins!"
} else if ( playerSelection == "rock" && computerSelection == "Paper") {
    cpuCounter++
    return "CPU wins!"
} else if ( playerSelection == "rock" && computerSelection == "Scissors") {
    playerCounter++
    return "Player wins!"
} else if ( playerSelection == "scissors" && computerSelection == "Paper") {
    playerCounter++
    return "Player wins!"
} else if ( playerSelection == "scissors" && computerSelection == "Rock") {
    cpuCounter++
    return "CPU wins!"
} else {
    return "Tie!"
}
}

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
} */


