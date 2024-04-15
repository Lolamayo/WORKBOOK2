function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
}


function draw() {
  //background(255, 255, 0, 4);
  strokeWeight(1);
  fill(mouseX/3, mouseY/1, mouseX/2)
  stroke(255, 0, 0)
  circle(mouseX, mouseY, 100)
  //line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
  background(random(256), random(256), random(256));
  
}
