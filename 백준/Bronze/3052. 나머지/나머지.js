const input = require('fs').readFileSync(0).toString().trim().split('\n');

const getReminders = (numbers) => {
  return numbers.map(number => number % 42);
}

function solution(numbers) {
  const reminders = getReminders(numbers);
  return new Set(reminders).size;
}

console.log(solution(input));