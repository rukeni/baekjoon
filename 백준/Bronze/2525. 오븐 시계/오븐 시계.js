const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hour = Number(input[0].split(' ')[0]);
const minute = Number(input[0].split(' ')[1]);
const costTime = Number(input[1]);

const convertToMinute = (hour, minute, costTime) => (hour * 60 + minute) + costTime;

const minuteToTime = (minute) => {
  const hour = Math.floor(minute / 60);
  const minute_ = minute % 60;
  return `${hour} ${minute_}`;
}

function solution(hour, minute, costTime) {
  const minute_ = convertToMinute(hour, minute, costTime);

  if(minute_ < 1440) {
    return minuteToTime(minute_);
  }

  return minuteToTime(minute_ - 1440);
}

console.log(solution(hour, minute, costTime));
