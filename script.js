let userPick = parseInt(prompt("Please enter a number from 0: Rock, 1: Paper and 2: Scissor!"));

console.log(userPick);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
let computerPick = getRandomInt(3);
  
function playRound(userPick, computerPick){
    if(userPick == computerPick){
        console.log('Draw');
    }
    else if(userPick == 0 && computerPick == 1){
        console.log('Computer Won!');
    }
    else if(userPick == 1 && computerPick == 2){
        console.log('Computer won!');
    }
    else if(userPick == 2 && computerPick == 1){
        console.log("Computer Won!");
    }
    else{
        console.log('You Won!');
    }
}


playRound(userPick, computerPick);