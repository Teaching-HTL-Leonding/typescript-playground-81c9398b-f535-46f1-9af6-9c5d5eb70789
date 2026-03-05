// A grid of 10x10 circles represents 100 units.
// A random number n (0–100) determines how many circles are "filled".
// Circles are counted left-to-right, top-to-bottom.

let circleHeight: number = 0;   // Height of a line of the responsive layout
let circleWidth: number = 0;
const COLS = 10;
const ROWS = 10;
const CELL_SIZE = 46;  // distance between circle centers
const MARGIN = 10;
const TITLE_HEIGHT = 35;

// Colors
const COLOR_FILLED = "steelblue";
const COLOR_EMPTY = "lightgray";
const COLOR_STROKE = "white";

// The random number we want to visualize (0–100)
let randomNumber: number;

function draw(): void {

    circleHeight = height /11
    circleWidth = width / 11
    for(let i = 0; i < 10; i++){
    for(let a = 0; a < 10; a++){
    noStroke()
    fill(COLOR_FILLED)
    circle(circleWidth * a + CELL_SIZE,circleHeight * i + CELL_SIZE,35)
    }
    }
}

function setup(): void {
    createCanvas(COLS * CELL_SIZE + 2 * MARGIN, ROWS * CELL_SIZE + TITLE_HEIGHT + MARGIN);
    randomNumber = Math.floor(Math.random() * 101);
    background("white");
}
