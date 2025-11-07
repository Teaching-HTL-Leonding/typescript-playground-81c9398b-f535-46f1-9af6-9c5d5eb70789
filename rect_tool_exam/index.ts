function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved() {

    background("black")

    stroke("wight")
    strokeWeight(4)
    noFill()

    rectMode(CENTER)
    let w = (width / 2 - height / 2)
    let h = (height / 2 - width / 2)

    rect(width /2, height /2, w,h)

    text(`Area: ${}`, 5, height - 10)




}
// <<< Add the function `mouseMoved` with the required code here
