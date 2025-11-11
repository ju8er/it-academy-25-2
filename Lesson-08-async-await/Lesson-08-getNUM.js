function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            resolve(randomNum);
        }, 3000);
    });
}

async function processNumber() {

        console.log('Ожидаем случайное число...');

        const number = await getNum();

        console.log(`Получено число: ${number}`);

        const squared = number * number;

        console.log(`Квадрат числа: ${squared}`);

        return squared;
    }

processNumber();