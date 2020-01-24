class Background {

  constructor(ctx, background, sx, sy, sWidth,
    sHeight, dx, dy, dWidth, dHeight) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = background;
    this.sx = sx;
    this.sy = sy;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
    this.dx = dx;
    this.dy = dy;
    this.dWidth = dWidth;
    this.dHeight = dHeight;
  }

  draw() {
    this.ctx.drawImage(this.image, this.sx,
      this.sy, this.sWidth, this.sHeight, this.dx,
      this.dy, this.dWidth, this.dHeight);
  }

}
