function setup() {
    createCanvas(300,300)
    background("black")
    colorMode(HSB)

}

let x : number = 0
let colorHue: number = 0

function draw() {
    background("black")
    noStroke()
    fill(colorHue, 100, 100)
    colorHue = (colorHue + 1) % 360
    rect(x,x, 100)
    x = x + 1
    x = x % 300
}
