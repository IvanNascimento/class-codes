function Cobra(){
  this.x = 0;
  this.y = 0;
  this.xVel = 1;
  this.yVel = 0;
  this.tamanho = 10,
  this.comprimento = 0,
  this.corpo = [];
  /*declara variavel
    x = lado
    y = baixo,cima
    xVel ou yVel = velocida que se move
    tamanho = pixel que se move
    */

  this.comeu = function(comida){
    if (dist(this.x,this.y,comida.x,comida.y) <1){
      this.comprimento++;
      return true;
    }
    else{
      return false;
    }
  }
  this.atualizar = function(){
    for (i=0;i<this.corpo.length-1;i++){
      this.corpo[i] = this.corpo[i+1];
    }
    this.corpo[this.comprimento-1]=createVector(this.x,this.y);

    this.x += this.xVel*this.tamanho;
    this.y += this.yVel*this.tamanho;
    /*se mover pixel por pixel*/

    if (this.x == width){
      this.x = 0;
    }
    else if (this.x == -this.tamanho){
      this.x = width;
    }
    if (this.y == height){
      this.y = 0;
    }
    else if (this.y == -this.tamanho){
      this.y = height;
    }
    /*fazer quando sair da tela pro um lado aparecer no lado oposto*/
  }
  this.desenhar = function(){
    fill(255,0,0);
    rect(this.x,this.y,this.tamanho,this.tamanho);
    for (i=0;i<this.comprimento;i++){
        fill(255,0,0);
        rect(this.x,this.y,this.tamanho,this.tamanho);
        fill(255);
        rect(this.corpo[i].x,this.corpo[i].y,this.tamanho,this.tamanho);
    }
    /*recat(x,y,largura,altura)*/
    /*x += 1;
      y += 1;
      altomatico (chato)
    */

  }
  this.definirVelocidade = function(x,y){
    this.xVel = x;
    this.yVel = y;
  }
}
