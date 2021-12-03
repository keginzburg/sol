/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Planet = __webpack_require__(/*! ./planet.js */ \"./src/planet.js\");\nconst Moon = __webpack_require__(/*! ./moon.js */ \"./src/moon.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const orbitCanvas = document.querySelector(\".orbit_canvas\");\n  orbitCanvas.width = 500;\n  orbitCanvas.height = 500;\n\n  const ctx = orbitCanvas.getContext('2d');\n  const ctx2 = orbitCanvas.getContext('2d');\n\n\n  function space() {\n    const spaceColor = \"rgba(20,29,33,255)\";\n    ctx.fillStyle = spaceColor;\n    ctx.fillRect(0, 0, orbitCanvas.width, orbitCanvas.height);\n  }\n\n  // function semiMajorAxis(major) {\n  //   while (major > 200) {\n  //     major /= 10;\n  //   }\n  //   return major;\n  // }\n  // function semiMinorAxis(major, eccen) {\n  //   let minor = major*(Math.sqrt(1-(eccen*eccen)));\n  //   while (minor > 200) {\n  //     minor /= 10;\n  //   }\n  //   return minor;\n  // }\n\n  function semiMinorAxis(major, eccen) {\n    return major * (Math.sqrt(1 - (eccen * eccen)));\n  }\n\n  let planet;\n  let moons;\n\n  function captureMoons(moonData) {\n    moons = [];\n\n    if (moonData != null)\n      for (let i = 0; i < moonData.length; i++) {\n        let moonURL = moonData[i].rel;\n        fetch(moonURL)\n          .then(response => {\n            return response.json();\n          })\n          .then(data => {\n            //let moonDistanceX = semiMajorAxis(data.semimajorAxis);\n            //let moonDistanceY = semiMinorAxis(data.semimajorAxis, data.eccentricity);\n            let moonDistanceX = Math.random()*100 + 125;\n            let moonDistanceY = semiMinorAxis(moonDistanceX, data.eccentricity);\n\n            if (data.meanRadius > data.equaRadius) {\n              let moonRadius = data.meanRadius;\n              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random()*Math.PI*2, (moonDistanceX), (moonDistanceY), (27 / data.sideralOrbit) * 0.003));\n            } else {\n              let moonRadius = data.equaRadius;\n              moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.ceil(moonRadius * 0.001), Math.random()*Math.PI*2, (moonDistanceX), (moonDistanceY), (27 / data.sideralOrbit) * 0.003));\n            }\n          })\n\n        //let eccentricity = getMoonData(moonURL);\n        // eccentricity = c/a\n        // c is distance from center of ellipse to focus\n        // a is semimajoraxis\n        // find out the x axis distance shift and add it the x coordinate\n        // possibly change the velocity depending on its eccentricity? or just give it a blanket speed according to its sideral orbital data point?\n\n        // moons.push(new Moon(orbitCanvas.width / 2, orbitCanvas.height / 2, Math.random() * 2, \"rgba(200,65,47,255)\", Math.random() * Math.PI * 2, Math.random() * 100 + 100, Math.random() * 100 + 100, Math.random()*0.003));\n      }\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);\n    space();\n\n    planet.updatePlanet(ctx);\n    moons.forEach(moon => {\n      moon.updateMoon(ctx2);\n    })\n  }\n\n  function getPlanetData(planetName) {\n    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)\n      .then(response => {\n        return response.json();\n      })\n      .then(data => {\n        planet = new Planet(orbitCanvas.width / 2, orbitCanvas.height / 2, data.meanRadius * 0.001);\n        captureMoons(data.moons);\n        animate();\n      });\n  }\n\n  getPlanetData('jupiter');\n\n})\n\n//# sourceURL=webpack://sol/./src/index.js?");

/***/ }),

/***/ "./src/moon.js":
/*!*********************!*\
  !*** ./src/moon.js ***!
  \*********************/
/***/ ((module) => {

eval("function Moon(x, y, radius, radians, distanceX, distanceY, velocity) {\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n  this.color = \"rgba(19,226,79,255)\";\n  this.radians = radians;\n  this.distanceX = distanceX;\n  this.distanceY = distanceY;\n  this.velocity = velocity;\n\n  this.updateMoon= (ctx2) => {\n    this.radians += this.velocity;\n    this.x = x + Math.cos(this.radians) * this.distanceX;\n    this.y = y + Math.sin(this.radians) * this.distanceY;\n    this.drawMoon(ctx2);\n  }\n\n  this.drawMoon = (ctx2) => {\n    ctx2.beginPath();\n    ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx2.strokeStyle = this.color;\n    ctx2.fillStyle = this.color;\n    ctx2.shadowBlur = 5;\n    ctx2.shadowColor = this.color;\n    ctx2.stroke();\n    ctx2.fill();\n    ctx2.closePath();\n  }\n}\n\nmodule.exports = Moon;\n\n//# sourceURL=webpack://sol/./src/moon.js?");

/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/***/ ((module) => {

eval("function Planet(x, y, radius) {\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n  this.color = \"rgba(19,226,79,255)\";\n\n  this.updatePlanet = (ctx) => {\n    this.drawPlanet(ctx);\n  }\n\n  this.drawPlanet = (ctx) => {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.strokeStyle = this.color;\n    ctx.fillStyle = this.color;\n    ctx.shadowBlur = 5;\n    ctx.shadowColor = this.color;\n    ctx.stroke();\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\nmodule.exports = Planet;\n\n//# sourceURL=webpack://sol/./src/planet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;