var ballY = 400;
var ballSpeedY = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50, 150, 200, 100);
  
  strokeWeight(5);
  stroke(255);
  fill(240, 250, 0);
  ellipse(335, ballY, 75);
  
  fill(180, 250, 0);
  ellipse(185, ballY, 63);
  
  fill(210, 50, 190);
  ellipse(50, ballY, 50);
  
  ballY = ballY + ballSpeedY;
  
    if (ballY > height) {
   ballSpeedY = -ballSpeedY; 
  }
  
  if (ballY < 0) {
   ballSpeedY = -ballSpeedY; 
  }
}
