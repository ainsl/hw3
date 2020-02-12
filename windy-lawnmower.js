function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  
  // the first pair of coordinates dictate where the line starts
  // the last pair dictate where it ends
  // to make it slant right, get rid of the negative in the parentheses of the third coordinate
  // to make the slant more extreme, increase the numbers in parentheses
  
  line(x, height-10, x+random(30, 30), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
