let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input;

const multiply = (a, b) => Number(a) * Number(b);

function solution(a, b) {
    console.log(multiply(a, b[2]) + '\n' + multiply(a, b[1]) + '\n' + multiply(a, b[0]) + '\n' + multiply(a, b));
}

solution(a, b);