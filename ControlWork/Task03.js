function groupByAge(people) {

    const grouped = {};

    for (const person of people) {

        if (typeof person !== 'object' || person === null) {
            continue;
        }

        const { name, age } = person;

        if (typeof name !== 'string' || typeof age !== 'number' || !Number.isInteger(age) || age < 0) {
            continue;
        }

        if (!grouped[age]) {
            grouped[age] = [];
        }

        grouped[age].push(name);
    }

    return grouped;
}

const people = [
    { name: "Ivan", age: 25 },
    { name: "Eva", age: 16 },
    { name: "John", age: 56 },
    { name: "Bill", age: 10 },
];

console.log(groupByAge(people));