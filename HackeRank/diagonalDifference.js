var arr = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1],
];

function diagonalDifference(arr) {
    var sum = 0;
    var len = arr[0].length;
    for(let i = 0; i < len; i++) {
        sum += arr[i][i] - arr[i][len - i - 1];
    }
    return sum > 0 ? sum : sum * -1;
}

console.log(diagonalDifference(arr));
