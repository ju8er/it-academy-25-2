function getRandomDelay() {
    return Math.floor(Math.random() * 5 + 1) * 1000; // от 1000 до 5000 мс
}

const promise1 = new Promise((resolve) => {
    const delay = getRandomDelay();
    console.log(`Промис 1: задержка ${delay}мс`);
    setTimeout(() => {
        resolve(1);
    }, delay);
});

const promise2 = new Promise((resolve) => {
    const delay = getRandomDelay();
    console.log(`Промис 2: задержка ${delay}мс`);
    setTimeout(() => {
        resolve(2);
    }, delay);
});

const promise3 = new Promise((resolve) => {
    const delay = getRandomDelay();
    console.log(`Промис 3: задержка ${delay}мс`);
    setTimeout(() => {
        resolve(3);
    }, delay);
});

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(`Первый выполнившийся промис вернул: ${result}`);
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });