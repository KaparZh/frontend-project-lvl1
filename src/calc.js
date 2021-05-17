import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const randomCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const actionNum = Math.ceil(Math.random() * 3);
    let exprsn;
    let questionValue;

    if (actionNum === 1) {
      exprsn = firstNum + secondNum;
      questionValue = `${firstNum} + ${secondNum}`;
    }
    if (actionNum === 2) {
      exprsn = firstNum - secondNum;
      questionValue = `${firstNum} - ${secondNum}`;
    }
    if (actionNum === 3) {
      exprsn = firstNum * secondNum;
      questionValue = `${firstNum} * ${secondNum}`;
    }

    const question = `Question: ${questionValue}`;
    console.log(question);

    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === exprsn) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${exprsn}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default randomCalc;
