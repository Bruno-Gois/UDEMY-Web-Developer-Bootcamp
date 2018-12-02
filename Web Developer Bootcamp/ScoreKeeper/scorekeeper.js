var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");
var scoreBtn = document.querySelector("input");
var scoreBoard = document.querySelector("p");

var scoreP1 = document.querySelector("#p1Display");
var scoreP2 = document.querySelector("#p2Display");

var playingTo = 5;


scoreBtn.addEventListener("change", function () {
    reset();
    playingTo = scoreBtn.value;
    scoreBoard.textContent = "Playing to " + playingTo;
});

p1Btn.addEventListener("click", function () {
    if(scoreP1.innerHTML < playingTo){
        scoreP1.innerHTML++;
        if(scoreP1.innerHTML == playingTo){
            scoreP1.classList.add("winner");
            p2Btn.disabled = true;
        }
    }
});

p2Btn.addEventListener("click", function () {
    if(scoreP2.innerHTML < playingTo){
        scoreP2.innerHTML++;
        if(scoreP2.innerHTML == playingTo){
            scoreP2.classList.add("winner");
            p1Btn.disabled = true;
        }
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    scoreP1.innerHTML = 0;
    scoreP1.classList.remove("winner");
    scoreP2.innerHTML = 0;
    scoreP2.classList.remove("winner");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}