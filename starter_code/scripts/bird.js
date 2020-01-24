class Bird {

  constructor(ctx, imageUrl, sx, sy, sWidth,
    sHeight, dx, dy, dWidth, dHeight) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = imageUrl;
    this.sx = sx;
    this.sy = sy;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
    this.dx = dx;
    this.dy = dy;
    this.dWidth = dWidth;
    this.dHeight = dHeight;
  }

  movement = 'down';

  draw() {
    this.ctx.drawImage(this.image, this.sx, this.sy,
      this.sWidth, this.sHeight, this.dx, this.dy,
      this.dWidth, this.dHeight);
  }

  moving() {
    if(this.movement === 'down'){
      this.dy++;
    } else if(this.movement === 'up'){
      this.dy--;
    } 
  }

  push() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.keyCode === 32) {
        this.movement = 'up';
      }
    })
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.keyCode === 32) {
        this.movement = 'down';
      }
    })
  }

}
