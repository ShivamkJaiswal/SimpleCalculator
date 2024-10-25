 // Get references to the display input and all buttons
 const display = document.querySelector('.display input');
 const buttons = document.querySelectorAll('button');

 // Initialize a variable to store the current input
 let currentInput = '';

 // Function to update the display
 function updateDisplay() {
     display.value = currentInput;
 }

 // Function to handle button clicks
 buttons.forEach(button => {
     button.addEventListener('click', () => {
         const value = button.value;

         if (value === 'C') {
             // Clear the display
             currentInput = '';
         } else if (value === '←') {
             // Remove the last character
             currentInput = currentInput.slice(0, -1);
         } else if (value === '=') {
             // Evaluate the expression
             try {
                 currentInput = eval(currentInput.replace(/x/g, '*')); // Replace 'x' with '*' for multiplication
             } catch (error) {
                 currentInput = 'Error'; // Handle any errors
             }
         } else {
             // Append the clicked button's value to the current input
             currentInput += value;
         }

         // Update the display
         updateDisplay();
     });
 });