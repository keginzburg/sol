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
          },
          grid: {
            color: "#13e24f",
          }
        },
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
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

  const navBar = document.querySelector(".nav_bar_planet_buttons");
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
            renderChart(myChart, data);
            renderData(data);
        });
    }
    getPlanetData(planetName);

  })

  const modalCloseButton = document.querySelector(".close_modal_button");
  modalCloseButton.addEventListener('click', function () {
    const modal = document.querySelector(".modal_container");
    modal.setAttribute("hidden", true);
  })

  const modalOpenButton = document.querySelector(".open_modal_button");
  modalOpenButton.addEventListener('click', function () {
    const modal = document.querySelector(".modal_container");
    modal.removeAttribute("hidden");
  })

})