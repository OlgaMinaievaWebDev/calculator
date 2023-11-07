const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear-btn");

//global variables
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

//display number
function sendNumberValue(number) {
  let displayValue = display.textContent;
  display.textContent = displayValue === "0" ? number : displayValue + number;
}

//add Event Listener for numbers, operators, decimal buttons
buttons.forEach((button) => {
  if (button.classList.length === 0) {
    button.addEventListener("click", function () {
      sendNumberValue(button.value);
    });
  } else if (button.classList.contains("operators")) {
    button.addEventListener("click", function () {
      useOperator();
    });
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", function () {
      addDecimal();
    });
  }
});

//Reset display
function resetAll() {
  display.textContent = "0";
}

clear.addEventListener("click", resetAll);

//Add Decimal
function addDecimal() {
  if (!display.textContent.includes(".")) {
    display.textContent = `${display.textContent}.`;
  }
}

//operators function

function useOperator() {
  
}