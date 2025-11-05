function splitNumber(total, parts, type = 'int') {
    if (type === 'int') {
        // Целые положительные числа (>=1)
        let rest = total - parts;
        if (rest < 0) throw new Error('Для целых чисел total должно быть >= parts');
        let result = Array(parts).fill(1);
        for (let i = 0; i < rest; i++) {
            let idx = Math.floor(Math.random() * parts);
            result[idx]++;
        }
        return result;
    }

    if (type === 'float') {
        // Дробные числа с 2 знаками после запятой
        if (parts === 1) return [parseFloat(total.toFixed(2))];

        let cuts = [];
        for (let i = 0; i < parts - 1; i++) {
            cuts.push(Math.random() * total);
        }
        cuts.sort((a, b) => a - b);

        let result = [];
        let prev = 0;
        for (let cut of cuts) {
            result.push(parseFloat((cut - prev).toFixed(2)));
            prev = cut;
        }
        result.push(parseFloat((total - prev).toFixed(2)));

        // Коррекция суммы из-за округления
        let sum = result.reduce((a, b) => a + b, 0);
        let diff = parseFloat((total - sum).toFixed(2));
        result[result.length - 1] = parseFloat((result[result.length - 1] + diff).toFixed(2));

        return result;
    }

    throw new Error("Тип должен быть 'int' или 'float'");
}

console.log("Целые:", splitNumber(15, 3, 'int'));
console.log("Дробные:", splitNumber(15, 3, 'float'));