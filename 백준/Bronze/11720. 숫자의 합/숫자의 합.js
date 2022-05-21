var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = input[0];
var b = input[1].split('');

function solution(numbers) {
    return numbers.reduce((acc, curr) => acc += Number(curr), 0);
}

console.log(solution(b));