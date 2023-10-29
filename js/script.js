const calculateExpense = () => {
    const income = document.querySelector('#income').value;
    const food = document.querySelector('#food').value;
    const rent = document.querySelector('#rent').value;
    const clothes = document.querySelector('#clothes').value;

    if (
        income < 0 ||
        income == "" ||
        food < 0 ||
        food == "" ||
        rent < 0 ||
        rent == "" ||
        clothes < 0 ||
        clothes == ""
    ) {
        alert("Input Must Be Positive Number");
        return;
    }

    //Expenses
    const expenses = parseInt(food) + parseInt(rent) + parseInt(clothes);
    //balance
    const balance = parseInt(income) - expenses;

    if (expenses > balance) {
        alert('Expense Cannot be more than Balance');
        return;
    } else {
        document.getElementById('total-expense').innerText = expenses;
        document.getElementById('balance').innerText = balance;
    }
};

const calculateSavings = () => {

    const income = document.querySelector('#income').value;
    const savePercentage = document.querySelector('#save-field').value;
    const balance = document.getElementById('balance').innerText;

    if (savePercentage < 0 || savePercentage == "") {
        alert('Please Input a Valid Persent Number');
        return;
    };

    const savingAmount = (savePercentage / 100) * income;
    const remainingBalance = balance - savingAmount;

    if (savingAmount > balance) {
        alert("SavingAmount is greater than balance");
    } else {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }


};