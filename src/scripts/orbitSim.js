const Planet = require("./planet.js");
const Moon = require("./moon.js");

function simulateOrbit(planetName) {
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

  function optimizeAxis(semimajorAxis) {
    if (semimajorAxis < 100000) {
      return Math.random() * 35 + 100;
    } else if (semimajorAxis < 1000000 && semimajorAxis > 100000) {
      return Math.random() * 35 + 135;
    } else if (semimajorAxis < 10000000 && semimajorAxis > 1000000) {
      return Math.random() * 35 + 170;
    } else {
      return Math.random() * 35 + 205;
    }
  }

  function semiMinorAxis(major, eccen) {
    return major * (Math.sqrt(1 - (eccen * eccen)));
  }

  function optimizeSpeed(sideralOrbit) {
    if (sideralOrbit < 1) {
      return Math.random() * 0.001 + 0.01;
    } else if (sideralOrbit > 1 && sideralOrbit < 10) {
      return Math.random() * 0.001 + 0.0025;
    } else if (sideralOrbit > 10 && sideralOrbit < 100) {
      return Math.random() * 0.001 + 0.000625;
    } else if (sideralOrbit > 100 && sideralOrbit < 1000) {
      return Math.random() * 0.001 + 0.00015625;
    } else {
      return Math.random() * 0.001 + 0.00003906;
    }
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
            let moonDistanceX = optimizeAxis(data.semimajorAxis);
            let moonDistanceY = semiMinorAxis(moonDistanceX, data.eccentricity);
            let moonSpeed = optimizeSpeed(data.sideralOrbit);

            if (data.meanRadius > data.equaRadius) {
              let moonRadius = data.meanRadius;
              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random() * Math.PI * 2, moonDistanceX, moonDistanceY, moonSpeed));
            } else {
              let moonRadius = data.equaRadius;
              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random() * Math.PI * 2, moonDistanceX, moonDistanceY, moonSpeed));
            }
          })
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

  function getPlanetData(planetName = 'earth') {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        planet = new Planet(orbitCanvas.width / 2, orbitCanvas.height / 2, data.meanRadius * 0.001);
        captureMoons(data.moons);
        animate();
      });
  }

  getPlanetData(planetName);
}

module.exports = simulateOrbit;