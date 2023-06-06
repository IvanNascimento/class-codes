package Fila.Estatica;

import Fila.FilaCheiaException;
import Fila.FilaVaziaException;

public class FilaEstatica<T> implements Fila.Fila<T>{
  private T[] elementos;
  public static final int TAM_MAX = 1000;
  private int numeroElementos;// Numero de Elementos
  private int inicio;
  private int fim;
  
  public FilaEstatica(){
    this(TAM_MAX);
  }
  public FilaEstatica(int tamanhoMax){
    inicio = 0;
    fim = -1;
    this.numeroElementos = tamanhoMax;
    elementos = (T[]) new Object[this.numeroElementos];
  }
  @Override
  public void inicializa(int tamanho) {
    throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
  }
  @Override
  public void enfileirar(T e) throws FilaCheiaException {
    if(tamanho() == numeroElementos) {
      throw new FilaCheiaException();
    }
    fim++;
    elementos[fim] = e;
  }
  @Override
  public T desenfileirar() throws FilaVaziaException {
    throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
  }
  @Override
  public T primeiro() throws  FilaVaziaException{
    if(vazia()){
      throw new FilaVaziaException();
    }
    return elementos[inicio];
  }
  @Override
  public T ultimo() throws FilaVaziaException {
    if(vazia()){
      throw new FilaVaziaException();
    }
    return elementos[fim];
  }
  @Override
  public int tamanho() {
    return fim-inicio+1;
  }
  @Override
  public boolean vazia() {
    return fim == -1;
  }
  @Override
  public boolean cheia() {
    throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
  }
}
