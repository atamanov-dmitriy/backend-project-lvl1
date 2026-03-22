import { getRandomInteger } from '../utils.js'

const calcController = () => {
  const operand1 = getRandomInteger(1, 9)
  const operand2 = getRandomInteger(1, 9)
  const sign = getRandomInteger(0, 3)
  let questionSing
  let expectedAnswer

  switch (sign) {
    case 0:
      expectedAnswer = operand1 + operand2
      questionSing = '+'
      break

    case 1:
      expectedAnswer = operand1 - operand2
      questionSing = '-'
      break

    default:
      expectedAnswer = operand1 * operand2
      questionSing = '*'
      break
  }

  expectedAnswer = String(expectedAnswer)

  const question = `${operand1} ${questionSing} ${operand2}`

  return { expectedAnswer, question }
}

export { calcController }
