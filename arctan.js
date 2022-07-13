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
    animateAngle = 0,
    speed = 0.01,
    radius = 200,
    prevHolder = 0;

  function render() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);
    // Canvas already offset by arrowX and arrowY, so don't need any other offset.
    x = Math.cos(animateAngle) * radius;
    y = Math.sin(animateAngle) * radius;
    context.beginPath();

    context.moveTo(x + 20, y + 0);
    context.lineTo(x - 20, y + 0);
    context.moveTo(x + 20, y + 0);
    context.lineTo(x + 10, y - 10);
    context.moveTo(x + 20, y + 0);
    context.lineTo(x + 10, y + 10);
    //context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.stroke();

    context.fill();
    // For testing animation speeds.
    prevHolder = animateAngle;
    animateAngle += speed;
    //console.log(animateAngle - prevHolder);
    context.restore();
    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", function (event) {
    console.log(event.clientX);
    console.log({ x });
    console.log(event.clientY);
    console.log({ y });
    dx = Math.abs(event.clientX - x);
    dy = Math.abs(event.clientY - y);
    angle = Math.atan2(dy, dx);
    console.log({ dx });
    console.log({ dy });
    console.log(angle);
  });

  render();
};
