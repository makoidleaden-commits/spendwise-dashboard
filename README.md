# SpendWise Dashboard

A budget tracking dashboard built step by step. This version adds a JavaScript foundation on top of the Week 4 visual dashboard shell (CSS Grid + Flexbox layout).

## What it does

SpendWise displays budget categories (Food, Transport, Rent, Entertainment, Savings, Utilities) in a dashboard layout. This week's update adds JavaScript logic that stores budgeting data, collects user input, performs calculations, and prints a clearly labeled budget summary to the browser console.

## JavaScript concepts implemented

- **Variables** — `monthlyBudget` and `currency` store budget-level data; `expenses` is an array of objects, each representing one expense (name, amount, category).
- **User input** — `getUserBudget()` uses `prompt()` to let the user set their monthly budget; `getNewExpense()` uses `prompt()` to collect a new expense's name, amount, and category, then adds it to the `expenses` array.
- **Calculations** — `calculateTotalExpenses()` sums all expense amounts; `calculateRemainingBalance()` subtracts total expenses from the budget; `calculateAverageExpense()` finds the average expense amount.
- **Functions** — All logic is organized into small, reusable functions rather than one long script, making the code easier to read, test, and extend later.

## How it works

1. On page load, `runBudgetSummary()` runs automatically using starting sample data.
2. It calls the calculation functions to get total expenses, remaining balance, and average expense.
3. Results are printed to the browser console with clear labels (e.g., "Monthly Budget: $2000.00").
4. If expenses exceed the budget, a warning is printed showing how far over budget the user is.
5. `getUserBudget()` and `getNewExpense()` are available to interactively collect input via `prompt()` — uncomment their calls at the bottom of `script.js` to try them.

## Files

- `index.html` — dashboard page structure
- `style.css` — dashboard styling (Grid, Flexbox, theme variables, responsive breakpoint)
- `script.js` — JavaScript logic for budget data, input, calculations, and console output
- `README.md` — this file