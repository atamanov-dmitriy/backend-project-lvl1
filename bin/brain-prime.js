#!/usr/bin/env node
import runApp from '../src/cli.js'
import { primeController } from '../src/games/prime-controller.js'
import { gameController } from '../src/index.js'

const name = runApp()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
gameController(name, primeController)
