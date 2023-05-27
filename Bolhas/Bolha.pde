class Bolha{
  PVector posicao;
  int diam;
  color cor;
  int v;
  char caracter;
  PImage img;
  String url;

  Bolha(){
    this.posicao = new PVector(width/2, height);
    this.diam = 70;
    this.cor = color(255, 0, 0);
    this.v = 1;
    this.url = "bolha"+(int)random(3)+".png";
    this.img = loadImage(url);
  }
  
  Bolha(int d, color c, int v, char s, PVector p){
    this.diam = d;
    this.cor = c;
    this.v = v;
    this.caracter = s;
    this.posicao = p;
    this.url = "bolha"+(int)random(3)+".png";
    this.img = loadImage(url);
  }
  
  void mostrar(){
    stroke(0);
    tint(cor, 75);
    imageMode(CENTER);
    if(url.equals("bolha1.png")){
      image(img, this.posicao.x, this.posicao.y, 30, 30);
    }else if(url.equals("bolha2.png")){
      image(img, this.posicao.x, this.posicao.y, 35, 35);
    }else if (url.equals("bolha0.png")){
      image(img, this.posicao.x, this.posicao.y, 45, 40);
    }
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(0.5*this.diam);
    text(this.caracter, this.posicao.x, this.posicao.y);
  }
  
  void subir(){
    this.posicao.y -= v;
    this.posicao.x += 2*sin(this.posicao.y/10);
  }
}