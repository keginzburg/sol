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

eval("const Planet = __webpack_require__(/*! ./planet.js */ \"./src/planet.js\");\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\n  const orbitCanvas = document.querySelector(\".orbit_canvas\");\n  orbitCanvas.width = 500;\n  orbitCanvas.height = 500;\n  const ctx = orbitCanvas.getContext('2d');\n\n  function space() {\n    const spaceColor = \"rgba(20,29,33,255)\";\n    ctx.fillStyle = spaceColor;\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n  }\n\n  let planet;\n\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    space();\n    planet.updatePlanet(ctx);\n  }\n\n  function getPlanetData(planetName) {\n    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)\n      .then(response => {\n        return response.json()\n      })\n      .then(data => {\n        planet = new Planet(canvas.width / 2, canvas.height / 2, data.meanRadius * 0.001);\n        animate();\n      });\n  }\n\n  getPlanetData('jupiter');\n\n})\n\n//# sourceURL=webpack://sol/./src/index.js?");

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