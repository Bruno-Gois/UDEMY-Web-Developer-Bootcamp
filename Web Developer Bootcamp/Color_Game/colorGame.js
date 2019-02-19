
function randRGBNumb() {
    return Math.floor(Math.random() * 255);
}

let colors = [
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")",
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")",
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")",
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")",
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")",
    "rgb(" + randRGBNumb() + ", " + randRGBNumb() + ", " + randRGBNumb() + ")"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let header = document.querySelector("#header");
colorDisplay.textContent = pickedColor;

document.getElementById("btn").onclick = function () { window.location.reload();};

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", clickSquare);
}

function clickSquare() {
    let clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        console.log(clickedColor);

    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}

function changeColors(color) {
    for(let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    header.style.backgroundColor = color;
}
