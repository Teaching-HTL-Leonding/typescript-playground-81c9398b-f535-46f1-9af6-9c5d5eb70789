const MARGIN_NUM = 10;

let num: string = "";          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout
let TextSize: number = 0


function setup() {
    createCanvas(500, 600);
    lineHeight = height / 5;
    cellWidth = width / 3

}

function draw() {
    background("lightgray");
    strokeWeight(2)

    fill("white");
    noStroke()
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM);

    fill("black")
    textSize(50)
    textAlign(RIGHT, CENTER)
    text(num, width - 20, lineHeight / 2)

    stroke("black")
    for (let i = 0; i < 6; i++) {
        line(i, lineHeight * i, width, lineHeight * i);
    }

    line(cellWidth * 2, lineHeight, cellWidth * 2, height)
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)

    fill("black")
    textSize(70)
    textAlign(CENTER, CENTER)
    text("0", cellWidth, lineHeight * 4.5)
    text("C", cellWidth * 2.5, lineHeight * 4.5)
    text("1", cellWidth * 0.5, lineHeight * 3.5)
    text("2", cellWidth * 1.5, lineHeight * 3.5)
    text("3", cellWidth * 2.5, lineHeight * 3.5)
    text("4", cellWidth * 0.5, lineHeight * 2.5)
    text("5", cellWidth * 1.5, lineHeight * 2.5)
    text("6", cellWidth * 2.5, lineHeight * 2.5)
    text("7", cellWidth * 0.5, lineHeight * 1.5)
    text("8", cellWidth * 1.5, lineHeight * 1.5)
    text("9", cellWidth * 2.5, lineHeight * 1.5)
}

function mouseClicked() {
    let sides = floor(mouseX / cellWidth)
    let up = floor(mouseY / lineHeight)


    if (up === 1) {

        if (sides === 0) {
            num += "7"
        }
        else if (sides === 1) {
            num += "8"
        }
        else if (sides === 2) {
            num += "9"
        }
    }
    if (up === 2) {
        if (sides === 0) {
            num += "4"
        }
        else if (sides === 1) {
            num += "5"
        }
        else if (sides === 2) {
            num += "6"
        }
    }
    if (up === 3) {
        if (sides === 0) {
            num += "1"
        }
        else if (sides === 1) {
            num += "2"
        }
        else if (sides === 2) {
            num += "3"
        }
    }
    if (up === 4) {
        if (sides === 0 || sides === 1) {
            num += "0"
        }
        else if (sides === 2) {
            num = ""
        }

    }
}