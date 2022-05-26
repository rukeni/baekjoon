function solution(numbers, commands) {
    // i - 1 부터 j까지의 배열을 구한다.
    // k - 1 번째 값을 리턴한다.
    function pickNumber(command) {
        const [i, j, k] = command;
      const converted = numbers.slice(i - 1, j).sort((a, b) => a - b);
      return converted[k - 1]
    }
    
    return commands.map(pickNumber);
}

