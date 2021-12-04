function FallingObject(velocity) {
  this.x = 125;
  this.y = -18;
  this.radius = 5
  this.color = "rgba(19,226,79,255)";
  this.gravity = velocity/60;
  this.gravitySpeed = 0;

  this.updateObject = (ctx) => {
    this.gravitySpeed += this.gravity;
    if (this.y < 233) {
      this.y = this.y + this.gravitySpeed;
    }
    if (this.y > 233) {
      this.y = 233;
    }
    this.drawObject(ctx);
  }

  this.drawObject = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 3;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.rect(119, this.y, 12, 4);
    ctx.fill();
    ctx.rect(117, this.y+4, 16, 8);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(117, this.y+12);
    ctx.lineTo(115, this.y+17);
    ctx.lineTo(113, this.y+17);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(133, this.y+12);
    ctx.lineTo(135, this.y+17);
    ctx.lineTo(137, this.y+17);
    ctx.stroke();


    // ctx.save()
    // ctx.translate(ctx.width / 2, ctx.height / 2);
    // ctx.rotate(Math.PI / 4);
    // ctx.rect(100, 100, 50, 50);
    // ctx.fill();
    // ctx.restore();
  }
}

module.exports = FallingObject;