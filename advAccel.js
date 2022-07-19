import { Vector, Particle } from "./physicsClasses.js";

window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    ship = new Particle(width / 2, height / 2, 0, 0),
    thrust = new Vector(0, 0),
    angle = 0,
    turningLeft = false,
    turningRight = false,
    thrustOn = false;

  // Apply the correct thrust vector amount when each arrow key is pressed
  document.body.addEventListener("keydown", function (event) {
    // ArrowUp
    // ArrowDown
    // ArrowLeft
    // ArrowRight
    //console.log(event.code);
    switch (event.code) {
      case "ArrowUp":
        thrustOn = true;
        //thrust.y = -0.1;
        break;
      case "ArrowDown":
        //thrust.y = 0.1;
        break;
      case "ArrowLeft":
        turningLeft = true;
        //thrust.x = -0.1;
        break;
      case "ArrowRight":
        turningRight = true;
        //thrust.x = 0.1;
        break;
      default:
        break;
    }
  });

  // Remove the thrust vector when the key is released
  document.body.addEventListener("keyup", function (event) {
    // ArrowUp
    // ArrowDown
    // ArrowLeft
    // ArrowRight
    //console.log(event.code);
    switch (event.code) {
      case "ArrowUp":
        thrustOn = false;
        //thrust.y = 0;
        break;
      case "ArrowDown":
        //thrust.y = 0;
        break;
      case "ArrowLeft":
        turningLeft = false;
        //thrust.x = 0;
        break;
      case "ArrowRight":
        turningRight = false;
        //thrust.x = 0;
        break;
      default:
        break;
    }
  });

  function update() {
    context.clearRect(0, 0, width, height);

    if (turningLeft) {
      angle -= 0.05;
    }
    if (turningRight) {
      angle += 0.05;
    }

    thrust.setAngle(angle);

    if (thrustOn) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(0);
    }

    ship.accelerate(thrust);
    ship.update();

    context.save();
    context.translate(ship.position.x, ship.position.y);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10, -7);
    context.lineTo(-10, 7);
    context.lineTo(10, 0);
    if (thrustOn) {
      context.moveTo(-10, 0);
      context.lineTo(-18, 0);
    }
    context.stroke();
    context.restore();
    //context.arc(ship.position.x, ship.position.y, 10, 0, Math.PI * 2, false);
    //context.fill();

    // Wrap the ship around the screen if it goes off any of the edges
    if (ship.position.x > width) {
      ship.position.x = 0;
    }

    if (ship.position.x < 0) {
      ship.position.x = width;
    }

    if (ship.position.y > height) {
      ship.position.y = 0;
    }

    if (ship.position.y < 0) {
      ship.position.y = height;
    }

    requestAnimationFrame(update);
  }

  update();
};
