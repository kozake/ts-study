import { readFileSync } from 'fs';
import { join } from 'path';

let file = readFileSync(join(__dirname, 'fizzbuzz.ts'));
console.log(file.toString('utf-8'));
