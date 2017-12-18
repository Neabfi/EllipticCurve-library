let assert = require('assert');

let Scalar = require('../js/Scalar');
let ModuloField = require('../js/fields/ModuloField');

describe('ModuloField', function() {

    describe('#init', function() {
        it('Should perform modulo on positive integer', function() {
            let element = new Scalar(new ModuloField(10), 13);
            assert.equal(element.value, 3);
        });

        it('Should perform modulo on negative integer', function() {
            let element = new Scalar(new ModuloField(10), -13);
            assert.equal(element.value, 7);
        })
    });

    describe('#add', function() {
        it('Should handle addition with positive numbers', function() {
            let element1 = new Scalar(new ModuloField(42), 64);
            let element2 = new Scalar(new ModuloField(42), 7);
            assert.equal(element1.add(element2).value, 29);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
            assert.equal(element1.add(element2).field.m, 42);
            assert.equal(element1.add(element2).field.m, element2.add(element1).field.m);
        });

        it('Should handle addition with negative numbers', function() {
            let element1 = new Scalar(new ModuloField(17), -24);
            let element2 = new Scalar(new ModuloField(17), -13);
            assert.equal(element1.add(element2).value, 14);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
            assert.equal(element1.add(element2).field.m, 17);
            assert.equal(element1.add(element2).field.m, element2.add(element1).field.m);
        });

        it('Should handle addition with both positive and negative numbers', function() {
            let element1 = new Scalar(new ModuloField(32), -69);
            let element2 = new Scalar(new ModuloField(32), 7);
            assert.equal(element1.add(element2).value, 2);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
            assert.equal(element1.add(element2).field.m, 32);
            assert.equal(element1.add(element2).field.m, element2.add(element1).field.m);
        });
    });

    describe('#additiveInv', function() {
        it('Should handle additiveInv with positive number', function() {
            let element = new Scalar(new ModuloField(42), 69);
            assert.equal(element.additiveInv().value, 15);
        });

        it('Should handle additiveInv with negative number', function() {
            let element = new Scalar(new ModuloField(42), -78);
            assert.equal(element.additiveInv().value, 36);
        });
    });

    describe('#sub', function() {
        it('Should handle soustraction with positive numbers', function() {
            let element1 = new Scalar(new ModuloField(42), 123);
            let element2 = new Scalar(new ModuloField(42), 23);
            assert.equal(element1.sub(element2).value, 16);
        });

        it('Should handle soustraction with negative numbers', function() {
            let element1 = new Scalar(new ModuloField(42), -24);
            let element2 = new Scalar(new ModuloField(42), -13);
            assert.equal(element1.sub(element2).value, 31);
        });

        it('Should handle soustraction with both positive and negative numbers', function() {
            let element1 = new Scalar(new ModuloField(42), -4);
            let element2 = new Scalar(new ModuloField(42), 7);
            assert.equal(element1.sub(element2).value, 31);
        });
    });

    describe('#mul', function() {
        it('Should handle multiplication with positive numbers', function() {
            let element1 = new Scalar(new ModuloField(42), 64);
            let element2 = new Scalar(new ModuloField(42), 7);
            assert.equal(element1.mul(element2).value, 28);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
            assert.equal(element1.mul(element2).field.m, 42);
            assert.equal(element1.mul(element2).field.m, element2.mul(element1).field.m);
        });

        it('Should handle multiplication with negative numbers', function() {
            let element1 = new Scalar(new ModuloField(17), -24);
            let element2 = new Scalar(new ModuloField(17), -13);
            assert.equal(element1.mul(element2).value, 6);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
            assert.equal(element1.mul(element2).field.m, 17);
            assert.equal(element1.mul(element2).field.m, element2.mul(element1).field.m);
        });

        it('Should handle multiplication with both positive and negative numbers', function() {
            let element1 = new Scalar(new ModuloField(32), -69);
            let element2 = new Scalar(new ModuloField(32), 7);
            assert.equal(element1.mul(element2).value, 29);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
            assert.equal(element1.mul(element2).field.m, 32);
            assert.equal(element1.mul(element2).field.m, element2.mul(element1).field.m);
        });
    });

    describe('#multiplicativeInv', function() {
        it('Should handle multiplicativeInv with positive numbers', function() {
            let element = new Scalar(new ModuloField(26), 3);
            assert.equal(element.multiplicativeInv().value, 9);
        });

        it('Should handle multiplicativeInv with negative numbers', function() {
            let element = new Scalar(new ModuloField(42), -29);
            assert.equal(element.multiplicativeInv().value, 13);
        });

        it('Should handle multiplicativeInv without inverse', function() {
            let element = new Scalar(new ModuloField(32), 14);
            assert.equal(isNaN(element.multiplicativeInv().value), true);
        });
    });

    describe('#div', function() {
        it('Should handle division with positive numbers', function() {
            let element1 = new Scalar(new ModuloField(17), 4);
            let element2 = new Scalar(new ModuloField(17), 3);
            assert.equal(element1.div(element2).value, 7);
        });

        it('Should handle division with negative numbers', function() {
            let element1 = new Scalar(new ModuloField(31), -2);
            let element2 = new Scalar(new ModuloField(31), -3);
            assert.equal(element1.div(element2).value, 11);
        });

        it('Should handle division with both positive and negative numbers', function() {
            let element1 = new Scalar(new ModuloField(69), 78);
            let element2 = new Scalar(new ModuloField(69), -3);
            assert.equal(isNaN(element1.div(element2).value), true);
        });

        it('Should handle division when it is not possible', function() {
            let element1 = new Scalar(new ModuloField(69), 76);
            let element2 = new Scalar(new ModuloField(69), -3);
            assert.equal(isNaN(element1.div(element2).value), true);
        });
    });

    describe('#pow', function() {
        it('Should handle pow', function() {
            let element1 = new Scalar(new ModuloField(13), 2);
            let element2 = new Scalar(new ModuloField(13), 8);
            assert.equal(element1.pow(element2).value, 9);
        });
    });

    describe('#sqrt', function() {
        it('Should handle sqrt', function() {
            let element1 = new Scalar(new ModuloField(13), 2);
            let element2 = new Scalar(new ModuloField(13), 8);
            assert.equal(element1.sqrt(element2).value, 9);
        });
    });

    describe('#eq', function() {
        it('Should handle eq', function() {
            let element1, element2;
            element1 = new Scalar(new ModuloField(13), 4);
            element2 = new Scalar(new ModuloField(13), 4);
            assert.equal(element1.eq(element2), true);
            assert.equal(element1.eq(element2), element2.eq(element1));
            element1 = new Scalar(new ModuloField(13), 4);
            element2 = new Scalar(new ModuloField(13), 5);
            assert.equal(element1.eq(element2), false);
            assert.equal(element1.eq(element2), element2.eq(element1));
            element1 = new Scalar(new ModuloField(13), 26);
            element2 = new Scalar(new ModuloField(13), 0);
            assert.equal(element1.eq(element2), true);
            assert.equal(element1.eq(element2), element2.eq(element1));
        });
    });

    describe('#isZero', function() {
        it('Should handle isZero', function() {
            let element;
            element = new Scalar(new ModuloField(13), 0);
            assert.equal(element.isZero(), true);
            element = new Scalar(new ModuloField(13), 4);
            assert.equal(element.isZero(), false);
            element = new Scalar(new ModuloField(13), 26);
            assert.equal(element.isZero(), true);
        });
    });

    describe('#isOne', function() {
        it('Should handle isOne', function() {
            let element;
            element = new Scalar(new ModuloField(13), 1);
            assert.equal(element.isOne(), true);
            element = new Scalar(new ModuloField(13), 4);
            assert.equal(element.isOne(), false);
            element = new Scalar(new ModuloField(13), 27);
            assert.equal(element.isOne(), true);
        });
    });
});