"use strict";
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.run = function (size) {
        for (var i = 0; i < size; i++) {
            if (i % 15 === 0) {
                console.log('fizzbuzz');
            }
            else if (i % 3 === 0) {
                console.log('fizz');
            }
            else if (i % 5 === 0) {
                console.log('buzz');
            }
            else {
                console.log(i);
            }
        }
    };
    return FizzBuzz;
}());
var size = process.argv[2] ? Number(process.argv[2]) : 100;
new FizzBuzz().run(size);
