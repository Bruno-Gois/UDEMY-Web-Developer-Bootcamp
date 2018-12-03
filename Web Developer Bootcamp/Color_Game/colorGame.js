
function randNumb() {
    return Math.floor(Math.random() * 255);
}

var colors = [
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")",
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")",
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")",
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")",
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")",
    "rgb(" + randNumb() + ", " + randNumb() + ", " + randNumb() + ")"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", clickSquare);
}

function clickSquare() {
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
}
