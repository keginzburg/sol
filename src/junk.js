document.addEventListener('DOMContentLoaded', (e) => {
  const canvas = document.querySelector("canvas");
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');

  function space() {
    const spaceColor = "rgba(20,29,33,255)";
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  function Planet(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = () => {
      this.draw();
    }

    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.shadowBlur = 3;
      ctx.shadowColor = this.color;
      ctx.closePath();
    }
  }

  function Moon(x, y, radius, color, radians, distanceX, distanceY, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = radians;
    this.distanceX = distanceX;
    this.distanceY = distanceY;
    this.velocity = velocity;

    this.update = () => {
      // Move points over time
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceX;
      this.y = y + Math.sin(this.radians) * this.distanceY;
      this.draw();
    }

    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.closePath();
    }
  }

  let planet;

  let moons;
  function initMoons(moonData) {
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
              console.log(data.sideralOrbit)
              console.log(data.name)
              let moonRadius = data.meanRadius;
              moons.push(new Moon(canvas.width / 2, canvas.height / 2, Math.ceil(moonRadius * 0.001), "rgba(200,65,47,255)", Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, (27 / data.sideralOrbit) * 0.003));
            } else {
              console.log(data.sideralOrbit)
              console.log(data.name)
              let moonRadius = data.equaRadius;
              moons.push(new Moon(canvas.width / 2, canvas.height / 2, Math.ceil(moonRadius * 0.001), "rgba(200,65,47,255)", Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, (27 / data.sideralOrbit) * 0.009));
            }
          })


        //let eccentricity = getMoonData(moonURL);
        // eccentricity = c/a
        // c is distance from center of ellipse to focus
        // a is semimajoraxis
        // find out the x axis distance shift and add it the x coordinate
        // possibly change the velocity depending on its eccentricity? or just give it a blanket speed according to its sideral orbital data point?

        // moons.push(new Moon(canvas.width / 2, canvas.height / 2, Math.random() * 2, "rgba(200,65,47,255)", Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, Math.random()*0.003));
      }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    space();

    planet.update();
    moons.forEach(moon => {
      moon.update();
    });
  }

  // function getMoonData(moonURL) {
  //   fetch(moonURL)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       return data.eccentricity;})
  // }

  function getPlanetData(planetName) {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        planet = new Planet(canvas.width / 2, canvas.height / 2, data.meanRadius * 0.001, "rgba(196,238,204,255)");
        initMoons(data.moons);
        animate();
        console.log(data);
      });
  }

  getPlanetData('jupiter');


  // async function getPlanetData() {
  //   let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter')
  //   let data = await response.json()
  //   return data;
  // }

  // let planetData = getPlanetData();
  // console.log(planetData.resolve());

  // init();

})



// const Simulation = true;
// const Moon = true;
// const Planet = true;
// const FallingObject = true;
// const Heat = true;

// rgba(56,231,142,255) GREEN v1
// rgba(19,226,79,255) GREEN v2

// moonColor = rgba(200,65,47,255)
// planetColor = rgba(196,238,204,255)