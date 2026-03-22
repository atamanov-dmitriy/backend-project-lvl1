import { getRandomInteger } from "../utils.js";

const evenController = () => {
  const question = getRandomInteger(1, 99);
  const expectedAnswer = question % 2 === 0 ? "yes" : "no";

  return { expectedAnswer, question };
};

export { evenController };
