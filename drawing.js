function setup() {
    canvas = createCanvas(620, 420);
    //    canvas = createCanvas(620, 420);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
  }

  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }

function draw() {
    strokeWeight(4);
    stroke(0);
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }   

function clearCanvas(){
    set-background("white");
}