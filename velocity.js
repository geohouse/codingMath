import { Particle } from "./particle.js";

window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    particles = [],
    numParticles = 100;

  for (let i = 0; i < numParticles; i++) {
    particles.push(
      new Particle(
        width / 2,
        height / 2,
        Math.random() * 4 + 1,
        Math.random() * Math.PI * 2
      )
    );
  }
  //let p = new Particle(100, 100, 3, Math.PI / 6);
  //let position = new Vector(500, 500);
  //let velocity = new Vector(0, 0);

  //   velocity.setLength(20);
  //   velocity.setAngle((3 * Math.PI) / 4);

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    for (let i = 0; i < numParticles; i++) {
      let p = particles[i];

      p.update();
      //position.addTo(velocity);
      context.beginPath();
      context.arc(p.position.x, p.position.y, 10, 0, 2 * Math.PI, false);
      context.fill();
    }
    requestAnimationFrame(update);
  }
  context.fillRect(0, 0, width, height);
};
