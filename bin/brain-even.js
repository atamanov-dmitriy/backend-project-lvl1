#!/usr/bin/env node
import runApp from "../src/cli.js";
import { evenController } from "../src/games/even-controller.js";
import { gameController } from "../src/index.js";

const name = runApp();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameController(name, evenController);
