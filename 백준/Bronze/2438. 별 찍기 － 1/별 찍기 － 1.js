const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const count = Number(input);

let answer = '';

for(let i = 1; i <= count; i++) {
  const star = new Array(i).fill('*').join('');
  answer += (star + '\n');
}

console.log(answer);