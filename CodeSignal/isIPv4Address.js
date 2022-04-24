var inputString = '01.16.254.1';

const isValid = (s) => {
    if (s.length > 1 && s[0] == '0') {
        return false;
    }
    return true;
};

function solution(inputString) {
    var s = inputString.split('.');
    return (
        s.length === 4 &&
        s.every((x) => x != '' && isValid(x) && x >= 0 && x <= 255)
    );
}
