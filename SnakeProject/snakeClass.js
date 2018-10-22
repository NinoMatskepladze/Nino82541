class Snake{
    constructor(x, y){
      this.x = x;
      this.y = y;
     }
     bodySnake(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x * snakeSize, this.y * snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(this.x * snakeSize, this.y * snakeSize, snakeSize, snakeSize);
     }
     drawSnake(){
            let length;
            if(localStorage.getItem('snakeLength')){
                length = localStorage.getItem('snakeLength');
            }
            else{
              length = 4;
            }
            snake = [];
              for (var i = length-1; i>=0; i--) {
                  snake.push({
                      x:i,
                      y:3
                    });
              }  
     }
     checkCollision(x, y, array) {
        for(var i = 0; i < array.length; i++) {
          if(array[i].x === x && array[i].y === y);
          return true;
        } 
        return false;
    }
    gameOver(){
        btn.removeAttribute('disabled', true);
        ctx.clearRect(0,0,w,h);
        gameloop = clearInterval(gameloop);

        let finalText = 'Game Over!'
        ctx.font = "40px Arial";
        ctx.fillStyle = 'blue';
        ctx.fillText( finalText, w / 4, h / 4);
      }
}