import java.util.Scanner;

public class ComparaNumero{
    public static void main(String []args){
        Scanner input = new Scanner(System.in);
        int num1,num2;
        System.out.print("incira dois numeros: ");
        num1 = input.nextInt();
        num2 = input.nextInt();
        if (num1 == num2){ 
            System.out.println("os numeros sao iguais."); }
        else{ 
            System.out.println("os numeros sao diferentes."); }
        if (num1 > num2){ 
            System.out.println("o maior he: "+num1+"\n"+"o menor he: "+num2); }
        else{ 
            System.out.println("o maior he: "+num2+"\n"+"o menor he: "+num1); }
}}