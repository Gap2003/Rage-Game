// BLIND MAZE

// Add A Bunch Of Divs to Main (40 / row)
for (let row = 0; row < 25; row++) {
    for (let col = 0; col < 40; col++) {
        document.getElementById("main").innerHTML += "<div class=''id='cell" + row + "-" + col + "'></div>"
    }
}

// Global variables for a grid walker
let walkerRow = 0;
let walkerCol = 0;

// Highlight current walker cell
let walkerId = "cell" + walkerRow + "-" + walkerCol;
document.getElementById(walkerId).classList.add("active");

// Change the grid walker's location on keydown
document.addEventListener("keydown", checkKeyPress);

function checkKeyPress(event) {
    console.log(event.keyCode);
    // Remove active class from current location
    let walkerId = "cell" + walkerRow + "-" + walkerCol;
    document.getElementById(walkerId).classList.remove("active");

    if (event.keyCode == 37) {// Left Arrow
        walkerCol--;
    } else if (event.keyCode == 39) {// Right Arrow
        walkerCol++;
    } else if (event.keyCode == 38) {// Up Arrow
        walkerRow--;
    } else if (event.keyCode == 40) {// Down Arrow
        walkerRow++;
    } else if (event.keyCode == 65) {// A
        walkerCol--;
    } else if (event.keyCode == 68) {// D
        walkerCol++;
    } else if (event.keyCode == 87) {// W
        walkerRow--;
    } else if (event.keyCode == 83) {// S
        walkerRow++;
    }
    if(walkerRow == -1|| walkerRow == 25|| walkerCol == -1|| walkerCol == 40){
        walkerCol = 0
        walkerRow = 0
    }  else if (walkerRow == 2 && walkerCol == 35){
        walkerCol = 38
        walkerRow = 1
    } else if (walkerRow == 0 && walkerCol <=1 || walkerRow == 1 && walkerCol >= 1 && walkerCol <= 3 || walkerRow == 1 && walkerCol >= 28 && walkerCol <= 33 || walkerCol == 3 && walkerRow >= 1 && walkerRow <=4 || walkerRow == 4 && walkerCol >= 0 && walkerCol <=3 || walkerCol == 0 && walkerRow >=4 && walkerRow <= 12 || walkerCol == 1 && walkerRow == 12 || walkerCol == 2 && walkerRow >= 12 && walkerRow <= 18 || walkerCol == 1 && walkerRow == 18 || walkerCol == 0 && walkerRow >= 18 && walkerRow <= 22 || walkerRow == 22 && walkerCol <= 5 || walkerCol == 5 && walkerRow <= 22 && walkerRow >= 8 || walkerRow == 8 && walkerCol >= 2 && walkerCol <= 5 || walkerCol == 2 && walkerRow == 7 || walkerRow == 6 && walkerCol >= 2 && walkerCol <= 5 || walkerCol == 5 && walkerRow >= 2 && walkerRow <= 6 || walkerRow == 2 && walkerCol >= 5 && walkerCol <= 11 || walkerCol == 11 && walkerRow >= 2 && walkerRow <= 11 || walkerCol == 10 && walkerRow == 11 || walkerCol == 9 && walkerRow >= 11 && walkerRow <= 19 || walkerRow == 19 && walkerCol >= 9 && walkerCol <= 16 || walkerCol == 16 && walkerRow >= 19 && walkerRow <= 23 || walkerRow == 23 && walkerCol >= 16 && walkerCol <= 22 || walkerCol == 22 && walkerRow <= 23 && walkerRow >= 15 || walkerRow == 15 && walkerCol <= 22 && walkerCol >= 17 || walkerCol == 17 && walkerRow <= 15 && walkerRow >= 11 || walkerRow == 11 && walkerCol <= 17 && walkerCol >= 14 || walkerCol == 14 && walkerRow <= 11 & walkerRow >= 3 || walkerRow == 3 && walkerCol >= 14 && walkerRow <= 22 || walkerCol == 22 && walkerRow >= 3 && walkerRow <= 7 || walkerRow == 6 && walkerCol <= 22 && walkerCol >= 20 || walkerRow == 5 && walkerCol <= 20 && walkerCol >= 16 || walkerRow == 7 && walkerCol == 21 || walkerCol == 16 && walkerRow >= 5 && walkerRow <= 8 || walkerRow == 8 && walkerCol >= 16 && walkerCol <= 19 || walkerCol == 19 && walkerRow >= 8 && walkerRow <= 11 || walkerRow == 11 && walkerCol >= 20 && walkerCol <= 25 || walkerCol == 25 && walkerRow >= 11 && walkerRow <= 22 || walkerRow == 22 && walkerCol >= 25 && walkerCol <= 30 || walkerCol == 30 && walkerRow <= 22 && walkerRow >= 17 || walkerRow == 17 && walkerCol == 29 || walkerCol == 28 && walkerRow <= 17 & walkerRow >= 9 || walkerRow == 9 && walkerCol <= 28 && walkerCol >= 24 || walkerCol == 24 && walkerRow <= 9 && walkerRow >= 4 || walkerRow == 4 && walkerCol >= 24 && walkerCol <= 28 || walkerCol == 28 && walkerRow <= 4 && walkerRow >= 1 || walkerRow == 1 && walkerCol >= 28 && walkerCol <= 33 || walkerCol == 33 && walkerRow >= 1 && walkerRow <= 11 || walkerRow == 11 && walkerCol == 32 || walkerCol == 31 && walkerRow >= 5 && walkerRow <= 15 || walkerCol == 30 && walkerRow == 5 || walkerCol == 29 && walkerRow >= 5 && walkerRow <= 8 || walkerCol == 30 && walkerRow >= 8 && walkerRow <= 12 || walkerCol == 32 && walkerRow >= 15 && walkerRow <= 23 || walkerRow == 23 && walkerCol >= 32 && walkerCol <= 36 || walkerCol == 36 && walkerRow <= 23 && walkerRow >= 1 || walkerCol == 38 && walkerRow >= 1 && walkerRow <= 24){
    } else if (walkerRow == 24 && walkerCol == 39) {
document.getElementById("output").innerHTML = "You Win"
    } else {
        walkerCol = 0
        walkerRow = 0
    }
    walkerId = "cell" + walkerRow + "-" + walkerCol;
    document.getElementById(walkerId).classList.add("active");
}