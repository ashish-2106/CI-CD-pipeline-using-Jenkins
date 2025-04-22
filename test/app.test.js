const { addExpense, getTotalExpense, getExpenses } = require('../app');

test('should add expense and update total', () => {
    addExpense('Lunch', 20);
    expect(getTotalExpense()).toBe(20);
    expect(getExpenses().length).toBe(1);
    expect(getExpenses()[0]).toEqual({ name: 'Lunch', amount: 20 });
});
