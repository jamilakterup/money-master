

function getInputValue(income, food, rent, cloths) {
    const incomeField = document.getElementById(income).value;
    const incomeNum = parseInt(incomeField);

    const foodField = document.getElementById(food).value;
    const foodNum = parseInt(foodField);

    const rentField = document.getElementById(rent).value;
    const rentNum = parseInt(rentField);

    const clothsField = document.getElementById(cloths).value;
    const clothsNum = parseInt(clothsField);

    const value = {
        income: incomeNum,
        food: foodNum,
        rent: rentNum,
        cloths: clothsNum
    };
    return value;
}



document.getElementById('income').addEventListener('keyup', (e) => {
    document.getElementById('balance').innerText = e.target.value;
});

document.getElementById('btn-calculate').addEventListener('click', () => {
    const val = getInputValue('income', 'food', 'rent', 'cloths')

    const totalExpenses = val.food + val.rent + val.cloths;
    if (totalExpenses > val.income || isNaN(totalExpenses)) {
        return alert('income more to expenses')
    }
    else {

        document.getElementById('expenses').innerText = totalExpenses;
    }

    document.getElementById('balance').innerText = val.income - totalExpenses;
});



document.getElementById('percent-button').addEventListener('click', () => {
    const inputStr = document.getElementById('modulus').value;
    const inputNum = parseInt(inputStr)

    const balanceStr = document.getElementById('balance').innerText;
    const balance = parseInt(balanceStr);

    const modulus = balance * (inputNum / 100);
    if (modulus > balance) {
        return alert('insufficient balance')
    }
    else {
        document.getElementById('saving').innerText = modulus;
    }

    document.getElementById('remaining').innerText = balance - modulus;
});

