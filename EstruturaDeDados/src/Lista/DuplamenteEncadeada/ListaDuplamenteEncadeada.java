package Lista.DuplamenteEncadeada;

public class ListaDuplamenteEncadeada implements Lista.Lista{

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
    if(tamanho == 0){
      addComeco(e);
      ultima = primeira;
    }else{
      addFinal(e);
    }
  }
  
  @Override
  public void adicionar(int posicao, Object e) {
    if(posicao == 0){
      addComeco(e);
    }else if(posicao == tamanho){
      addFinal(e);
    }else{
      Celula cell = (Celula) getCelula(posicao-1);
      Celula nova = new Celula(cell.getProxima(), cell, e);
      cell.setProxima(nova);
    }
  }
  
  @Override
  public Object recuperar(int posicao) {
    return getCelula(posicao).getElemento();
  }
  
  private Celula getCelula(int posicao){
    if(posicao<(tamanho/2)){
      Celula cell = primeira;
      for(int i=0;i<posicao;i++){
        cell = cell.getProxima();
      }
      return cell;
    }else{
      Celula cell = ultima;
      for(int i=tamanho;i>posicao;i--){
        cell = cell.getAnterior();
      }
      return cell;
    }
  }
  
  @Override
  public void remover(int posicao) {
    if(posicao == 0){
      delComeco();
    }else if(posicao == tamanho){
      delFinal();
    }else{
      Celula anterior = (Celula) getCelula(posicao-1);
      Celula proxima = (Celula) getCelula(posicao+1);
      Celula remover = (Celula) getCelula(posicao);

      anterior.setProxima(proxima);
      proxima.setAnterior(anterior);
      
      remover.setAnterior(null);
      remover.setProxima(null);
      tamanho--;
    }
  }
  
  @Override
  public boolean verificar(Object e) {
    Celula cell = primeira;
    for(int i=0;i<tamanho;i++){
      if(cell.getElemento().equals(e)){
        return true;
      }
      cell = cell.getProxima();
    }
    return false;
  }
  
  @Override
  public int tamanho() {
    return this.tamanho;
  }
  
  private void addComeco(Object e){
    Celula cell = new Celula(primeira, null, e);
    cell.setProxima(primeira);
    this.primeira = cell;
    this.tamanho++;
  }
  
  private void delComeco(){
    primeira = primeira.getProxima();
    primeira.setAnterior(null);
    tamanho--;
  }
  
  private void addFinal(Object e){
    Celula cell = new Celula(null, ultima, e);
    this.ultima.setProxima(cell);
    this.ultima = cell;
    this.tamanho++;
  }

  private void delFinal(){
    ultima = ultima.getAnterior();
    ultima.setProxima(null);
    tamanho--;
  }
  @Override
  public String toString() {
    if(tamanho==0){
      return "[]";
    }
    StringBuilder result = new StringBuilder();
    Celula cell = primeira;
    
    result.append("[");
    for(int i=0;i<tamanho-1;i++){
      result.append(cell.getElemento());
      result.append(", ");
      
      cell = cell.getProxima();
    }
    result.append(cell.getElemento());
    
    result.append("]");
    
    return result.toString();
  }
  
}
