function preload(){
  bunnyImage = loadImage("images/rabbit1.png")
  carrotImage = loadImage("images/carrot1.png")
  bgImage = loadImage("images/bg.jpg")
  snakeImage = loadImage("images/snake1.png")
}
var obs_touched = false
var snake_touched = false
function setup() {
  createCanvas(600, 600);
  
  edges=createEdgeSprites()
  
  player=createSprite(70,200,10,10)
  player.shapeColor="white"
  
  target=createSprite(390,80,40,40)
  target.shapeColor="pink"
  
  obs1=createSprite(50,220,100,15)
  obs1.shapeColor="red"
  
  obs2=createSprite(390,220,100,15)
  obs2.shapeColor="blue"
  
  obs3=createSprite(560,220,100,15)
  obs3.shapeColor="yellow"
  
  obs4=createSprite(225,220,120,15)
  obs4.shapeColor="black"
  
  obs5=createSprite(50,280,100,15)
  obs5.shapeColor="green"
  
  obs6=createSprite(220,280,100,15)
  obs6.shapeColor="grey"

  obs7=createSprite(560,280,100,15)
  obs7.shapeColor="orange"
  
  obs8=createSprite(400,280,100,15)   
  obs8.shapeColor="white"
  
  obs9=createSprite(270,280,70,15)
  obs9.shapeColor="darkgreen"

  snakeGroup = new Group()

}

function draw() {
  target.addImage(carrotImage)
  background(bgImage)
  player.addImage(bunnyImage)
  target.scale = 0.2
  player.scale = 0.2
  if (keyDown("up")) {
    player.y=player.y-10;
  }
  if (keyDown("down")) {
    player.y=player.y+10
  }
  if (keyDown("left")) {
    player.x=player.x-10
  }
  if (keyDown("right")) {
    player.x=player.x+10
  }
  if (player.isTouching(obs1)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs2)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs3)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs4)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs5)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs6)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs7)){
    player.x=70
    player.y=450
  }
  if (player.isTouching(obs8)){
    player.x=70
    player.y=450
  }
  if (player.isTouching(obs9)){
    player.x=70
    player.y=450
  }
  for(var i = 0;i<snakeGroup.length;i++){
    s = snakeGroup.get(i)
    if(player.isTouching(s)){
    s.destroy()
    }
  }
  if (player.isTouching(target)){
    target.destroy()
    player.destroy()
    obs1.destroy()
    obs2.destroy()
    obs3.destroy()
    obs4.destroy()
    obs5.destroy()
    obs6.destroy()
    obs7.destroy()
    obs8.destroy()
    obs9.destroy()
    text("you won",300,300)
  }
  Snake();
  
  drawSprites();
}
function Snake(){
  if(frameCount % 10 == 0) {
    snake = createSprite(500,random(50,420),100,5)
    snake.addImage(snakeImage)
    snake.scale = 0.1
    snake.velocityX=random(-8,-4)
    snakeGroup.add(snake)
  }
}
