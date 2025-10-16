function setup() {
  createCanvas(200, 200)


}

function mouseMoved() {
  background("lightblue")
  stroke("black")
  noFill()
  circle(mouseX, mouseY, 20)
  circle(mouseX, mouseY, 10)
  line(mouseX + 20, mouseY, mouseX - 20, mouseY)
  line(mouseX, mouseY + 20, mouseX, mouseY - 20)
}