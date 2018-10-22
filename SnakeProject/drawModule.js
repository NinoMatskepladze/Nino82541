let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let snakeSize = 10;
let score = 0;
let w;
let h;
let snake;
let food;
let mySnake = new Snake(2, 2);
let appleArray = [];
// Check if user Canvas is defined
if (localStorage.getItem('boardWidth') && localStorage.getItem('boardHeight')) {
    mycanvas.width = localStorage.getItem('boardWidth');
    mycanvas.height = localStorage.getItem('boardHeight');
    w = mycanvas.width;
    h = mycanvas.height;
}
  else {
    mycanvas.width = 400;
    mycanvas.height = 400;
    w = mycanvas.width;
    h = mycanvas.height;
}

var drawModule = (function () {

    var paint = function () {
// Draw Canvas Here
      ctx.fillStyle = '#ffeb99';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = ' #0000cc';
      ctx.strokeRect(0, 0, w, h);
          
      btn.setAttribute('disabled', true);
  
      var snakeX = snake[0].x;
      var snakeY = snake[0].y;
// Move snake
      if(direction == 'right'){
          snakeX++;
      }
        else if(direction == 'left'){
          snakeX--;
        }
        else if(direction == 'up'){
          snakeY--;
        } else if(direction == 'down'){
          snakeY++;
        }
// Draw apples here
        for (let j = 0; j < appleArray.length; j++){
            appleArray[j].drawApple();
            if(snakeX == food.x && snakeY == food.y){
              appleArray[j].drawApple();
             }
        }
// Change snake moving coordinates
        for (var i = 0; i > snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y; 
        }

         
// Eating apples Here
for(let q = 0; q <appleArray.length; q++){
      if (snakeX == appleArray[q].x && snakeY == appleArray[q].y){
        var tail = { x: snakeX, y: snakeY }; 
    //Create a new head instead of moving the tail
        let oldscore = score;
        score += 10;
        saveHighest();
        appleArray[q].x = Math.floor((Math.random() * 30) + 1);
        appleArray[q].y  = Math.floor((Math.random() * 30) + 1);
        
      } 
      else {
        var tail = snake.pop(); 
        tail.x = snakeX;
        tail.y = snakeY;
      }
  
      
      snake.unshift(tail); 
// Draw snake here
        for (el of snake) {
            ctx.fillStyle = 'green';
            ctx.fillRect(el.x * snakeSize, el.y * snakeSize, snakeSize, snakeSize);
            ctx.strokeStyle = 'darkgreen';
            ctx.strokeRect(el  .x * snakeSize, el.y * snakeSize, snakeSize, snakeSize);
            }
       }
            
// GameOver 
      if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize 
        // || mySnake.checkCollision(snakeX, snakeY, snake)
      ){
        mySnake.gameOver();
        score = 0;
      }
      scoreText();
}
// FUNCTIONS

// scoreText
    let scoreText = function (){
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, w / 4, h - 5);
    }
// saveHighest
    let saveHighest = function () {
      if (!localStorage.getItem('highestScore')) {
        localStorage.setItem('highestScore', score);
      }
      else {
        if (localStorage.getItem('highestScore') < score) {
          localStorage.setItem('highestScore', score)
        }
      }
    }
// gameLevels
    let gameLevels = function () {
      if (localStorage.getItem('level') == 'hard') {
        if (localStorage.getItem('speedNumber')) {
          gameloop = setInterval(paint, 100 * localStorage.getItem('speedNumber') / 40);
        }
        else {
          gameloop = setInterval(paint, 40);
        }
      }

      if (localStorage.getItem('level') == 'medium') {
        if (localStorage.getItem('speedNumber')) {
          gameloop = setInterval(paint, 100 * localStorage.getItem('speedNumber') / 80);
        }
        else {
          gameloop = setInterval(paint, 80);
        }
      }

      if (localStorage.getItem('level') == 'novice') {
        if (localStorage.getItem('speedNumber')) {
          gameloop = setInterval(paint, 100 * localStorage.getItem('speedNumber') / 120);
          console.log(120 * localStorage.getItem('speedNumber') / 100);
        }
        else {
          gameloop = setInterval(paint, 120);
        }
      }

      else {
        gameloop = setInterval(paint, 200);
      }
    }
// Function init
    var init = function () {
      direction = 'down';
      mySnake.drawSnake();
      let appleNum = localStorage.getItem('appleNumbers');
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }
      gameLevels();
      }
// return statement
      return {
        init: init
      };
    }());
// apples from local storage
    if(localStorage.getItem('appleNumbers')){
      let myAppleNum = localStorage.getItem('appleNumbers')
       for (let i = 0; i < myAppleNum; i++) {
           food = {
               x: Math.floor((Math.random() * 30) + 1),
               y: Math.floor((Math.random() * 30) + 1)
             }
         appleArray.push(new Apple(food.x, food.y));
       }
   }
   else{
       food = {
           x: Math.floor((Math.random() * 30) + 1),
           y: Math.floor((Math.random() * 30) + 1)
         }
       appleArray.push(new Apple(food.x, food.y));
   }

   (function (window, document, drawModule, undefined) {
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () { drawModule.init(); });

    document.onkeydown = function (event) {

      keyCode = window.event.keyCode;
      keyCode = event.keyCode;

      switch (keyCode) {

        case 37:
          if (direction != 'right') {
            direction = 'left';
          }

          console.log('left');
          break;

        case 39:
          if (direction != 'left') {
            direction = 'right';
            console.log('right');
          }
          break;

        case 38:
          if (direction != 'down') {
            direction = 'up';
            console.log('up');
          }
          break;

        case 40:
          if (direction != 'up') {
            direction = 'down';
            console.log('down');
          }
          break;
      }
    }
})(window, document, drawModule);

  