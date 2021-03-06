if (typeof require === 'function') Field = require('./Field');

class ModuloField extends Field {

    constructor(m) {
        super();
        this.m = m;
    }

    /* Implement init method */
    init(element) {
        element = element % this.m;
        if(element < 0)
            element = (element + this.m) % this.m;
        return element;
    }

    /* Implement add method */
    add(element1, element2) {
        return (element1 + element2) % this.m;
    }

    /* Implement additiveInv method */
    additiveInv(element) {
        return  (-element) % this.m;
    }

    /* Implement add method */
    sub(element1, element2) {
        return (element1 - element2) % this.m;
    }

    /* Implement mul method */
    mul(element1, element2) {
        return (element1 * element2) % this.m;
    }

    /* Implement multiplicativeInv method */
    multiplicativeInv(element) {
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

    /* Implement fractionInv method */
    fractionInv(elementA, elementB) {  // A/B mod m
        let n = 0;
        if(elementB === 0){             // Test if B == 0. Algorithm can't be executed
            console.log("Algorithm failed. Please try again!");
            return NaN;
        }
        if(elementB < 0){elementB += this.m;}
        if(elementA < 0){elementA += this.m;}

        if(this.gcd(elementB, this.m) !== 1){
            console.log("The denominator is not prime with the curve order. Please try again!")
            return NaN;
        }
        console.log("gcd is ", this.gcd(elementB, this.m))

        while( (elementB * n ) % this.m !== elementA ){
            n++;
            if(n===10000){return NaN;}
        }
        return n;
    }

    // Function Greatest common divider
    gcd(a,b) {return ((a%=b)==0)? b: this.gcd(b,a);}

    /* Implement div method */
    div(element1, element2) {
        element1 = element1 % this.m;
        let inv = this.multiplicativeInv(element2, this.m);
        if(inv === -1) return Nan;
        else {
            if((inv * element1) % this.m < 0) {
                return (inv * element1) % this.m + this.m;
            } else {
                return (inv * element1) % this.m;
            }
        }
    }

    /* Implement pow method */
    pow(base, exponent) {
        if (exponent === 0) return 1;
        if (exponent % 2 === 0){
            return Math.pow( this.pow( base, (exponent / 2)), 2) % this.m;
        }
        else {
            return (base * this.pow( base, (exponent - 1))) % this.m;
        }
    }

    /* Implement eq method */
    eq(element1, element2) {
        return element1 % this.m  === element2 % this.m;
    }

    /* Implement isZero method */
    isZero(element) {
        return this.eq(element, 0);
    }

    /* Implement isOne method */
    isOne(element) {
        return this.eq(element, 1)
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = ModuloField;