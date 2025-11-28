formatCurrency();

function formatCurrency() {
    const prompt = require('prompt-sync')();
    const userInput = prompt('Сумму валюты ');

    if (userInput === null || userInput.trim() === '') {
        console.log("Вы ничего не ввели или ввели пустую строку");
        return;
    }

    if (userInput.trim() === "0") {
        console.log("Вы ввели 0");
        return;
    }

    const numberArray = userInput.split(',').map(item => item.trim());


    for (const input of numberArray) {
        if (input === '') {
            console.log("Вы указали пустое значение");
            return;
        }
        const number = parseFloat(input);
        if (isNaN(number) || String(number) !== input) {
            console.log(`Вы указали не число: "${input}"`);
            return;
        }
    }

    const formattedNumber = numberArray.map(input => {
        const number = parseFloat(input);
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(number);
    });

    console.log("Доллары:");
    formattedNumber.forEach((formatted, index) => {
        console.log(`${numberArray[index]} - ${formatted}`);
    });

    return formattedNumber;
}