var a = [5, 6, 7];
var b = [3, 6, 10];

function compareTriplets(a, b) {
    var aScore = 0;
    var bScore = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aScore++;
        } else if (a[i] < b[i]) {
            bScore++;
        }
    }
    return [aScore, bScore];
}
