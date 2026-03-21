import readlineSync from "readline-sync";
import { getRandomInteger } from "./utils.js";

const evenController = (userName) => {
  const MOVES_NUMBER = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < MOVES_NUMBER; i++) {
    const number = getRandomInteger(1, 99);
    const expectedAnswer = number % 2 === 0 ? "yes" : "no";

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
    if (userAnswer !== expectedAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${userName}!`);
};

export { evenController };
