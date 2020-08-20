let a = 10
let b = 100
let c = 30
let d = 50

let direction = "right";

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  ellipse(a, b, 40, 40);
  stroke(235, 64, 52);
  strokeWeight(18);

  if (direction == "right") {
    a = a + 1;
  }
  if (direction == "left") {
    a = a - 1;
  }
  if (a >= 375) {
    direction = "left";
  }
  if (a <= 10) {
    direction = "right";
  }
  fill(0);
  ellipse(c, d, 40, 40);
  stroke(16, 224, 158);
  strokeWeight(18);


  if (direction == "right") {
    c = c + 3;
  }
  if (direction == "left") {
    c = c - 3;
  }
  if (c >= 280) {
    direction = "left";
  }
  if (c <= 50) {
    direction = "right";
  }


}
