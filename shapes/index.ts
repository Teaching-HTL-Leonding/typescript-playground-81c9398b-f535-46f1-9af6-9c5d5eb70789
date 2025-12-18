function setup() {
    createCanvas(500, 500)
    background("yellow")
    textAlign(CENTER, CENTER)

    for (let y = 0; y < 5; y++){
        //"verschachtelte Schleife"
        //"nested loobs"
        for (let x = 0; x < 5; x++) {
            fill("red")
            noStroke()
            circle(50,50, 100)

            fill("white")
            text(`x=${x} ,y=${y}`,50 ,50)
            translate(100,0)// Verschiebt Kordinat 0 punkt
        }

        translate(-500,100)
    }

}