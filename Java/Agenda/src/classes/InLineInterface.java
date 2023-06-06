package classes;

import java.util.ArrayList;
import java.util.Scanner;

public class InLineInterface {
  public static void main(String[] args) {
    
  }
  public void Manual(){
    Dados dados = new Dados();
    Scanner input = new Scanner(System.in);
    String entrada;
    ArrayList<Objeto> lista = new ArrayList<>();
    while (true){
      entrada = input.nextLine();
      if("-1".equals(entrada)) { break; }
      lista.add(new Objeto(entrada, "Manga"));
    }
    dados.Salvar(lista);
  }
}
