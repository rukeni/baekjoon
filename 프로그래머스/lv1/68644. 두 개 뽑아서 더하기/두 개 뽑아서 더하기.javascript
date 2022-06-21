function solution(numbers) {
    const calculateAllByNumber = (number, index) => {
        return numbers.map((el,idx) => {
            if(idx !== index) {
                return el + number;
            }
            return -1;
        });
    }
    
    const transformToUnique = (numbers) => {
        return [...new Set(numbers)];
    }
    
    const calculatedNumbers = numbers.map((number, index) => calculateAllByNumber(number, index));
    
    const flated = calculatedNumbers.flat();
    
    const sorted = flated.sort((a, b) => a - b);
    
    const removeGarbageValues = sorted.filter(el => el !== -1);
    
    return transformToUnique(removeGarbageValues);
}