function setup() {
  createCanvas(400, 400);
}

const circleDiameter = 50;

let circleCenterX = 200;
let cirlceCenterY = 0
let directionX = 2
let directionY = 2
// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, cirlceCenterY, circleDiameter);

  circleCenterX += directionX
  cirlceCenterY += directionY

  if (cirlceCenterY >= height || cirlceCenterY <= 0) {
    directionY *= -1.1;
  }
    if (circleCenterX >= width || circleCenterX <= 0) {
      directionX *= -1.1
    
  }
  }
