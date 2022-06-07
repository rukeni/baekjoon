let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const surprise = (id) => `${id}??!`;

console.log(surprise(input));