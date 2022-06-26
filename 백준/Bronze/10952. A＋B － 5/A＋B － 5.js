const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let answer = '';

input.pop();

for(let i = 0; i < input.length; i++) {
  const lines = input[i].split(' ');
  answer += Number(lines[0]) + Number(lines[1]) + '\n';
}

console.log(answer);