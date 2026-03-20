const diceSize = 200; // size of the square (width and height)
const centerX = diceSize / 2;
const centerY = diceSize / 2;
const size = 80;

function setup() {
    createCanvas(diceSize * 12 + 30, diceSize + 30);
    const randomDomino1 = floor(random(1, 7))
    const randomDomino2 = floor(random(1, 7))
    const randomDomino3 = floor(random(1, 7))
    background("lightgray");
    translate(15, 15);

    fill("black");
    noStroke();
    rect(0, 0, diceSize * 2, diceSize);

    for (let i = 1; i < 6; i++) {
        drawDomino(i, i + 1)
        translate(diceSize + 10, 0)
    }
}
function drawDomino(domino1: number, domino2: number) {
    fill("black");
    noStroke();

    rect(0, 0, diceSize, diceSize)
    rect(diceSize, 0, diceSize, diceSize)
    drawSymbol(domino1)

    translate(diceSize, 0)
    drawSymbol(domino2)

    stroke("white")
    strokeWeight(5)
    line(0, 20, 0, 180)
}
function drawSymbol(domino: number) {

    fill("white")
    switch (domino) {
        case 1:
            fill("white")
            rect(50, 50, 100)
            break
        case 2:
            fill("white")
            circle(100, 100, 100)
            break
        case 3:
            fill("white")
            triangle(150, 150, 50, 150, 100, 50)
            break
        case 4:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("⭐", centerX, centerY)
            break
        case 5:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("❤️", centerX, centerY)
            break
        case 6:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("🍀", centerX, centerY)
            break
    }
}