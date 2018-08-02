"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var file = fs_1.readFileSync(path_1.join(__dirname, 'fizzbuzz.ts'));
console.log(file.toString('utf-8'));
