class Bolha {
  PVector posicao;
  int diam;
  color cor;
  int v;
  char caracter;

  Bolha() {
    this.posicao = new PVector(width/2, height);
    this.diam = 50;
    this.cor = color(255, 0, 0);
    this.v = 1;
  }

  Bolha(int d, color c, int v, char s, PVector p) {
    this.diam = d;
    this.cor = c;
    this.v = v;
    this.caracter = s;
    this.posicao = p;
  }

  void mostrar() {
    stroke(0);
    fill(cor, 50);
    ellipse(this.posicao.x, this.posicao.y, this.diam, this.diam);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(0.7*this.diam);
    text(this.caracter, this.posicao.x, this.posicao.y);
  }

  void subir() {
    this.posicao.y -= v;
    this.posicao.x += 2*sin(this.posicao.y/10);
  }
}