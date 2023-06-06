import java.util.Scanner;

public class NumDecresc{
     public static void main(String []args){
        int num1;
        Scanner input = new Scanner(System.in);
        System.out.print("incira o numero: ");
        num1 = input.nextInt();
        for (int i = num1; i >= 0; i--){
            System.out.println(i);
        }
     }}
