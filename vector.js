export class Vector {
  // Need to declare private instance variables before setting them in the constructor.
  #x;
  #y;
  constructor(xInput, yInput) {
    this.#x = xInput;
    this.#y = yInput;
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = value;
  }

  get y() {
    return this.#y;
  }

  set y(value) {
    this.#y = value;
  }
  // Sets the angle while keeping the length the same
  setAngle(angle) {
    let length = this.getLength();
    this.#x = Math.cos(angle) * length;
    this.#y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.#y, this.#x);
  }
  // Sets the length while keeping the angle the same
  setLength(length) {
    let angle = this.getAngle();
    this.#x = Math.cos(angle) * length;
    this.#y = Math.sin(angle) * length;
  }

  getLength() {
    return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  }
  test() {
    return "test";
  }
  add(v2) {
    return new Vector(this.#x + v2.x, this.#y + v2.y);
  }

  subtract(v2) {
    return new Vector(this.#x - v2.x, this.#y - v2.y);
  }

  multiply(v2) {
    return new Vector(this.#x * v2.x, this.#y * v2.y);
  }

  divide(v2) {
    return new Vector(this.#x / v2.x, this.#y / v2.y);
  }

  addTo(v2) {
    this.#x += v2.x;
    this.#y += v2.y;
  }

  subtractFrom(v2) {
    this.#x -= v2.x;
    this.#y -= v2.y;
  }

  multiplyBy(v2) {
    this.#x *= v2.x;
    this.#y *= v2.y;
  }

  divideBy(v2) {
    this.#x /= v2.x;
    this.#y /= v2.y;
  }
}
