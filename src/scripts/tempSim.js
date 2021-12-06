const Entropy = require("./entropy.js");

function simulateTemp(data) {
  const tempCanvas = document.querySelector(".temperature_canvas");
  tempCanvas.width = 250;
  tempCanvas.height = 250;

  const ctx3 = tempCanvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx3.fillStyle = spaceColor;
    ctx3.fillRect(0, 0, gravityCanvas.width, gravityCanvas.height);
  }

  // //function animate() {
  //   requestAnimationFrame(animate);
  //   ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
  //   space();
  // //}

  let entropy = new Entropy(ctx3, data);
  entropy.createParticles();
  entropy.render();
  //animate();

}

module.exports = simulateTemp;