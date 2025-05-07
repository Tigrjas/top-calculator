# Calculator

A simple calculator built with HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations course. This project demonstrates fundamental JavaScript concepts, DOM manipulation, and user interface design.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division  
- Dynamic input and output display  
- Clear button to reset the calculator  
- Handles edge cases such as divide-by-zero  
- Supports chained operations and continuous calculations  
- Rounds long decimal answers to prevent display overflow  
- Error handling for invalid inputs  

## Requirements

The calculator should:

1. Perform basic operations using JavaScript functions: `add`, `subtract`, `multiply`, `divide`.
2. Use a single `operate` function to dispatch the correct operation based on input.
3. Feature a functional calculator UI with buttons for digits (0-9), operators (+, −, ×, ÷), equals (=), and clear (C).
4. Dynamically update the display with user input and calculation results.
5. Prevent multiple operations from being executed without complete inputs.
6. Handle pressing of operators multiple times in a row properly.
7. Prevent invalid input formats (e.g. two decimals in one number).
8. Reset all stored values and display when "clear" is clicked.
9. Display a custom error message when dividing by zero.