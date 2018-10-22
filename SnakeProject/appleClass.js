class Apple {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    drawApple() {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(this.x * snakeSize, this.y * snakeSize, snakeSize, snakeSize);
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x * snakeSize + 1, this.y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
    }
}