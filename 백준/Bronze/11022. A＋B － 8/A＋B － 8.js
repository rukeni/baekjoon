const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let answer = '';

for(let i = 1; i <= Number(input[0]); i++) {
  const lines = input[i].split(' ');
  answer += `Case #${i}: ${Number(lines[0])} + ${Number(lines[1])} = ` + ( Number(lines[0]) + Number(lines[1]) ) + '\n'
}

console.log(answer);