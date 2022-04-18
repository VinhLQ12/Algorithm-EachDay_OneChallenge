var a = [4, 6, 3],
    b = [3, 4, 6];

function solution(a, b) {
    const a1 = a.filter((element, index) => element !== b[index]);
    const b1 = b.filter((element, index) => element !== a[index]);
    return (
        a1.length == 0 ||
        (a1.length == 2 && a1.join('') === b1.reverse().join(''))
    ); // a1.length == 2 because swapping at most one pair of elements
}

console.log(solution(a, b));
