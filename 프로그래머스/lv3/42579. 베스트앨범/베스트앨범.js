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
    
    // 장르별로 플레이가 많이 된 순서대로 정렬하고 배열 내용물을 2개만 남긴다.
    for (genre of genreKeys) {
        genreTable[genre].sort((a, b) => b[0] - a[0]);
        genreTable[genre] = genreTable[genre].slice(0,2);
    }
    
    // 플레이 총합이 더 많은 장르순으로 정렬한다.
    genreKeys.sort((a, b) => totalTable[b] - totalTable[a]);
    
    let answer = [];
    
    // 가지고 있던 배열을 모두 더하면서 정답처럼 index만 남겨둔다.
    for (genre of genreKeys) {
        answer = [...answer, ...genreTable[genre].map(gen => gen[1])];
    }
    
    return answer;
}