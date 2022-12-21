function setup()
{
    canvas = createCanvas(620,420);
    canvas.center();
}

function draw()
{
    //square
    stroke("red");
    text("Square", 40, 15);
    square(40, 20, 55);
    

    //rectangle
    stroke("blue");
    text("Rectangle", 80, 95);
    rect(80, 100, 400, 170);
    
    //circle
    stroke("pink");
    text("Circle", 525, 295)
    circle(540, 350, 100)
}