function solution(sizes) {
    const orderedSizes = sizes.map(size => size.sort((a, b) => b - a));
    
    const widths = orderedSizes.flatMap(el => el[0]);
    const heights = orderedSizes.flatMap(el => el[1]);
    
    return Math.max(...widths) * Math.max(...heights);
}