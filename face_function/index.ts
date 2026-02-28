let isHappy: boolean = true;

function setup(){
  createCanvas(500, 500)
  background("white")
  angleMode(DEGREES) 

  smile(isHappy)
  isHappy = !isHappy
}

function smile(happy: boolean): void {

  let x: number = random(50, 450)
  let y: number = random(50, 450)

  // Kopf
  fill("yellow")
  circle(x, y, 100)

  // Augen
  fill("black")
  circle(x - 25, y - 10, 10)
  circle(x + 25, y - 10, 10)

  // Mund
  if (happy) {
    // lachend
    arc(x, y + 10, 50, 40, 0, 180)
  } else {
    // traurig
    arc(x, y + 40, 50, 40, 180, 360)
  }
}

function mousePressed(){
  smile(isHappy)
  isHappy = isHappy
}