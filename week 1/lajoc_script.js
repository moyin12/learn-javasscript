// 1. Select the display and all calculator buttons from the DOM
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-buttons button");
const clearButton = document.getElementById("clear");

// 2. Add event listeners to the buttons to handle clicks
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.textContent;

		if (value === "=") {
			try {
				// 4. Evaluate the expression
				const result = eval(display.value);
				display.value = result;
			} catch {
				display.value = "Error";
			}
		} else if (value === "C") {
			// 5. Clear the display
			display.value = "";
		} else {
			// 3. Append the value to the display
			display.value += value;
		}
	});
});

// 7. Adding keyboard support
document.addEventListener("keydown", (event) => {
	const allowedKeys = "0123456789+-*/.";
	if (allowedKeys.includes(event.key)) {
		display.value += event.key;
	} else if (event.key === "Enter") {
		try {
			const result = eval(display.value);
			display.value = result;
		} catch {
			display.value = "Error";
		}
	} else if (event.key === "Backspace") {
		display.value = display.value.slice(0, -1);
	} else if (event.key.toLowerCase() === "c") {
		display.value = "";
	}
});
