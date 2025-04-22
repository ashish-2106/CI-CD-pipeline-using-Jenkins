let totalExpense = 0;
let expenses = [];

function addExpense() {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (name && amount > 0) {
        expenses.push({ name, amount });
        totalExpense += amount;
        updateExpenseList();
        updateTotalExpense();
        clearInputs();
    } else {
        alert("Please enter valid expense details.");
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

function updateTotalExpense() {
    document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);
}

function clearInputs() {
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
}
