var inputString = 'foo(bar(baz))blim';

function solution(s) {
    while (true) {
        var lastIndex = s.indexOf(')');
        if (lastIndex == -1) {
            break;
        }
        var firstIndex = s.substring(0, lastIndex).lastIndexOf('(');
        var start = s.substring(0, firstIndex);
        var middle = s
            .substring(firstIndex + 1, lastIndex)
            .split('')
            .reverse()
            .join('');
        var end = s.substring(lastIndex + 1);
        s = start + middle + end;
    }
    return s;
}

console.log(solution(inputString));
