PVector player, ball, player2;
float ballSpeedX, ballSpeedY, ballSize, largura, altura;
float player2SpeedY;
int playerScore, p;

// Setup
void setup(){
  //fullScreen(); // Android
  //orientation(LANDSCAPE); // Android
  size(800, 400);
  
  player = new PVector();
  player2 = new PVector();
  ball = new PVector();
  
  altura = height/2;
  largura = width/30;
  ball.x = width/2;
  ball.y = height/2;
  player.x = width-largura;
  player.y = height/2;
  player2.x = 0;
  player2.y = height/2;
  ballSize = width/20;
  ballSpeedX = width/100;
  ballSpeedY = width/100;
  player2SpeedY = width/150;
  
  println(String.format("Ball Speed X: %.0f \nBall Speed Y: %.0f \nBall Size: %.0f \nAltura: %.0f \nLargura: %.0f",ball.x,ball.y,ballSize, altura, largura));
}

// Draw
void draw(){
  background(0);
  drawBall();
  drawPlayer();
  //drawPlayer2();
  scoreText();
}

// Draw Ball
void drawBall(){
  fill(255, 0, 0);
  noStroke();
  ellipse(ball.x, ball.y, ballSize, ballSize);
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;
  ballBoundary();
}

// Draw Player
void drawPlayer(){
  fill(255);
  rect(player.x, player.y, largura, altura);
  player.y = mouseY - altura/2;
}

// Draw Player 2
void drawPlayer2(){
  fill(255);
  rect(player2.x, player2.y, largura, altura);
  if(player2.y + altura> ball.y){
    player2.y -= player2SpeedY;
  }else{
    player2.y += player2SpeedY;
  }
}

// Score Text
void scoreText(){
  fill(255);
  textSize(20);
  text("Pontuação: "+playerScore, 20, 370);
}

// Ball Boundary
void ballBoundary(){
  if(ball.x < ballSize/2){
    ballSpeedX = -ballSpeedX;
    ball.x = ballSize/2;
  }
  else if((ball.y < ballSize/2)){
    ballSpeedY = -ballSpeedY;
    ball.y = ballSize/2;
  }else if(ball.y + ballSize/2 > height){
    ballSpeedY = -ballSpeedY;
    ball.y = height-ballSize/2;
  }else if(ball.x + ballSize/2 > player.x && ball.x + ballSize/2 < player.x + largura){
    if(ball.y > player.y && ball.y < player.y + altura){
      playerScore++;
      ballSpeedX = -ballSpeedX;
    }
  }else if(ball.x + ballSize/2 > width ){
    playerScore--;
    ballSpeedX = -ballSpeedX;
    ball.x = width-ballSize/2;
  }
  alterarVel();
}

void alterarVel(){
  if(playerScore != p){
    if(p < playerScore){
      ballSpeedX -= playerScore/15;
      ballSpeedY -= playerScore/15;
    }else{
      ballSpeedX += playerScore/15;
      ballSpeedY += playerScore/15;
    }p = playerScore;
  }
}
