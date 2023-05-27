package Pilha;

public class PilhaCheiaException extends Exception{
  public PilhaCheiaException(){
    super("Pilha cheia, não é possível empilhar elementos");
  }
  public PilhaCheiaException(String s){
    super(s);
  }
}
