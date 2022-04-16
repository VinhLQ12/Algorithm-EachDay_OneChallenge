var n = 12303;

function solution(n) {
    var sum = 0;
    var char = (n + '').split('');
    for (let i = 0; i < char.length; i++) {
        if (i < char.length / 2) {
            sum = sum + Number.parseInt(char[i]);
        } else {
            sum = sum - Number.parseInt(char[i]);
        }
    }
    return sum == 0 && char.length % 2 == 0;
}
console.log(solution(n));
