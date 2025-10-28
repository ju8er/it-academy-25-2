//поменять массив в обратном порядке
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse());

//найти максимальное значение числа в массиве
let maxNumber = [3, 67, 90, 548, 10, 49]
maxNumber.sort((a, b) => a - b);
console.log(maxNumber[maxNumber.length - 1]);

//записать в массив ряд фибоначчи начиня с N члена с длинной массива M;
let fib = [1, 5, 7, 4, 12, 145]
let fib1 = []

for (let i = 0; i < fib.length; i++) {
    if (i === 0 || i === 1) {
        fib1.push(i);
        continue;
    }
    fib1.push(fib1[i - 2] + (fib1[i - 1] || 0));
}
console.log(fib1)

//даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению, но не по позиции (3487 и 7394 ---> 1 и 2 )
function findNonRepitable (num1, num2) {
    let valuePosition = 0
    let valueNonPosition = 0
    const arr1 = (num1).toString().split('')
    const arr2 = (num2).toString().split('')
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (Number(arr1[i]) === Number(arr2[i])) {
            ++valuePosition
            ++valueNonPosition
            continue
        }
        arr2.forEach(item => {
            if (Number(arr1[i]) === Number(item)) {
                ++valueNonPosition
            }
        })
    }
    console.log('Количесвто цифр совпадющих по значению и позиции', valuePosition)
    console.log('Количество цифр совпадающих только по значению', valueNonPosition)
}
findNonRepitable(3687, 47983)

//сортировка массива по возрастанию и убыванию
let arrUp = [5, 1, 10, 99, 569]
console.log(arrUp.sort((a, b) => a - b));
console.log(arrUp.sort((a, b) => b - a));


//удалить из массива все повторяющиеся элементы
let arr = [3, 2, 2, 2]
console.log(arr.filter((item, index) => arr.indexOf(item) === index))



