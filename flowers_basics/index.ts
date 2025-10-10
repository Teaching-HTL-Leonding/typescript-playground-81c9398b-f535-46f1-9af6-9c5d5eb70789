const CIRCLED = 80// <<< ADD CONSTANTS HERE (if you need them)
const CIRCLED2 = 70

function setup() {
  createCanvas(1000, 1000)
  background("white")

  strokeWeight(15)
  stroke("green")
  arc(525, 475, 250, 250, 200, 975);

  strokeWeight(2)
  fill("lightgreen")
  stroke("darkgreen")
  circle(650, 400, CIRCLED)

  fill("lightgreen")
  stroke("darkgreen")
  circle(600, 450, CIRCLED)

  fill("lightgreen")
  stroke("darkgreen")
  circle(550, 400, CIRCLED)

  fill("lightgreen")
  stroke("darkgreen")
  circle(600, 350, CIRCLED)

  stroke("yellow")
  fill("yellow")
  circle(600, 400, 65)

  //Flower2


  strokeWeight(15)
  stroke("green")
  noFill()
  arc(475 / 2, 475, 250, 250, 100, 975);

  strokeWeight(2)
  fill("lightgreen")
  stroke("lightgreen")
  circle(350, 400, CIRCLED2)

  fill("lightgreen")
  stroke("lightgreen")
  circle(300 + 15.5, 400 + 47.5, CIRCLED2)

  fill("lightgreen")
  stroke("lightgreen")
  circle(225 + 44, 400 + 31.9, CIRCLED2)

  fill("lightgreen")
  stroke("lightgreen")
  circle(300 + 15.5, 350, CIRCLED2)

  fill("lightgreen")
  stroke("lightgreen")
  circle(295 - 31.9, 325 + 44, CIRCLED2)

  stroke("yellow")
  fill("yellow")
  circle(300, 400, 65)
  // <<< ADD YOUR CODE HERE
}
