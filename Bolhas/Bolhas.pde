ArrayList<Bolha> bolhas;
int pontos;
char[] letras= {'a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'};
void setup(){
  size(600, 600);
  bolhas = new ArrayList<Bolha>();
  pontos=0;
  for(int i=0;i<80;i++){
    bolhas.add(new Bolha(40, color(random(255),random(255),random(255))
    ,1, letras[(int)random(letras.length)],
    new PVector(random(width), random(height, 3*height))));
  }
}

void draw(){
  if(bolhas.size()>0){
    background(255);
    for(int i=0;i<bolhas.size();i++){
      Bolha b = bolhas.get(i);
      b.subir();
      b.mostrar();
      
      if(b.posicao.y+b.diam < 0){
        bolhas.remove(i);
        pontos--;
      }
    }
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0);
    text("Pontos: "+pontos, width/2, 570);
  }else{
    background(0);
    fill(255);
    text("Game Over", width/2, height/2);
    text("Pontos: "+pontos, width/2, height/2+50);
  }
}

void keyPressed(){
  boolean not = false;
  for(int i=0;i<bolhas.size();i++){
    Bolha b = bolhas.get(i);
    if(key == b.caracter){
      if(b.posicao.y > 0 && b.posicao.y < height){
        bolhas.remove(i);
        i--;
        pontos++;
      }
    }else{
      not=true;
    }
  }
  if(not){
    pontos--;
  }
}