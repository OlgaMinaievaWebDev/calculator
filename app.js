console.log("hi!");
const userInput = document.querySelector(".userInput");

const numbers = document.querySelectorAll(".box");

let calculation = [];
let accumulativeNumbers;

function calculate(number) {
  const value = number.textContent;
  calculation.push(value);
  accumulativeNumbers = calculation.join("");
  userInput.textContent = accumulativeNumbers;
  console.log(calculation);
}

numbers.forEach((number) =>
  number.addEventListener("click", () => calculate(number))
);
