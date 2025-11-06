function setup() {
    createCanvas(500, 500)
    background("black")
    stroke("green")
    strokeWeight(3)
    noFill()
}

let lastClickX: number = 0
let lastClickY: number = 0

function mouseClicked() {
    let a = mouseY - lastClickY
    let b = mouseX - lastClickX
    let c = sqrt(a * a + b * b)
    //let cheat = dist(mouseX, mouseY, lastClickX, lastclickY)
    let diameter = 2 * c
    circle(mouseX, mouseY, diameter)
    line(,diameter,mouseX,mouseY)
    line()
    line()
    lastClickX = mouseX
    lastClickY = mouseY

}
