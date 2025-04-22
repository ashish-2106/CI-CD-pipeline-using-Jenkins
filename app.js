// Initialize an empty array to store the expenses
let expenses = [];
let totalExpense = 0;

// Function to add an expense
function addExpense(name, amount) {
    if (name && amount > 0) {
        const expense = { name, amount };
        expenses.push(expense);
        totalExpense += amount;
        updateExpenseList();
        updateTotalExpense();
    } else {
        console.log("Please enter valid expense details.");
    }
}

// Function to update the expense list
function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';  // Clear the list before updating
    
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

// Function to update the total expense displayed on the webpage
function updateTotalExpense() {
    document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);
}

// Function to handle the "Add Expense" button click
function onAddExpenseClick() {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    addExpense(name, amount);

    // Clear the input fields after adding the expense
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
}

// Listen for the "Add Expense" button click event
document.getElementById('addExpenseButton').addEventListener('click', onAddExpenseClick);

// Expose functions for testing or further modular use
module.exports = {
    addExpense,
    updateExpenseList,
    updateTotalExpense,
    onAddExpenseClick
};
