ArrayList<Bolha> bolhas;
int pontos;
void setup() {
  size(600, 600);
  bolhas = new ArrayList<Bolha>();
  pontos=0;
  for (int i=0; i<80; i++) {
    bolhas.add(new Bolha(40, color(random(255), random(255), random(255))
      , 1, 'x', 
      new PVector(random(width), random(3*height))));
  }
}

void draw() {
  background(255);
  for (int i=0; i<bolhas.size(); i++) {
    Bolha b = bolhas.get(i);
    b.subir();
    b.mostrar();

    if (b.posicao.y+b.diam < 0) {
      pontos--;
      bolhas.remove(i);
    }
  }
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
  text("Pontos: "+pontos, width/2, 570);
}

void keyPressed(){
  boolean not = false;
  for(int i=0;i<bolhas.size();i++){
    Bolha b = bolhas.get(i);
    if(key == b.caracter){
      if(b.posicao.y > 0 && b.posicao.y < height){
        bolhas.remove(i);
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