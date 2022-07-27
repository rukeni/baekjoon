

function solution(dirs) {
    if(dirs.length === 0) return 0;
    
    let currentPosition = [0, 0];
    let previousPosition = [0, 0];
    
    const path = new Set();
    
    const dirTable = {
        'U': 1,
        'D': -1,
        'R': 1,
        'L': -1
    };
    
    for(let i = 0; i < dirs.length; i++) {
        if(currentPosition[1] >= 5 && dirs[i] === 'U') continue;
        if(currentPosition[1] <= -5 && dirs[i] === 'D') continue;
        if(currentPosition[0] >= 5 && dirs[i] === 'R') continue;
        if(currentPosition[0] <= -5 && dirs[i] === 'L') continue;
        
        if(dirs[i] === 'U' || dirs[i] === 'D') {
            currentPosition[1] += dirTable[dirs[i]];
        }
        
        if(dirs[i] === 'R' || dirs[i] === 'L') {
            currentPosition[0] += dirTable[dirs[i]];
        }
        
        path.add(`${currentPosition.join('')}|${previousPosition.join('')}`);
        path.add(`${previousPosition.join('')}|${currentPosition.join('')}`);
        
        previousPosition = [...currentPosition];
    }
    
    return path.size / 2;
}