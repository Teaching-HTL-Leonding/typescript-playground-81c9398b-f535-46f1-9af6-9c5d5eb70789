function setup() {
    createCanvas(400, 400)
    background("lightblue")
}

let x: number = 0

function draw() {
    background("lightblue")
    fill("grey")
    circle(x, 200, 50)
    x++

    // === gleich
    // !== nicht gleich
    // >, >=, <, <= vergleiche
    if (x === 400) {
        console.log("Bin DA")
    }
}
//bedingungen
// if statements