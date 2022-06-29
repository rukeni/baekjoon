const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input.map(Number);

const getMaxNumber = (numbers) => {
  let maxNumber = numbers[0];
  let maxIndex = 0;

  for(let i = 1; i < numbers.length; i++) {
    if(maxNumber < numbers[i]) {
      maxNumber = numbers[i];
      maxIndex = i;
    }
  }

  return [maxNumber, maxIndex];
}

function solution(numbers) {
  const [maxNumber, maxIndex] = getMaxNumber(numbers);
  return `${maxNumber}\n${maxIndex + 1}`;
}

console.log(solution(numbers));