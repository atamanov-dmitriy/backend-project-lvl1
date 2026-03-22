#!/usr/bin/env node
import runApp from "../src/cli.js";
import { gcbController } from "../src/games/gcd-controller.js";
import { gameController } from "../src/index.js";

const name = runApp();
console.log("Find the greatest common divisor of given numbers.");
gameController(name, gcbController);
