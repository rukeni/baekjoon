function solution(n) {
    const reversed = n.toString(3).split('').reverse().join('');
    const answer = parseInt(reversed, 3);
    return answer;
}