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
});