var arr = [1,2,3]
function simpleArraySum(ar) {
    var sum = 0
    ar.forEach(el => sum = sum + el);
    return sum
}

console.log(simpleArraySum(arr));

