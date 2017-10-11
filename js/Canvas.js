class Canvas {

	constructor(canvas, m) {
		this.canvas = document.querySelector('#' + canvas);
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.cellsCount = parseFloat(m);
		this.cell_width = this.width / (this.cellsCount + 2);
		this.context.font = "15px Arial";
	}

	clear() {
		this.context.beginPath();
		this.context.clearRect(0, 0, this.width, this.height);
		this.context.beginPath();
	}

	// Logical to physical coord
	x_coord(x) {
		x *= this.cell_width;
		x += this.cell_width + 50
		return x;
	}

	// Logical to physical coord
	y_coord(y) {
		y = this.height - this.cell_width * parseFloat(y) - this.cell_width * 2
		return y;
	}
}