var s1 = 'aabcc';
var s2 = 'adcaa';

function isInclude(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            return i;
        }
    }
    return -1;
}

function solution(s1, s2) {
    var arr1 = s1.split('');
    var arr2 = s2.split('');
    var check = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (isInclude(arr2, arr1[i]) != -1) {
            arr2[isInclude(arr2, arr1[i])] = null;
            check++;
        }
    }
    return check;
}

console.log(solution(s1, s2));
