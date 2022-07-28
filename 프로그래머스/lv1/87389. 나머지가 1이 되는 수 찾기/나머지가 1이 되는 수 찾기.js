function solution(n) {
    const numbers = new Array(n).fill(1).map((_, idx) => idx + 1).filter(el => n % el === 1);
    
    return Math.min(...numbers);
}