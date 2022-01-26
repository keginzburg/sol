const simulateOrbit = require("./scripts/orbitSim.js");
const simulateGravity = require("./scripts/gravitySim.js");
const simulateTemp = require("./scripts/tempSim.js");
const renderChart = require("./scripts/dataChart.js");
const renderData = require("./scripts/renderData.js");

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Moons', 'Gravity', 'Density'],
      datasets: [{
        label: "",
        data: [],
        backgroundColor: [
          "rgba(rgba(19,226,79,255)"
        ],
        borderColor: [
          "rgba(19, 226, 79, 255)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            color: "#13e24f",
          },
          grid: {
            color: "#13e24f",
          }
        },
        y: {
          ticks: {
            color: "#13e24f",
            beginAtZero: true
          },
          grid: {
            color: "#13e24f",
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });
  ctx.shadowBlur = 4;
  ctx.shadowColor = "rgba(19, 226, 79, 255)";

  let moons;

  const navBar = document.querySelector(".nav_bar_planet_buttons");
  navBar.addEventListener('click', function(event) {

    let planetName = event.target.innerText;
    moonInfo.innerText = "moon id:";

    function getPlanetData(planetName = 'earth') {
      moons = [];
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json();
        })
        .then(data => {
            simulateOrbit(data, moons);
            simulateGravity(data);
            simulateTemp(data);
            renderChart(myChart, data);
            renderData(data);
        })
        .catch(error => {
          console.error('Houston, we have a problem:', error);
        });
    }
    getPlanetData(planetName);

  })

  const modalCloseButton = document.querySelector(".close_modal_button");
  modalCloseButton.addEventListener('click', function () {
    const modal = document.querySelector(".modal_transparent");
    modal.setAttribute("hidden", true);
    document.getElementById("music").play();
  })

  const modalOpenButton = document.querySelector(".open_modal_button");
  modalOpenButton.addEventListener('click', function () {
    const modal = document.querySelector(".modal_transparent");
    modal.removeAttribute("hidden");
  })

  let count = true;
  const volumeButton = document.getElementById("volume");
  volumeButton.addEventListener('click', function () {
    if (count) {
      volumeButton.setAttribute('src', "./assets/icons/volume-off-solid.png");
      count = false;
      document.getElementById("music").muted = true;
    } else {
      volumeButton.setAttribute('src', "./assets/icons/volume-up-solid.png");
      count = true;
      document.getElementById("music").muted = false;
    }
  })

  let pause = true;
  const moonInfo = document.querySelector(".moon_info");
  const pauseButton = document.querySelector(".orbit_pause");
  pauseButton.addEventListener('click', function () {
    if (pause) {
      pauseButton.id = 'on';
      pause = false;
      pauseButton.innerHTML = '<i class="fas fa-play"></i>';
      moonInfo.style.display = "inline-block";
    } else {
      pauseButton.id = 'off';
      pause = true;
      pauseButton.innerHTML = '<i class="fas fa-pause"></i>'
      moonInfo.style.display = "none";
    }
  })

  function getMousePos(canvas, e) {
    const square = canvas.getBoundingClientRect();
    return {
      x: e.clientX - square.left,
      y: e.clientY - square.top
    };
  }

  const orbitCanvas = document.querySelector(".orbit_canvas");
  orbitCanvas.addEventListener('mousemove', (e) => {
    let mouse = getMousePos(orbitCanvas, e);
    if (moons) {
      moons.forEach(moon => {
        let moonX = Math.floor(moon.x);
        let moonY = Math.floor(moon.y);
        if ((mouse.x - 6 < moonX + 10 && mouse.x - 6 > moonX - 10) && (mouse.y - 4 < moonY + 5 && mouse.y - 4 > moonY - 5)) {
          if (moon.name === "") {
            moonInfo.innerText = "moon id: unknown";
          } else {
            moonInfo.innerText = `moon id: ${moon.name.toLowerCase()}`;
          }
        }
      })
    }
    
  })

})