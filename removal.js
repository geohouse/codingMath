import { Vector, Particle } from "./physicsClasses.js";
// Removes particles from having to be rendered/animated once
// they've left the screen
window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    particles = [];

  for (let i = 0; i < 1000; i++) {
    let p = new Particle(
      width / 2,
      height / 2,
      Math.random() * 5 + 2,
      Math.random() * Math.PI * 2
    );
    p.radius = 10;
    particles.push(p);
  }

  function removeDeadParticles() {
    // loop backwards to allow splice removal of items from the
    // array by index
    for (let i = particles.length - 1; i >= 0; i--) {
      let p = particles[i];
      //console.log(p);
      if (
        p.position.x - p.radius > width ||
        p.position.x + p.radius < 0 ||
        p.position.y - p.radius > height ||
        p.position.y + p.radius < 0
      ) {
        particles.splice(i, 1);
      }
    }
  }
  //let sun = new Particle(width / 2, height / 2, 0, 0);
  //let planet = new Particle(width / 2 + 300, height / 2, 10, -Math.PI / 2);

  function update() {
    context.clearRect(0, 0, width, height);
    // Keep track of the number of particles that are still on screen
    // and being renderd
    console.log(particles.length);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();

      context.beginPath();
      context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
      context.fill();

      // Wrap the ship around the screen if it goes off any of the edges
      //   if (p.position.x - p.radius > width) {
      //     p.position.x = -p.radius;
      //   }

      //   if (p.position.x + p.radius < 0) {
      //     p.position.x = width + p.radius;
      //   }

      //   if (p.position.y - p.radius > height) {
      //     p.position.y = -p.radius;
      //   }

      //   if (p.position.y + p.radius < 0) {
      //     p.position.y = height + p.radius;
      //   }
    }
    removeDeadParticles();
    requestAnimationFrame(update);
  }
  update();
};
