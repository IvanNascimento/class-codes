package códigos.aleatórios;

import java.util.Scanner;

public class MediaCombustivel{
  public static void main(String []args){
    Double combustivel,mediaC;
    int km;
    Scanner input = new Scanner(System.in);
    System.out.print("Incira o total de Km percoridos: ");
    km = input.nextInt();
    System.out.print("Incira o total de combustivel gasto: ");
    combustivel = input.nextDouble();
    mediaC = km/combustivel;
    System.out.println("A media de combustivel he: "+mediaC+"l/km");
  }
}
