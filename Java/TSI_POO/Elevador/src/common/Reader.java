package common;

import java.util.Scanner;

public abstract class Reader {
  private final static Scanner sc = new Scanner(System.in, "UTF-8");

  public static String getString() {
    do {
      try {
        return sc.nextLine();
      } catch (Error err) {
        Printer.ln("--- ERROR ---");
        Printer.ln(err.toString());
        sc.nextLine();
      }
    } while (true);
  }

  public static int getInt() {
    do {
      try {
        return sc.nextInt();
      } catch (Exception exc) {
        Printer.l("Entrada inválida! ");
        Printer.ln("formato esperado: 10");
        sc.nextLine();
      } catch (Error err) {
        Printer.ln("--- ERROR ---");
        Printer.ln(err.toString());
        sc.nextLine();
      }
    } while (true);
  }

  public static double getDouble() {
    do {
      try {
        return sc.nextDouble();
      } catch (Exception exc) {
        Printer.l("Entrada inválida! ");
        Printer.ln("formato esperado: 10 ou 1,5");
        sc.nextLine();
      } catch (Error err) {
        Printer.ln("--- ERROR ---");
        Printer.ln(err.toString());
        sc.nextLine();
      }
    } while (true);
  }

  public static double[] getNumbers(int qtd) {
    double[] nums = new double[qtd];
    for (int i = 0; i < qtd; i++) {
      Printer.l("Digite o " + (i + 1) + "° número: ");
      Printer.ln("");
      nums[i] = getDouble();
    }
    return nums;
  }
}
