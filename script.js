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
    if (operator == '×') return multiply(num1, num2);
    if (operator == '÷') {
        if (num2 === 0) return 'Math ERROR'
        else return divide(num1, num2)
    };
};

function roundResult(result) {
    return Math.round((result + Number.EPSILON) * 1000) / 1000;
}

let firstNum;
let operator = null;
let secondNum;

const display = document.querySelector('.result');

const operandBtn = document.querySelectorAll('.operand');
operandBtn.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent
    })
});

const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((button) => {
    button.addEventListener('click', function () {
        // firstNum = display.textContent;
        operator = button.textContent;
        display.textContent += button.textContent;
        history.textContent = display.textContent;
    })
});

const history = document.querySelector('.history');
const operateBtn = document.querySelector('.operate');
operateBtn.addEventListener('click', () => {
    if (operator == null) return;
    history.textContent = display.textContent;
    let arr = display.textContent.split(/[\+|\-|\×|\÷]/);
    firstNum = +arr[0];
    secondNum = +arr[1];
    display.textContent = roundResult(operate(operator, firstNum, secondNum));
    console.log(firstNum, secondNum);
    operator = null;
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    history.textContent = 'Cleared History!';
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    operator = null;
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