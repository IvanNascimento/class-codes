import java.util.Scanner;

public class CtoF{
  public static void main(String []args){
    int C,F;
    Scanner input = new Scanner(System.in);
    System.out.print("Incira a temperatura em Celsius: ");
    C = input.nextInt();
    F = (9*C+160)/5;
    System.out.println("A tmeperatura em Fahrenheit: "+F);
  }
}
