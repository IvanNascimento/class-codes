import java.util.Scanner;

public class MediaAluno{
  public static void main(String []args){
    String nome;
    Double nota1,nota2,nota3,media;
    Scanner input = new Scanner(System.in);
    System.out.print("Incira seu nome: ");
    nome = input.nextLine();
    System.out.print("Incira tres notas: ");
    nota1 = input.nextDouble();
    nota2 = input.nextDouble();
    nota3 = input.nextDouble();
    media = nota1+nota2+nota3/3;
    System.out.println("Aluno: "+nome);
    System.out.println("Media: "+media);
  }
}
