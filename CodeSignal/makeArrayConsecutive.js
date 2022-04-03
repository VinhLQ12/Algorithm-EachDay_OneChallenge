
var statues = [4, 2, 7, 18];
function solution(statues) {
    statues.sort((a, b) => a - b);
    var result = 0;
    for(let i = 1; i < statues.length; i++) {
        if(statues[i] - statues[i - 1] > 0){
            result += statues[i] - statues[i - 1] - 1;
        }
    }
    return result;
}
solution(statues)
console.log(statues);
