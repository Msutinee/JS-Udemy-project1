'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Numnber!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// console.log();
// console.log();
// console.log('Hello');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let startScore = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '🤢 No Number';

    // when player wins
  } else if (guess === secretNumber) {
    if (startScore > 1) {
      document.querySelector('.message').textContent = '🎉correct Numer!!';
      startScore--;
      document.querySelector('.score').textContent = startScore;
    } else if (startScore === 0) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😢You lost the game';
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    if (startScore > 1) {
      document.querySelector('.message').textContent = '🤦‍♀️Number is too high';
      startScore--;
      document.querySelector('.score').textContent = startScore;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😢You lost the game';
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (startScore > 1) {
      document.querySelector('.message').textContent = '🤦‍♂️Number is too LOW';
      startScore--;
      document.querySelector('.score').textContent = startScore;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😢You lost the game';
    }
  }
});
