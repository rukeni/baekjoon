function solution(genres, plays) {
    const totalTable = {};
    const genreTable = {};
    
    for (let i = 0; i < genres.length; i++) {
        // 장르별로 재생횟수 총합 저장하기
        totalTable[genres[i]] ? totalTable[genres[i]] += plays[i] : totalTable[genres[i]] = plays[i];
        
        // 장르별로 배열 나누기
        genreTable[genres[i]] ? genreTable[genres[i]].push([plays[i], i]) : genreTable[genres[i]] = [[plays[i], i]];
    }
    
    const genreKeys = Object.keys(genreTable);
    
    for (genre of genreKeys) {
        genreTable[genre].sort((a, b) => b[0] - a[0]);
        genreTable[genre] = genreTable[genre].slice(0,2);
    }
    
    genreKeys.sort((a, b) => totalTable[b] - totalTable[a]);
    
    let answer = [];
    
    for (genre of genreKeys) {
        answer = [...answer, ...genreTable[genre].map(gen => gen[1])];
    }
    
    return answer;
}