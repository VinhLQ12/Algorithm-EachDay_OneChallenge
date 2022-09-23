var s = 'abdhuierf';
var a = {};
function countChar(arr, s) {
    return arr.filter((element) => element === s).length;
}

function arrCount(s) {
    var check = [];
    var arrChar = s.split('');
    var arr = Array.from(new Set(s));
    for (let i of arr) {
        check.push(countChar(arrChar, i));
    }
    return check;
}
console.log(arrCount(s));
function solution(s) {
    var check = arrCount(s);
    var len = check.length;
    if (len == 1) return true;
    var count = 0;
    for (let i of check) {
        if (i % 2 == 1) {
            count++;
        }
    }

    return count <= 1;
}

console.log(solution(s));
