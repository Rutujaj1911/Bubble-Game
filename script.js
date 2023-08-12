var timer=20;
var score=0;
var randomHit=0;

function bubbleGame(){
    var clutter = '';

    for(var i=1;i<=112;i++){
        var randomNumber=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`
    }

    document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){

        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            document.querySelector(".pbottom").innerHTML="<h1>GAME OVER</h1>";
            clearInterval(timerInt);
        }

    },1000)
}

function getNewHit(){
     randomHit=Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent=randomHit;
}

function increaseScore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}

document.querySelector(".pbottom").addEventListener("click", function(e){
    var clickedbubble=Number(e.target.textContent);

    if(clickedbubble===randomHit){
        increaseScore();
        bubbleGame();
        getNewHit();
    }
})

bubbleGame();
runTimer();
getNewHit();