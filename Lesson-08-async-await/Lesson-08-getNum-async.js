function getNum(min, max, delay, name = 'число') {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(`${name}: ${randomNum}`);
            resolve(randomNum);
        }, delay);
    });
}

async function calculateSum() {
        console.log('Начинаем вычисления...');

        const promise1 = getNum(1, 5, 3000, 'Первое число');
        const promise2 = getNum(6, 10, 5000, 'Второе число');

        console.log('Ждём оба числа...');

        const [num1, num2] = await Promise.all([promise1, promise2]);

        const sum = num1 + num2;
        console.log(`Сумма: ${num1} + ${num2} = ${sum}`);
        return sum;

}

calculateSum();