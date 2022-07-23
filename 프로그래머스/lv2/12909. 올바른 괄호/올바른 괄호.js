function solution(s){
    const stack = [];
    
    if(s[0] === ')') return false;
    if(s[s.length - 1] === '(') return false;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(1);
        } else {
            stack.pop();
        }
    }
    
    return stack.length === 0;
}