function solution(N, stages) {
    const clearTable = {};
    const stageTable = {};
    
    const clears = [];
    const failures = [];
    
    for(let i = 0; i < stages.length; i++) {
        let count = stages[i];
        
        while(count !== 0) {
            clearTable[count] ? clearTable[count]++ : clearTable[count] = 1;
            count--;
        }
        
        stageTable[stages[i]] ? stageTable[stages[i]]++ : stageTable[stages[i]] = 1;
    }
    
    for(let i = 1; i < N + 1; i++) {
        let failureRate = stageTable[i] / clearTable[i];
        
        if(isNaN(failureRate)) {
            failureRate = 0;
        }
        
        failures.push([failureRate, i]);
    }
    
    failures.sort((a, b) => {
        if (a[0] === b[0]) return 1;
        if (a[0] < b[0]) return 1;
        else return -1;
    });
    
    return failures.map(failure => failure[1]);
    
}