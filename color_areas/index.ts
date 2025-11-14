const th: number = 50;

function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("black")
    rect(0,0,width / 3,height)

    fill("yellow")
    rect(width / 3, 0, width / 3, height)

    fill("red")
    rect(2 * width / 3, 0, width / 3, height)

    fill("white")
    rect(0, height - th, width, th)

}

function mouseClicked() {

    fill("ehite")
    rect(0,150,500)

    noStroke()
    fill("black")
    textSize(30)
    textAlign(CENTER, CENTER)


let message: string
    if (mouseX < width / 3) {
        message = "Black"
}
    else if (mouseX < width / 3 * 2)
        message = "Yellow"

    else{message = "Red"
    }

    text(message, width / 2, height - th/ 2)
}