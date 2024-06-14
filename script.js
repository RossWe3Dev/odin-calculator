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

pointBtn.addEventListener('click', () => appendPoint(pointBtn.textContent));

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteChar);

document.addEventListener('keypress', handleKeyPress);


//* EventListeners Callback Functions
function appendOperand(operand) {
    if (display.textContent === '0' || shouldResetDisplay) resetDisplay();
    display.textContent += operand;
};

function appendPoint(point) {
    if (shouldResetDisplay) resetDisplay();
    if (display.textContent === '') display.textContent = '0';
    if (display.textContent.includes('.')) return;
    display.textContent += point;
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

//* Keyboard Support
function handleKeyPress(event) {
    const validNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const validKeys = ['+', '-', '*', '/', '.', '=', 'Enter', 'Return'];
    if (validNumbers.includes(event.key)) {
        // Process the valid number and display on calculator screen
    } else if (validKeys.includes(event.key)) {
        // Process the valid keypress and display on calculator screen
    } else if (event.key === 'Backspace') {
        event.preventDefault(); // Prevent default behavior (won't be included in validKeys)
        // Implement logic to delete the displayed character on the calculator screen
    } else {
        // Handle invalid keypress (ignore or display an error message)
        return;
    }
};