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
    button.addEventListener('click', () => appendOperand(button.textContent));
});

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => appendOperator(button.textContent))
});

operateBtn.addEventListener('click', evaluate);

pointBtn.addEventListener('click', appendPoint);

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteChar);

document.addEventListener('keypress', (e) => handleKeyPress(e));


//* EventListeners Callback Functions
function appendOperand(operand) {
    if (display.textContent === '0' || shouldResetDisplay) resetDisplay();
    display.textContent += operand;
};

function appendPoint() {
    if (shouldResetDisplay) resetDisplay();
    if (display.textContent === '') display.textContent = '0';
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
};

function appendOperator(operatorSign) {
    if (operator !== null) evaluate();
    firstNum = Number(display.textContent);
    operator = operatorSign;

    historyDisplay.textContent = `${firstNum}${operator}`;
    shouldResetDisplay = true;
};

function clearAll() {
    historyDisplay.textContent = 'Cleared History!';
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    operator = null;
}

function deleteChar() {
    display.textContent = display.textContent.toString().slice(0, -1)
}

// Other Functions 
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

//* Keyboard Support Functions
function handleKeyPress(e) {
    console.log(e.key);
    if (/\d/.test(e.key)) {
        appendOperand(e.key);
    } else if (['+', '-', '*', '/'].includes(e.key)) {
        appendOperator(transformSign(e.key));
    } else if (['Enter', '=', 'Return'].includes(e.key)) {
        e.preventDefault();
        evaluate();
    } else if (e.key === '.') {
        appendPoint();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        deleteChar();
    } else if (e.key === 'Escape') {
        e.preventDefault();
        clearAll();
    } else {
        e.preventDefault();
        return;
    }
};


function transformSign(e) {
    switch (e) {
        case '/':
            return '÷';
        case '*':
            return '×';
        default:
            return e;
    }
};