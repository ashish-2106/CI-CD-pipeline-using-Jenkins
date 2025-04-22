// app.js

let expenses = [];
let totalExpense = 0;

function addExpense(name, amount) {
    if (!name || amount <= 0) {
        throw new Error("Invalid expense");
    }
    const expense = { name, amount };
    expenses.push(expense);
    totalExpense += amount;
    return expense;
}

function getTotalExpense() {
    return totalExpense;
}

function getExpenses() {
    return expenses;
}

// Export for testing and use in browser
module.exports = {
    addExpense,
    getTotalExpense,
    getExpenses
};
