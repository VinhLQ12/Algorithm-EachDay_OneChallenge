var inputArray = [1, 1, 1];
function solution(a) {
    var res = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i + 1] <= a[i]) {
            res += a[i] - a[i + 1] + 1;
            a[i + 1] = a[i] + 1;
        }
    }
    return res;
}

console.log(solution(inputArray));
