import java.util.*;
public class Ler5Medias{
    public static void main(String[] a){
        Scanner b = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nomeUsuario = b.nextLine();
        System.out.println("oi " + nomeUsuario);
        double soma = 0,media = 0;
        int temp = 0;
        double[] notas = new double[]{0.0,0.0,0.0,0.0,0.0};
        System.out.println("Informe cinco notas.");
        for(int i = 0; i < 5; i++){
            temp = i+1;
            System.out.println("agora, digitar o "+temp+" elemento");
            notas[i] = b.nextDouble();
            soma = soma + notas[i];
        }
        media = soma/5;
        System.out.println(nomeUsuario +" sua media eh: " + media);
        System.out.println("Eh a soma eh: " + soma);
    }
}