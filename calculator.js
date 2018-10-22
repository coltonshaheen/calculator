let operandArray = [];

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
	if (operator === "add") {
		return add(num1, num2);
	} else if (operator === "subtract") {
		return subtract(num1, num2);
	} else if (operator === "multiply") {
		return multiply(num1, num2);
	} else if (operator === "divide") {
		return divide(num1, num2);
	}
}

function makeOperandArray(number) {
	operandArray.push(number);
	console.log(operandArray);
}

document.getElementById('1').addEventListener('click', makeOperandArray(1));
const button2 = document.getElementById('2').addEventListener('click', makeOperandArray(2));
const button3 = document.getElementById('3').addEventListener('click', makeOperandArray(3));
const button4 = document.getElementById('4').addEventListener('click', makeOperandArray(4));
const button5 = document.getElementById('5').addEventListener('click', makeOperandArray(5));
const button6 = document.getElementById('6').addEventListener('click', makeOperandArray(6));
const button7 = document.getElementById('7').addEventListener('click', makeOperandArray(7));
const button8 = document.getElementById('8').addEventListener('click', makeOperandArray(8));
const button9 = document.getElementById('9').addEventListener('click', makeOperandArray(9));
const button0 = document.getElementById('0').addEventListener('click', makeOperandArray(0));
const buttonPeriod = document.getElementById('period').addEventListener('click', makeOperandArray('.'));

const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonTimes = document.getElementById('times');
const buttonDivided = document.getElementById('divided');

const buttonEquals = document.getElementById('');const button = document.getElementById('equals');
const buttonClear = document.getElementById('clear');