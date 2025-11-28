function setup() {
  createCanvas(325, 300)
  background("black")
  const num = Math.floor(random(0, 0x1000));

  const h = 150
  const k = 80
  const kBright = 50
  const kWidth = 100
  let digit1: String
  let digit2: String
  let digit3: String

  const a = num % 16
  let current = 16
  const b = floor(num / current) % 16
  current = 16
  const c = floor(num / current) % 16
  current = 16
  const d = floor(num / current) % 16
  current = 16
  const e = floor(num / current) % 16
  current = 16
  const f = floor(num / current) % 16

  if (a === 10) {
    digit1 = 'A'
  }
  else if (a === 11) {
    digit1 = 'B'
  }
  else if (a === 12) {
    digit1 = 'C'
  }
  else if(a === 13) {
    digit1 = 'D'
  }
  else if (a === 14) {
    digit1 = 'E'
  }
  else if(a === 15) {
    digit1 = 'F'
  }else {
    digit1 = `${a}`
  }
  if (b === 10) {
    digit2 = 'A'
  }
  else if (b === 11) {
    digit2 = 'B'
  }
  else if (b === 12) {
    digit2 = 'C'
  }
  else if(b === 13) {
    digit2 = 'D'
  }
  else if (b === 14) {
    digit2 = 'E'
  }
  else if(b === 15) {
    digit2 = 'F'
  }else {
    digit2 = `${b}`
  }
  if (c === 10) {
    digit3 = 'A'
  }
  else if (c === 11) {
    digit3 = 'B'
  }
  else if (c === 12) {
    digit3 = 'C'
  }
  else if(c === 13) {
    digit3 = 'D'
  }
  else if (c === 14) {
    digit3 = 'E'
  }
  else if(c === 15) {
    digit3 = 'F'
  }else {
    digit3 = `${c}`
  }
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textSize(50)
  text(digit3, 75, h)

  text(digit2, 155, h)

  text(digit1, 235, h)

  stroke("yellow")
  strokeWeight(2)
  noFill()

  rect(50 + 80 * 0, kWidth, kBright, k)
  rect(50 + 80 * 1, kWidth, kBright, k)
  rect(50 + 80 * 2, kWidth, kBright, k)



}