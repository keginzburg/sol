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
    ghost.updateGhost(ctx, object);
  }
  
  let object;
  let ghost;

  function createObject(data) {
    // if (data.gravity === 9.8) {
    //   object = new FallingObject(data.gravity, "rgba(228,235,241,255)");
    //   animate();
    // } else {
      object = new FallingObject(data.gravity, "rgba(117,243,252,255)");
      ghost = new FallingObject(9.8, "rgba(228,235,241,0.3)")
      animate();
    
  }

  createObject(data);

}

module.exports = simulateGravity;