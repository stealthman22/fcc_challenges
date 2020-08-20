// Basic Javascript

// generate-random-whole-numbers-with-javascript
function randomWholeNum() {
	// Only change code below this line

	return Math.floor(Math.random() * 10);
}

// Use the parseInt Function
function convertToInteger(str) {
	return parseInt(str);
}

convertToInteger('56');

//  Use the parseInt Function with a Radix
function convertToInteger(str) {
	return parseInt(str, 2);
}

convertToInteger('10011');

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
	return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
	return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10);
