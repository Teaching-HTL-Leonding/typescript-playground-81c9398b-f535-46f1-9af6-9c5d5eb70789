const halfbright = 200

function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("blue")
    rect(halfbright, 0, width / 2, height)

    fill("green")
    rect(halfbright, 0, width / 2, height / 2)

    fill("yellow")
    rect(0, 0, width / 2, height)

    fill("red")
    rect(0, 0, width / 2, height / 2)

    fill("black")
    rect(100, 50, width / 2, height / 2)

}
function mouseClicked() {

    fill("black")
    rect(100, 50, width / 2, height / 2)

    noStroke()
    fill("black")
    textSize(30)
    textAlign(CENTER, CENTER)

    let message : string

    if (mouseX < width) {
    message = "white"
    }