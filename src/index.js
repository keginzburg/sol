const Planet = require("./planet.js");
const Moon = require("./moon.js");

document.addEventListener('DOMContentLoaded', () => {
  const orbitCanvas = document.querySelector(".orbit_canvas");
  orbitCanvas.width = 500;
  orbitCanvas.height = 500;

  const ctx = orbitCanvas.getContext('2d');
  const ctx2 = orbitCanvas.getContext('2d');


  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, orbitCanvas.width, orbitCanvas.height);
  }

  let planet;
  let moons;

  function captureMoons(moonData) {
    moons = [];

    if (moonData != null)
      for (let i = 0; i < moonData.length; i++) {
        let moonURL = moonData[i].rel;
        fetch(moonURL)
          .then(response => {
            return response.json();
          })
          .then(data => {
            if (data.meanRadius > data.equaRadius) {
              let moonRadius = data.meanRadius;
              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, (27 / data.sideralOrbit) * 0.003));
            } else {
              let moonRadius = data.equaRadius;
              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, (27 / data.sideralOrbit) * 0.009));
            }
          })

        //let eccentricity = getMoonData(moonURL);
        // eccentricity = c/a
        // c is distance from center of ellipse to focus
        // a is semimajoraxis
        // find out the x axis distance shift and add it the x coordinate
        // possibly change the velocity depending on its eccentricity? or just give it a blanket speed according to its sideral orbital data point?

        // moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.random() * 2, "rgba(200,65,47,255)", Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, Math.random()*0.003));
      }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    space();

    planet.updatePlanet(ctx);
    moons.forEach(moon => {
      moon.updateMoon(ctx2);
    })
  }

  function getPlanetData(planetName) {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        planet = new Planet(orbitCanvas.width / 2, orbitCanvas.height / 2, data.meanRadius * 0.001);
        captureMoons(data.moons);
        animate();
      });
  }

  getPlanetData('jupiter');

})