let firstNum = 3;
let secondNum = 7;
let operators = ["+", "-", "*", "/"];

// Basic Math Operators
const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

// Operate Function
const operate = (operators, num1, num2) => {
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            add(num1, num2);
        } else if (operators[i] === "-") {
            subtract(num1, num2);
        } else if (operators[i] === "*") {
            multiply(num1, num2);
        } else if (operators[i] === "/") {
            divide(num1, num2);
        }
    }
};
