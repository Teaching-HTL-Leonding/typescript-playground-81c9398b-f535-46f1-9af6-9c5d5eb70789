function setup() {
    createCanvas(300, 200);
}

const circleDiameter = 50;

let ccX = 0;
let ccY = 0;
let drl = 2;
let dou = 2;

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
    background("gold");

    stroke("white");
    strokeWeight(3);
    fill("lime");
    circle(ccX, height / 2, circleDiameter)

    fill("red")
    circle(width / 2, ccY, circleDiameter)

    ccX += drl
    ccY += dou

    if (ccX >= width || ccX <= 0) {
        drl *= -1
    }

    if (ccY >= height || ccY <= 0) {
        dou *= -1
    }
}