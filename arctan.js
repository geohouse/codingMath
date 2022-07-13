window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    // location where arrow is drawn
    arrowX = width / 2,
    arrowY = height / 2,
    // distance between arrow and the mouse
    dx,
    dy,
    x,
    y,
    angle = 0,
    speed = 0.01,
    radius = 200;

  function render() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20, 0);
    context.lineTo(10, 10);
    context.stroke();
    context.restore();
    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", function (event) {
    dx = event.clientX - arrowX;
    dy = event.clientY - arrowY;
    angle = Math.atan2(dy, dx);
    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
  });

  render();
};
