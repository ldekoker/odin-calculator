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
    variable_a = null;
    operator = null;
    variable_b = null;
    displayItems();
}

function displayItems() {
    if (operator === null) {
        let var_b;
        (variable_b === null)? var_b = 0 : var_b = variable_b;
        display.textContent = `${var_b}`;
    }
    else if (variable_b === null) {
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
    if (variable_b === null) {
        variable_b = 0;
    }
    variable_b = (variable_b * 10) + parseInt(num);
    displayItems();
}
function operator_click(button) {
    if (variable_a && variable_b) {
        resolve_equation();
    }
    if (variable_b === null) {
        variable_b = 0;
    }
    variable_a = variable_b;
    variable_b = null;
    operator = button;
    displayItems();
}
function equals_click() {
    if (!(check_null())){
        resolve_equation();
        displayItems();
    }
}

function resolve_equation() {
    variable_b = operate(variable_a, operator, variable_b);
    variable_a = null;
    operator = null;
    displayItems(); 
}

function display_error() {
    clear_display();
    display.textContent = 'ERROR';
}

function check_null() {
    if (variable_a === null && operator === null && variable_b === null) {
        display_error();
        return true;
    }
}

function main() { 
    const buttons = document.querySelectorAll("#calculator button");

    buttons.forEach(button => {
        button.addEventListener('click', () => button_click(button.textContent));
      });

    
    variable_a = null;
    operator = null;
    variable_b = null;
    displayItems();
}

main();