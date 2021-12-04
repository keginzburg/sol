const Entropy = require("./entropy.js");

function simulateTemp(data) {
  const tempCanvas = document.querySelector(".temperature_canvas");
  tempCanvas.width = 250;
  tempCanvas.height = 250;

  const ctx = tempCanvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, gravityCanvas.width, gravityCanvas.height);
  }

  // //function animate() {
  //   requestAnimationFrame(animate);
  //   ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
  //   space();
  // //}

  let entropy = new Entropy(ctx, data);
  entropy.createParticles();
  entropy.render();
  //animate();

}

module.exports = simulateTemp;