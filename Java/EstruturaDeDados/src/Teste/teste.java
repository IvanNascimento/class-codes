package Teste;

import Pilha.Pilha;
import Pilha.PilhaCheiaException;
import Pilha.PilhaEstatica.*;
import Pilha.PilhaVaziaException;

public class teste {
  public static void main(String[] args){
    Pilha<String> p = new PilhaEstatica(2);
    try{
      p.empilha("Ivan");
      p.desempilhar();
    }catch(PilhaCheiaException ex){
      // Montar metodo de tratamento de exceção
      System.err.println(ex);
    }catch(PilhaVaziaException ex){
      // Adicionar tratamento de exceção
      System.err.println(ex);
    }    
    System.out.println(p.toString());
  }
}
