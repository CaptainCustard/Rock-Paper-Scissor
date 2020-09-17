var computerSelection = Math.floor(Math.random() * 3);

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

var playerSelection = "Paper";

function compare (playerSelection, computerSelection) {
    if ( playerSelection == "Paper" && computerSelection == "Rock") {
        return "Player wins!"
    } else if ( playerSelection == "Paper" && computerSelection == "Scissors") {
        return "CPU wins!"
    } else if ( playerSelection == "Rock" && computerSelection == "Paper") {
        return "CPU wins!"
    } else if ( playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Player wins!"
    } else if ( playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Player wins!"
    } else if ( playerSelection == "Scissors" && computerSelection == "Rock") {
        return "CPU wins!"
    } else {
        return "Tie!"
    }
}

computerPlay();
console.log(compare(playerSelection, computerSelection));