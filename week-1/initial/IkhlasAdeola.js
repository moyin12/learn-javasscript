const boxes = document.querySelectorAll("button");
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("calculate");

let firstnum = "";
let secondnum = "";
let operation = "";
let isSecondNum = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.id !== "equal" && box.id !== "clear") {
      if (["+", "-", "*", "/"].includes(box.textContent)) {
        operation = box.textContent;
        isSecondNum = true; 
        display.value += " " + operation + " ";
      } else {
        if (!isSecondNum) {
          firstnum += box.textContent;
        } else {
          secondnum += box.textContent;
        }
        display.value += box.textContent;
      }
    }
  });
});


clearButton.addEventListener("click", () => {
  display.value = "";
  firstnum = "";
  secondnum = "";
  operation = "";
  isSecondNum = false;
});


equalButton.addEventListener("click", () => {
  if (firstnum && secondnum && operation) {
    let result;
    switch (operation) {
      case "+": result = parseFloat(firstnum) + parseFloat(secondnum); break;
      case "-": result = parseFloat(firstnum) - parseFloat(secondnum); break;
      case "*": result = parseFloat(firstnum) * parseFloat(secondnum); break;
      case "/": result = parseFloat(firstnum) / parseFloat(secondnum); break;
      default: result = "Error";
    }
    display.value = result;
    firstnum = result.toString();
    secondnum = "";
    operation = "";
    isSecondNum = false;
  }
});

