PImage background;
ArrayList<Duck> ducks;
int bullets = 3;
int lifes = 3;
boolean gameover = false;
int pontuacao;

void setup(){
  size(600, 530);
  cursor(CROSS);
  textSize(20);
  textAlign(CENTER, CENTER);
  background = loadImage("background.png");
  ducks = new ArrayList<Duck>();
  pontuacao = 0;
  ducks.add(new Duck());
}

void draw(){
  if(!gameover){
    if(bullets <=0 || lifes <= 0){
      gameover = true;
    }
    if(frameCount % 60 == 0){
      ducks.add(new Duck());
    }
    image(background, 0, 0, width, height);
    fill(0);
    text("Bullets: "+bullets, width*0.2, height*0.95);
    text("Pontuação: "+pontuacao, width*0.5, height*0.95);
    text("Vidas: "+lifes, width*0.8, height*0.95);

    for(int i=0;i < ducks.size();i++){
      ducks.get(i).atualizar();
      ducks.get(i).mostrar();
      
      if(ducks.get(i).posicao.x > width + ducks.get(i).raio || ducks.get(i).posicao.x < -ducks.get(i).raio ||
       ducks.get(i).posicao.y > 370 + ducks.get(i).raio || ducks.get(i).posicao.y < -ducks.get(i).raio ){
         lifes--;
         ducks.get(i).morto = true;
      }
      if(ducks.get(i).morto){
        ducks.remove(i);
        i--;
      }
    }
  }else{
    background(0);
    fill(255);
    text("Game Over", width*0.5, height*0.5);
    text("Pontuação: "+pontuacao, width*0.5, height*0.6);
  }
}

void mousePressed(){
  bullets--;
  for(int i=0;i < ducks.size();i++){
    int p = ducks.get(i).morrer();
    pontuacao += p;
    if(p > 0){
      bullets++;
    }
  }
}
