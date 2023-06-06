package códigos.aleatórios;

import static java.lang.System.out;
import java.util.Scanner;

public class OrdenaVetCLI {

  static int compar = 0;
  static int trocas = 0;
  static int tamVetorOrd = 0;
  static int tamVetorMERGEOrd = 0;
  static Scanner input = new Scanner(System.in);

  public static void main(String[] argums) {
    
    int opcao;
    out.println("---------------------------------------");
    out.println("| >> IFPB-PC MENU                     |");
    out.println("|    DISC.: EDADOS             2017.1 |");
    out.println("|    Turma: 3o Informática            |");
    out.println("|    Prof.: Sérgio Espinola           |");
    out.println("| Opções para programas:              |");
    out.println("|  OrdenaVetCLI                       |");
    out.println("|    <TIPO> [VETOR_N elementos]       |");
    out.println("|       101 = Bubble sort             |");
    out.println("|       102 = Selection sort          |");
    out.println("|       103 = merge sort              |");
    out.println("---------------------------------------");

    int numArgums = argums.length;
    if (numArgums >= 1) {
      tamVetorOrd = numArgums - 1;
      tamVetorMERGEOrd = numArgums - 1;

      int vetLido[] = new int[tamVetorOrd];

      opcao = Integer.parseInt(argums[0]);

      for (int c = 0; c < numArgums-1; c++) {
        vetLido[c] = Integer.parseInt(argums[c+1]);
      }

      Comando(opcao, vetLido);
    } else {
      out.println("Selecione uma opção: ");
      opcao = input.nextInt();

      out.println("Insira o vetor a ser ordenado: ");
      input.skip("\n");
      String[] v = input.nextLine().split(" ");
      int vetLido[] = new int[v.length];

      for (int i = 0; i < v.length; i++) {
        vetLido[i] = Integer.parseInt(v[i]);
      }

      Comando(opcao, vetLido);
    }
  }

  public static void Comando(int opcao, int[] vetLido) {
    switch (opcao) {
      case 101:
        out.println("************************************************");
        out.println(" Selecionada OP#1: Bubble sort");
        out.println(" Vetor lido: ");
        imprimirNumeros(vetLido);
        out.println("************************************************");

        int vetOrdenacao[] = vetLido;

        long tempoTM1 = System.currentTimeMillis();
        long tempoNT1 = System.nanoTime();

        bubbleSort(vetOrdenacao);

        long tempoTM2 = System.currentTimeMillis();
        long tempoNT2 = System.nanoTime();

        long tempoGastoTM = Math.abs(tempoTM2 - tempoTM1);
        long tempoGastoNT = Math.abs(tempoNT2 - tempoNT1);

        out.println(">>>> Vetor ORDENADO: ");
        imprimirNumeros(vetOrdenacao);
        out.println();
        out.println(" Tamanho:\t\t\t\t" + tamVetorOrd);
        out.println(" Tempo [currentTimeMillis(), ms]:\t" + tempoGastoTM);
        out.println(" Tempo [nanoTime()/1000 -> us]:\t\t" + tempoGastoNT / 1000);
        out.println(" Comparações(comp):\t\t\t" + compar);
        out.println(" Trocas:\t\t\t\t" + trocas);
        if (trocas != 0) {
          out.println("\t\tT/comp [us/op1]:\t" + tempoGastoNT / compar);
          out.println("\t\tT/trocas [us/op2]:\t" + tempoGastoNT / trocas);
        } else {
          out.println("\t\tT/comp [us/op1]:\t" + tempoGastoNT / compar);
          out.println("\t\tT/trocas [us/op2]:\t - (não houve trocas)");
        }

        break;

      case 102:
        out.println("************************************************");
        out.println(" Selecionada OP#2: Selection sort");
        out.println(" Vetor lido: ");
        imprimirNumeros(vetLido);
        out.println("************************************************");

        vetOrdenacao = vetLido;

        tempoTM1 = System.currentTimeMillis();
        tempoNT1 = System.nanoTime();

        selectionSort(vetOrdenacao);

        tempoTM2 = System.currentTimeMillis();
        tempoNT2 = System.nanoTime();

        tempoGastoTM = Math.abs(tempoTM2 - tempoTM1);
        tempoGastoNT = Math.abs(tempoNT2 - tempoNT1);

        out.println(">>>> Vetor ORDENADO: ");
        imprimirNumeros(vetOrdenacao);
        out.println();
        out.println(" Tamanho:\t\t\t\t" + tamVetorOrd);
        out.println(" Tempo [currentTimeMillis(), ms]:\t" + tempoGastoTM);
        out.println(" Tempo [nanoTime()/1000 -> us]:\t\t" + tempoGastoNT / 1000);
        out.println(" Comparações(comp):\t\t\t" + compar);
        out.println(" Trocas:\t\t\t\t" + trocas);
        if (trocas != 0) {
          out.println("\t\tT/comp [us/op1]:\t" + tempoGastoNT / compar);
          out.println("\t\tT/trocas [us/op2]:\t" + tempoGastoNT / trocas);
        } else {
          out.println("\t\tT/comp [us/op1]:\t" + tempoGastoNT / compar);
          out.println("\t\tT/trocas [us/op2]:\t - (não houve trocas)");
        }

        break;

      case 103:
        out.println("************************************************");
        out.println(" Selecionada OP#4: Merge sort");
        out.println(" Vetor lido: ");
        imprimirNumeros(vetLido);
        out.println();
        out.println("************************************************");

        tempoTM1 = System.currentTimeMillis();
        tempoNT1 = System.nanoTime();

        //Chamada do Algoritmo de Ordenação!
        mergSort(vetLido);
        
        tempoTM2 = System.currentTimeMillis();
        tempoNT2 = System.nanoTime();

        tempoGastoTM = Math.abs(tempoTM2 - tempoTM1);
        tempoGastoNT = Math.abs(tempoNT2 - tempoNT1);

        break;
      default:
        out.println("Seleção Inválida");
    }
  }

