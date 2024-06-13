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
    let result;
    if (operator == '+') {
        result = add(num1, num2)
    } else if (operator == '-') {
        result = subtract(num1, num2)
    } else if (operator == '×') {
        result = multiply(num1, num2)
    } else if (operator == '÷') {
        if (num2 === 0) return 'Math ERROR';
        result = divide(num1, num2)
    };
    let resultRounded = Math.round((result + Number.EPSILON) * 100) / 100;
    return resultRounded;
};

let firstNum;
let operator = null;
let secondNum;

const display = document.querySelector('.result');
let displayValue = '';

const operandBtn = document.querySelectorAll('.operand');
operandBtn.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue += button.textContent
        updateDisplayValue();
    })
});

function updateDisplayValue() {
    display.textContent = displayValue;
};

const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((button) => {
    button.addEventListener('click', function () {
        // firstNum = display.textContent;
        operator = button.textContent;
        displayValue += button.textContent;
        history.textContent = displayValue;
        updateDisplayValue();
    })
});

const history = document.querySelector('.history');
const operateBtn = document.querySelector('.operate');
operateBtn.addEventListener('click', () => {
    if (operator == null) return;
    history.textContent = displayValue;
    let arr = display.textContent.split(/[\+|\-|\×|\÷]/);
    firstNum = +arr[0];
    secondNum = +arr[1];
    displayValue = operate(operator, firstNum, secondNum);
    updateDisplayValue();
    console.log(displayValue);
    console.log(firstNum, secondNum);
    operator = null;
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    history.textContent = 'Cleared History!';
    displayValue = '0';
    firstNum = '';
    secondNum = '';
    operator = null;
    updateDisplayValue();
});

const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
});

/*
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
*/