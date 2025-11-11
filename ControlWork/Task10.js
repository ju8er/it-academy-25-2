const promiseNumber = (num) => {
    return new Promise((res) => {  // Добавлен return
        console.log('first promise', num)
        res(num)
    }).then((val)=> {
        return new Promise((resolve) => {  // Добавлен return
            setTimeout(() => {
                new Promise((res) => {
                    console.log('second promise', val * val)
                    res(val * val)
                }).then((val)=> {
                    return new Promise((resolveInner) => {  // Добавлен return
                        setTimeout(() => {
                            console.log('third promise', val * val)
                            resolveInner(val * val);
                        }, 3000)
                    })
                }).then(resolve);  // Пробрасываем результат
            }, 3000)
        })
    })
};

promiseNumber(1000)
    .then(finalResult => {
        console.log('Финальный результат:', finalResult);
    });