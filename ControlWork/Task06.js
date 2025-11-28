function getLastUniqueElements(array, compareFn) {
    const result = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        const current = array[i];

        const isDuplicate = result.some(item => compareFn(item, current));

        if (!isDuplicate) {
            result.unshift(current);
        }
    }

    return result;
}


const users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Bob' }, // Дубликат по id
    { id: 3, name: 'Jenny' },
    { id: 2, name: 'Alice' } // Дубликат по id
];

const compareById = (a, b) => a.id === b.id;

const uniqueUsers = getLastUniqueElements(users, compareById);
console.log('Уникальные ID:');
console.log(uniqueUsers);