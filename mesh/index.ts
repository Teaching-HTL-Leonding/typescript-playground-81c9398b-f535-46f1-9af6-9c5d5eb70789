const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");


  for (let leftside = MARGIN; leftside <= SIZE - MARGIN; leftside++) {
    stroke(100, 1000, 100)
    line(SIZE, leftside, MARGIN, MARGIN)
    leftside += MARGIN

    for (let rightside = MARGIN; rightside <= SIZE - MARGIN; rightside++)

  }
}