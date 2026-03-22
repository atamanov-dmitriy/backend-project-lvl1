const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const generateArithmeticProgression = (options) => {
  const { start, step, count } = options

  const progression = []
  for (let i = 0; i < count; i++) {
    const term = start + i * step
    progression.push(term)
  }

  return progression
}

const checkIsPrime = (number) => {
  if (number < 2) {
    return false
  }

  if (number === 2) {
    return true
  }

  if (number % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(number)

  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

export { getRandomInteger, generateArithmeticProgression, checkIsPrime }
