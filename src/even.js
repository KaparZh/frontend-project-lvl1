import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const questionNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${questionNum}`);
    const answer = readlineSync.question('Your answer: ');
    let isCorrect = false;

    if (questionNum % 2 === 0 && answer === 'yes') {
      isCorrect = true;
    }
    if (questionNum % 2 !== 0 && answer === 'no') {
      isCorrect = true;
    }

    if (isCorrect) {
      console.log('Correct!');
    }
    if (!isCorrect && answer === 'yes') {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (!isCorrect && answer === 'no') {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (!isCorrect) {
      console.log('Incorrect! Enter "yes" or "no"!');
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
};

export default evenGame;
