var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="black";
  fixedRect.debug=true;

  movingRect=createSprite(400, 400, 100, 80);
  movingRect.shapeColor="black";
  movingRect.debug=true;

}

function draw() {
  background("green"); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(fixedRect.x-movingRect.x);
  // Collition Detection algorithm states that when two objects collide,
  // their distance will be sum of half of their width.
  if (fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor="white";
  movingRect.shapeColor="white";
  }
else{
  fixedRect.shapeColor="black";
  movingRect.shapeColor="black";
}
  drawSprites();
}