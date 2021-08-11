var bg,bgimage
var ship,shipimage
function preload(){
bgimage=loadImage("sea.png")
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  bg=createSprite(200,200,400,400)
  bg.addImage(bgimage)
  ship=createSprite(200,200,100,100)
  ship.addAnimation("moving",shipimage)
  ship.scale=0.5
}

function draw() {
  background("blue");
  drawSprites()
}