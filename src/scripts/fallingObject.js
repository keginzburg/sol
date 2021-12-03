function FallingObject() {
  this.x = 125;
  this.y = 0;
  this.radius = 10;
  this.color = "rgba(19,226,79,255)";
  this.gravity = 0.1;

  this.updateObject = (ctx) => {
    while (this.y > 5) {
      this.y += this.gravity;
    }
    this.drawObject(ctx);
  }

  this.drawObject = (ctx) => {
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

module.exports = FallingObject;