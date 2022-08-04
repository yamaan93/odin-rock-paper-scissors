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
    
    else if (dice == 2){
        response = "scissors";
    }
    else{
        response = "error: dice out of range";
    }

    return response;
}

console.log(getComputerChoice());