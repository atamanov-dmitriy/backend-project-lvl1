import { getRandomInteger } from "../utils.js";

const gcbController = () => {
  let a = getRandomInteger(1, 99);
  let b = getRandomInteger(1, 99);

  const question = `${a} ${b}`;

  if (b > a) {
    [b, a] = [a, b];
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  const expectedAnswer = String(a);

  return { expectedAnswer, question };
};

export { gcbController };
