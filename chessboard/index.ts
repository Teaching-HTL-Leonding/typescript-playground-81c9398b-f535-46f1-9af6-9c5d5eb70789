function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let a = 0; a * SQUARE_SIZE <= SIZE; a++) {
        if (a % 2 === 0) {
            fill("white")
        } else {
            fill("brown")
        }
        rect(SQUARE_SIZE + a * SQUARE_SIZE, SQUARE_SIZE + SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE)
    }


    for (let a = 0; a * SQUARE_SIZE <= SIZE; a++) {
        if (a % 2 === 0) {
            fill("white")
        } else {
            fill("brown")
        }
        rect(SQUARE_SIZE + a / SQUARE_SIZE, SQUARE_SIZE + SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE)
    }
}