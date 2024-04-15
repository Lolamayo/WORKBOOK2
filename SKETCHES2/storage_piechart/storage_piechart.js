var storageData = [127, 188, 5, 200, 20]
var total;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  let lastPiece = 0;
  let total = getTotal(storageData);
  for (let i = 0; i < storageData.length; i++) {
  
    let randColor = color(random(255), random(255), random(255));
    let piece = map(storageData[i], 0, total, 0, 360);
    fill(randColor);
    arc(width / 2, height / 2, 300, 300, lastPiece, 
    lastPiece + piece
    );
    lastPiece += piece;
  }
}

function getTotal(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total; 
}
