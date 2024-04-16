var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture=createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  imageMode(CENTER);
}


function draw() {
//background(255);
image(capture, mouseX, mouseY, width/5, width/capture.width*capture.height/5);
filter(THRESHOLD);
}
