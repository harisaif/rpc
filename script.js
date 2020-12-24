const buttons = document.querySelectorAll('button');
const scoreh2 = document.getElementById('score');
const reset = document.getElementById('reset');

var options = ['Rock', 'Paper', 'Scissor'];
var score = 0;
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        // alert('user Selection' + button.innerHTML);
        const pcSelection = options[getRandomInt()];
        
        // alert('PC selection' + pcSelection);

        function getRandomInt() {
            return Math.floor(Math.random() * Math.floor(3));
          }

        if(button.innerHTML == pcSelection){

            alert('Draw! ' + 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);

        }else if(button.innerHTML == 'Rock' && pcSelection == 'Paper'){

            alert('You lost!' + 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);

        }else if(button.innerHTML == 'Paper' && pcSelection == 'Paper'){

            alert('You WON! ' + 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);
            score += 1;

        }else if(button.innerHTML == 'Paper' && pcSelection == 'Scissor'){

            alert('You lost! '+ 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);

        }else if(button.innerHTML == 'Scissor' && pcSelection == 'Paper'){

            alert('You WON! ' + 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);
            score += 1;        
        }else if(button.innerHTML == 'Rock' && pcSelection == 'Scissor'){

            alert('You WON! ' + 'User Selection: '+ button.innerHTML + 'PC selection: ' + pcSelection);
            score += 1;   
        }

        scoreh2.innerHTML = score;
    });

});

reset.addEventListener('click', () =>{
    score = 0;
    scoreh2.innerHTML = score;

});

// let userPick = parseInt(prompt("Please enter a number from 0: Rock, 1: Paper and 2: Scissor!"));

// console.log(userPick);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
  
// let computerPick = getRandomInt(3);
  
// function playRound(userPick, computerPick){
//     if(userPick == computerPick){
//         console.log('Draw');
//     }
//     else if(userPick == 0 && computerPick == 1){
//         console.log('Computer Won!');
//     }
//     else if(userPick == 1 && computerPick == 2){
//         console.log('Computer won!');
//     }
//     else if(userPick == 2 && computerPick == 1){
//         console.log("Computer Won!");
//     }
//     else{
//         console.log('You Won!');
//     }
// }


// playRound(userPick, computerPick);