var picture = ['abc', 'ded'];

// solution(picture) =  ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function start(len) {
    var s = '';
    for (let i = 0; i < len; i++) {
        s += '*';
    }
    return s;
}

function solution(picture) {
    for (let i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*';
    }
    picture.unshift(start(picture[0].length));
    picture.push(start(picture[0].length));
    return picture;
}

console.log(solution(picture));
