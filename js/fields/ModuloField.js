if (typeof require === 'function') var Field = require('./Field');

class ModuloField extends Field {

    constructor(m) {
        super();
        this.m = m;
    }

    /* Implement init method */
    init(element) {
        return (element % this.m + this.m) % this.m;
    }

    /* Implement add method */
    add(element1, element2) {
        return (element1 + element2) % this.m;
    }

    /* Implement mul method */
    mul(element1, element2) {
        return (element1 * element2) % this.m;
    }

    sub(element1, element2) {
        return (element1 - element2) % this.m;
    }

    div(element1, element2) {
        element1 = element1 % this.m;
        let inv = this.inv(element2, this.m);
        if(inv === -1) return Nan;
        else {
            if((inv * element1) % this.m < 0) {
                return (inv * element1) % this.m + this.m;
            } else {
                return (inv * element1) % this.m;
            }
        }
    }

    inv(element) {
        element = ( +element ) % this.m;

        if( element < 0 ) {
            element = element + this.m;
        }

        for(let m = 0; m < this.m; m += 1 ) {
            if( ( element * m ) % this.m === 1 ) {
                return m;
            }
        }
        return NaN;
    }

    eq(element1, element2) {
        return element1 % this.m  === element2 % this.m;
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = ModuloField;