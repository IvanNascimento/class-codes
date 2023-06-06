package códigos.aleatórios;

import java.util.Scanner;

public class TrocaAB{
    public static void main(String []args){
        int A,B,C;
        Scanner input = new Scanner(System.in);
        System.out.print("Incira A e B: ");
        A = input.nextInt();
        B = input.nextInt();
        C = B;
        B = A;
        A = C;
        System.out.print("A: "+A+"\n"+"B: "+B);
        }
     }
