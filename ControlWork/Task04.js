function isPalidrome(string) {
    const palidrome = string.toLowerCase().replace(/[^a-z0-9]/g, '')

    return palidrome === palidrome.split('').reverse().join('')

}

const testPalidrome = "A man, a plan, a canal: Panama"
const result = isPalidrome(testPalidrome)
const answer = result ? "Да" : "Нет"
console.log(`"${testPalidrome}" - палидром? ${answer}`);