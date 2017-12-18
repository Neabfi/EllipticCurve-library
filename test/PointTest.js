let assert = require('assert');

let Scalar = require('../js/Scalar');
let Point = require('../js/Point');
let RealField = require('../js/fields/RealField');
let ModuloField = require('../js/fields/ModuloField');

describe('Point', function() {
    describe('#eq', function() {
            it('Should check eq', function() {
                let point1, point2;
                let realField = new RealField();
                point1 = new Point(new Scalar(realField, 2), new Scalar(realField, 54), new Scalar(realField, 1));
                point2 = new Point(new Scalar(realField, 2), new Scalar(realField, 54), new Scalar(realField, 1));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, 4), new Scalar(realField, 108), new Scalar(realField, 2));
                point2 = new Point(new Scalar(realField, 2), new Scalar(realField, 54), new Scalar(realField, 1));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, 13), new Scalar(realField, 0), new Scalar(realField, 0));
                point2 = new Point(new Scalar(realField, 26), new Scalar(realField, 0), new Scalar(realField, 0));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, 0), new Scalar(realField, 4), new Scalar(realField, 0));
                point2 = new Point(new Scalar(realField, 0), new Scalar(realField, 2), new Scalar(realField, 0));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, 0), new Scalar(realField, 4), new Scalar(realField, 4));
                point2 = new Point(new Scalar(realField, 0), new Scalar(realField, 2), new Scalar(realField, 2));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, -1), new Scalar(realField, 0), new Scalar(realField, -1));
                point2 = new Point(new Scalar(realField, 1), new Scalar(realField, 0), new Scalar(realField, 1));
                assert.equal(point1.eq(point2), true);
                assert.equal(point2.eq(point1), true);
                point1 = new Point(new Scalar(realField, 11), new Scalar(realField, 0), new Scalar(realField, -1));
                point2 = new Point(new Scalar(realField, 1), new Scalar(realField, 0), new Scalar(realField, 1));
                assert.equal(point1.eq(point2), false);
                assert.equal(point2.eq(point1), false);
                //point1 = new Point(new Scalar(realField, 0), new Scalar(realField, 1), new Scalar(realField, 0));
                //point2 = new Point(new Scalar(realField, 0), new Scalar(realField, 0), new Scalar(realField, 0));
                //assert.equal(point1.eq(point2), false);
                //assert.equal(point2.eq(point1), false);
                point1 = new Point(new Scalar(realField, 0), new Scalar(realField, 1), new Scalar(realField, 1));
                point2 = new Point(new Scalar(realField, 0), new Scalar(realField, 1), new Scalar(realField, 2));
                assert.equal(point1.eq(point2), false);
                assert.equal(point2.eq(point1), false);
            });
    });
});