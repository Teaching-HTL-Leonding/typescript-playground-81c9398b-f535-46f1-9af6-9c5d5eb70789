const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);
  stroke("yellow")

  let x = MARGIN;
  while (x <= SIZE - MARGIN) {
    stroke("yellow")
    line(MARGIN, x, mouseX, mouseY)
    line(width - MARGIN, x, mouseX, mouseY)

    stroke("lime")
    line(x, MARGIN, mouseX, mouseY)
    line(x, height - MARGIN, mouseX, mouseY)
    x += MARGIN
  }
}
