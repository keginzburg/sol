const FallingObject = require("./fallingObject.js");

function simulateGravity(data) {
  const gravityCanvas = document.querySelector(".gravity_canvas");
  gravityCanvas.width = 250;
  gravityCanvas.height = 250;

  const ctx = gravityCanvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, gravityCanvas.width, gravityCanvas.height);
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gravityCanvas.width, gravityCanvas.height);
    space();

    object.updateObject(ctx);
  }
  
  let object;

  function createObject(data) {
    object = new FallingObject(data.gravity);
    animate();
  }

  createObject(data);

}

module.exports = simulateGravity;