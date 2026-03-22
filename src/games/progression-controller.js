import { generateArithmeticProgression, getRandomInteger } from "../utils.js";

const progressionController = () => {
  const start = getRandomInteger(0, 50);
  const step = getRandomInteger(1, 10);

  const progression = generateArithmeticProgression({
    start,
    step,
    count: 10,
  });

  const index = getRandomInteger(0, progression.length - 1);

  const question = [
    ...progression.slice(0, index),
    "..",
    ...progression.slice(index + 1),
  ].join(" ");

  const expectedAnswer = String(progression[index]);

  return { expectedAnswer, question };
};

export { progressionController };
