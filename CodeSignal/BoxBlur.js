const image = [
    [36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45],
];

function cal(x, y, image) {
    var sum = 0;
    for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
            sum += image[x + dx][y + dy];
        }
    }
    return Number.parseInt(sum / 9);
}

function solution(image) {
    var answer = [];
    for (var x = 1; x < image.length - 1; x++) {
        // duyệt dọc theo col
        var line = [];
        for (var y = 1; y < image[0].length - 1; y++) {
            // duyệt ngang theo row
            line.push(cal(x, y, image));
        }
        answer.push(line);
    }
    return answer;
}

console.log(solution(image));
