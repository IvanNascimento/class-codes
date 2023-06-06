package Fila;

public class FilaVaziaException extends Exception{
  public FilaVaziaException(){
    super("Fila Vazia, não é possível recuperar o elemento");
  }
  public FilaVaziaException(String s){
    super(s);
  }
}
