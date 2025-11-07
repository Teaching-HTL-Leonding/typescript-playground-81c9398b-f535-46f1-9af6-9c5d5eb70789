function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved() {

    background("black")

    stroke("wight")
    strokeWeight(1)
    noFill()
    const area = Math.round((mouseX * mouseY) * Math.PI);
    text(`Area: ${area}`, 10, height - 10)


    strokeWeight(4)

    rectMode(CENTER)
    let w = (width / 2 - mouseX) * 2
    let h = (height / 2 - mouseY) * 2

    rect(width / 2, height / 2, w, h)

    line(mouseX, mouseY, mouseX + w, mouseY + h)
    line(mouseX , mouseY , mouseX , mouseY)






}
// <<< Add the function `mouseMoved` with the required code here
