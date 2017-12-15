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
            it('Should perform basic sum', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point1 = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let point2 = new Point(new Scalar(realField, 3), new Scalar(realField, 4));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, -3);
                assert.equal(result.y.value, 2);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, -3);
                assert.equal(result.y.value, 2);
            });
            it('Should perform sum with opposite points', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point1 = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let point2 = new Point(new Scalar(realField, 1), new Scalar(realField, -2));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 0);
                assert.equal(result.z.value, 0);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, 0);
                assert.equal(result.z.value, 0);
            });
            it('Should perform basic sum with infinite point', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point1 = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let point2 = new Point(new Scalar(realField, 0), new Scalar(realField, 1), new Scalar(realField, 0));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 1);
                assert.equal(result.y.value, 2);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, 1);
                assert.equal(result.y.value, 2);
            });
            it('Should perform basic sum with same point', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let result = ellipticCurve.sum(point, point);
                assert.equal(result.x.value, -1);
                assert.equal(result.y.value, -4);
            });
        });
        describe('in ModuloField', function() {
            it('Should perform basic sum', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point1 = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 10));
                let point2 = new Point(new Scalar(moduloField97, 95), new Scalar(moduloField97, 31));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 1);
                assert.equal(result.y.value, 54);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, 1);
                assert.equal(result.y.value, 54);
            });
            it('Should perform sum with opposite points', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point1 = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 10));
                let point2 = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 87));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 0);
                assert.equal(result.z.value, 0);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, 0);
                assert.equal(result.z.value, 0);
            });
            it('Should perform basic sum with infinite point', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point1 = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 10));
                let point2 = new Point(new Scalar(moduloField97, 0), new Scalar(moduloField97, 31), new Scalar(moduloField97, 0));
                let result = ellipticCurve.sum(point1, point2);
                assert.equal(result.x.value, 17);
                assert.equal(result.y.value, 10);
                result = ellipticCurve.sum(point2, point1);
                assert.equal(result.x.value, 17);
                assert.equal(result.y.value, 10);
            });
            it('Should perform basic sum with same point', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point = new Point(new Scalar(moduloField97, 17), new Scalar(moduloField97, 10));
                let result = ellipticCurve.sum(point, point);
                assert.equal(result.x.value, 32);
                assert.equal(result.y.value, 90);
            });
        });
    });

    describe('#mult', function() {
        describe('in RealField', function() {
            it('Should perform repeatedSums mul', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let result = ellipticCurve.mul(point, 2, 'repeatedSums');
                assert.equal(result.x.value, -1);
                assert.equal(result.y.value, -4);
            });

            it('Should perform exp2 mul', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let result = ellipticCurve.mul(point, 2, 'exp2');
                assert.equal(result.x.value, -1);
                assert.equal(result.y.value, -4);
            });

            it('Should perform exp3 mul', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let point = new Point(new Scalar(realField, 1), new Scalar(realField, 2));
                let result = ellipticCurve.mul(point, 30, 'exp3');
                assert.equal(result.x.value, -1);
                assert.equal(result.y.value, -4);
            });
        });
        describe('in ModuloField', function() {
            it('Should perform repeatedSums mul', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point = new Point(new Scalar(moduloField97, 3), new Scalar(moduloField97, 6));
                let result = ellipticCurve.mul(point, 2, 'repeatedSums');
                assert.equal(result.x.value, 80);
                assert.equal(result.y.value, 10);
            });

            it('Should perform exp2 mul', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point = new Point(new Scalar(moduloField97, 3), new Scalar(moduloField97, 6));
                let result = ellipticCurve.mul(point, 2 ,'exp2');
                assert.equal(result.x.value, 80);
                assert.equal(result.y.value, 10);
            });

            it('Should perform exp3 mul', function() {
                let ellipticCurve = new EllipticCurve(2, 3);
                let moduloField97 = new ModuloField(97);
                let point = new Point(new Scalar(moduloField97, 3), new Scalar(moduloField97, 6));
                let result = ellipticCurve.mul(point, 2 ,'exp3');
                assert.equal(result.x.value, 80);
                assert.equal(result.y.value, 10);
            });
        });
    });

    describe('#div', function() {
        describe('in RealField', function() {
            it('Should perform pollard div', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let endPoint = new Point(new Scalar(realField, 6.49415), new Scalar(realField, 15.44103));
                let startPoint = new Point(new Scalar(realField, 3), new Scalar(realField, 4));
                let result = ellipticCurve.div(endPoint, startPoint);
                assert.equal(result, 18);
            });

            it('Should perform naive div', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let endPoint = new Point(new Scalar(realField, 6.49415), new Scalar(realField, 15.44103));
                let startPoint = new Point(new Scalar(realField, 3), new Scalar(realField, 4));
                let result = ellipticCurve.div(endPoint, startPoint, 'naive');
                assert.equal(result, 18);
            });
        });
        describe('in ModuloField', function() {
            it('Should perform pollard div', function() {
                let ellipticCurve = new EllipticCurve(13, 13);
                let moduloField101 = new ModuloField(101);
                let endPoint = new Point(new Scalar(moduloField101, 94), new Scalar(moduloField101, 36));
                let startPoint = new Point(new Scalar(moduloField101, 19), new Scalar(moduloField101, 7));
                let result = ellipticCurve.div(endPoint, startPoint);
                assert.equal(result, 6);
            });

            it('Should perform naive div', function() {
                let ellipticCurve = new EllipticCurve(-7, 10);
                let realField = new RealField();
                let endPoint = new Point(new Scalar(realField, 6.49415), new Scalar(realField, 15.44103));
                let startPoint = new Point(new Scalar(realField, 3), new Scalar(realField, 4));
                let result = ellipticCurve.div(endPoint, startPoint, 'naive');
                assert.equal(result, 18);
            });
        });
    });
});