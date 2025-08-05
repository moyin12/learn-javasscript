// // Instructions for the task: 
// // Clone the repository and navigate to the week 1 directory.
// // Create a new branch off the main branch for your changes.
// // Create a new file names `name_script.js` where `name` is your name or username.
// // submit your changes as a pull request to the main branch of the repository end of day saturday 12th July.

// // Steps to implement calculator functionality:

// // 1. Select the display and all calculator buttons from the DOM.
// const display = document.querySelector('#display');
// const buttons = document.querySelectorAll('.calculator-buttons button');


// // 2. Add event listeners to the buttons to handle clicks.
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         handleCalculate(value)
//     });
// });

// // Function to handle the calculation logic
// const handleCalculate = (value) => {
//     if (value === "=") {
//         evaluateExpression();
//     } else if (value === 'C') {
//         clearDisplay();
//     } else {
//         updateDisplay(value);
//     }
// }

// // 3. When a number or operator button is clicked, update the display accordingly.
// const updateDisplay = (value) => {
//     display.value += value;
// }

// // 4. When the '=' button is clicked, evaluate the expression in the display and show the result.
// const evaluateExpression = () => {
//     try {
//         console.log(`Evaluating expression: ${display.value}`);
//         if (display.value.endsWith('/0') ) {
//             displayError()
//         } 
//         else {
//             const result = eval(display.value);
//             display.value = result;
//         }
//     }
//     catch (error) {
//         displayError()
//     }
// }

// // Function to display an error message when the expression is invalid
// const displayError = () => {
//     console.error('Invalid Expression');
//     display.value = 'Error!';
//     setTimeout(() => {
//         clearDisplay();
//     }, 1000);
// }

// // 5. When the 'C' (clear) button is clicked, reset the display to empty.
// const clearDisplay = () => {
//     display.value = '';
// }

// // 6. Handle edge cases (e.g., multiple operators, invalid input, division by zero).

// // 7. Optionally, add keyboard support for calculator operations.
// addEventListener('keypress', (e) => {
//     const validValues =  /^[0-9+\-*/().\sC=]+$/;
//     const value = e.key;
//     if (validValues.test(value)) {
//         handleCalculate(value);
//     }
// });