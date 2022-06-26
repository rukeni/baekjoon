const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let count = Number(input);
let answer = input;

while(count > 1) {
    count--;
    answer += count + '\n';
}

console.log(answer);