  public static void bubbleSort(int[] array) {
    int n = array.length;
    int[] novoVetorHomog = array;
    int k;
    for (int h = n; h >= 0; h--) {
      for (int i = 0; i < n - 1; i++) {
        k = i + 1;
        compar += 1;
        if (novoVetorHomog[i] > novoVetorHomog[k] && novoVetorHomog[i] != novoVetorHomog[k]) {
          trocaNumeros(i, k, novoVetorHomog);
          imprimirNumeros(array);
        }
      }
    }
  }

  public static void selectionSort(int[] array) {
    for (int i = 0; i < array.length - 1; i++) {
      int min = i;
      for (int j = i + 1; j < array.length; j++) {
        compar += 1;
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if(array[i] != array[min]){
        trocaNumeros(i, min, array);
        out.println((i+1)+"° execução");
        imprimirNumeros(array);
      }
    }
  }
  
  private static void mergSort(int[] array){
    int[][] duplas;
    int[][] quadras;
    int[] list;
    
    if(array.length%2 == 0){
      duplas = new int[array.length/2][2];
    }else{
      duplas = new int[array.length/2+1][2];
    }
    
    for(int i=0,j=0;j < array.length/2;i+=2,j++){
      duplas[j][0] = array[i];
      duplas[j][1] = array[i+1];
    }
    
    if(array.length%2 != 0){
      duplas[duplas.length-1][0] = array[array.length-1];
    }
    
    for(int i=0;i<duplas.length;i++){
      out.print(duplas[i][0] + " ");
      out.print(duplas[i][1]);
      out.println();
    }
    
  }

  private static void trocaNumeros(int i, int j, int[] vetorHomog) {
    trocas += 1;
    int temp = vetorHomog[i];
    vetorHomog[i] = vetorHomog[j];
    vetorHomog[j] = temp;
    out.print(" trocados elementos! Posições[i:" + i + ",j:" + j + "]. Valores: ");
    out.println(String.valueOf(vetorHomog[i]) + " <-> " + String.valueOf(vetorHomog[j]));
  }

  private static void imprimirNumeros(int[] vetorH) {
    int[] novoVetorH = vetorH;
    for (int i = 0; i < novoVetorH.length; i++) {
      out.print("|" + novoVetorH[i] + "| ");
    }
    out.println("\n");
  }

}
