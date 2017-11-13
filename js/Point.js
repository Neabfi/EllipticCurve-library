/**
 * Point class
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @example
 * let point = new Point(1, 0, 1);
 */
class Point {
	constructor(x = 0, y = 0, z = 1) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}