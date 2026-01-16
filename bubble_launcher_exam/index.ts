let circleX: number[] = [];
let circleY: number[] = [];
let direction: number = 1;

let bubble = [0]
let a = [100, 200, 300, 400, 500]

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {


    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');



    for (let i = 0; bubble.length; i++) {

        circle(circleX[i], circleY[i], DIAM);

        circleX[i] += SPEED * direction;
        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction *= -1;
            circleX[i] = max(RADI, min(width - RADI, circleX[i]));

        }

        bubble[i] += SPEED[i]
        if (bubble[1] < + 0 || bubble[1] > + width) {
            circleX[1] *= -1
        }


    }
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
        circleY.push(random(0, 300))
}