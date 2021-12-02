const Planet = require("./planet.js");

document.addEventListener('DOMContentLoaded', (e) => {
  const orbitCanvas = document.querySelector(".orbit_canvas");
  orbitCanvas.width = 500;
  orbitCanvas.height = 500;
  const ctx = orbitCanvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  let planet;

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    space();
    planet.updatePlanet(ctx);
  }

  function getPlanetData(planetName) {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        planet = new Planet(canvas.width / 2, canvas.height / 2, data.meanRadius * 0.001);
        animate();
      });
  }

  getPlanetData('jupiter');

})