
//Basic javascript practice 
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//dsiplay function
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

// check button function working
document.querySelector('.check').addEventListener('click', function (){
	const guess = Number(document.querySelector('.guess').value);
	if(!guess){
		display('No match');
	}
	else if(guess === secretNumber){
		display('Winner');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highscore) {
			highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
	}
	else if(guess !== secretNumber) {
		if(score > 1){
			display(guess > secretNumber ? 'High Num' : 'Low Num');
			score--;
			document.querySelector('.score').textContent = score;
		}
		else{
			display('Lost the game');
			document.querySelector('.score').textContent = 0;
		}
	}
});

// again button working when we click on that button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  display('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});