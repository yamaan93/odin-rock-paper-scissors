function getComputerChoice(){
    //generate random number between 0-2, 0 = rock, 1 = paper, 2 = scissors
    let dice = Math.floor(Math.random() * 3);
    let response;

    if (dice == 0){
        response = "rock";
    }
    
    else if (dice == 1){
        response = "paper";
    }
    
    else    if (dice == 2){
        response = "scissors";
    }
    else{
        response = "error: dice out of range";
    }

    return response;
}

function playRound(playerSelection, computerSelection = getComputerChoice()){
    let outcome = "error"; //win or lose or error by default
    playerSelection = playerSelection.toLowerCase(); //normalize player input incase of capitals
    

    if(playerSelection==computerSelection){
        outcome = "tie!"

    }
    else {
        if(playerSelection == "rock" && computerSelection == "scissors"){
            outcome = "you win, rock beats scrissors";
        }
        else if (playerSelection == "rock"){
            outcome = "you lose! paper beats rock";
        }
    
        if(playerSelection == "paper" && computerSelection == "rock"){
            outcome = "you win, paper beats rock";
        }
        else if (playerSelection == "paper"){
            outcome = "you lose! scissors beat paper";
        }
    
        if(playerSelection == "scissors" && computerSelection == "paper"){
            outcome = "you win, scissors beats paper";
        }
        else if (playerSelection == "scissors"){
            outcome = "you lose! rock beats scissors";
        }
    }

    return outcome;
    
}

