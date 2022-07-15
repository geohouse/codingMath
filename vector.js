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

  setAngle(angle) {
    let length = this.getLength();
    this.#x = Math.cos(angle) * length;
    this.#y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.#y, this.#x);
  }

  setLength(length) {
    let angle = this.getAngle();
    this.#x = Math.cos(angle) * length;
    this.#y = Math.sin(angle) * length;
  }

  //getLength() {
  //  return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  //}
  test() {
    return "test";
  }
  add(v2) {
    return "test"; //new Vector(this.#x + v2.x, this.#y + v2.y);
  }
}
