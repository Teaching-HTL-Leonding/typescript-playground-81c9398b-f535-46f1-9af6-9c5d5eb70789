const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  let a = MARGIN
  while (a < SIZE) {
    stroke(100, 100, 100)
    
    let b = SIZE
    while (b < SIZE)
      line(MARGIN,100,SIZE,100)
    b += MARGIN

    a += MARGIN
  }
}
