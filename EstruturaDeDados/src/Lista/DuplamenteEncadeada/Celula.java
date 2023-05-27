package Lista.DuplamenteEncadeada;

public class Celula {
  private Celula proxima;
  private Celula anterior;
  private Object elemento;

  public Celula(Celula proxima, Celula anterior, Object elemento) {
    this.proxima = proxima;
    this.anterior = anterior;
    this.elemento = elemento;
  }
  public Celula(Object elemento){
    this.elemento = elemento;
    this.proxima = null;
    this.anterior = null;
  }
  public Celula getProxima(){
    return this.proxima;
  }
  public void setProxima(Celula proxima){
    this.proxima = proxima;
  }
  public Celula getAnterior() {
    return anterior;
  }
  public void setAnterior(Celula anterior) {
    this.anterior = anterior;
  }
  public Object getElemento(){
    return this.elemento;
  }  
  public void setElemento(Object elemento){
    this.elemento = elemento;
  }
  @Override
  public String toString() {
    StringBuilder result = new StringBuilder();
    result.append("Valor: ");
    result.append(this.getElemento().toString());
    return result.toString();
  }
}
