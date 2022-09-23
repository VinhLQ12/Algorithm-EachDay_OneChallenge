function solution(inputArray) {
    var i, j;
    var max = inputArray[0] * inputArray[1];
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > max) {
            max = inputArray[i] * inputArray[i+1];
        }
    }
    return max;
}
