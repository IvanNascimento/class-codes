import java.util.Scanner;

public class SomaMult{
    public static void main(String []args){
        int par=1,impar=0;
        for (int i = 1; i <= 40; i++){
            if (i%2==0){ impar += i; }
            else{ par *= i; }
        }
    System.out.println("A soma do impares he: "+impar);
    System.out.println("A multiplicacao do pares he: "+par);
     }}
