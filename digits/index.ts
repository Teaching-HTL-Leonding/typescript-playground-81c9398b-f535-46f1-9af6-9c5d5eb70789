function setup() {
  createCanvas(600, 400)
  background("black")
  const num = Math.floor(random(0, 1_000_000));

  const h = 150
  const k = 80
  const kBright = 50
  const kWidth = 100

  const a = num % 10
  const b = Math.floor(num / 10) % 10
  const c = Math.floor(num / 100) % 10
  const d = Math.floor(num / 1000) % 10
  const e = Math.floor(num / 10000) % 10
  const f = Math.floor(num / 100000) % 10
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
