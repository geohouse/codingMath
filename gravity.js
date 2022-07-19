window.onload = function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  function update() {
    context.clearRect(0, 0, width, height);

    // Animation will go here

    requestAnimationFrame(update);
  }
  update();
};
