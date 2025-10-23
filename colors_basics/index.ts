function setup() {
  createCanvas(500, 500);
  colorMode(HSB)
  background(100, 100, 100)
  // Add your code here

}

function mouseMoved() {
  background(360 * mouseX / width, 100, 100)
}