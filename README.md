# SpendWise

## What the Project Does
SpendWise is a budgeting dashboard that helps users track their
spending. It now uses JavaScript to collect budget information and
calculate the remaining balance.

## JavaScript Concepts Implemented
- Variables (`let`)
- Data types (string, number, boolean)
- User input with `prompt()`
- Arithmetic operators
- Functions and return values
- Conditional (ternary) statements
- Console output

## How Variables Are Used
Variables such as `monthlyBudget`, `totalSpent` and
`remainingBalance` store the budget data used by the app.

## How User Input Is Collected
The app uses `prompt()` to ask for the user's name, budget and
expenses. `Number()` converts the text input into numbers.

## How Calculations Are Performed
The total spent is the sum of all expenses. The remaining balance
is the monthly budget minus the total spent.

## How Functions Organize the Code
- `calculateTotal()` adds up the expenses
- `calculateBalance()` subtracts spending from the budget
- `checkBudgetStatus()` reports whether the user is over budget

## How to Run
Open `index.html` in a browser, press F12 to open the Console,
and enter values when prompted.
