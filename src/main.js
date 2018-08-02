"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("./fizzbuzz");
var size = process.argv[2] ? Number(process.argv[2]) : 100;
new fizzbuzz_1.FizzBuzz().run(size);
