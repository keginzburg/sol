const Particles = require("./particles.js");

class Entropy {
  constructor(ctx, data) {
    this.rotation = 0;
    this.particles = [];
    this.particlesAmount = 400;
    this.particleRadius = 2;
    this.planetRadius = 100*0.7;
    this.planetCenterZ = (-this.planetRadius);
    this.povCenterX = 250 / 2;
    this.povCenterY = 250 / 2;
    this.fov = 250 * 0.8;
    this.rotation = 0;
    this.temperature = data.avgTemp;


    this.ctx = ctx;
    this.render = this.render.bind(this);
  }

  tempColor(i) {
    let highPercentage = Math.floor((this.temperature / 800) * 400)
    if (highPercentage < 100) {
      if (i < highPercentage) {
        return "rgba(140, 254, 156, 255)";
        // green
      } else {
        return "rgba(74, 217, 254, 255)";
        // blue
      }
    } else if (highPercentage < 200) {
      if (i < highPercentage) {
        return "rgba(254, 254, 34, 255)";
        // yellow
      } else if (i < highPercentage+(400-highPercentage)/2) {
        return "rgba(140, 254, 156, 255)";
        // green
      } else {
        return "rgba(74, 217, 254, 255)";
        // blue
      }
    } else if (highPercentage < 300) {
      if (i < highPercentage) {
        return "rgba(231, 38, 43, 255)";
        // crimson
      } else if (i < highPercentage + (400 - highPercentage) / 2) {
        return "rgba(254, 254, 34, 255)";
        // yellow
      } else {
        return "rgba(140, 254, 156, 255)";
        // green
      }
    } else {
      if (i < highPercentage) {
        return "rgba(231, 38, 43, 255)";
        // crimson
      } else {
        return "rgba(254, 254, 34, 255)";
        // yellow
      }
    }
  }

  // rgba(245,73,50,255) tomato
  // rgba(231,38,43,255) crimson
  // rgba(254,254,34,255) yellow
  // rgba(140,254,156,255) palegreen
  // rgba(74,217,254,255) turquoise

  createParticles() {

    this.particles.length = 0;

    for (let i=0; i<this.particlesAmount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = this.planetRadius * Math.sin(phi) * Math.cos(theta);
      const y = this.planetRadius * Math.sin(phi) * Math.sin(theta);
      const z = (this.planetRadius * Math.cos(phi)) + this.planetCenterZ;
      this.particles.push(new Particles(x, y, z, this.ctx, this.particleRadius, this.povCenterX, this.povCenterY, this.planetCenterZ, this.fov, this.tempColor(i)));
    }
  }


  render() {
    this.ctx.clearRect(0, 0, 250, 250);

    this.rotation += 0.008;

    const sineRotation = Math.sin(this.rotation);
    const cosineRotation = Math.cos(this.rotation);

    for (let i=0; i<this.particles.length; i++) {
      this.particles[i].drawEntropy(sineRotation, cosineRotation);
    }

    const that = this;

    requestAnimationFrame(that.render);

    //setTimeout(function() {
      //requestAnimationFrame(that.render);
    //}, 1000/60);
  }

 

  // this.updateEntropy = (ctx) => {
  //   this.drawEntropy(ctx);
  // }

  // this.drawEntropy = (ctx) => {

  // }
}

module.exports = Entropy;