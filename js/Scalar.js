/**
 * Scalar class
 * @param {Field} field
 * @param {number} value
 * @example
 * let moduloField = new ModuloField(n)
 * new Scalar(moduloField, 10);
 */
class Scalar {
    constructor(field, value) {
        this.field = field;
        this.value = value;
    }

    add(other) {

        // If other is a Scalar instance
        if(other instanceof Scalar) {
            if(this.field !== other.field)  throw 'OperationOnDifferentFields';
            return new Scalar(this.field, this.field.add(this.value, other.value));
        }

        // other should be a number
        return new Scalar(this.field, this.field.add(this.value, other));
    }

    sub(other) {

        // If other is a Scalar instance
        if(other instanceof Scalar) {
            if(this.field !== other.field)  throw 'OperationOnDifferentFields';
            return new Scalar(this.field, this.field.sub(this.value, other.value));
        }

        // other should be a number
        return new Scalar(this.field, this.field.sub(this.value, other));
    }

    mul(other) {

        // If other is a Scalar instance
        if(other instanceof Scalar) {
            if(this.field !== other.field)  throw 'OperationOnDifferentFields';
            return new Scalar(this.field, this.field.mul(this.value, other.value));
        }

        // other should be a number
        return new Scalar(this.field, this.field.mul(this.value, other));
    }

    div(other) {

        // If other is a Scalar instance
        if(other instanceof Scalar) {
            if(this.field !== other.field)  throw 'OperationOnDifferentFields';
            return new Scalar(this.field, this.field.div(this.value, other.value));
        }

        // other should be a number
        return new Scalar(this.field, this.field.div(this.value, other));
    }

    eq(other) {
        // If other is a Scalar instance
        if(other instanceof Scalar) {
            if(this.field !== other.field)  throw 'OperationOnDifferentFields';
            return new Scalar(this.field, this.field.eq(this.value, other.value));
        }

        // other should be a number
        return new Scalar(this.field, this.field.eq(this.value, other));
    }
}