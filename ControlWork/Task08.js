async function executePromisesParallel(promiseFunctions) {

    const promises = promiseFunctions.map(fn => fn());

    const results = await Promise.all(promises);

    return results;
}


const promiseFunctions = [
    () => new Promise(resolve => setTimeout(() => {
        console.log('Промис 1 завершен');
        resolve(1);
    }, 1000)),
    () => new Promise(resolve => setTimeout(() => {
        console.log('Промис 2 завершен');
        resolve(2);
    }, 500)),
    () => new Promise(resolve => setTimeout(() => {
        console.log('Промис 3 завершен');
        resolve(3);
    }, 1500)),
    () => new Promise(resolve => setTimeout(() => {
        console.log('Промис 4 завершен');
        resolve(4);
    }, 800))
];


async function example() {
    console.log('Запуск параллельного выполнения промисов...');


    try {
        const results = await executePromisesParallel(promiseFunctions);

        console.log('Результаты:', results); // [1, 2, 3, 4] - в исходном порядке
    } catch (error) {

        console.error('Ошибка:', error);
    }
}

example();