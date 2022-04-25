const inputArray = [2, 3];
console.log(inputArray.sort((a, b) => a - b));
function solution(inputArray) {
	var jump = 2;
	while (inputArray.some((obstacle) => obstacle % jump === 0)) {
		jump++;
	}
	return jump;
}

console.log(solution(inputArray));