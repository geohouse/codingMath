import { Vector } from "./vector.js";

export class Particle {
  constructor(x, y, speed, direction) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }

  update() {
    this.position.addTo(this.velocity);
  }
}
