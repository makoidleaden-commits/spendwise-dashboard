// ===== SpendWise: JavaScript Foundation =====

// 1. Store Application Data
// Budget-related variables
let monthlyBudget = 2000;          // total budget for the month
let currency = "USD";              // currency type

// Expense-related variables (array of expense objects)
let expenses = [
    { name: "Groceries", amount: 45.30, category: "Food" },
    { name: "Bus Pass", amount: 20.00, category: "Transport" },
    { name: "Netflix", amount: 15.99, category: "Entertainment" },
    { name: "Rent", amount: 800.00, category: "Rent" },
    { name: "Coffee", amount: 4.50, category: "Food" }
];


// 2. Collect User Input
// Ask the user to confirm or set their monthly budget
function getUserBudget() {
    let input = prompt("Enter your monthly budget:", monthlyBudget);

    // If the user entered a value, convert it to a number and use it
    if (input !== null && input !== "") {
        monthlyBudget = Number(input);
    }

    return monthlyBudget;
}

// Ask the user to add a new expense
function getNewExpense() {
    let name = prompt("Enter expense name:");
    let amount = Number(prompt("Enter expense amount:"));
    let category = prompt("Enter expense category:");

    let newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);
    return newExpense;
}


// 3. Perform Budget Calculations

// Calculate total of all expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }
    return total;
}

// Calculate remaining balance
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

//