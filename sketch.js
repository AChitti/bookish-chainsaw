var player = createSprite(200,200);
var score = 0;
var survivalTime=0;
player.setAnimation("monkey");
player.scale=0.1;
var ground = createSprite (400,350,800,10);
ground.shapeColor=("green");
ground.velocityX=-4;
ground.x=ground.width/2;
var banana = createSprite(800,250,10,40);
function spawnFruits() {
  if (World.frameCount%80===0) {
    var banana = createSprite(800,250,10,40);
    banana.y=random(120,200);
    banana.velocityX=-5;
    banana.setAnimation("banana");
    banana.scale=0.05;
    banana.lifetime=300;
    fruitsGroup.add(banana);
  }
  }
  var obstacle = createSprite(800,320,10,40);
function spawnObstacles() {
  if (World.frameCount%300===0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX=-5;
    obstacle.setAnimation("stone");
    obstacle.scale=0.2;
    obstacle.lifetime=300;
    obstaclesGroup.add(obstacle);
  }
}
var fruitsGroup = createGroup();
var obstaclesGroup = createGroup();
  
  function draw() {
  background(255);
  textSize(14);
  text("SurvivalTime"+survivalTime,50,50);
  survivalTime=Math.round(World.frameCount/60);
  text("Score"+score,100,100);
   if (ground.x<0) {
   ground.x=ground.width/2;
  }
  player.collide(ground);
  if (fruitsGroup.isTouching(player)) {
    player.scale=player.scale+0.001;
  }
  if (player.isTouching(obstacle)) {
    player.scale=player.scale-0.001;
  }
  
  if (keyDown("space")) {
    player.velocityY=-12;
  }
  player.velocityY=player.velocityY+0.5;
    spawnFruits();
  drawSprites();
  spawnObstacles();
}
