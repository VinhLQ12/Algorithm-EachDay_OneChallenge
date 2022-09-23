a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]
function solution(a) {
    var i = 0;
    var newArr = a
        .filter((element) => {
            return element != -1;
        })
        .sort((a, b) => a - b);
    a.forEach((element, index) => {
        if (element != -1) {
            a[index] = newArr[i];
            i++;
        }
    });
    return a;
}

console.log(solution(a));
