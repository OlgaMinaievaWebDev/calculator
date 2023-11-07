const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear-btn");

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
      sendNumberValue(button.value);
    });
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", function () {
      sendNumberValue();
    });
  }
});

//Reset display
function resetAll() {
  display.textContent = "0";
}

clear.addEventListener("click", resetAll);
