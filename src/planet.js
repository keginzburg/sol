function Planet(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = "rgba(19,226,79,255)";

  this.updatePlanet = (ctx) => {
    this.drawPlanet(ctx);
  }

  this.drawPlanet = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 5;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}

module.exports = Planet;