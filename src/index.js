const simulateOrbit = require("./scripts/orbitSim.js");
const simulateGravity = require("./scripts/gravitySim.js");

document.addEventListener('DOMContentLoaded', () => {

  function getPlanetData(planetName='earth') {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      simulateOrbit(data);
      simulateGravity(data);
    });
  }
  getPlanetData("jupiter");
})