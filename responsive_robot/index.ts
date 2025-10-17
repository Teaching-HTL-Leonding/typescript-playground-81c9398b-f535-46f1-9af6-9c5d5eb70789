function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  //Left Eye
  const leftEyeCenterX = headX + headWidth * 0.25
  const leftEyeCenterY = headY + headHeight * 0.25
  const leftEyeDiamenter = min(headWidth, headHeight) * 0.2
  //Todo: Calculate width of eye
  fill("black")
  circle(leftEyeCenterX, leftEyeCenterY, leftEyeDiamenter)

  //Right Eye
  const rightEyeCenterX = headX + headWidth * 0.75
  const rightEyeCenterY = headY + headHeight * 0.25
  const rightEyeDiamenter = min(headWidth, headHeight) * 0.2

  circle(rightEyeCenterX, rightEyeCenterY, rightEyeDiamenter)

  const antene = 
 
  fill("white")
  const mouthCenterX = headX + headWidth * 0.25
  const mouthCenterY = headY + headHeight * 0.7
  const mouthHeight = headHeight * 0.1
  const mouthlength = headWidth * 0.5

  rect(mouthCenterX, mouthCenterY, mouthlength, mouthHeight)


  // Add your code here
}
