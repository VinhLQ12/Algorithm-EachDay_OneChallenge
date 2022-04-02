function solution(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    // return n + 3 * (n - 1) + 4 * (n - 2) + 4 * (n - 3);
    return 2 * n - 1 + 2 * solution(2 * n - 2);
}

console.log(solution(3));
