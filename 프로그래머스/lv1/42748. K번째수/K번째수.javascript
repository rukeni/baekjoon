function solution(numbers, commands) {
    const answer = [];
    
    // i - 1 부터 j까지의 배열을 구한다.
    // k - 1 번째 값을 리턴한다.
    function pickNumber(command) {
      const converted = numbers.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
      return converted[command[2] - 1]
    }
    
    return commands.map(command => pickNumber(command));
}

