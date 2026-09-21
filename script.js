// ===== SpendWise: Interactive Budget Tracker =====

// 1. Data storage — arrays for multiple expense records
let monthlyBudget = 2000;

let expenses = [
    { name: "Groceries", amount: 45.30, category: "Food" },
    { name: "Bus Pass", amount: 20.00, category: "Transport" },
    { name: "Netflix", amount: 15.99, category: "Entertainment" },
    { name: "Rent", amount: 800.00, category: "Rent" },
    { name: "Coffee", amount: 4.50, category: "Food" }
];

// 2. Grab DOM elements
const budgetInput = document.getElementById("budget-input");
const setBudgetBtn = document.getElementById("set-budget-btn");
const budgetStatus = document.getElementById("budget-status");

const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const addExpenseBtn = document.getElementById("add-expense-btn");

const totalSpentEl = document.getElementById("total-spent");
const remainingBalanceEl = document.getElementById("remaining-balance");
const budgetWarningEl = document.getElementById("budget-warning");
const expenseListEl = document.getElementById("expense-list");

// 3. Calculation functions
function calculateTotalExpenses(expenseList) {
    let total = 0;
    // Loop through every expense record
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }
    return total;
}

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// 4. DOM update functions

// Render the full expense list on the page using a loop
function renderExpenseList() {
    expenseListEl.innerHTML = ""; // clear existing content

    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];

        let listItem = document.createElement("li");
        listItem.innerHTML =
            "<span>" + expense.name + " — $" + expense.amount.toFixed(2) + "</span>" +
            "<span class='expense-category-tag'>" + expense.category + "</span>";

        expenseListEl.appendChild(listItem);
    }
}

// Update the summary section (total spent, remaining balance, warning)
function updateSummary() {
    let totalExpenses = calculateTotalExpenses(expenses);
    let remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

    totalSpentEl.textContent = "$" + totalExpenses.toFixed(2);
    remainingBalanceEl.textContent = "$" + remainingBalance.toFixed(2);

    // Decision making with conditionals
    if (remainingBalance < 0) {
        budgetWarningEl.textContent = "Warning: You are over budget by $" + Math.abs(remainingBalance).toFixed(2) + "!";
    } else if (remainingBalance < monthlyBudget * 0.1) {
        budgetWarningEl.textContent = "Careful — you're close to your budget limit.";
    } else {
        budgetWarningEl.textContent = "You're on track this month.";
    }
}

// Run both update functions together
function refreshDashboard() {
    renderExpenseList();
    updateSummary();
}

// 5. Event listeners — handle user interactions

setBudgetBtn.addEventListener("click", function () {
    let value = Number(budgetInput.value);

    if (budgetInput.value === "" || isNaN(value) || value <= 0) {
        budgetStatus.textContent = "Please enter a valid budget amount.";
        return;
    }

    monthlyBudget = value;
    budgetStatus.textContent = "Budget set to $" + monthlyBudget.toFixed(2);
    budgetInput.value = "";
    updateSummary();
});

addExpenseBtn.addEventListener("click", function () {
    let name = expenseNameInput.value.trim();
    let amount = Number(expenseAmountInput.value);
    let category = expenseCategoryInput.value;

    // Validate input before adding
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    let newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    // Clear the form
    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    // Update the dashboard with the new data
    refreshDashboard();
});

// 6. Initial render when the page loads
refreshDashboard();