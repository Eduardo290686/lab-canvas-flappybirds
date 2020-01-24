class Obstacle {

  constructor(ctx, topObstacleUrl, topSx, topSy,
    topSWidth, topSHeight, topDx, topDy, topDWidth,
    topDHeight, bottomObstacleUrl, bottomSx, bottomSy,
    bottomSWidth, bottomSHeight, bottomDWidth,
    bottomDHeight, distance) {

    this.ctx = ctx;

    this.distance = distance;

    this.topImage = new Image();
    this.topImage.src = topObstacleUrl;
    this.topSx = topSx;
    this.topSy = topSy;
    this.topSWidth = topSWidth;
    this.topSHeight = topSHeight;
    this.topDx = topDx;
    this.topDy = topDy;
    this.topDWidth = topDWidth;
    this.topDHeight = topDHeight;

    this.bottomImage = new Image();
    this.bottomImage.src = bottomObstacleUrl;
    this.bottomSx = bottomSx;
    this.bottomSy = bottomSy;
    this.bottomSWidth = bottomSWidth;
    this.bottomSHeight = bottomSHeight;
    this.bottomDx = topDx;
    this.bottomDy = this.topDy + this.distance;
    this.bottomDWidth = bottomDWidth;
    this.bottomDHeight = bottomDHeight;

  }

  draw() {
    this.ctx.drawImage(this.topImage, this.topSx,
      this.topSy, this.topSWidth, this.topSHeight, this.topDx,
      this.topDy, this.topDWidth, this.topDHeight);
    this.ctx.drawImage(this.bottomImage, this.bottomSx,
      this.bottomSy, this.bottomSWidth, this.bottomSHeight, this.bottomDx,
      this.bottomDy, this.bottomDWidth, this.bottomDHeight);
  }

}
