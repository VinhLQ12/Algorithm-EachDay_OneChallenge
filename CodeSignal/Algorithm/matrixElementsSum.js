matrix = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
];

function solution(matrix) {
    var sum = 0;
    var check = [];
    for (let row of matrix) {
        for (let i in row) {
            if (row[i] === 0) {
                check.push(i);
            }
            if (!check.includes(i)) {
                sum = sum + row[i];
            }
        }
    }
    return sum;
}
