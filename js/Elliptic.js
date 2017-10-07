class Elliptic {
	constructor(a, b, m = null, canvas = null) {
		this.a = parseFloat(a);
		this.b = parseFloat(b);
		if(m != null) this.m = parseFloat(m);
		if(canvas != null) {
			this.canvas = new Canvas(canvas, this.m);
			this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
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

		let square = parseFloat(Math.pow(x, 3)) + parseFloat(this.a * x) + parseFloat(this.b);
		return Math.sqrt(square);
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

	drawModulo() {

		this.canvas.clear();

		let cell_width = this.canvas.width / (this.m + 2);

		// Vertical lignes
		for (let i = 0; i < this.m; i ++) {
			let x = i * cell_width;
			this.canvas.context.textAlign="center"; 
			this.canvas.context.fillText(i,x + cell_width + 50, this.canvas.height - 10);
		    this.canvas.context.moveTo(x + cell_width + 50, 0, 50);
		    this.canvas.context.lineTo(this.canvas.x_coord(i), this.canvas.height - cell_width);
		}

		// Horizontal lines
		for (let i = 0; i < this.m; i ++) {
			let x = i * cell_width
			this.canvas.context.textAlign="center"; 
			this.canvas.context.fillText(i, 20, this.canvas.height - i * cell_width - cell_width * 2 + 5);
		    this.canvas.context.moveTo(50, x + cell_width);
		    this.canvas.context.lineTo(this.canvas.width, x + cell_width);
		}

		this.canvas.context.lineWidth=1;
		this.canvas.context.strokeStyle = "black";
		this.canvas.context.stroke();


		for(let x = 0; x < this.m; x++) {
			let ys = this.calc(x);
			for(let y_indice = 0; y_indice < ys.length; y_indice++) {

				// Add solutions points

				this.canvas.context.beginPath();
				this.canvas.context.arc(this.canvas.x_coord(x), this.canvas.y_coord(ys[y_indice]),10,0,2*Math.PI);
				this.canvas.context.fillStyle = "green";
				this.canvas.context.fill();

				// Draw curve

				let k = Math.pow(ys[y_indice], 2) - Math.pow(x, 3) - this.a * x - this.b;

				console.log(this.b + k)

				let f = new Elliptic(this.a, this.b + k);

				this.canvas.context.beginPath();

				for(var i = -1; i <= this.m + 1; i = i + 0.01) {
					let y = f.calc(i);
					//if(isNaN(y)) this.canvas.context.beginPath();

					if(y >= -1 && y <= this.m) this.canvas.context.lineTo(this.canvas.x_coord(i), this.canvas.y_coord(y));

				}

				this.canvas.context.lineWidth=3;
				this.canvas.context.strokeStyle = "red";
				this.canvas.context.stroke();
				
			}
		}



	}


}

function Exception(message) {
   this.message = message;
   this.name = "Exception";
}