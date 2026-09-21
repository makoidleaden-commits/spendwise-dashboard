let monthlyBudget = 2000;
let currency = "USD";

let expenses = [
    { name: "Groceries", amount: 45.30, category: "Food" },
    { name: "Bus Pass", amount: 20.00, category: "Transport" },
    { name: "Netflix", amount: 15.99, category: "Entertainment" },
    { name: "Rent", amount: 800.00, category: "Rent" },
    { name: "Coffee", amount: 4.50, category: "Food" }
];

function getUserBudget() {
    let input = prompt("Enter your monthly budget:", monthlyBudget);
    if (input !== null && input !== "") {
        monthlyBudget = Number(input);
    }
    return monthlyBudget;
}

function getNewExpense() {
    let name = prompt("Enter expense name:");
    let amount = Number(prompt("Enter expense amount:"));
    let category = prompt("Enter expense category:");
    let newExpense = { name: name, amount: amount, category: category };
    expenses.push(newExpense);
    return newExpense;
}

function calculateTotalExpenses(expenseList) {
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }
    return total;
}

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

function calculateAverageExpense(expenseList) {
    if (expenseList.length === 0) return 0;
    let total = calculateTotalExpenses(expenseList);
    return total / expenseList.length;
}

function runBudgetSummary() {
    let totalExpenses = calculateTotalExpenses(expenses);
    let remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
    let averageExpense = calculateAverageExpense(expenses);

    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: $" + monthlyBudget.toFixed(2));
    console.log("Total Expenses: $" + totalExpenses.toFixed(2));
    console.log("Remaining Balance: $" + remainingBalance.toFixed(2));
    console.log("Average Expense: $" + averageExpense.toFixed(2));
    console.log("Number of Expenses: " + expenses.length);

    if (remainingBalance < 0) {
        console.log("Warning: You are over budget by $" + Math.abs(remainingBalance).toFixed(2));
    } else {
        console.log("You are within budget.");
    }
}

runBudgetSummary();

// getUserBudget();
// getNewExpense();
// runBudgetSummary();