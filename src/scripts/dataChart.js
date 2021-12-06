
function renderChart(chart, fetchedData) {
  let myChart = chart;
  let moons;
  if (fetchedData.moons != null) {
    moons = fetchedData.moons.length;
  } else {
    moons = 0;
  }
  let gravity = fetchedData.gravity;
  let density = fetchedData.density;

  function addData(chart, planetData) {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(planetData);
    })
    chart.update();
  }

  function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
  removeData(myChart);
  removeData(myChart);
  removeData(myChart);
  addData(myChart, moons);
  addData(myChart, gravity);
  addData(myChart, density);

}

module.exports = renderChart;

