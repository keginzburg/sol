const FallingObject = require("./fallingObject.js");

function simulateGravity() {
  const gravityCanvas = document.querySelector(".gravity_canvas");
  gravityCanvas.width = 250;
  gravityCanvas.height = 250;

  ctx = gravityCanvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, orbitCanvas.width, orbitCanvas.height);
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gravityCanvas.width, gravityCanvas.height);
    space();

    object.updateObject();
  }
  
  let object;

  function createObject() {
    object = new FallingObject();
    animate();
  }

  createObject();

}

simulateGravity();