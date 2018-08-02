"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
let size = process.argv[2] ? Number(process.argv[2]) : 100;
new fizzbuzz_1.FizzBuzz().run(size);
