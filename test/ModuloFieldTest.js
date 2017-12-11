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
});