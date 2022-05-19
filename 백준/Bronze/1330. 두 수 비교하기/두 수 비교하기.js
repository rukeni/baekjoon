var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(el => Number(el));

function solution(input) {
    if(input[0] - input[1] < 0) return '<';
    if(input[0] - input[1] > 0) return '>';
    return '==';
}

console.log(solution(input));