var sea,ship;
var seaImg,shipImg;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea = createSprite(200,200);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;
  ship = createSprite(200,270);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.3;
}

function draw() {
  background(0);
  sea.velocityX = 3;

  
  //código para redefinir o plano de fundo
  if(sea.x > 400){
    sea.x = sea.width/15;
  }

  console.log(sea.width);
  console.log(sea.x);

  drawSprites();
}
