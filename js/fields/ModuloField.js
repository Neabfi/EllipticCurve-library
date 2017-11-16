class ModuloField extends Field {

    constructor(m) {
        super();
        this.m = m;
    }

    add(element1, element2) {
        return super.add(element1, element2) % this.m;
    }

    sub(element1, element2) {
        return super.sub(element1, element2) % this.m;
    }

    mul(element1, element2) {
        return super.mul(element1, element2) % this.m;
    }

    div(element1, element2) {
        return super.div(element1, element2) % this.m;
    }

    eq(element1, element2) {
        return element1 % this.m  === element2 % this.m;
    }
}