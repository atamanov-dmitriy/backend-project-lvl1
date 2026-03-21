#!/usr/bin/env node
import runApp from "../src/cli.js";
import { evenController } from "../src/even-controller.js";

const name = runApp();
evenController(name);
