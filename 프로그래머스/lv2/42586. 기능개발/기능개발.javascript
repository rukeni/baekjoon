const calculateWorkDays = (progresses, speeds) => {
  const workDays = new Array(progresses.length).fill(0);

  for(let i = 0; i < progresses.length; i++) {
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      workDays[i] += 1;
    }
  }

  return workDays;
}

const countCompletedDeployments = workDays => {
  const completedDeployments = [];
  let max = workDays[0];
  let count = 1;

  for(let i = 1; i < workDays.length; i++) {
    if(max >= workDays[i]) {
      count++;
    } else {
      completedDeployments.push(count);
      max = workDays[i];
      count = 1;
    }
  }

  completedDeployments.push(count);

  return completedDeployments;
}

function solution(progresses, speeds) {
  const workDays = calculateWorkDays(progresses, speeds);

  const completedDeployments = countCompletedDeployments(workDays);
  return completedDeployments;
}