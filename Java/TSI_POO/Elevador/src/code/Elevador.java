package code;

public class Elevador {
  private int andarAtual;
  private final int totalAndares;
  private final int capacidade;
  private int qtdPessoas;

  public Elevador(int totalAndares, int capacidade) {
    this.andarAtual = 0;
    this.totalAndares = totalAndares;
    this.qtdPessoas = 0;
    this.capacidade = capacidade;
  }

  public Elevador(int andarAtual, int totalAndares, int capacidade) {
    this.andarAtual = andarAtual;
    this.totalAndares = totalAndares;
    this.qtdPessoas = 0;
    this.capacidade = capacidade;
  }

  public Elevador(int andarAtual, int totalAndares, int capacidade, int qtdPessoas) {
    this.andarAtual = andarAtual;
    this.totalAndares = totalAndares;
    this.qtdPessoas = qtdPessoas;
    this.capacidade = capacidade;
  }

  public int getAndarAtual() {
    return andarAtual;
  }

  public int getTotalAndares() {
    return totalAndares;
  }

  public int getCapacidade() {
    return capacidade;
  }

  public int getQtdPessoas() {
    return qtdPessoas;
  }

  public boolean entra() {
    return entra(1);
  }

  public boolean entra(int pessoas) {
    if (this.qtdPessoas + pessoas <= this.capacidade) {
      this.qtdPessoas += pessoas;
      return true;
    }
    return false;
  }

  public boolean sai() {
    return sai(1);
  }

  public boolean sai(int pessoas) {
    if (this.qtdPessoas - pessoas >= 0) {
      this.qtdPessoas -= pessoas;
      return true;
    }
    return false;
  }

  public boolean sobe() {
    return sobe(1);
  }

  public boolean sobe(int andares) {
    if (this.andarAtual + andares <= this.totalAndares) {
      this.andarAtual += andares;
      return true;
    }
    return false;
  }

  public boolean desce() {
    return desce(1);
  }

  public boolean desce(int andares) {
    if (this.andarAtual - andares >= 0) {
      this.andarAtual -= andares;
      return true;
    }
    return false;
  }

}