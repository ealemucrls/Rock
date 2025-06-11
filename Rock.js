
/*
random number between 0 and 3 equals i
empty string
if i is in the boundaries than a certain hand picked
return the hand
create a prompt 
creat function getHumanChoice;
get the user choice for hand
return users hand
set the running functions to two different variables
count score for both the human and computer
make the human and computer hand a lowercase string
function playGround with two variables being the two lowercased strings
if, else if, and else statements based of the hand thrown by the user and 
the computer
return the winner
if tie than return try again and run playGround again 
call the function playGround 
create a for loop to run it 5 times 
*/
function getComputerChoice(){
    let i = (Math.random()*3);
    let computerChoice = "";
    if(i <= 1){
        computerChoice = "Rock";
    }
    else if(i >= 1 && i <= 2){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }

    return computerChoice;
}

const prompt = require('prompt-sync')();

function getHumanChoice(){
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors: ");
    return humanChoice; 
    
}

let computer = getComputerChoice();

let human = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

let humanChoice = human.toLowerCase();
let computerChoice = computer.toLowerCase();

function playRound(humanChoice, computerChoice){
    
    if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanChoice += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerChoice += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanChoice += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper");
        humanChoice += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerChoice += 1;
    }
    else{
        console.log("It's a tie go again");
        let round = playRound(humanChoice, computerChoice);
        
    }

}


for(let i = 0; i < 5; i++){
    let computer1 = getComputerChoice();
    let human1 = getHumanChoice();
    let humanChoice1 = human1.toLowerCase();
    let computerChoice1 = computer1.toLowerCase();
    let play2 = playRound(humanChoice1, computerChoice1);
}


// TODO GITHUB




