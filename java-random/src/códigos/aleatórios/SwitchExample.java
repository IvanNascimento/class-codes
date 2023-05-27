package códigos.aleatórios;

import java.util.Scanner;
// linha seguinte simplifica a escrita do System.out.println();
//import static java.lang.System.*;

public class SwitchExample {
  public static void main(String[] args) {
    int opcao;

    System.out.println("-------------------------------------");
    System.out.println("| >> IFPB-PC MENU                   |");
    System.out.println("| Opções para programas:            |");
    System.out.println("| '$' significa Desativado          |");
    System.out.println("| 0. Sair                           |");
    System.out.println("| 1. Somar 2 nums                   |");
    System.out.println("| 2. Subtrair 2 nums                |");
    System.out.println("| 3. Multiplicar 2 nums             |");
    System.out.println("| 4. Dividir 2 nums                 |");
    System.out.println("| 5. Exibir N Termos de P.A.        |");
    System.out.println("| 6. Exibir N Termos de P.G.        |");
    System.out.println("| 7. Exibir soma dos termos da P.A. |");
    System.out.println("| 8. Exibir soma dos termos da P.G. |");
    System.out.println("| 9. $ Proporção aurea              |");
    System.out.println("| 10. fibonacci                     |");
    System.out.println("| 11. Numero Primo                  |");
    System.out.println("| 12. Soma de matriz                |");
    System.out.println("| 13. Do While                      |");
    System.out.println("| 14. Multiplicação de matriz       |");
    System.out.println("-------------------------------------");
    System.out.println(" Selecionar opção: ");

    Scanner ponteiro = new Scanner(System.in);
    opcao = ponteiro.nextInt();

    int a, r, n=1, t, b;
      switch (opcao) {
        case 0: // Sair
          System.out.println("Opção Sair Selecionada");
          break;
        case 1: // Somar 2 nums
          System.out.println("Selecionada OP#1 SOMA");
          System.out.println(" Digitar, favor, dois números (seguidos de <enter>)");
          int n1 = ponteiro.nextInt();
          int n2 = ponteiro.nextInt();
          int soma2 = n1 + n2;
          System.out.println( ">> SOMA foi: " + soma2);

          break;
        case 2: // Subtrair 2 nums
          System.out.println("Selecionada OP#2 Subtração");
          System.out.println(" Digitar, favor, dois números (seguidos de <enter>)");
          int s1 = ponteiro.nextInt();
          int s2 = ponteiro.nextInt();
          int subtracao = s1-s2;
          System.out.println( ">> SUBT. foi: " + subtracao);

          break;
        case 3: //Multiplicar 2 nums
          System.out.println("Selecionada OP#3 MULTIPLICACAO");
          System.out.println(" Digitar, favor, dois números (seguidos de <enter>)");
          int m1 = ponteiro.nextInt();
          int m2 = ponteiro.nextInt();
          int mult = m1 * m2;
          System.out.println( ">> MULT. foi: " + mult);

          break;
        case 4: //Dividir 2 nums
          System.out.println("Selecionada OP#4 DIVISAO");
          System.out.println(" Digitar, favor, dois números (seguidos de <enter>)");
          int d1 = ponteiro.nextInt();
          int d2 = ponteiro.nextInt();
          int divi = d1/d2;
          System.out.println( ">> DIV. foi: " + divi);

          break;
        case 5: // P.A.
          System.out.println("Selecionada OP#5 P.A");
          System.out.println(" Digitar o primeiro termo da P.A.");
          a=ponteiro.nextInt();
          System.out.println(" Entrar com a razao");
          r=ponteiro.nextInt();
          System.out.println(" Entrar com o número de termos");
          b=ponteiro.nextInt();

          System.out.println( ">> PROGRESSÃO ATMOSFÉRICA");
          //System.out.print("(");
          while(b != n-1) {
            t=(a+(n-1)*r);
            n++;
            System.out.print(t+" ");
          }//while
          //System.out.print(")");
          break;
        case 6: //P.G.
          System.out.println("Selecionada OP#6 P.G");
          System.out.println(" Digitar o primeiro termo da P.G.");
          a=ponteiro.nextInt();
          System.out.println(" Entrar com a razao");
          r=ponteiro.nextInt();
          System.out.println(" Entrar com o número de termos");
          b=ponteiro.nextInt();

          System.out.println( ">> PROGRESSÃO ATMOSFÉRICA");
          //System.out.print("(");
          while(b != n-1) {
            double rn = Math.pow(r,n-1);
            double g=(a*(rn));
            n++;
            int d = (int)g;
            System.out.print(d+" ");
          }//while
          //System.out.print(")");
          break;
        case 7: // Soma P.A.
          System.out.println("Selecionada OP#7 soma P.A.");
          System.out.println(" Digitar o primeiro termo da P.A.");
          a=ponteiro.nextInt();
          System.out.println(" Entrar com a razao");
          r=ponteiro.nextInt();
          System.out.println(" Entrar com o número de termos");
          b=ponteiro.nextInt();
          
          int an = a+(b-1)*r;
          int somaA = ((a+an)*b)/2;

          System.out.println("A soma eh: "+somaA);

          break;
        case 8: // Soma P.G.
          System.out.println("Selecionada OP#8 soma P.G.");
          System.out.println(" Digitar o primeiro termo da P.G.");
          a=ponteiro.nextInt();
          System.out.println(" Entrar com a razao");
          r=ponteiro.nextInt();
          System.out.println(" Entrar com o número de termos");
          b=ponteiro.nextInt();
          int somaG = 0;
          while(b != n-1){
            double rb = (Math.pow(r,n-1));
            int s = (int) rb;
            int ar = a*s;
            somaG += ar;
            n++;
          }//while
          System.out.println("A soma eh: "+somaG);
          break;
        case 9://Não funciona P. Aurea
          System.out.println("Selecionada OP#9 proporção aurea");
          System.out.println("Incira altura e largura(respquetivamente): ");
          int x = ponteiro.nextInt(),y = ponteiro.nextInt();
          b = y-x;
          a = y-b;
          System.out.println(a);
          break;
        case 10: //Fibonacci
          System.out.println("Selecionada OP#10 fibonacci");
          System.out.println("Quantos termos quer  ver? ");
          int termos = ponteiro.nextInt();
          int a1=1,a2=1,a3=a1;
          System.out.println("Termos: ");
          System.out.print("1 1 ");
          for (int i = 0;i != termos-2;i++ ){
            n = a1+a2;
            a1=a2;
            a2=n;
            System.out.print(n+" ");
          }// for

          break;
        case 11: //Num. Primo
          UtilitariaPrimo ump = new UtilitariaPrimo();
          System.out.println("Selecionada OP #11 NumPrimo");
          System.out.println("Informar numero para verificar se é primo: ");
          int numTestado = ponteiro.nextInt();
          System.out.println("Resultado: " + ump.ehPrimo(numTestado));
          break;
        case 12: // Soma Matriz
          System.out.println("Selecionada OP #7");
          System.out.println("** OPERAÇÕES COM MATRIZES **");

          System.out.println("Informar número de linhas: ");

          int linhas = ponteiro.nextInt();

          System.out.println("Informar número de colunas: ");

          int cols = ponteiro.nextInt();

          // VETORES HOMOGÊNEOS - BIDIMENSIONAIS!
          //  TIPO [] [] varExemplo = new TIPO[tam1][tam2]

          int[][] matriz1 = new int[linhas][cols];

          int[][] matriz2 = new int[linhas][cols];

          int[][] somaMatrizes = new int[linhas][cols];

          System.out.println("\n> Informar os elementos da MAT. A :");

          for (int i = 0; i < linhas; i++){
            for (int j = 0; j < cols; j++){
              int l = i+1;
              int c = j+1;
              System.out.println("Elemento[linha=" + l + " , col=" + c + "]:");
              matriz1[i][j] = ponteiro.nextInt();
            } //fim For interno (j)
          } //fim For Externo (i)

          System.out.println("\n> Informar os elementos da MAT. B :");

          for (int i = 0; i < linhas; i++){
            for (int j = 0; j < cols; j++){
              int l = i+1;
              int c = j+1;
              System.out.println("Elemento[linha=" + l + " , col=" + c + "]:");
              matriz2[i][j] = ponteiro.nextInt();
            } //fim For interno (j)
          } //fim For Externo (i)

          System.out.println("\n** Primeira Matriz = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++) {
              System.out.print(matriz1[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)

          System.out.println("\n** Segunda Matriz = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++) {
              System.out.print(matriz2[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)

          System.out.println("\n** Soma = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++)  {
              somaMatrizes[i][j] = matriz1[i][j] + matriz2[i][j];
              System.out.print(somaMatrizes[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)
          break;
        case 13: // Do While
          System.out.println("Selecionada OP #8");
          System.out.println("** ESTRUTURAS DE REPETIÇÃO **");
          System.out.println("** FOR, WHILE ... e Do...While (repita) **");

          System.out.println("*** Ex1. WHILE **");

          x = 100;
          do { // início While
            System.out.print("valor de x : " + x);
            x++;
            System.out.print("\n");
          } while( x < 123 );
          break;
        case 14:// Multiplica Matriz (Não funciona)
          // para multiplicar fazaz colunas(matriz)*linhas(matrizB)
          // codição para executar colunas == linhas
          System.out.println("Selecionada OP #7");
          System.out.println("** OPERAÇÕES COM MATRIZES **");

          System.out.println("Informar número de linhas: ");

          linhas = ponteiro.nextInt();

          System.out.println("Informar número de colunas: ");

          cols = ponteiro.nextInt();

          // VETORES HOMOGÊNEOS - BIDIMENSIONAIS!
          //  TIPO [] [] varExemplo = new TIPO[tam1][tam2]

          int[][] matrizA = new int[linhas][cols];

          int[][] matrizB = new int[linhas][cols];

          int[][] MultiplicacaoMatrizes = new int[linhas][cols];

          System.out.println("\n> Informar os elementos da MAT. A :");

          for (int i = 0; i < linhas; i++){
            for (int j = 0; j < cols; j++){
              int l = i+1;
              int c = j+1;
              System.out.println("Elemento[linha=" + l + " , col=" + c + "]:");
              matrizA[i][j] = ponteiro.nextInt();
            } //fim For interno (j)
          } //fim For Externo (i)

          System.out.println("\n> Informar os elementos da MAT. B :");

          for (int i = 0; i < linhas; i++){
            for (int j = 0; j < cols; j++){
              int l = i+1;
              int c = j+1;
              System.out.println("Elemento[linha=" + l + " , col=" + c + "]:");
              matrizB[i][j] = ponteiro.nextInt();
            } //fim For interno (j)
          } //fim For Externo (i)

          System.out.println("\n** Primeira Matriz = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++) {
              System.out.print(matrizA[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)

          System.out.println("\n** Segunda Matriz = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++) {
              System.out.print(matrizB[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)

          System.out.println("\n** Soma = ");

          for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < cols; j++)  {
              MultiplicacaoMatrizes[i][j] = matrizA[i][j] + matrizB[i][j];
              System.out.print(MultiplicacaoMatrizes[i][j]+"\t");
            } //fim For interno (j)
            System.out.println();
          } //fim For Externo (i)
            break;
        default: // Padrao
          System.out.println("Seleção Inválida");
      }//switch
  } //main
} //classe main

class UtilitariaPrimo{
  String ehPrimo(int x){
    boolean condPrimo;
    String resultado;
    int numDeDivisores = 1;
    int candDivisor = 2;
    while (candDivisor <= x){
      if (x % candDivisor == 0)
        numDeDivisores += 1;
      candDivisor += 1;
    }//while
    if (numDeDivisores == 2)
      condPrimo = true;
    else
      condPrimo = false;

    if(condPrimo)
      resultado = "Eh Primo";
    else
      resultado = "Não eh Primo";

    return resultado;
  }//ehPrimo
}//classe Utilitaria
