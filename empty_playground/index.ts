function draw() {
    const centerX = [100, 150, 200, 250, 300]
    const centerY = [100, 150, 200, 250, 300]

    createCanvas(500, 400)
    background("white")

    fill("blue")
    for (let i = 0; i < centerX.length; i++)
        circle(centerX[i], centerY[i], 50)
}
