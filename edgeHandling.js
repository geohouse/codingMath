import { Vector, Particle } from "./physicsClasses.js";

window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);
  let p = new Particle(width / 2, height / 2, 3, Math.random() * Math.PI * 2);
  p.radius = 50;
  //let sun = new Particle(width / 2, height / 2, 0, 0);
  //let planet = new Particle(width / 2 + 300, height / 2, 10, -Math.PI / 2);

  function update() {
    context.clearRect(0, 0, width, height);

    p.update();

    context.beginPath();
    context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
    context.fill();

    // Wrap the ship around the screen if it goes off any of the edges
    if (p.position.x - p.radius > width) {
      p.position.x = -p.radius;
    }

    if (p.position.x + p.radius < 0) {
      p.position.x = width + p.radius;
    }

    if (p.position.y - p.radius > height) {
      p.position.y = -p.radius;
    }

    if (p.position.y + p.radius < 0) {
      p.position.y = height + p.radius;
    }

    requestAnimationFrame(update);
  }
  update();
};
