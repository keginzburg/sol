
function renderData(data) {
  const nameHeader = document.querySelector(".planet_id");
  const angloHeader = document.querySelector(".planet_name");
  const massHeader = document.querySelector(".planet_mass");
  const densityHeader = document.querySelector(".planet_density");
  const gravityHeader = document.querySelector(".planet_gravity");
  const moonsHeader = document.querySelector(".planet_moons");
  const temperatureHeader = document.querySelector(".planet_temperature");

  nameHeader.innerText = data.name;
  nameHeader.style.textIndent = 0;
  angloHeader.innerText = data.englishName;
  angloHeader.style.textIndent = 0;
  massHeader.innerText = `${data.mass.massValue} x 10^${data.mass.massExponent} KG`;
  massHeader.style.textIndent = 0;
  densityHeader.innerText = `${data.density} G/CM^3`;
  densityHeader.style.textIndent = 0;
  gravityHeader.innerText = `${data.gravity} M/S^2`;
  gravityHeader.style.textIndent = 0;
  if (data.moons !== null) {
    moonsHeader.innerText = data.moons.length;
    moonsHeader.style.textIndent = 0;
  } else {
    moonsHeader.innerText = 0;
    moonsHeader.style.textIndent = 0;
  }
  temperatureHeader.innerText = `${Math.ceil((data.avgTemp - 273.15)*(9/5)+32)}°F`;
  temperatureHeader.style.textIndent = 0;
}

module.exports = renderData;

