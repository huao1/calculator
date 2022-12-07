
let DISPLAY_VALUE = {
    firstValue: 0,
    operator: null,
    secondValue: "", 
    nextOperator: "",
};


function activateButtons() {
    const numButtons = document.querySelectorAll(".numbers");
    numButtons.forEach(button => button.addEventListener("click", displayButton));

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => operator.addEventListener("click", clickOperator));

    const equal = document.querySelector(".equal");
    equal.addEventListener("click", operate);

    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", clear);

    const deleteBtn = document.querySelector("#delete");
    deleteBtn.addEventListener("click", del);
}

function displayButton(e) {
    const display = document.querySelector(".top-display");
    console.log(e.target.textContent);
    display.textContent += e.target.textContent;

    if (DISPLAY_VALUE.operator) {
        let displayArray = display.textContent.split(" ");
        DISPLAY_VALUE.secondValue = Number(displayArray[2]);
    }
    else {
        DISPLAY_VALUE.firstValue = Number(display.textContent);
    }
}


function clickOperator(e) {
    const display = document.querySelector(".top-display");

    if (DISPLAY_VALUE.operator) {
        DISPLAY_VALUE.nextOperator = e.target.textContent;
        operate();
    }

    else {
        display.textContent += ` ${e.target.textContent} `;
        DISPLAY_VALUE.operator = e.target.textContent;
        console.log(DISPLAY_VALUE.firstValue);
        console.log(DISPLAY_VALUE.operator);
    }

    console.log(DISPLAY_VALUE);

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
    let result = 0;

    switch(DISPLAY_VALUE.operator) {
        case "-":
            result = subtract(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
        case "+":
            result = add(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break
        case "÷":
            result = divide(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
        case "x":
            result = multiply(DISPLAY_VALUE.firstValue, DISPLAY_VALUE.secondValue);
            break;
    }

    const topDisplay = document.querySelector(".top-display");

    if (DISPLAY_VALUE.nextOperator) {
        DISPLAY_VALUE.firstValue = result;
        DISPLAY_VALUE.operator = DISPLAY_VALUE.nextOperator;
        DISPLAY_VALUE.secondValue = "";
        DISPLAY_VALUE.nextOperator = "";

        topDisplay.textContent = `${DISPLAY_VALUE.firstValue} ${DISPLAY_VALUE.operator} `;
    }
    else {
        topDisplay.textContent += " =";
    }

    console.log(DISPLAY_VALUE);
    const display = document.querySelector(".bottom-display");
    display.textContent = result;
}

function clear() {
    const topDisplay = document.querySelector(".top-display");
    const bottomDisplay = document.querySelector(".bottom-display");

    topDisplay.textContent = "";
    bottomDisplay.textContent = "";

    DISPLAY_VALUE.firstValue = 0;
    DISPLAY_VALUE.operator = "";
    DISPLAY_VALUE.secondValue = "";
}

function del() {

    const topDisplay = document.querySelector(".top-display");
    topDisplay.textContent = topDisplay.textContent.slice(0, -1); 

    const displayArray = topDisplay.textContent.split(" ");

    DISPLAY_VALUE.firstValue = Number(displayArray[0]);
    DISPLAY_VALUE.operator = displayArray[1];
    DISPLAY_VALUE.secondValue = Number(displayArray[2]);

    console.log(displayArray);
    console.log(DISPLAY_VALUE);



}

activateButtons();