var c = new Cobra(),
    comida;

function setup() {
  /*executa so uma vez*/

  createCanvas(1360,660);
  /*tamanho da tela*/
  frameRate(10);
  /*background(128);
  ou
  background(0,0,0)
  cor do plano de fundo
  menos eficais no setup
  */
  gerarComida();
}

function draw() {
  /*esecuta constantemente*/
  background(128);
  /*ou
  background(0,0,0)
  cor do plano de fundo
  mais eficais no draw
  */
  c.atualizar();
  c.desenhar();
  if (c.comeu(comida)){
    gerarComida();
  }
  desenharComida();
}

function gerarComida(){
  var xc = floor(random(width/c.tamanho))*c.tamanho,
      yc = floor(random(height/c.tamanho))*c.tamanho;
  comida = createVector(xc,yc);
}

function desenharComida(){
  fill(0);
  rect(comida.x,comida.y,c.tamanho,c.tamanho);
}
function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    c.definirVelocidade(1,0);
  }
  else if (keyCode == LEFT_ARROW){
    c.definirVelocidade(-1,0);
  }
  else if (keyCode == UP_ARROW){
    c.definirVelocidade(0,-1);
  }
  else if (keyCode == DOWN_ARROW){
    c.definirVelocidade(0,1);
  }
  /*move o quadrado pelo teclado*/
}
