const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")

let answer = '';

for(let i = 1; i <= input[0]; i++) {
    numbers = input[i].split(' ');
    answer += Number(numbers[0]) + Number(numbers[1]) + "\n";
}

console.log(answer);