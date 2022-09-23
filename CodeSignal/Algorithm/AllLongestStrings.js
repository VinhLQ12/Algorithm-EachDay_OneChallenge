var inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];
function maxLength(inputArray) {
    var max = 0;
    for (let s in inputArray) {
        if (inputArray[s].length > max) {
            max = inputArray[s].length;
        }
    }
    return max;
}

function solution(inputArray) {
    var result = [];
    var len = maxLength(inputArray);
    for (let s in inputArray) {
        if ((inputArray[s].length == len)) {
            result.push(inputArray[s]);
        }
    }
    return result;
}

console.log(solution(inputArray));