var s1 = 'aabcc';
var s2 = 'adcaa';

function solution(s1, s2) {
    var sum = 0;
    for(let a in s1) {
        for(let b in s2){
            if(s1[a] === s2[b]) {
                console.log(s1[a], s2[b]);
                sum++;
                break;
            }
        }
    }
    return sum;
}

console.log(solution(s1, s2));