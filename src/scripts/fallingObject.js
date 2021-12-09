function FallingObject(velocity) {
  this.x = 125;
  this.y = -18;
  this.ghostX = 125;
  this.ghostY = -18;
  this.radius = 5
  this.color = 'rgba(74,217,254,255)';
  this.ghostColor = 'rgba(231, 38, 43, 255)';
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

  this.updateGhost = (ctx, obj) => {
    this.gravitySpeed += this.gravity;
    if (this.ghostY < 233) {
      this.ghostY = this.ghostY + this.gravitySpeed;
      this.drawGhost(ctx);
    }
    if (this.ghostY > 233) {
      this.ghostY = 233;
    }
    if (obj.y !== 233 && this.y !== 233) {
      this.drawGhost(ctx);
    }
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
    //semicircle
    ctx.rect(119, this.y, 12, 4);
    ctx.fill();
    ctx.rect(117, this.y+4, 16, 8);
    ctx.fill();
    //rectangle
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(117, this.y+12);
    ctx.lineTo(115, this.y+17);
    ctx.lineTo(113, this.y+17);
    ctx.stroke();
    //strut 1
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(133, this.y+12);
    ctx.lineTo(135, this.y+17);
    ctx.lineTo(137, this.y+17);
    ctx.stroke();
    //strut 2
  }

  this.drawGhost = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.ghostX, this.ghostY, this.radius, Math.PI, 0, false);
    ctx.strokeStyle = this.ghostColor;
    ctx.fillStyle = this.ghostColor;
    ctx.shadowBlur = 3;
    ctx.shadowColor = this.ghostColor;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    //semicircle
    ctx.rect(119, this.ghostY, 12, 4);
    ctx.fillStyle = this.ghostColor;
    ctx.fill();
    ctx.rect(117, this.ghostY + 4, 16, 8);
    ctx.fillStyle = this.ghostColor;
    ctx.fill();
    //rectangle
    ctx.beginPath();
    ctx.strokeStyle = this.ghostColor;
    ctx.moveTo(117, this.ghostY + 12);
    ctx.lineTo(115, this.ghostY + 17);
    ctx.lineTo(113, this.ghostY + 17);
    ctx.stroke();
    //strut 1
    ctx.beginPath();
    ctx.strokeStyle = this.ghostColor;
    ctx.moveTo(133, this.ghostY + 12);
    ctx.lineTo(135, this.ghostY + 17);
    ctx.lineTo(137, this.ghostY + 17);
    ctx.stroke();
    //strut 2
  }
}

module.exports = FallingObject;