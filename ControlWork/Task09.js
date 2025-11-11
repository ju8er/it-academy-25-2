const prompt = require('prompt-sync')();

function multiplicationTable(n) {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("Ошибка: введите целое число больше 0.");
        return;
    }

    const table = [];
    const rowSums = Array(n).fill(0);
    const colSums = Array(n).fill(0);
    let totalSum = 0;

    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
            const product = i * j;
            row.push(product);
            totalSum += product;
            rowSums[i - 1] += product;
            colSums[j - 1] += product;
        }
        table.push(row);
    }

    console.log("x | " + Array.from({ length: n }, (_, i) => i + 1).join(" "));
    console.log("-".repeat(4 + 2 * n));

    table.forEach((row, i) => {
        console.log(`${i + 1} | ${row.join(" ")}`);
    });

    console.log("-".repeat(4 + 2 * n));
    console.log("Сумма строк: " + rowSums.join(" "));
    console.log("Сумма столбцов: " + colSums.join(" "));
    console.log("Сумма всех значений в таблице: " + totalSum);
}

const userInput = prompt("Введите целое число больше 0:");
const n = parseInt(userInput);
multiplicationTable(n);