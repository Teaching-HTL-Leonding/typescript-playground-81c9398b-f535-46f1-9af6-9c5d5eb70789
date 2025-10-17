function setup() {
  createCanvas(600, 600);
  background("lightblue");
}
//round(mouseX/40)

function mouseMoved() {
  const SNAP = 50; // marker must snap every 40 pixels
  const MARKER_SIZE = 10; // size of marker

  background("lightblue");


  const x = round(mouseX / SNAP) * SNAP
  const y = round(mouseY / SNAP) * SNAP

  strokeWeight(5)
  line(x - MARKER_SIZE, y, x + MARKER_SIZE, y)
  line(x, y - MARKER_SIZE, x, y + MARKER_SIZE)


  stroke("green")
  fill("red")
  textSize(20)
  textAlign(RIGHT)
  text(`x=${x}/y=${y}`, width - 10, height - 10)



}
