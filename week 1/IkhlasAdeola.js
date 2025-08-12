const boxes = document.querySelectorAll("button");
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementsByClassName("equal");


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.id !== "equal" && box.id !== "clear") {
      display.value += box.textContent;
    }
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
});

equalButton.addEventListener("click", () => {
   
});
