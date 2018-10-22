myWidth = function () {
    let boardWidth = document.getElementById('boardWidth').value;
    window.localStorage.setItem('boardWidth', boardWidth);
  }
  myHeight = function () {
    let boardHeight = document.getElementById('boardHeight').value;
    window.localStorage.setItem('boardHeight', boardHeight);
  }
  myLength = function () {
    let snakeLength = document.getElementById('snakeLength').value;
    window.localStorage.setItem('snakeLength', snakeLength);
  }
  myNumbers = function () {
    let appleNumbers = document.getElementById('appleNumbers').value;
    window.localStorage.setItem('appleNumbers', appleNumbers);
  }
  mySpeed = function () {
    let speedNumber = document.getElementById('speedNumber').value;
    localStorage.setItem('speedNumber', speedNumber);
  }
  myLevel = function () {
    let level = document.getElementById('level');
    localStorage.setItem('level', level.value);
  }
