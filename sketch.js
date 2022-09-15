var path, pathImage;
var Jaxon, jaxon_running
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 50, 200, 1600);
  path.addImage("Image", pathImage);
  path.velocityY = 5;
  path.scale = 1.2;
  Jaxon = createSprite(200, 300, 50, 50);
  Jaxon.addAnimation("running", jaxon_running);
  Jaxon.scale = 0.1;
  boundary1 = createSprite(400, 200, 10, 400);
  boundary2 = createSprite(0, 200, 10, 400);
}

function draw() {
  background(220);
  console.log(path.y);
  if (path.y > 500) {
    path.y = path.height / 16;
  }
  Jaxon.x = World.mouseX;
  Jaxon.collide(boundary1);
  Jaxon.collide(boundary2);
  drawSprites();
}
