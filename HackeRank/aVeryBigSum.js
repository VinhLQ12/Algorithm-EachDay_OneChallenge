var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    var sum = 0;
    ar.forEach(el => sum =sum + el);
    return sum;
}
console.log(aVeryBigSum(arr));