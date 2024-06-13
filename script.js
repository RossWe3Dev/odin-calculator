let firstNum;
let operator = null;
let secondNum;
let shouldResetDisplay = false;

const display = document.querySelector('.result');
const historyDisplay = document.querySelector('.history');
const operandBtn = document.querySelectorAll('.operand');
const pointBtn = document.querySelector('.point');
const operatorBtn = document.querySelectorAll('.operator');
const operateBtn = document.querySelector('.operate');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

//* Event Handlers
operandBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' || shouldResetDisplay) resetDisplay();

        display.textContent += button.textContent
    })
});

pointBtn.addEventListener('click', () => {
    if (shouldResetDisplay) resetDisplay();
    if (display.textContent === '') display.textContent = '0';
    if (display.textContent.includes('.')) return;
    display.textContent += pointBtn.textContent;
})

operatorBtn.forEach((button) => {
    button.addEventListener('click', function () {
        if (operator !== null) evaluate();

        firstNum = Number(display.textContent);
        operator = button.textContent;

        historyDisplay.textContent = `${firstNum}${operator}`;
        shouldResetDisplay = true;
    })
});

operateBtn.addEventListener('click', evaluate);

clearBtn.addEventListener('click', () => {
    historyDisplay.textContent = 'Cleared History!';
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    operator = null;
});

deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.toString().slice(0, -1)
});


//* Functions
function resetDisplay() {
    display.textContent = '';
    shouldResetDisplay = false
}

function evaluate() {
    if (operator == null || shouldResetDisplay) return;

    secondNum = Number(display.textContent);
    if (secondNum === 0 && operator === '÷') {
        shouldResetDisplay = true;
        return display.textContent = 'Math ERROR'
    };

    display.textContent = roundResult(operate(operator, firstNum, secondNum));
    historyDisplay.textContent = `${firstNum}${operator}${secondNum}=`;
    operator = null;
}

//* Math Logic
function roundResult(result) {
    return Math.round((result + Number.EPSILON) * 1000) / 1000;
}

function operate(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === '×') return multiply(num1, num2);
    if (operator === '÷') return divide(num1, num2);
};

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