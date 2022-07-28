// B는 both를 뜻하며 둘다 된다는 뜻으로 사용

const thumbTable = {
    '1': 'L',
    '4': 'L',
    '7': 'L',
    '3': 'R',
    '6': 'R',
    '9': 'R',
    '2': 'B',
    '5': 'B',
    '8': 'B',
    '0': 'B'
};

const positionTable = {
    '1': [0, 0],
    '4': [1, 0],
    '7': [2, 0],
    '3': [0, 2],
    '6': [1, 2],
    '9': [2, 2],
    '2': [0, 1],
    '5': [1, 1],
    '8': [2, 1],
    '0': [3, 1]
}

function solution(numbers, hand) {
    const answer = [];
    
    let leftPosition = [3, 0];
    let rightPosition = [3, 2];
    
    
    for(let i = 0; i < numbers.length; i++) {
        const currentPosition = positionTable[numbers[i]];
        
        if(thumbTable[numbers[i]] === 'B') {
            const leftDistance = Math.abs(currentPosition[0] - leftPosition[0]) + Math.abs(currentPosition[1] - leftPosition[1]);
            const rightDistance = Math.abs(currentPosition[0] - rightPosition[0]) + Math.abs(currentPosition[1] - rightPosition[1]);
            
            if (leftDistance < rightDistance) {
                answer.push('L');
                leftPosition = [...currentPosition];
                
            } else if(leftDistance === rightDistance) {
                const type = hand === 'left' ? 'L' : 'R';
                answer.push(type);

                if(type === 'L') {
                    leftPosition = [...currentPosition];
                } else {
                    rightPosition = [...currentPosition];
                }
            } else {
                answer.push('R');
                rightPosition = [...currentPosition];

            }
            
        } else {
            answer.push(thumbTable[numbers[i]]);
            
            if (thumbTable[numbers[i]] === 'L') {
                leftPosition = [...currentPosition];
            } else {
                rightPosition = [...currentPosition];
            }
        }
    }
    return answer.join('');
}