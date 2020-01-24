const Game = {

  canvas: undefined,
  ctx: undefined,
  canvasWidth: '600px',
  canvasHeight: '450px',

  intervalId: '',

  fps: 60,

  backgroundReturnPoint: 300,

  backgroundUrl: './images/bg.png',
  backgroundSx: 0,
  backgroundSy: 0,
  backgroundSWidth: 600,
  backgroundSHeight: 504,
  backgroundDx: 0,
  backgroundDy: 0,
  backgroundDWidth: 300,
  backgroundDHeight: 150,

  birdUrl: './images/flappy.png',
  birdSx: 0,
  birdSy: 0,
  birdSWidth: 498,
  birdSHeight: 351,
  birdDx: 20,
  birdDy: 60,
  birdDWidth: 25,
  birdDHeight: 15,

  topObstacleUrl: './images/obstacle_top.png',
  topObstacleSx: 0,
  topObstacleSy: 0,
  topObstacleSWidth: 138,
  topObstacleSHeight: 793,
  topObstacleDx: 300,
  topObstacleDy: -140,
  topObstacleDWidth: 40,
  topObstacleDHeight: 200,

  bottomObstacleUrl: './images/obstacle_bottom.png',
  bottomObstacleSx: 0,
  bottomObstacleSy: 0,
  bottomObstacleSWidth: 138,
  bottomObstacleSHeight: 793,
  bottomObstacleDWidth: 40,
  bottomObstacleDHeight: 200,

  maxYPos: -150,
  minYPos: -180,

  distanceBetweenObstacles: 250,

  obstacleArr: [],

  generatorCounter: 0,

  timeObstacleGenerator: 200,

  xDeleteObstaclePos: -70,

  topCollissionDistance: 0,
  bottomCollissionDistance: 0,
  leftAndRightCollissionDistance: 0,

  checkCollission: false,

  init() {

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.width = this.canvasWidth;
    this.canvas.style.height = this.canvasHeight;

    this.background = new Background(this.ctx, this.backgroundUrl,
      this.backgroundSx, this.backgroundSy,
      this.backgroundSWidth, this.backgroundSHeight,
      this.backgroundDx, this.backgroundDy,
      this.backgroundDWidth, this.backgroundDHeight);

    this.bird = new Bird(this.ctx, this.birdUrl, this.birdSx,
      this.birdSy, this.birdSWidth, this.birdSHeight,
      this.birdDx, this.birdDy, this.birdDWidth, this.birdDHeight);

    this.background.draw();
    this.bird.draw();
  },

  start() {
    this.intervalId = setInterval(() => {
      this.obstacleGenerator();
      this.movingBackground();
      this.movingObstacles();
      this.collission();
      this.gameOver();
      this.bird.push();
      this.bird.moving();
      this.background.draw();
      this.bird.draw();
      this.obstacleArr.forEach(obstacle => obstacle.draw());
      this.deleteObstacle();
      this.generatorCounter++;
    }, 1000 / this.fps)
  },

  movingBackground() {
    if (this.background.sx === this.backgroundReturnPoint) {
      this.background.sx = 0;
    }
    this.background.sx++;
  },

  obstacleGenerator() {
    if (this.generatorCounter === this.timeObstacleGenerator) {
      let obstacleYPos = Math.floor(
        Math.random() * ((this.maxYPos) - (this.minYPos) + 1)) + (this.minYPos);
      this.obstacle = new Obstacle(this.ctx, this.topObstacleUrl,
        this.topObstacleSx, this.topObstacleSy, this.topObstacleSWidth,
        this.topObstacleSHeight, this.topObstacleDx, obstacleYPos,
        this.topObstacleDWidth, this.topObstacleDHeight,
        this.bottomObstacleUrl, this.bottomObstacleSx, this.bottomObstacleSy,
        this.bottomObstacleSWidth, this.bottomObstacleSHeight,
        this.bottomObstacleDWidth, this.bottomObstacleDHeight,
        this.distanceBetweenObstacles);
      this.obstacleArr.push(this.obstacle);
      this.generatorCounter = 0;
    }
  },

  movingObstacles() {
    for (let i = 0; i < this.obstacleArr.length; i++) {
      this.obstacleArr[i].topDx--;
      this.obstacleArr[i].bottomDx--;
    }
  },

  deleteObstacle() {
    this.obstacleArr = this.obstacleArr.filter(obstacle =>
      obstacle.topDx > this.xDeleteObstaclePos);
  },

  collission() {
    for (let i = 0; i < this.obstacleArr.length; i++) {
      if (this.bird.dx + this.bird.dWidth -
        this.leftAndRightCollissionDistance > this.obstacleArr[i].topDx &&
        this.bird.dx < this.obstacleArr[i].topDx +
        this.obstacleArr[i].topDWidth -
        this.leftAndRightCollissionDistance &&
        this.bird.dy < this.obstacleArr[i].topDy +
        this.obstacleArr[i].topDHeight - this.bottomCollissionDistance &&
        this.bird.dy + this.bird.dHeight -
        this.topCollissionDistance > this.obstacleArr[i].topDy) {
        this.checkCollission = true;
      } else if (this.bird.dx + this.bird.dWidth -
        this.leftAndRightCollissionDistance > this.obstacleArr[i].bottomDx &&
        this.bird.dx < this.obstacleArr[i].bottomDx +
        this.obstacleArr[i].bottomDWidth -
        this.leftAndRightCollissionDistance &&
        this.bird.dy < this.obstacleArr[i].bottomDy +
        this.obstacleArr[i].bottomDHeight - this.bottomCollissionDistance &&
        this.bird.dy + this.bird.dHeight -
        this.bottomCollissionDistance > this.obstacleArr[i].bottomDy) {
        this.checkCollission = true;
      }
    }
  },

  gameOver(){
    if(this.checkCollission === true){
      alert(' Game Over');
    }
  }

}
