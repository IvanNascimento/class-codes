int cor, pontos = 10, con = 0;
float x, y, raio = 25;
boolean acertou = true, gameover = false;

void setup(){
  size(400, 400);
  textSize(20);
  textAlign(CENTER);
}

void draw(){
  if(acertou){
    x = random(raio, width - raio);
    y = random(raio, height - 40 - raio);
    acertou = false;
  }
  
  background(0);
  fill(100);
  rect(0, 360, width, 40, 20);
  fill(255);
  ellipse(x, y, raio*2, raio*2);
  text("Pontos: "+ pontos, width/2, height-15);
  if(con % 120 == 0 && con != 0){
    if(pontos >= 0){
      pontos -= 1;
    }
    acertou = true;
    con = 0;
  }
  con++;
  
  if(pontos < 0){
    background(0);
    text("Game Over", width/2, height/2);
    text("Click for restart", width/2, height/2+50);
    gameover = true;
    noLoop();
  }
  
}

void mouseClicked(){
  float d = sqrt(pow(x - mouseX, 2) + pow(y - mouseY, 2));
  
  // para ellipse
  if(d <= raio){
    acertou = true;
    pontos += 1;
    con = 0;
  }else{
    if(pontos >= 0){
      pontos -= 1;
    }
  }
  
  if(gameover){
    gameover = false;
    pontos = 10;
    loop();
  }
  
}
