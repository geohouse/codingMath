import { Vector, Particle } from "./physicsClasses.js";
// Recycles particles to the position of an emitter when they move off the screen,
// like an endless fountain.
window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    particles = [];

  function update() {
    context.clearRect(0, 0, width, height);
    // Keep track of the number of particles that are still on screen
    // and being renderd

    // Create 10 particles at a time per frame at the beginning,
    // then this will skip once all have been created. This allows the
    // fountain effect to start sooner.
    if (particles.length < 1000) {
      for (let i = 0; i < 10; i++) {
        let p = new Particle(
          width / 2,
          height,
          Math.random() * 8 + 5,
          -Math.PI / 2 + (Math.random() * 0.2 - 0.1),
          0.1
        );
        p.radius = Math.random() * 10 + 2;
        particles.push(p);
        //console.log(p.gravity);
      }
    }
    console.log(particles.length);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();

      context.beginPath();
      context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false);
      context.fill();

      // Recycle points back to the starting location in the middle of the bottom edge
      if (p.position.y - p.radius > height) {
        p.position.x = width / 2;
        p.position.y = height;
        p.velocity.setLength(Math.random() * 8 + 5);
        p.velocity.setAngle(-Math.PI / 2 + Math.random() * 0.2 - 0.1);
      }
    }
    //removeDeadParticles();
    requestAnimationFrame(update);
  }
  update();
};
