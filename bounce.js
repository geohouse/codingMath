import { Vector, Particle } from "./physicsClasses.js";
// Recycles particles to the position of an emitter when they move off the screen,
// like an endless fountain.
window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    // Has some gravity with the 0.1
    p = new Particle(
      width / 2,
      height / 2,
      5,
      Math.random() * Math.PI * 2,
      0.1
    );

  p.radius = 40;
  // These are the bounce conditions. Values greater than -1 mean that some velocity is
  // lost on each bounce
  p.bounce = -0.5;

  function update() {
    context.clearRect(0, 0, width, height);

    p.update();

    context.beginPath();
    context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
    context.fill();

    // These are the bounce conditions. Multiplying by greater than -1
    // makes some of the velocity be lost on each bounce
    if (p.position.x + p.radius > width) {
      p.position.x = width - p.radius;
      p.velocity.x = p.velocity.x * p.bounce;
    }

    if (p.position.x - p.radius < 0) {
      p.position.x = p.radius;
      p.velocity.x = p.velocity.x * p.bounce;
    }

    if (p.position.y + p.radius > height) {
      p.position.y = height - p.radius;
      p.velocity.y = p.velocity.y * p.bounce;
    }

    if (p.position.y - p.radius < 0) {
      p.position.y = p.radius;
      p.velocity.y = p.velocity.y * p.bounce;
    }

    requestAnimationFrame(update);
  }
  update();
};
