if (typeof require === 'function') var Field = require('./Field');

class RealField extends Field {

    constructor() {
        super();
    }

    /* Implement init method */
    init(element) {
        return element;
    }

    /* Implement add method */
    add(element1, element2) {
        return element1 + element2;
    }

    additiveInv()

    /* Implement mul method */
    mul(element1, element2) {
        return element1 * element2;
    }

    /* Implement sub method */
    sub(element1, element2) {
        return element1 - element2;
    }

    /* Implement div method */
    div(element1, element2) {
        return element1 / element2;
    }

    /* Implement eq method */
    eq(element1, element2) {
        // soustraction
        return element1 === element2;
    }

    isZero(element) {
       // 0
    }

    isOne() {

    }

    pow
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = RealField;