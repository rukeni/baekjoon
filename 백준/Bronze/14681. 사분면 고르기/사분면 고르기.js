const fs = require('fs');
const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

function solution(x, y) {
  const evaluate = (value) => {
    if(value > 0) return '+';
    return '-';
  }

  const quadrant = {
    '++': 1,
    '-+': 2,
    '--': 3,
    '+-': 4
  }

  const quadrantValue = evaluate(x) + evaluate(y);

  return quadrant[quadrantValue];
}

console.log(solution(x,y));