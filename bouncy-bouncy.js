var ballX = 0
var ballSpeed = 20;

var ballY = 400;
var ballSpeedY = 10;

var ballZ = (400, 380);
var ballSpeedZ = 15;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 138, 152, 100);
  
  // left to right
  strokeWeight(5);
  stroke(255);
  fill(194, 244, 255);
  ellipse(ballX, 350, 50);
  
  stroke(255);
  fill(153, 230, 255);
  ellipse(ballX, 100, 20);
  
  ballX = ballX + ballSpeed;
  
  if (ballX > width) {
   ballSpeed = -ballSpeed; 
  }
  
  if (ballX < 0) {
   ballSpeed = -ballSpeed; 
  }
  
  
  // up and down
  stroke(255);
  fill(255, 107, 153);
  ellipse(250, ballY, 50);
  
  fill(255, 160, 175);
  ellipse(50, ballY, 50);
  
  ballY = ballY + ballSpeedY;
  
    if (ballY > height) {
   ballSpeedY = -ballSpeedY; 
  }
  
  if (ballY < 0) {
   ballSpeedY = -ballSpeedY; 
  }

  // corner to corner

  stroke(255);
  fill(255, 253, 191);
  ellipse(ballZ, ballZ, 50);

  ballZ = ballZ + ballSpeedZ;

  if (ballZ > height) {
   ballSpeedZ = -ballSpeedZ; 
  }
  
  if (ballY < 0) {
   ballSpeedZ = -ballSpeedZ; 
  }
}
