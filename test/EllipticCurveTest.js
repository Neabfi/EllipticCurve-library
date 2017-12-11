let assert = require('assert');

let Scalar = require('../js/Scalar');
let Point = require('../js/Point');
let RealField = require('../js/fields/RealField');
let ModuloField = require('../js/fields/ModuloField');
let EllipticCurve = require('../js/EllipticCurve');

describe('EllipticCurve', function() {
    describe('#calc', function() {
        describe('in RealField', function() {
            it('Should perform basic calc', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let points;
                points = ellipticCurve.calc(new Scalar(new RealField(), 1));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 2);
                assert.equal(points[1].y.value, -2);
                points = ellipticCurve.calc(new Scalar(new RealField(), 3));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 4);
                assert.equal(points[1].y.value, -4);
                points = ellipticCurve.calc(new Scalar(new RealField(), -3));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 2);
                assert.equal(points[1].y.value, -2);
            });
        });
        describe('in ModuloField', function() {
            it('Should perform basic calc', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let points;
                points = ellipticCurve.calc(new Scalar(new ModuloField(97), 17));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 10);
                assert.equal(points[1].y.value, 87);

                points = ellipticCurve.calc(new Scalar(new ModuloField(97), 95));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 31);
                assert.equal(points[1].y.value, 66);

                points = ellipticCurve.calc(new Scalar(new ModuloField(97), 1));
                assert.equal(points.length, 2);
                assert.equal(points[0].y.value, 43);
                assert.equal(points[1].y.value, 54);
            });
        });
    });

    describe('#sum', function() {
        describe('in RealField', function() {
            it('Should perform basic calc', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point1 = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let point2 = new Point(new Scalar(realField, 3), new Scalar(realField, 4));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, -3);
                assert.equal(result.y.value, 2);
            });
        });
        describe('in ModuloField', function() {
            it('Should perform basic calc', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point1 = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 10));
                let point2 = new Point(new Scalar(moduloField97, 95), new Scalar(moduloField97, 31));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 1);
                assert.equal(result.y.value, 54);
            });
        });
    });
});