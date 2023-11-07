const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear-btn");

//global variables
let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

//display number
function sendNumberValue(number) {
  //replace display value if first value entered
  if (awaitingNextValue) {
    display.textContent = number;
    awaitingNextValue = false;
  } else {
    let displayValue = display.textContent;
    display.textContent = displayValue === "0" ? number : displayValue + number;
  }
}

//create object to assign operator
const calculate = {
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
  "=": (firstNumber, secondNumber) => secondNumber,
};

//calculation function
function useOperator(operator) {
  const currentValue = Number(display.textContent);
  // prevent multiple operators
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    display.textContent = calculation;
    firstValue = calculation;
  }
  //ready for next value, store operator
  awaitingNextValue = true;
  operatorValue = operator;
}

//add Event Listener for numbers, operators, decimal buttons
buttons.forEach((button) => {
  if (button.classList.length === 0) {
    button.addEventListener("click", function () {
      sendNumberValue(button.value);
    });
  } else if (button.classList.contains("operators")) {
    button.addEventListener("click", function () {
      useOperator(button.value);
    });
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", function () {
      addDecimal();
    });
  }
});

//Reset display
function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  display.textContent = "0";
}

clear.addEventListener("click", resetAll);

//Add Decimal
function addDecimal() {
  //if operator pressed dot add decimal
  if (awaitingNextValue) return;
  //iff no decimal
  if (!display.textContent.includes(".")) {
    display.textContent = `${display.textContent}.`;
  }
}
