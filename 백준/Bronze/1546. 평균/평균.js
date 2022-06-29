const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

const getNewScore = (currentScore, maxScore) => {
  return (currentScore / maxScore) * 100;
}

function solution(numbers) {
  const max = Math.max(...numbers);
  const newScores = numbers.map(number => getNewScore(number, max));
  const totalScore = newScores.reduce((a, b) => a + b);

  return (totalScore / numbers.length);
}

console.log(solution(numbers));