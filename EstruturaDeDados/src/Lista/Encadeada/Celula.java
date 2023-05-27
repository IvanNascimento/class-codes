package Lista.Encadeada;

public class Celula {
  private Celula proxima;
  private Object elemento;
  
  public Celula(Celula proxima, Object elemento){
    this.proxima = proxima;
    this.elemento = elemento;
  }
  public Celula(Object elemento){
    this.elemento = elemento;
    this.proxima = null;
  }
  public Celula getProxima(){
    return this.proxima;
  }
  public void setProxima(Celula proxima){
    this.proxima = proxima;
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
