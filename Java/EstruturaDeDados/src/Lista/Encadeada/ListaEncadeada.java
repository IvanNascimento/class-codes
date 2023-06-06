package Lista.Encadeada;

import Lista.Lista;

public class ListaEncadeada implements Lista {

  private Celula primeira;
  private Celula ultima;
  private int tamanho;

  @Override
  public void inicializa() {
    this.primeira = null;
    this.ultima = null;
    this.tamanho = 0;
  }
  @Override
  public void adicionar(Object e) {
    if (this.tamanho() == 0) {
      addComeco(e);
    } else {
      addFinal(e);
    }
  }
  @Override
  public void adicionar(int posicao, Object e) {
    if(posicao == 0){
      this.addComeco(e);
    }else if(posicao == tamanho){
      this.addFinal(e);
    }else{
      Celula cell = (Celula) recuperar(posicao-1);
      Celula nova = new Celula(cell.getProxima(), e);
      cell.setProxima(nova);
      tamanho++;
    }
  }
  @Override
  public Object recuperar(int posicao) {
    return getCelula(posicao).getElemento();
  }
  
  private Celula getCelula(int posicao){
    Celula cell = this.primeira;
    for(int i = 0;i<posicao;i++){
      cell = cell.getProxima();
    }
    return cell;
  }
  
  @Override
  public void remover(int posicao) {
    if(posicao==0){
      delComeco();
    }else if(posicao==tamanho){
      delFinal();
    }else{
      Celula anterior = primeira;
      this.recuperar(posicao-2);
      anterior.setProxima(anterior.getProxima().getProxima());
      this.tamanho--;
    }
  }
  @Override
  public boolean verificar(Object e) {
    Celula cell = this.primeira;
    while (true) {
      if (cell.getElemento().equals(e)) {
        return true;
      } else if (cell.getProxima() == null) {
        return false;
      }
      cell = cell.getProxima();
    }
  }
  @Override
  public int tamanho() {
    return this.tamanho;
  }
  @Override
  public String toString() {
    if (this.tamanho == 0) {
      return "[]";
    }
    StringBuilder ts = new StringBuilder();
    Celula aux = this.primeira;

    ts.append("[ ");

    while (aux.getProxima() != null) {
      ts.append(aux.getElemento());
      ts.append(", ");
      aux = aux.getProxima();
    }
    ts.append(aux.getElemento());

    ts.append(" ]");
    return ts.toString();
  }
  private void addComeco(Object elemento) {
    Celula cell = new Celula(this.primeira, elemento);
    this.primeira = cell;
    if (this.tamanho() == 0) {
      this.ultima = this.primeira;
    }
    this.tamanho++;
  }
  private void delComeco() {
    Celula aux = this.primeira.getProxima();
    this.primeira = aux;
    this.tamanho--;
  }
  private void delFinal() {
    this.ultima = (Celula) this.recuperar(this.tamanho-1);
    this.ultima.setProxima(null);
    this.tamanho--;
  }
  private void addFinal(Object e) {
    Celula cell = new Celula(null, e);
    this.ultima.setProxima(cell);
    this.ultima = cell;
    this.tamanho++;
  }
}
