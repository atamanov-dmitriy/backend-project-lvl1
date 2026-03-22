#!/usr/bin/env node
import runApp from '../src/cli.js'
import { calcController } from '../src/games/calc-controller.js'
import { gameController } from '../src/index.js'

const name = runApp()
console.log('What is the result of the expression?')
gameController(name, calcController)
