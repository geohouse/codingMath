// bundle the exported classes together for easier loading/use
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

//import { Vector } from "./vector.js";

export class Particle {
  constructor(x, y, speed, direction, grav) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
    this.mass = 1;
    this.radius = 0;
    this.gravity = new Vector(0, grav || 0);
    // -1 is maximum bounce, 0 is no bounce
    this.bounce = -1;
    // 1 is no friction (this is a multiplier)
    this.friction = 1;

  }
  accelerate(accel) {
    this.velocity.addTo(accel);
  }
  update() {
    this.velocity.multiplyBy(this.friction);
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }

  angleTo(p2) {
    return Math.atan2(
      p2.position.y - this.position.y,
      p2.position.x - this.position.x
    );
  }

  distanceTo(p2) {
    let dx = p2.position.x - this.position.x;
    let dy = p2.position.y - this.position.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  gravitateTo(p2) {
    let grav = new Vector(0, 0);
    let dist = this.distanceTo(p2);
    grav.setLength(p2.mass / (dist * dist));
    grav.setAngle(this.angleTo(p2));
    this.velocity.addTo(grav);
  }
}
