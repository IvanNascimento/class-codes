package códigos.aleatórios;

import java.util.Scanner;

public class NomeUser{
  public static void main(String []args){

    String nome;

    Scanner input = new Scanner(System.in);
    System.out.print("Entre com seu nome: ");
    nome = input.nextLine();
    System.out.println("Ola " + nome);
     }
}
