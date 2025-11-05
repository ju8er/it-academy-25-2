const { expect } = require('chai');
const Calculator = require('./calculator')


describe('Calculator', () => {
    beforeEach(() => {
        calc = new Calculator();
    })

    describe('Method add', () => {
        it('Should return true', () => {
        const result = calc.add(10)
        expect(result).to.equal(10)
    })

        it('sum two positive numbers', () => {
            const result = calc.add(5, 5)
            expect(result).to.equal(10)
    })

        it('negative number(minus)', () => {
            const result = calc.add(10, -6)
            expect(result).to.equal(4)
    })

        it('sum 0+0', () => {
            const result = calc.add(0, 0)
            expect(result).to.equal(0)
    })

        it('sum decimal numbers', () => {
            const result = calc.add(0.5, 5.25)
            expect(result).to.equal(5.75)
    })
})
})

    describe('Method multiply', () => {

        it('multiply two numbers', () => {
            const result = calc.multiply(5, 3)
            expect(result).to.equal(15)
    })

        it('multiply number and decimal numbers', () => {
            const result = calc.multiply(2, 2.5)
            expect(result).to.equal(5)
    })

        it('subtraction two numbers', () => {
            const result = calc.subtraction(12, 3)
            expect(result).to.equal(9)
        })

        it('subtraction number and decimal numbers', () => {
            const result = calc.subtraction(9, 2.5)
            expect(result).to.equal(6.5)
        })

        it('subtraction number and 0', () => {
            const result = calc.subtraction(10, 0)
            expect(result).to.equal(10)
        })

        it('subtraction 0 and number', () => {
            const result = calc.subtraction(0, 9)
            expect(result).to.equal(-9)
        })

        it('divide two numbers', () => {
            const result = calc.divide(15, 3)
            expect(result).to.equal(5)
        })

        it('divide number and decimal numbers', () => {
            const result = calc.divide(15, 2.5)
            expect(result).to.equal(6)
        })

        it('divide number and 0', () => {
            const result = calc.divide(3, 0)
            expect(result).to.equal(Infinity)
        })

        it('exponentiation number 5', () => {
            const result = calc.exponentiation(5)
            expect(result).to.equal(25)
        })

        it('exponentiation number 0', () => {
            const result = calc.exponentiation(0)
            expect(result).to.equal(0)
        })

        it('exponentiation decimal 2.5', () => {
            const result = calc.exponentiation(2.5)
            expect(result).to.equal(6.25)
        })


})