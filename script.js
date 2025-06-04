// Step 1 - Calculator state - initial variables

let currentDisplay = "0";
let firstNumber;
let secondNumber;
let arithmeticOperation;
let freshNumber = true;

// Step 2 - linking the current display to the html

let updateDisplay = document.querySelector(".display");
updateDisplay.textContent = currentDisplay;

// logic so that if fresh number is true then display goes default
if (freshNumber === true) {
    currentDisplay = "0";
};


// Step 3 - Event listeners on the buttons

/*
working button that updates on clicking
button that accepts more numbers (needed to convert to string for concatenation)

*/

// button handling - will look for iteration function later for
// single function handling

let zeroButton =  document.querySelector("#zero");
let oneButton =  document.querySelector("#one");
let twoButton =  document.querySelector("#two");
let threeButton =  document.querySelector("#three");
let fourButton =  document.querySelector("#four");
let fiveButton =  document.querySelector("#five");
let sixButton =  document.querySelector("#six");
let sevenButton =  document.querySelector("#seven");
let eightButton =  document.querySelector("#eight");
let nineButton =  document.querySelector("#nine");

oneButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "1";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "1";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

twoButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "2";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "2";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

threeButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "3";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "3";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

fourButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "4";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "4";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

fiveButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "5";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "5";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

sixButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "6";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "6";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

sevenButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "7";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "7";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

eightButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "8";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "8";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

nineButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "9";
        freshNumber = false;
        updateDisplay.textContent = currentDisplay;    
    }   else {
        currentDisplay += "9";
        updateDisplay.textContent = currentDisplay;
    }    
}
);

zeroButton.addEventListener("click", function() {
    if (freshNumber === true) {
        currentDisplay = "0";
        updateDisplay.textContent = currentDisplay;    
    }   else {
        if (currentDisplay !== "0") {
            currentDisplay += "0";
        updateDisplay.textContent = currentDisplay;
        }
    }    
}
);

// handling the arithmetic operator

let plus = document.querySelector("#addition");
let minus = document.querySelector("#subtraction");
let divide = document.querySelector("#division");
let multiply = document.querySelector("#multiplication");
let equals =  document.querySelector("#equals");
let clear = document.querySelector("#clear");

plus.addEventListener("click", function() {
    firstNumber = currentDisplay;
    arithmeticOperation = "sum";
    freshNumber = true;
});

minus.addEventListener("click", function() {
    firstNumber = currentDisplay;
    arithmeticOperation = "minus";
    freshNumber = true;
});

divide.addEventListener("click", function() {
    firstNumber = currentDisplay;
    arithmeticOperation = "divide";
    freshNumber = true;
});

multiply.addEventListener("click", function() {
    firstNumber = currentDisplay;
    arithmeticOperation = "multiply"
    freshNumber = true;
});

equals.addEventListener("click", function() {
    secondNumber = currentDisplay;
    calculate(firstNumber, secondNumber, arithmeticOperation);
    freshNumber = true;
    
});

clear.addEventListener("click", function() {
    updateDisplay.textContent = "0"
    freshNumber = true
});


function calculate(firstNumber, secondNumber, arithmeticOperation) {
    let result;
    
    
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    
    if (arithmeticOperation === "sum") {
        result = firstNumber + secondNumber;
    }   else if (arithmeticOperation === "minus") {
        result = firstNumber - secondNumber;
    }   else if (arithmeticOperation === "divide") {
        result = firstNumber / secondNumber;
    }   else if (arithmeticOperation === "multiply") {
        result = firstNumber * secondNumber;
    }   
    
    if (Number.isInteger(result) !== true) {
        result =  result.toFixed(2);
    };

    currentDisplay = result.toString();
    updateDisplay.textContent = currentDisplay;
    firstNumber = result;
    freshNumber = true;
};

