const dicePointDiameter: number = 30;
const diceSize = 200;

function setup() {
  const diceRandom1 = floor(random(0, 7))
  const diceRandom2 = floor(random(0, 7))
  createCanvas(diceSize * 2 + 30, diceSize + 30);
  background("lightgray");
  translate(15, 15);

  drawDomino(diceRandom1, diceRandom2);
}

function drawDomino(dice1: number, dice2: number) {
  fill("black");
  noStroke();

  rect(0, 0, diceSize, diceSize)
  rect(diceSize, 0, diceSize, diceSize)
  drawDice(dice1)

  translate(diceSize, 0)
  drawDice(dice2)

  stroke("white")
  strokeWeight(5)
  line(0, 20, 0, 180)
}

function drawDice(dice: number) {
  fill("white");

  if (dice === 1 || dice === 3 || dice === 5) {
    circle(diceSize / 2, diceSize / 2, dicePointDiameter);
  }
  if (dice !== 1) {
    circle(diceSize / 4, diceSize / 4, dicePointDiameter);
    circle(3 * diceSize / 4, 3 * diceSize / 4, dicePointDiameter);
  }
  if (dice >= 4) {
    circle(3 * diceSize / 4, diceSize / 4, dicePointDiameter);
    circle(diceSize / 4, 3 * diceSize / 4, dicePointDiameter);
  }
  if (dice === 6) {
    circle(diceSize / 4, diceSize / 2, dicePointDiameter);
    circle(3 * diceSize / 4, diceSize / 2, dicePointDiameter);
  }
}