const simulateOrbit = require("./scripts/orbitSim.js");
const simulateGravity = require("./scripts/gravitySim.js");
const simulateTemp = require("./scripts/tempSim.js");
const renderChart = require("./scripts/dataChart.js");

document.addEventListener('DOMContentLoaded', () => {
  let navBar = document.querySelector(".nav_bar");

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Moons', 'Grav', 'Temp'],
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
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

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