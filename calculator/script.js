let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";
let lastChar = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        // CLEAR
        if (value === "C") {
            currentInput = "";
            display.innerText = "0";
            lastChar = "";
            return;
        }

        // EQUALS
        if (value === "=") {
            try {
                let result = eval(currentInput);
                display.innerText = result;
                currentInput = result.toString();
            } catch {
                display.innerText = "Error";
                currentInput = "";
            }
            return;
        }

        // PREVENT MULTIPLE OPERATORS
        if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput === "" || ["+", "-", "*", "/"].includes(lastChar)) {
                return;
            }
        }

        // ADD INPUT
        currentInput += value;
        display.innerText = currentInput;
        lastChar = value;
    });
});