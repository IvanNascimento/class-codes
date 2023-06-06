package Pilha.PilhaEstatica;

import Pilha.*;

public class PilhaEstatica<T> implements Pilha<T>{
  public static final int TAM_MAX = 1000;
  private int numElements;
  private T elements[];
  private int top =-1;

  public PilhaEstatica(){
    this(TAM_MAX);
  }
  public PilhaEstatica(int tam){
    this.numElements = tam;
    elements = (T[]) new Object[this.numElements];
  }
  @Override
  public void empilha(T o) throws PilhaCheiaException{
    if(tamanho() == numElements){
      throw new PilhaCheiaException();      
    }
    this.top++;
    this.elements[top] = o;
  }
  @Override
  public T desempilhar() throws PilhaVaziaException{
    if(vazia()){
      throw new PilhaVaziaException();
    }
    T element = elements[this.top];
    elements[this.top] = null;
    this.top--;
    
    return element;
  }
  @Override
  public int tamanho() {
    return this.top+1;
  }
  @Override
  public boolean vazia() {
    return this.top == -1;
  }
  @Override
  public T topo() throws PilhaVaziaException {
    if(vazia()){
      throw new PilhaVaziaException();
    }
    return elements[top];
  }
  @Override
  public String toString() {
    StringBuilder result = new StringBuilder();
    
    result.append("[ ");
    
    for(int i=top;i>0;i--){
      result.append(elements[i]);
      result.append(", ");
    }
    result.append(elements[0]);
    result.append(" ]");
    
    return result.toString();
  }
}
