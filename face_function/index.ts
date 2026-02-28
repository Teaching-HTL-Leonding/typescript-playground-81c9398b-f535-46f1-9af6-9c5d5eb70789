let isHappy: boolean = true

function setup(): void {
  createCanvas(500, 500)
  background("white")
  angleMode(DEGREES)

  smile(isHappy)
  if (isHappy === true) {
    isHappy = false
  } else {
    isHappy = true
  }
}

function smile(happy: boolean): void {

  let x: number = random(50, 450)
  let y: number = random(50, 450)

  circle(x, y, 100)

  fill("black")
  circle(x - 25, y - 10, 10)
  circle(x + 25, y - 10, 10)

  if (happy === true) {
    arc(x, y + 10, 50, 40, 0, 180)
  } else {
    arc(x, y + 40, 50, 40, 180, 360)
  }
}

function mousePressed(): void {
  smile(isHappy)
  if (isHappy === true) {
    fill("green")
    isHappy = false
  } else {
    fill("yellow")
    isHappy = true
  }
}