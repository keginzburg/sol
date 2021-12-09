class Particles {
  constructor(x, y, z, ctx, particleRadius, povCenterX, povCenterY, planetCenterZ, fov, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xPov = 0;
    this.yPov = 0;
    this.sizePov = 0;
    this.ctx3 = ctx;
    this.particleRadius = particleRadius;
    this.povCenterX = povCenterX;
    this.povCenterY = povCenterY;
    this.planetCenterZ = planetCenterZ;
    this.fov = fov;
    this.color = color;
  }

  project(sin, cos) {
    const rotX = cos * this.x + sin * (this.z - this.planetCenterZ);
    const rotZ = -sin * this.x + cos * (this.z - this.planetCenterZ);
    this.sizePov = this.fov / (this.fov - rotZ);
    this.xPov = (rotX * this.sizePov) + this.povCenterX;
    this.yPov = (this.y * this.sizePov) + this.povCenterY;
  }

  drawEntropy(sin, cos) {
    this.project(sin, cos);

    this.ctx3.beginPath();
    this.ctx3.arc(this.xPov, this.yPov, (this.particleRadius * this.sizePov), 0, (Math.PI * 2));
    this.ctx3.closePath();
    this.ctx3.shadowColor = this.color;
    this.ctx3.fillStyle = this.color;
    this.ctx3.fill();
  }
}

module.exports = Particles;