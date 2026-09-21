# SpendWise Dashboard

A budget tracking dashboard built step by step. This version makes SpendWise fully interactive — user actions now update the page directly, not just the console.

## What improvements were made this week

- Added a **Set Your Budget** panel that lets the user type in a monthly budget and apply it live.
- Added an **Add an Expense** form (name, amount, category dropdown) that adds new expenses to the app's data and immediately updates the page.
- Added a **Summary** panel showing Total Spent and Remaining Balance, which recalculates automatically whenever the budget or expenses change.
- Added an **All Expenses** list that renders every stored expense directly on the page.

## How conditionals are used

In `updateSummary()`, an `if / else if / else` chain checks the remaining balance: it shows a warning if the user is over budget, a caution message if they're close to their limit (within 10% of the budget), or a positive "on track" message otherwise. Input validation in both the budget and expense forms also uses conditionals (`isNaN()`, empty string, and `<= 0` checks) to reject invalid entries before they're processed.

## How arrays are used to store data

All expenses are stored in a single `expenses` array of objects, each with `name`, `amount`, and `category` properties. Adding a new expense uses `expenses.push()` rather than creating new individual variables, so the app can hold any number of expense records.

## How the DOM is updated

`renderExpenseList()` clears and rebuilds the `<ul id="expense-list">` element by looping through the `expenses` array and creating a new `<li>` for each one. `updateSummary()` writes the calculated total, remaining balance, and status message directly into `<span>` and `<p>` elements on the page using `textContent`, so the numbers on screen always reflect the current data.

## How user interactions are handled through events

Both the "Set Budget" and "Add Expense" buttons have `addEventListener("click", ...)` handlers. Clicking "Set Budget" reads and validates the budget input, updates the `monthlyBudget` variable, and refreshes the summary. Clicking "Add Expense" reads and validates the name/amount/category inputs, pushes a new object into the `expenses` array, clears the form, and calls `refreshDashboard()` to re-render both the expense list and the summary.

## Challenges encountered

Keeping the script correctly linked to the HTML (`<script src="script.js"></script>`) was an early issue that caused the JavaScript to silently not run at all — fixed by double-checking the tag is present before `</body>`. Making sure the summary and expense list update *together* after every change (rather than only one updating) was solved by wrapping both update calls inside a single `refreshDashboard()` function, called after every data change.

## Files

- `index.html` — dashboard structure, controls, and expense list
- `style.css` — dashboard styling (Grid, Flexbox, theme variables, responsive breakpoint, control card styling)
- `script.js` — budget/expense data, calculations, DOM rendering, and event listeners
- `README.md` — this file