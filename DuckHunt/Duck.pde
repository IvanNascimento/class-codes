class Duck{
  int pontuacao;
  color cor;
  float velX;
  PVector posicao;
  int raio;
  boolean morto;
  
  Duck(){
    switch((int) random(3)){
      case 0:
        // Preto
        this.cor = color(0,0,0);
        this.pontuacao = 500;
        break;
      case 1:
        // Azul
        this.cor = color(0,0,255);
        this.pontuacao = 1000;
        break;
      case 2:
        // Vermelho
        this.cor = color(255,0,0);
        this.pontuacao = 3000;
        break;
    }
    this.morto = false;
    this.raio = 15;
    if(((int) random(2)) > 0){
      this.velX = 3;
      this.posicao = new PVector(0, random(160));
    }else{
      this.velX = -3;
      this.posicao = new PVector(width, random(160));
    }
  }

  void mostrar(){
    if(!this.morto){
      fill(this.cor);
      ellipse(this.posicao.x, this.posicao.y, raio*2, raio*2);
    }
  }
  
  void atualizar(){
    this.posicao.x += this.velX;
    this.posicao.y += 5*sin(this.posicao.x/30);
  }
  
  int morrer(){
    if(!this.morto){
      if(this.posicao.dist(new PVector(mouseX, mouseY)) <= this.raio){
        this.morto = true;
        return this.pontuacao;
      }
    }
    return 0;
  }
}
