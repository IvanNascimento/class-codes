package classes;

import java.util.ArrayList;

public class Administrador {
  private ArrayList<Objeto> lista;
  
  public void inicializar(){
    this.lista = new ArrayList<>();
  }
  public ArrayList<Objeto> getLista() {
    return lista;
  }
  public void setLista(ArrayList<Objeto> lista) {
    this.lista = lista;
  }
  public void addItem(String nome, String tipo){
    this.lista.add(new Objeto(nome, tipo));
  }
  public void delItem(int i){
    this.lista.remove(i);
  }
  public void editItem(int i, Objeto o){
    this.lista.set(i, o);
  }
  @Override
  public String toString() {
    if(lista.isEmpty()){
      return "{}";
    }
    
    StringBuilder result = new StringBuilder();
    result.append("{");
    for(int i=0;i<lista.size();i++){
      result.append("{");
      result.append("Nome: ").append(lista.get(i).getNome());
      result.append(", ");
      result.append("Tipo: ").append(lista.get(i).getTipo());
      result.append("}\n");
    }
    result.append("}");
    
    return result.toString();
  }  
}
