const prompt = require('prompt-sync')();
const userInput = prompt('Укажите дату в прошлом (формат ГГ-ММ-ДД) ');
console.log('Дата:', userInput);

const userDate = new Date(userInput);

countFriday(userDate);


function countFriday(startDate) {

    const today = new Date();
    let count = 0;

    if (startDate > today) {
        return 0;
    }

    let currentDate = new Date(startDate);

    currentDate.setDate(13);

    if (currentDate < startDate) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(13)
    }

    while (currentDate <= today) {
        if (currentDate.getDay() === 5) {
            count++;
            console.log(`Количество пятниц 13-го! ${currentDate.toLocaleDateString()}`);
        }

        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(13)
    }

    console.log(`Количество пятниц 13 с ${userInput}: ${count}`);

    return count;

}


