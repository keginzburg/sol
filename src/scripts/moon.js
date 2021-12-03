function Moon(x, y, radius, radians, distanceX, distanceY, velocity) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = "rgba(19,226,79,255)";
  this.radians = radians;
  this.distanceX = distanceX;
  this.distanceY = distanceY;
  this.velocity = velocity;

  this.updateMoon = (ctx2) => {
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distanceX;
    this.y = y + Math.sin(this.radians) * this.distanceY;
    this.drawMoon(ctx2);
  }

  this.drawMoon = (ctx2) => {
    ctx2.beginPath();
    ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx2.strokeStyle = this.color;
    ctx2.fillStyle = this.color;
    ctx2.shadowBlur = 5;
    ctx2.shadowColor = this.color;
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
  }
}

module.exports = Moon;