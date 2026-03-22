import readlineSync from "readline-sync";

const gameController = (userName, controller) => {
  const MOVES_NUMBER = 3;

  for (let i = 0; i < MOVES_NUMBER; i++) {
    const { expectedAnswer, question } = controller();
    console.log(`Question: ${question}`);

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

export { gameController };
