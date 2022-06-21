let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(BigInt);

const [n, m] = input;

function solution(n, m) {
  return (n / m) + '\n' + (n % m); 
}

console.log(solution(n, m));
