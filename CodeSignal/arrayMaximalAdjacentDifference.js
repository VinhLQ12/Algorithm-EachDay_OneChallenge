var inputArray = [2, 4, 1, 0];

function solution(inputArray) {
    var res = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        var sub = Math.abs(inputArray[i + 1] - inputArray[i]);
        if (sub > res) {
            res = sub;
        }
    }
    return res;
}
