"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
let file = fs_1.readFileSync(path_1.join(__dirname, 'fizzbuzz.ts'));
console.log(file.toString('utf-8'));
