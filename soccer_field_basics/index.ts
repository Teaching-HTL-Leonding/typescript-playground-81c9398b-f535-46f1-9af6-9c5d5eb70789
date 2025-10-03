
// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;
 
// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;
 
function setup() {
    // We must calculate the size of the canvas using the constants.
    // Note that we assume that the soccer field has a width of 100m
    // and a height of 70m.
    createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
    background("green");
 
    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);
 
    push();
 
    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    // Experiment with different SCALE values to see how it works.
    scale(SCALE);
 
    // translate moves the origin of the coordinate system. 0/0 will not be
    // in the top-left corner, but MARGIN pixels to the right/down.
    // Experiment with different MARGIN values to see how it works.
    translate(MARGIN, MARGIN);
 
    // TODO: Draw the soccer field as close as possible to a real soccer field.
    // <<< ADD YOUR CODE HERE
 
    const soccerFieldWidth = 70;
    const soccerFieldLength = 100;

    rect(0,0,soccerFieldLength,soccerFieldWidth);
 
    const soccerMiddleLineY= 35;
 
    const lengthGoalArea= 5.5*2+7.32;
    const widthGoalArea = 5.5;

    rect(0,soccerMiddleLineY-lengthGoalArea/2,widthGoalArea,lengthGoalArea);
    rect(0,15,20,40)

    rect(100,25,-5.5,lengthGoalArea)
    rect(100,15,-20,40)

    line(50,0,50,70)

    circle(50,35,20)

    circle(14,35,20)

    fill("Green")

    rect(0,31,-3.5,7.32)
    rect(100,31,3.5,7.32)


    }