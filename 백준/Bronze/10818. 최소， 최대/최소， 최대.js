const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

console.log(numbers[0], numbers[numbers.length - 1]);