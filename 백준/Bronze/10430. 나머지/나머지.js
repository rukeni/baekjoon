let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(el => Number(el));

const [a, b, c] = input;

const reminder1 = (a, b, c) => ( a + b ) % c;

const reminder2 = (a, b, c) => (( a % c ) + ( b % c )) % c;

const reminder3 = (a, b, c) => ( a * b ) % c;

const reminder4 = (a, b, c) => (( a % c ) * ( b % c)) % c;

console.log(reminder1(a, b, c) + '\n' + reminder2(a, b, c) + '\n' + reminder3(a, b, c) + '\n' + reminder4(a, b, c));