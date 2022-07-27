function solution(skill, skillTrees) {
    let answer = 0;
    let skillName;
    // skillTrees에서 skill에 있는 스킬만 남기기
    
    for(let i = 0; i < skillTrees.length; i++) {
        skillName = skillTrees[i].split('').filter(s => skill.indexOf(s) !== -1).join('');
        if(skill.substring(0, skillName.length) === skillName) {
            answer++;
        }
    }
    
    return answer;
}