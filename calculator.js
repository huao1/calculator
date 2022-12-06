
let DISPLAY_VALUE = {
    firstValue: 0,
    operator: "",
    secondValue: "", 
};


function activateButtons() {
    const numButtons = document.querySelectorAll(".numbers");
    numButtons.forEach(button => button.addEventListener("click", displayButton));
}

function displayButton(e) {
    const display = document.querySelector(".display");
    console.log(e.target.textContent);
    display.textContent += e.target.textContent;
}

function displayOperators() {
    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => operator.addEventListener("click", clickOperator));
}

function clickOperator(e) {
    const display = document.querySelector(".display");
    DISPLAY_VALUE.firstValue = Number(display.textContent);
    DISPLAY_VALUE.operator = e.target.textContent;
    console.log(DISPLAY_VALUE.firstValue);
    console.log(DISPLAY_VALUE.operator);
}

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

function operate() {
    switch(DISPLAY_VALUE.operator) {
        case "-":
            subtract(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
        case "+":
            add(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break
        case "÷":
            divide(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
        case "*":
            multiply(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
    }
}

displayOperators();
activateButtons();
console.log(`divide 9 / 3: ${divide(9, 3)}`);
console.log(`mulitply 9 * 3: ${multiply(9, 3)}`);
console.log(`add 9 + 3: ${add(9, 3)}`);
console.log(`subtract 9 - 3: ${subtract(9, 3)}`);