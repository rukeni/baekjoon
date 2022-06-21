let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(el => Number(el));

const [year] = input;

function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function solution(year) {
  return isLeap(year) ? 1 : 0;
}

console.log(solution(year));
