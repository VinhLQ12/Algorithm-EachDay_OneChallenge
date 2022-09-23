function solution(year) {
    var result = Math.floor(year / 100);
    if(result * 100 < year){
        result++;
    }
    return result;
}
