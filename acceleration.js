import { Vector, Particle } from "./physicsClasses.js";

// toggle whether using a single point or 'fireworks'
let singleToggle = true;
let p;
window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    gravity = [],
    numParticles = 100;
  if (!singleToggle) {
    for (let i = 0; i < numParticles; i++) {
      gravity.push(
        new Particle(
          width / 2,
          height / 2,
          Math.random() * 4 + 1,
          Math.random() * Math.PI * 2
        )
      );
    }
  } else {
    p = new Particle(100, height, 10, -Math.PI / 2);
  }

  // This script imports the Particle class
  let accel = new Vector(0.1, 0.1);
  //let position = new Vector(500, 500);
  //let velocity = new Vector(0, 0);

  //   velocity.setLength(20);
  //   velocity.setAngle((3 * Math.PI) / 4);

  function update() {
    context.clearRect(0, 0, width, height);

    if (!singleToggle) {
      for (let i = 0; i < numParticles; i++) {
        let p = gravity[i];
        p.accelerate(accel);
        p.update();
        context.beginPath();
        context.arc(p.position.x, p.position.y, 10, 0, 2 * Math.PI, false);
        context.fill();
      }
    } else {
      p.accelerate(accel);
      p.update();
      //position.addTo(velocity);
      context.beginPath();
      context.arc(p.position.x, p.position.y, 10, 0, 2 * Math.PI, false);
      context.fill();
    }
    //}

    requestAnimationFrame(update);
  }
  update();
  context.fillRect(0, 0, width, height);
};
