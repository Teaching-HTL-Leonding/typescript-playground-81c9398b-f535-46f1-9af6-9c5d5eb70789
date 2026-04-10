function setup() {
    createCanvas(450, 370);   // create a 450×370 px drawing surface
    background("black");      // fill the canvas with black
    stroke("yellow");         // all future lines will be yellow
    // (no fill() call → shapes are outlines only)

    // Move the coordinate origin First0 px right and First0 px down.
    // Every subsequent drawing call is now relative to (First0, First0),
    // giving us a small margin around the hive.

    translate(-80, 10);
    drawHoneycomb()
    // Draw a single hexagon using six line() calls.
    //
    // Vertex layout (pixel coordinates, origin = top-left of bounding box):
    //
    //          (20,0) ──────── (45,0)
    //         /                      \
    //      (0,25)                  (65,25)
    //         \                      /
    //          (20,50) ──────── (45,50)
    //
    // Each line() call: line(xFirst, yFirst, x2, y2)
}
function drawHexagon() {
    line(20, 0, 45, 0)
    line(20, 0, 0, 25)
    line(0, 25, 20, 50)
    line(20, 50, 45, 50)
    line(45, 0, 65, 25)
    line(65, 25, 45, 50)
}
function drawHexagonFirstLine() {
    for (let i = 0; i < 5; i++) {
        translate(90, 0)
        drawHexagon()
    }
}
function drawHexagonSecondLine() {
    for (let i = 0; i < 3; i++) {
        translate(-90, 0)
        drawHexagon()
    }
}
function drawHexagonsAllLines() {
    drawHexagonFirstLine()
    
    translate(-45, 25)
    drawHexagon()

    drawHexagonSecondLine()
}
function drawHoneycomb() {
    drawHexagonsAllLines()
    for (let i = 0; i < 5; i++) {
        translate(-135, 25)
        drawHexagonsAllLines()
    }
    translate(-135, 25)
    drawHexagonFirstLine()
}