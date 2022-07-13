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
    x = 0,
    y = 0,
    angle = Math.PI / 4,
    angleTest = 0,
    //angle = 0,
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
    //x = Math.cos(animateAngle) * radius;
    //y = Math.sin(animateAngle) * radius;
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
    //animateAngle += speed;
    //console.log(animateAngle - prevHolder);
    context.restore();
    requestAnimationFrame(render);
  }

  // event.clientX and clientY are relative to upper left corner
  // x and y are relative to the translated 0,0 point at arrowX and arrowY,
  // and are also on rotated coordinates by angle.
  let rescaleX = 0,
    rescaleY = 0,
    rescaleRotateX = 0,
    rescaleRotateY = 0;
  document.body.addEventListener("mousemove", function (event) {
    rescaleX = event.clientX - width / 2;
    // -1 needed to flip the y axis
    rescaleY = -1 * (event.clientY - height / 2);
    // Now need to rotate by the previous angle (used to render the arrow, and used for the x, y coords)
    console.log(rescaleX);
    console.log({ x });
    console.log(rescaleY);
    console.log({ y });
    // Rotate axes CW
    rescaleRotateX =
      -1 * rescaleX * Math.cos(angle) + rescaleY * Math.sin(angle);
    rescaleRotateY = rescaleX * Math.sin(angle) + rescaleY * Math.cos(angle);
    console.log({ rescaleRotateX });
    console.log({ rescaleRotateY });

    dx = rescaleRotateX - x;
    dy = rescaleRotateY - y;
    angleTest = 180 - Math.atan2(dy, dx) * (180 / Math.PI);
    console.log({ angleTest });
    //angle = Math.atan2(dy, dx);
    console.log({ dx });
    console.log({ dy });
    console.log(angle);
  });

  render();
};
