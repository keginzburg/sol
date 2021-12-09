const Entropy = require("./entropy.js");

function simulateTemp(data) {
  const tempCanvas = document.querySelector(".temperature_canvas");
  tempCanvas.width = 250;
  tempCanvas.height = 250;

  const ctx3 = tempCanvas.getContext('2d');

  let entropy = new Entropy(ctx3, data);
  entropy.createParticles();
  entropy.animate();
}

module.exports = simulateTemp;