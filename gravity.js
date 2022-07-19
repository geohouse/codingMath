import { Vector, Particle } from "./physicsClasses.js";

window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  let sun = new Particle(width / 2, height / 2, 0, 0);
  let planet = new Particle(width / 2 + 300, height / 2, 10, -Math.PI / 2);

  sun.mass = 25000;

  function update() {
    context.clearRect(0, 0, width, height);

    planet.gravitateTo(sun);
    planet.update();
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.arc(sun.position.x, sun.position.y, 20, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.fillStyle = "#0000ff";
    context.arc(planet.position.x, planet.position.y, 5, 0, Math.PI * 2, false);
    context.fill();
    // Animation will go here

    requestAnimationFrame(update);
  }
  update();
};
