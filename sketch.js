/*
write your own story
*/

var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var theif, theif_running;
var background1, backgroundImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var coinsGroup, coin1, coin2, coin3,coin4,coin5,coin6;
var score;

function preload(){
  
  theif_running = loadAnimation("theif1.png","theif 2.png","theif 3.png","theif 4.png","theif 5.png","theif 6.png");
  backgroundImage = loadImage("city background.jpg")
  
  coin1 = loadImage("coin (1).png");
  coin2 = loadImage("coin (2).png");
  coin3 = loadImage("coin (3).png");
  coin4 = loadImage("coin (4).png");
  coin5 = loadImage("coin (5).png");
  coin6 = loadImage("coin (6).png");

  obstacle1 = loadImage("obstacle 1.png");
  obstacle2 = loadImage("obstacle 2.png");
  obstacle3 = loadImage("obstacle 3.png");
  obstacle4 = loadImage("obstacle 4.png");
  obstacle5 = loadImage("obstacle 5.png");
  obstacle6 = loadImage("obstacle 6.png");

}



function setup() {
  createCanvas(600,200);

  background1 = createSprite(200,180,400,20);
  background1.addImage("city background",backgroundImage);
  background1.x = background1.width /2;
  background1.velocityX = -2; 


  theif = createSprite(50,150,20,50,);
  theif.addAnimation("theif_running",theif_running)
  theif.scale = 0.3;
  thief.debug = true
  thief.setCollider("rectangle",0,0,80,80)

  // creating obstacles and coins

obstaclesGroup = new Group();

coinsGroup = new Group();


console.log("Hello" + 5);

score = 0;

 
}

function draw() {

  background("skyblue");

  text("Score: "+ score, 500,50);
  

  if(gameState === PLAY){
    //move the ground
    background1.velocityX = -4;
    //update the score
    score = score + Math.round(frameCount/60);
    //reset the ground 

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space") && thief.y >= 100) {
        thief.velocityY = -15;
    }
    
    //add gravity
    thief.velocityY = thief.velocityY + 0.8
   //spawn the coins
   spawnCoins();
  
   //spawn obstacles on the ground
   spawnObstacles();
 
   if(obstaclesGroup.isTouching(thief)){
     gameState = END;
  }
}
 else if (gameState === END) {
  background1.velocityX = 0;
 obstaclesGroup.setVelocityXEach(0);
 coinsGroup.setVelocityXEach(0);
 obstaclesGroup.setLifetimeEach(-1);
 coinsGroup.setLifetimeEach(-1);
 thief.velocityY=0;

}
drawSprites();
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
  