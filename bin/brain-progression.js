#!/usr/bin/env node
import runApp from "../src/cli.js";
import { progressionController } from "../src/games/prime-controller.js";
import { gameController } from "../src/index.js";

const name = runApp();
console.log("What number is missing in the progression?");
gameController(name, progressionController);
