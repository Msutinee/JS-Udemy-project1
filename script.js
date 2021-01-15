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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let startScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no number | if no guess
  if (!guess) {
    //document.querySelector('.message').textContent = '🤢 No Number';
    displayMessage('🤢 No Number');

    // when player wins
  } else if (guess === secretNumber) {
    if (startScore > 1) {
      //document.querySelector('.message').textContent = '🎉correct Numer!!';
      displayMessage('🎉correct Numer!!');
      startScore--;
      document.querySelector('.score').textContent = startScore;
      document.querySelector('.number').textContent = secretNumber;
    } else if (startScore === 0) {
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.message').textContent = '😢You lost the game';
      displayMessage('😢You lost the game');
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (startScore > highScore) {
      highScore = startScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess !== secretNumber) {
    if (startScore > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? '🤦‍♀️Number is too HIGH' : '🤦‍♂️Number is too LOW';
      displayMessage(
        guess > secretNumber ? '🤦‍♀️Number is too HIGH' : '🤦‍♂️Number is too LOW'
      );
      startScore--;
      document.querySelector('.score').textContent = startScore;
    } else {
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.message').textContent = '😢You lost the game';
      displayMessage('😢You lost the game');
    }
  }

  ///////// duplicatio code ///////////// NOT DRY AT ALL vvvvvvvv

  // else if (guess > secretNumber) {
  //   if (startScore > 1) {
  //     document.querySelector('.message').textContent = '🤦‍♀️Number is too high';
  //     startScore--;
  //     document.querySelector('.score').textContent = startScore;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😢You lost the game';
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (startScore > 1) {
  //     document.querySelector('.message').textContent = '🤦‍♂️Number is too LOW';
  //     startScore--;
  //     document.querySelector('.score').textContent = startScore;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😢You lost the game';
  //   }
  // }
  /////////// duplicatio code ///////////// NOT DRY AT ALL^^^^^^^^^
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  startScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
