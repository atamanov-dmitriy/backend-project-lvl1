import { checkIsPrime, getRandomInteger } from '../utils.js'

const primeController = () => {
  const question = getRandomInteger(1, 99)
  const expectedAnswer = checkIsPrime(question) ? 'yes' : 'no'

  return { expectedAnswer, question }
}

export { primeController }
