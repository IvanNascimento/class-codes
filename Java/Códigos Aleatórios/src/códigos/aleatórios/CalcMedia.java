package códigos.aleatórios;

import java.util.Scanner;

/**
 * @author Ivan Luís Silva do Nascimento
 */
public class CalcMedia {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Double[] lista;
        lista = new Double[5];
        int cont=1;

        for(int i = 0;i<5;i++){
            System.out.print("Sua "+cont+"° nota foi: ");
            lista[i] = input.nextDouble();
            cont = cont+1;
        }
        Double media = 0.0;
        for (int i =0;i<5;i++){
            media = media+lista[i];
        }
        media = media/5;
        System.out.print("aluno:\n   Qual foi minha media ?"+"\n"+"professor:\n   Ha sua media é: ");
        System.out.println(media);
    }

}
