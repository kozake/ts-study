import { FizzBuzz } from './fizzbuzz'

let size = process.argv[2] ? Number(process.argv[2]) : 100;
new FizzBuzz().run(size);
