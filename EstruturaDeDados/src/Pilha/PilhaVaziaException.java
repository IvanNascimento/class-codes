package Pilha;

public class PilhaVaziaException extends Exception{
  public PilhaVaziaException(){
    super("Pilha Vazia, não é possível recuperar o elemento");
  }
  public PilhaVaziaException(String s){
    super(s);
  }
}