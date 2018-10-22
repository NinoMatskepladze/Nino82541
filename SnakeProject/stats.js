let writeHighestScore = document.getElementById('highestScore');
if(localStorage.getItem('highestScore')){
    let sco = localStorage.getItem('highestScore');
    writeHighestScore.innerText = sco;
}
else{
    writeHighestScore.innerText = 0;
}
let writeGameLevel = document.getElementById('gameLevel');
if(localStorage.getItem('level')){
    let lvl = localStorage.getItem('level');
    writeHighestScore.innerText = lvl;
}
else{
    writeGameLevel.innerText = 'novice';
}
    