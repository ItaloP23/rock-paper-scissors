const getComputerChoice = () => {
    // ritorna la scelta del computer
    const CHOICES = ["rock" , "paper" , "scissors" ];
    const INDEX = Math.floor( Math.random() * 3);
    return CHOICES[INDEX]
}

const getPlayerSelection = () => {
    // prompt una scelta del giocatore e la ritorna
    let playerChoice;
    let check = false;
    while (!check) {
        playerChoice = prompt("Player choses:" , )
        if (/^rock$|^paper$|^scissors$/i.test(playerChoice)) {
            check = true;
        } else { console.log("Enter rock, paper or scissors") }
    }
    return playerChoice
}

const printResult = (winner) => {
    console.log("Game is finished, " + winner + " won!")
}



const game = ( numberOfGames ) => {

    let playerScore = 0;
    let computerScore = 0;

    const playRound = ( computer , player ) => {
        //choices
        console.log(`Computer chooses ${computer}, player chooses ${player}`)
    
        // who wins between computer and player    
        if ( computer[0] === player[0] ) {
            console.log("it's a tie");
            computerScore++;
            playerScore++;
            return
        } else if (
            ( computer[0] === 'r' && player[0] === ( 's' || 'S' ) ) ||
            ( computer[0] === 's' && player[0] === ( 'p' || 'P' ) ) ||
            ( computer[0] === 'p' && player[0] === ( 'r' || 'R' ) )
        )  {
            console.log("computer wins");
            computerScore++;
            return
        } else {
            console.log("player wins");
            playerScore++;
            return 
        }
    }
    
    // for loop over the number of games
    for (let i = 1 ; i <= numberOfGames ; i++) {

        //call a single round play
        playRound( getComputerChoice() , getPlayerSelection() )
        
        //keeping track of the scores
        console.log(`Game number ${i} - Live score: Computer ${computerScore} - ${playerScore} Player`);
    }

    if ( computerScore === playerScore) {
        console.log("The game ends with a tie");
        return
    } 

    computerScore > playerScore ? printResult("computer") : printResult("player");
    return


    
}

game(5);