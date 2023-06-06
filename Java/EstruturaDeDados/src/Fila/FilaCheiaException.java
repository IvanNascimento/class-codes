package Fila;

public class FilaCheiaException extends Exception{
  public FilaCheiaException(){
    super("Fila cheia, não é possível emfileirar elementos");
  }
  public FilaCheiaException(String s){
    super(s);
  }
}
