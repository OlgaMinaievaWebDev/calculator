let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

let reset = document.querySelector(".reset");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

let currentValue = "";
let previousValue = "";

//add event listener to the numbers
numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

//add event listener to the operators
operators.forEach((op) =>
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

//add event listener to clear button
clear.addEventListener("click", function (e) {
  clearDisplay();
});

//add event listener to equal
equal.addEventListener("click", function (e) {
  if (currentValue != "" && previousValue != "") {
    calculate();
   
    previousScreen.textContent = "";

    if (previousValue.length <= 5) {
      currentScreen.textContent = previousValue;
    } else {
      currentScreen.textContent = previousValue.slice(0, 5) + "...";
    }
  }
});

//add event listener to decimal
decimal.addEventListener("click", function () {
  addDecimal();
});

//add event listener to reset
reset.addEventListener("click", function (e) {
  deleteNumber();
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else if (operator === "/") {
    previousValue /= currentValue;
  } else {
    previousValue = (previousValue / currentValue) * 100;
  }
  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();

}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

function deleteNumber() {
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
}

function clearDisplay() {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
}
