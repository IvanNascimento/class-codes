import java.util.Scanner;

public class MaiorNum{
     public static void main(String []args){
        int num1,num2;
        Scanner input = new Scanner(System.in);
        System.out.print("incira o primeiro e o segundo numero: ");
        num1 = input.nextInt();
        num2 = input.nextInt();
        if (num1 > num2){System.out.println("o numero "+num1+" eh o maior."); }
        else{System.out.println("o numero "+num2+" eh o maior."); }
     }}
