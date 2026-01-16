let circleX: number[] = [];
let circleY: number[] = [];
let direction: number = 1;

let bubble = [0]

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



    for (let i = 0; circleX.length; i++) {

        circle(circleX[i], circleY[i], DIAM);

        circleX[i] += SPEED * direction;
        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction *= -1;
            circleX[i] = max(RADI, min(width - RADI, circleX[i]));
    
        }
        
        circleX[i] += SPEED[i]
        
    
    }
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height )
    circleX.push(random())

}
