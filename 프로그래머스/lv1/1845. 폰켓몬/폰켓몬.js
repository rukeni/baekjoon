function solution(nums) {
    const numTable = {};
    
    for (let i = 0; i < nums.length; i++) {
        numTable[nums[i]] ? numTable[nums[i]]++ : numTable[nums[i]] = 1;
    }
    return Math.min((nums.length / 2), Object.keys(numTable).length)
}