var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture=createCapture(VIDEO);
  capture.size(640, 480);
  //capture.hide();
  imageMode(CENTER);
}


function draw() {
//background(255);
image(capture, mouseX, mouseY, width/3, width/capture.width*capture.height/3);
filter(THRESHOLD);
}