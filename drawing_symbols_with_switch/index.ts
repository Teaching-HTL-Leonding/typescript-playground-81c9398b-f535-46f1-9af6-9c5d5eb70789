function setup() {
  createCanvas(200, 200);
  background("lightgray");

  const diceSize = 200; // size of the square (width and height)

  const symbol = floor(random(1, 7));

  // draw black background
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  const centerX = diceSize / 2;
  const centerY = diceSize / 2;
  const size = 80;

  // TODO: Use a switch statement to draw different symbols based on the value of symbol
  fill("white")
  switch (symbol) {
    case 1:
      rect(50, 50, 100)
      break
    case 2:
      circle(100, 100, 100)
      break
    case 3:
      triangle(150, 150, 50, 150, 100, 50)
      break
    case 4:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("⭐", width / 2, height / 2)
      break
    case 5:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("❤️", width / 2, height / 2)
      break
    case 6:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("🍀", width / 2, height / 2)
      break
  }
}