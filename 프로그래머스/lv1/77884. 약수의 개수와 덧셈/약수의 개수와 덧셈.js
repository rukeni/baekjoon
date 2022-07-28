function solution(left, right) {
    // 약수 구하기
    let answer = 0;
    
    const difference = right - left;
    
    for(let i = left; i <= right; i++) {
        
        const divisorTable = {};

        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divisorTable[i] ? divisorTable[i].push(j) : divisorTable[i] = [j];
            }
        }
        
        Object.keys(divisorTable).forEach(number => {
            if(divisorTable[number].length % 2 === 0) {
                answer += Number(number);
            } else {
                answer -= Number(number);
            }
        })
    }
    
    return answer;
}