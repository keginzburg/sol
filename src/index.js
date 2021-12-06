const simulateOrbit = require("./scripts/orbitSim.js");
const simulateGravity = require("./scripts/gravitySim.js");
const simulateTemp = require("./scripts/tempSim.js");

document.addEventListener('DOMContentLoaded', () => {
  let navBar = document.querySelector(".nav_bar");
  navBar.addEventListener('click', function(event) {
    let planetName = event.target.innerText;

    function getPlanetData(planetName = 'earth') {
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
            simulateOrbit(data);
            simulateGravity(data);
            simulateTemp(data);
        });
    }
    getPlanetData(planetName);

  })


  // function getPlanetData(planetName='earth') {
  //   fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     simulateOrbit(data);
  //     simulateGravity(data);
  //     simulateTemp(data);
  //   });
  // }
  // getPlanetData("jupiter");
})