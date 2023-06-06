PVector vel, comida;
ArrayList<PVector> cobra;
int lado, pontos, cobraFim;
boolean perdeu;

void setup(){
  size(500, 500);
  frameRate(12);
  
  cobra = new ArrayList<PVector>();  
  vel = new PVector(10, 0);
  lado = 10;
  perdeu = false;
  pontos = 0;
  cobraFim = 2;
  
  cobra.add(new PVector(60, 20));
  cobra.add(new PVector(50, 20));
  cobra.add(new PVector(40, 20));
  comida = new PVector(100, 100);
  drawCobra();
  textAlign(CENTER);
  textSize(25);
}

void draw(){
  background(50);
  fill(255, 0, 0);
  text(String.format("Pontuação: %d",pontos), width/2, height-30);
  rect(comida.x, comida.y, lado, lado);
  drawCobra();
  andar();comer();
}

void drawCobra(){
  for(int i=0;i < cobra.size();i++){
    fill(255);
    rect(cobra.get(i).x, cobra.get(i).y, lado, lado);
  }
}

void andar(){
  PVector temp = cobra.get(0);
  cobra.remove(cobra.size()-1);
  cobra.add(0,new PVector(temp.x+vel.x, temp.y+vel.y));

  //for(int i=cobra.size()-1;i>=1;i--){
  //  cobra.get(i).x = cobra.get(i-1).x;
  //  cobra.get(i).y = cobra.get(i-1).y;
  //}
  //cobra.get(0).x += vel.x;
  //cobra.get(0).y += vel.y;
}

void comer(){
  if(comida.dist(cobra.get(0)) == 0){
    pontos++;
    comida.x = int(random(width/10))*10;
    comida.y = int(random(height/10))*10;
    cobra.add(new PVector(cobra.get(cobra.size()-1).x,cobra.get(cobra.size()-1).y));
    drawCobra();
  }
}