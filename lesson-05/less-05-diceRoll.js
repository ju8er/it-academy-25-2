function diceRandom(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const prompt = require('prompt-sync')();
const userInput = prompt('Укажите количество игроков ');
console.log('Количество игроков:', userInput);

let numberPlayer = Number(userInput);

let arrayPlayer = [];
for (let i = 1; i <= numberPlayer; i++) {
    arrayPlayer.push({
        id: i,
        name: `Игрок ${i}`,
        diceRoll: diceRandom(1, 6)
    });
}

let maxDiceRoll = Math.max(...arrayPlayer.map(player => player.diceRoll));
let winner = arrayPlayer.filter(player => player.diceRoll === maxDiceRoll);

arrayPlayer.forEach(player => {
    console.log(`${player.name}: выбросил ${player.diceRoll}`);
})

if (winner.length === 1) {
    console.log(`Победитель ${winner[0].name} со счетом ${maxDiceRoll}`);
} else {
    console.log(`Ничья! Победители: ${winner.map(w => w.name).join(', ')} со счетом ${maxDiceRoll}`);
}






