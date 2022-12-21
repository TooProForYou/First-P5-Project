function setup(){
    canvas=createCanvas(620, 420);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, 620, 480);
}