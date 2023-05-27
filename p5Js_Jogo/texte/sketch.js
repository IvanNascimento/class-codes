var x = 0,
    y = 0,
    tamanho = 20;

function setup(){
  createCanvas(500,500);
  frameRate(10)
  x = width/2-tamanho/2
  y = height/2-tamanho/2
}
function draw(){
  background(0)
  fill(255,0,255)
  rect(x,y,tamanho,tamanho)
}
function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    x += 10;
  }
  else if (keyCode == LEFT_ARROW){
    x -= 10;
  }
  else if (keyCode == UP_ARROW){
    y -= 10;
  }
  else if (keyCode == DOWN_ARROW){
    y += 10;
  }
}
