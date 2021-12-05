class Particles {
  constructor(x,y,z, ctx, particleRadius, povCenterX, povCenterY, planetCenterZ, fov, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xPov = 0;
    this.yPov = 0;
    this.sizePov = 0;
    this.ctx = ctx;
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

    this.ctx.beginPath();
    this.ctx.arc(this.xPov, this.yPov, this.particleRadius * this.sizePov, 0, Math.PI * 2);
    this.ctx.closePath();
    //this.ctx.shadowBlur = 2;
    this.ctx.shadowColor = this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

module.exports = Particles;