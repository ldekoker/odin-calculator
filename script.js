const display = document.querySelector(".display output");
const OPERATORS = ['+', '-', '*', '/'];
let variable_a = 0;
let operator = '';
let variable_b = 0;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function clear_display() {
    variable_a = 0;
    operator = '';
    variable_b = 0;
    displayItems();
}

function displayItems() {
    if (operator === '') {
        display.textContent = `${variable_b}`;
    }
    else if (variable_b === 0) {
        display.textContent = `${variable_a} ${operator}`
    }
    else {
        display.textContent = `${variable_a} ${operator} ${variable_b}`
    }
}

function button_click(button) {
    if (button == 'C') {
        clear_display();
    }
    else if (button == '=') {
        equals_click()
    }
    else if (OPERATORS.includes(button)) {
        operator_click(button);
    }
    else {
        num_click(button);
    }
}

function num_click(num) {
    variable_b = (variable_b * 10) + parseInt(num);
    displayItems();
}
function operator_click(button) {
    // if (!(variable_a == 0))
    variable_a = variable_b;
    variable_b = 0;
    operator = button;
    displayItems();
}
function equals_click() {
    variable_b = operate(variable_a, operator, variable_b);
    variable_a = 0;
    operator = '';
    displayItems();
}

function main() { 
    const buttons = document.querySelectorAll("#calculator button");

    buttons.forEach(button => {
        button.addEventListener('click', () => button_click(button.textContent));
      });

    
    variable_a = 0;
    operator = '';
    variable_b = 0;
    displayItems();
}

main();