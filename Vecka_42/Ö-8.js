const aNumber = Number(window.prompt("Type a number", ""));
const bNumber = Number(window.prompt("Type a number", ""));
const operator = (window.prompt("What operator would you like to use"));

let formA = Math.floor(aNumber)
let formB = Math.floor(bNumber)

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: Division by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator!";
            break;
    }

    return result;
}
console.log(calculate(formA,formB,operator));
