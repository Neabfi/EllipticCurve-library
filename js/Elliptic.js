class Elliptic {

	constructor(a, b, m = null) {
		this.a = a;
		this.b = b;
        this.m = m;
	}

	calc(x) {

        let y = Math.pow(x, 3) + this.a * x + this.b;

		if(this.m !== null) {
            let results = [];

            for(let i = 0; i < this.m; i++) {
				if(Math.pow(i, 2) % this.m === y) results.push(i);
			}

			return results;
		}

		if(y < 0) return NaN;

		y = Math.sqrt(y);
		return y === -y ? y : [y, -y];
	}

	sum(p1, p2) {

		let m;
// If same point
		if(p1.x === p2.x && p1.y === p2.y) {

			if(p1.y === 0) throw new Exception('Infinity');


			if(this.m !== null) {
				m = (3 * Math.pow(p1.x, 2) + this.a ) * this.inverseOf( 2 * p1.y );
			} else {
                m = (3 * Math.pow(p1.x, 2) + this.a) / (2 * p1.y);
            }

		} else {
			
			if(this.m !== null)  {
				m = (p2.y - p1.y) * this.inverseOf(p2.x - p1.x);
			} else {
				m = (p2.y - p1.y) / (p2.x - p1.x);
			}
		}

        let x3 = Math.pow(m, 2) - p1.x - p2.x;
        let y3 = m * (p1.x - x3) - p1.y;

        if(this.m !== null) {
			x3 %= this.m;
			if(x3 < 0) x3 += this.m;
			y3 %= this.m;
			if(y3 < 0) y3 += this.m;
		}

		return new Point(x3, y3);
	}

	mult(p, n) {
		for(let i = 1; i < n; i++) {
			p = this.sum(p, p)
		}

		return p;
	}
 
	inverseOf(n) {
        n = ( +n ) % this.m;

        if( n < 0 ) {
            n = n + this.m;
        }

        for(let m = 0; m < this.m; m += 1 ) {
            if( ( n * m ) % this.m === 1 ) {
                return m;
            }
        }

        return NaN;
    };
}
