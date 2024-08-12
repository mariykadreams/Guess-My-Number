'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when no inpit 
    if(!guess){
         displayMessage('🛑No number!');
        
        //when player wins
    } else if (guess === secretNumber){
        displayMessage('🎊Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    
    } else if (guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'To high' : 'To low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😥You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener
('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    score = 20;
    secretNumber = secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
});