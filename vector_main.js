class Vector {
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
}

//import { Vector } from "./vector.js";

let v1 = new Vector(10, 5);
console.log(`V1 is: ${v1.x}, ${v1.y}`);
console.log(v1.x);
console.log(v1.y);

console.log(v1.getAngle());
console.log(v1.getLength());

//v1.setAngle(Math.PI / 6);
//v1.setLength(100);

console.log(v1.x);
console.log(v1.y);

let v2 = new Vector(3, 4);
console.log(`V2 is: ${v2.x}, ${v2.y}`);
let v3 = v1.add(v2);

console.log(v3);

console.log("Gussy!!!!!");

//console.log(v1.getLength());

let v4 = v1.multiply(v2);
let v5 = v1.subtract(v2);

console.log(v4);
console.log(v5);

let v6 = v1.addTo(v2);
console.log(v1);
console.log(v6);
