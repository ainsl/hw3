var ball = 0
var ballSpeed = 20;

var ballY = 400;
var ballSpeedY = 10;

var ballZ = (400, 380);
var ballSpeedZ = 15;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 244, 53, 100);
  
  strokeWeight(5);
  stroke(255);
  fill(0);
  ellipse(ball, 100, 50);
  
  stroke(0);
  fill(255);
  ellipse(100, ballY, 50);
  
  stroke(0);
  fill(255, 244, 53);
  ellipse(ballZ, ballZ, 50);
  
  ball = ball + ballSpeed;
  ballY = ballY + ballSpeedY;
  ballZ = ballZ + ballSpeedZ
  
  if (ball > width) {
   ballSpeed = -ballSpeed; 
  }
  
  if (ball < 0) {
   ballSpeed = -ballSpeed; 
  }
  
    if (ballY > height) {
   ballSpeedY = -ballSpeedY; 
  }
  
  if (ballY < 0) {
   ballSpeedY = -ballSpeedY; 
  }
  
      if (ballZ > height) {
   ballSpeedZ = -ballSpeedZ; 
  }
  
  if (ballY < 0) {
   ballSpeedZ = -ballSpeedZ; 
  }
}
