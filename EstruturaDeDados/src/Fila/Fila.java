package Fila;

public interface Fila<T> {
  public void inicializa(int tamanho);
  public void enfileirar(T e) throws FilaCheiaException;
  public T desenfileirar() throws FilaVaziaException;
  public T primeiro() throws FilaVaziaException;
  public T ultimo() throws FilaVaziaException;
  public int tamanho();
  public boolean vazia();
  public boolean cheia();
}
