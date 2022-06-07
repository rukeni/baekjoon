let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => Math.floor(a / b);
const reminder = (a, b) => a % b;

const operations = (a, b) => {
  return `${sum(a, b)}\n${subtract(a, b)}\n${multiply(a, b)}\n${divide(a, b)}\n${reminder(a, b)}`;
}

console.log(operations(a, b));