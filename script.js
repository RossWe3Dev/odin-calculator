function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

function operate(operator, num1, num2) {
    if (operator == '+') return add(num1, num2);
    if (operator == '-') return subtract(num1, num2);
    if (operator == '*') return multiply(num1, num2);
    if (operator == '/') return divide(num1, num2);
};

let firstNum;
let operator;
let secondNum;

const display = document.querySelector('.result');
let displayValue = '';

const operand = document.querySelectorAll('.operand');
for (let i = 0; i < operand.length; i++) {
    operand[i].addEventListener('click', function () {
        displayValue += operand[i].innerText;
        updateDisplayValue();
    })
}

function updateDisplayValue() {
    display.textContent = displayValue;
}

//! Buttons elements
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const addOp = document.querySelector('#add');
const subtractOp = document.querySelector('#subtract');
const multiplyOp = document.querySelector('#multiply');
const divideOp = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');