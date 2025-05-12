const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button");

let num1 = null;
let operation = null;
let shouldResetDisplay = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const input = button.textContent;

        if (input === "AC") {
            display.textContent = 0;
            num1 = null;
            operation = null;
            return;
        } 

        if (["+","-","*","/"].includes(input)) {
            num1 = parseFloat(display.textContent);
            operation = input;
            shouldResetDisplay = true;
            return;
        }

        if (input === "=" && num1 && operation) {
        const num2 = parseFloat(display.textContent);
        let result;
        switch (operation) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num1 / num2; break;
        }
        display.textContent = result;
        num1 = null;
        operation = null;
        return;
        }
        

        // Handle number input
        if (!isNaN(parseInt(input))) {
            if (display.textContent === "0" || shouldResetDisplay) {
                display.textContent = input;
                shouldResetDisplay = false;
            } else {
                display.textContent += input;
            }
        }
        
        if (input === "%") {
            display.textContent = parseFloat(display.textContent) * 0.01;
        }

        
        if (input === "±") {
            display.textContent = parseFloat(display.textContent) * -1;
        }
        
        if (input === ".") {
            if ((Number.isInteger(parseFloat(display.textContent)))) {
                display.textContent += ".";
            }
        }

    })
})