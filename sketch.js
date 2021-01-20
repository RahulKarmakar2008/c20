var fixedRect,movingRect,b1,b2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect.debug = true;
  b1 = createSprite(600, 50, 50, 50);
  b2 = createSprite(600, 350, 50, 50);
  b1.velocityY=8;
  b2.velocityY=-8;
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <fixedRect.width/2 + movingRect.width/2
    && movingRect.y- fixedRect.y<fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2 + fixedRect.height/2
    )
    {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(b2.x - b1.x < b1.width/2 + b2.width/2
    && b1.x - b2.x <b1.width/2 + b2.width/2){
        b1.velocityX=b1.velocityX*(-1);
        b2.velocityX=b2.velocityX*(-1);
    }
    if(b2.y - b1.y < b1.height/2 + b2.height/2
      && b1.y - b2.y <b1.height/2 + b2.height/2){
          b1.velocityY=b1.velocityY*(-1);
          b2.velocityY=b2.velocityY*(-1);
      }
  drawSprites();
}