let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var wallLeft, mind
var Max_SPEED = 10;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
canvas.position(windowWidth/2 - canvasWidth/2, 20);
  wallLeft = createSprite(0,0,20,width*2);
  setSpeed(Max_SPEED, -180);
}

function draw() {
  background(255,255,255);
  textAlign(CENTER);
  text('마우스를 눌러봐!');
  drawSprites();
  bounce(wallLeft);
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 15, 15);
  s.velocity.x = random(-5, 5)
  s.velocity.y = random(-5, 5)
}

var swing;
if(bounce(mind)){
  position.copy()-mind.position.y/3;
  setSpeed(random(-5, 5),getDirection()-swing);
}
