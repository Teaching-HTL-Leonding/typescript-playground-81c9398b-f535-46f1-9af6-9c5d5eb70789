function setup() {
  createCanvas(325, 300)
  background("black")
  const num = Math.floor(random(0, 0x1000));

  const h = 150
  const k = 80
  const kBright = 50
  const kWidth = 100
  let digit1: String

  const a = num % 16
  let current = 16
  const b = floor(num / current) % 16
  current = 16
  const c = floor(num / current) % 16
  current = 16

  if (a === 10) {
    digit1 = 'A'
  }
  else (b === 11){
    digit1 = 'B'
  }
  (c === 12){
    digit1 = 'C'
  }
  ()

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textSize(50)
  text(digit1, 75, h)

  text(b, 155, h)

  text(c, 235, h)

  stroke("yellow")
  strokeWeight(2)
  noFill()

  rect(50 + 80 * 0, kWidth, kBright, k)
  rect(50 + 80 * 1, kWidth, kBright, k)
  rect(50 + 80 * 2, kWidth, kBright, k)



}