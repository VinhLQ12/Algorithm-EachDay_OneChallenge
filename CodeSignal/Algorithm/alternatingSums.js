var a = [50, 60, 60, 45, 70];

function solution(a) {
    var s1 = 0;
    var s2 = 0;
    var len = a.length;
    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            s1 += a[i];
        } else {
            s2 += a[i];
        }
    }
    return [s1, s2];
}

console.log(solution(a));