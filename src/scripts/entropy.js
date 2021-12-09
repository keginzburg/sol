const Particles = require("./particles.js");

class Entropy {
  constructor(ctx, data) {
    this.particles = [];
    this.particlesAmount = 400;
    this.particleRadius = 2;
    this.planetRadius = 70;
    this.planetCenterZ = (-this.planetRadius);
    this.povCenterX = 125;
    this.povCenterY = 125;
    this.fov = 200;
    this.rotation = 0;
    this.temperature = data.avgTemp;
    this.ctx3 = ctx;
    this.animate = this.animate.bind(this);
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

  createParticles() {
    this.particles.length = 0;

    for (let i=0; i<this.particlesAmount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = this.planetRadius * Math.sin(phi) * Math.cos(theta);
      const y = this.planetRadius * Math.sin(phi) * Math.sin(theta);
      const z = (this.planetRadius * Math.cos(phi)) + this.planetCenterZ;

      this.particles.push(new Particles(x, y, z, this.ctx3, this.particleRadius, this.povCenterX, this.povCenterY, this.planetCenterZ, this.fov, this.tempColor(i)));
    }
  }

  animate() {
    this.ctx3.clearRect(0, 0, 250, 250);

    this.rotation += 0.008;

    const sineRotation = Math.sin(this.rotation);
    const cosineRotation = Math.cos(this.rotation);

    for (let i=0; i<this.particles.length; i++) {
      this.particles[i].drawEntropy(sineRotation, cosineRotation);
    }

    const that = this;
    requestAnimationFrame(that.animate);
  }
}

module.exports = Entropy;