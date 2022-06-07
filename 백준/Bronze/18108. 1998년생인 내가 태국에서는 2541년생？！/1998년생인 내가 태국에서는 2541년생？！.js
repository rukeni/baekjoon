let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const convertYear = (year) => year - 543;

console.log(convertYear(input[0]))