function setup() {
  createCanvas(600, 400)
  background("black")
  const num = Math.floor(random(0, 64));

  const h = 150
  const k = 80
  const kBright = 50
  const kWidth = 100

const base = 2

  const a = num % base
  let currentBase = base
  const b= floor(num / currentBase) % base
  currentBase = base
  const c = floor(num / currentBase) % base
  currentBase= base
  const d = floor(num / currentBase) % base
  currentBase = base
  const e = floor(num / currentBase) % base
  currentBase= base
  const f = floor(num / currentBase) % base
  // Add the necessary code here

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textSize(50)
  text(a, 75, h)

  text(b, 155, h)

  text(c, 235, h)

  text(d, 315, h)

  text(e, 395, h)

  text(f, 475, h)

  stroke("yellow")
  strokeWeight(2)
  noFill()

  rect(50 + 80 * 0, kWidth, kBright, k)
  rect(50 + 80 * 1, kWidth, kBright, k)
  rect(50 + 80 * 2, kWidth, kBright, k)
  rect(50 + 80 * 3, kWidth, kBright, k)
  rect(50 + 80 * 4, kWidth, kBright, k)
  rect(50 + 80 * 5, kWidth, kBright, k)

}