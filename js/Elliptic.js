class Elliptic {
	constructor(a, b, m = null) {
		this.a = a;
		this.b = b;
		this.m = m
	}

	calc(x) {
		if(this.m != null) {

			if(x >= this.m ) {
				throw new Exception('x(' + x + ') can\'t be greater than m(' + this.m + ')');
			}


			var results = []
			var result = (parseFloat(Math.pow(x, 3)) + parseFloat(this.a * x) + parseFloat(this.b)) % this.m;
			for(var i = 0; i < this.m; i++) {
				if(Math.pow(i, 2) % this.m == result) {
					results.push(i);
				}
			}
			return results;
		}
		return Math.sqrt(parseFloat(Math.pow(x, 3)) + parseFloat(this.a * x) + parseFloat(this.b));
	}

	sum(p1, p2) {

		// If same point
		if(p1.x == p2.x && p1.y == p2.y) {

			if(p1.y == 0) {
				throw new Exception('Infinity');
			}

			var k = (3 * Math.pow(p1.x, 2) + this.a) / (2 * p1.y);
			x3 = Math.pow(k, 2) - 2 * p1.x;
			y3 = k * (p1.x - x3) - p1.y;

		} else {

			// If sum equals infinity
			if(p1.y * p2.y < 0) {
				throw new Exception('Infinity');
			} 

			var m = (p2.y - p1.y) / (p2.x - p1.x)

			 var x3 = Math.pow(m, 2) - p1.x - p2.x;
			 var y3 = m * (p1.x - x3) - p1.y;

			 
		}

		return new Point(x3, y3);
	}
}

function Exception(message) {
   this.message = message;
   this.name = "Exception";
}