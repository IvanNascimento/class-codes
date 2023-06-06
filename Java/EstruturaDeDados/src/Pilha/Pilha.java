package Pilha;

public interface Pilha<T> {
  public void empilha(T o) throws PilhaCheiaException;
  public T desempilhar() throws PilhaVaziaException;
  public int tamanho();
  public boolean vazia();
  public T topo() throws PilhaVaziaException;
}
