let assert = require('assert');

let Scalar = require('../js/Scalar');
let RealField = require('../js/fields/RealField');

describe('RealField', function() {

    describe('#init', function() {
        it('Should do nothing', function() {
            let element = new Scalar(new RealField(), -13);
            assert.equal(element.value, -13);
        })
    });

    describe('#add', function() {
        it('Should handle addition with positive numbers', function() {
            let element1 = new Scalar(new RealField(), 64);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.add(element2).value, 71);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
        });

        it('Should handle addition with negative numbers', function() {
            let element1 = new Scalar(new RealField(), -24);
            let element2 = new Scalar(new RealField(), -13);
            assert.equal(element1.add(element2).value, -37);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
        });

        it('Should handle addition with both positive and negative numbers', function() {
            let element1 = new Scalar(new RealField(), -69);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.add(element2).value, -62);
            assert.equal(element1.add(element2).value, element2.add(element1).value);
        });
    });

    describe('#additiveInv', function() {
        it('Should handle additiveInv with positive number', function() {
            let element = new Scalar(new RealField(), 42);
            assert.equal(element.additiveInv().value, -42);
        });

        it('Should handle additiveInv with negative number', function() {
            let element = new Scalar(new RealField(), -13);
            assert.equal(element.additiveInv().value, 13);
        });
    });

    describe('#sub', function() {
        it('Should handle soustraction with positive numbers', function() {
            let element1 = new Scalar(new RealField(), 4);
            let element2 = new Scalar(new RealField(), 13);
            assert.equal(element1.sub(element2).value, -9);
        });

        it('Should handle soustraction with negative numbers', function() {
            let element1 = new Scalar(new RealField(), -24);
            let element2 = new Scalar(new RealField(), -13);
            assert.equal(element1.sub(element2).value, -11);
        });

        it('Should handle soustraction with both positive and negative numbers', function() {
            let element1 = new Scalar(new RealField(), -4);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.sub(element2).value, -11);
        });
    });

    describe('#mul', function() {
        it('Should handle multiplication with positive numbers', function() {
            let element1 = new Scalar(new RealField(), 64);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.mul(element2).value, 448);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
        });

        it('Should handle multiplication with negative numbers', function() {
            let element1 = new Scalar(new RealField(), -24);
            let element2 = new Scalar(new RealField(), -13);
            assert.equal(element1.mul(element2).value, 312);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
        });

        it('Should handle multiplication with both positive and negative numbers', function() {
            let element1 = new Scalar(new RealField(), -69);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.mul(element2).value, -483);
            assert.equal(element1.mul(element2).value, element2.mul(element1).value);
        });
    });

    describe('#multiplicativeInv', function() {
        it('Should handle multiplicativeInv with positive numbers', function() {
            let element = new Scalar(new RealField(), 2);
            assert.equal(element.multiplicativeInv().value, 0.5);
        });

        it('Should handle multiplicativeInv with negative numbers', function() {
            let element1 = new Scalar(new RealField(), -1);
            assert.equal(element1.multiplicativeInv().value, -1);
        });
    });

    describe('#div', function() {
        it('Should handle division with positive numbers', function() {
            let element1 = new Scalar(new RealField(), 63);
            let element2 = new Scalar(new RealField(), 7);
            assert.equal(element1.div(element2).value, 9);
        });

        it('Should handle division with negative numbers', function() {
            let element1 = new Scalar(new RealField(), -4);
            let element2 = new Scalar(new RealField(), -2);
            assert.equal(element1.div(element2).value, 2);
        });

        it('Should handle division with both positive and negative numbers', function() {
            let element1 = new Scalar(new RealField(), -64);
            let element2 = new Scalar(new RealField(), 8);
            assert.equal(element1.div(element2).value, -8);
        });
    });

    describe('#pow', function() {
        it('Should handle pow', function() {
            let element1 = new Scalar(new RealField(), 2);
            let element2 = new Scalar(new RealField(), 8);
            assert.equal(element1.pow(element2).value, 256);
        });
    });

    describe('#sqrt', function() {
        it('Should handle sqrt when positive', function() {
            let element = new Scalar(new RealField(), 9);
            assert.equal(element.sqrt().value, 3);
        });

        it('Should handle sqrt when negative', function() {
            let element = new Scalar(new RealField(), -3);
            assert.equal(isNaN(element.sqrt().value), true);
        });
    });

    describe('#eq', function() {
        it('Should handle eq', function() {
            let element1, element2;
            element1 = new Scalar(new RealField(), 4);
            element2 = new Scalar(new RealField(), 4);
            assert.equal(element1.eq(element2), true);
            assert.equal(element1.eq(element2), element2.eq(element1));
            element1 = new Scalar(new RealField(), 4);
            element2 = new Scalar(new RealField(), 5);
            assert.equal(element1.eq(element2), false);
            assert.equal(element1.eq(element2), element2.eq(element1));
            element1 = new Scalar(new RealField(), 0.00005);
            element2 = new Scalar(new RealField(), 0.0001);
            assert.equal(element1.eq(element2), true);
            assert.equal(element1.eq(element2), element2.eq(element1));
        });
    });

    describe('#isZero', function() {
        it('Should handle isZero', function() {
            let element;
            element = new Scalar(new RealField(), 0);
            assert.equal(element.isZero(), true);
            element = new Scalar(new RealField(), 2);
            assert.equal(element.isZero(), false);
            element = new Scalar(new RealField(), 0.000032);
            assert.equal(element.isZero(), true);
        });
    });

    describe('#isOne', function() {
        it('Should handle isOne', function() {
            let element;
            element = new Scalar(new RealField(), 1);
            assert.equal(element.isOne(), true);
            element = new Scalar(new RealField(), 4);
            assert.equal(element.isOne(), false);
            element = new Scalar(new RealField(), 0.99999999);
            assert.equal(element.isOne(), true);
        });
    });
});