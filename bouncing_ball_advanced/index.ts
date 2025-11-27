function setup() {
  createCanvas(400, 400);
}

const circleDiameter = 50;

let circleCenterX = 200;
let cirlceCenterY = 0
let directionX = 2
let directionY = 2

let circleCenterX2 = 200;
let cirlceCenterY2 = 400
let directionX2 = -2
let directionY2 = -2

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, cirlceCenterY, circleDiameter);

  circleCenterX += directionX
  cirlceCenterY += directionY

  if (cirlceCenterY >= height || cirlceCenterY <= 0) {
    directionY *= -1;
  }
  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1}
  
  stroke("white");
  strokeWeight(3);
  fill("red");
  circle(circleCenterX2, cirlceCenterY2, circleDiameter);

  circleCenterX2 += directionX2
  cirlceCenterY2 += directionY2

  if (cirlceCenterY2 >= height || cirlceCenterY2 <= 0) {
    directionY2 *= -1;
  }
  if (circleCenterX2 >= width || circleCenterX2 <= 0) {
    directionX2 *= -1}
    
  
}