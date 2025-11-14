function setup() {
    createCanvas(400, 400)
    background("lightblue")
}

let x: number = 0
let direction: number = 3

function draw() {
    background("lightblue")
    fill("grey")
    circle(x, 200, 50)
    x += direction

    // === gleich
    // !== nicht gleich
    // >, >=, <, <= vergleiche
    if (x >= width) { direction = -3 }
    if (x === 0) { direction = 3 }
    
}


//bedingungen
// if statements