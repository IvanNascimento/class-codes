package code;

public class Printer {

  public static void l(String out) {
    System.out.print(out);
  }

  public static void l(double out) {
    System.out.print(String.format("%.2f", out));
  }

  public static void l(double out, String format) {
    System.out.print(String.format(format, out));
  }

  public static void ln(String out) {
    System.out.println(out);
  }

  public static void ln(double out) {
    System.out.println(String.format("%.2f", out));
  }

  public static void ln(double out, String format) {
    System.out.println(String.format(format, out));
  }

}
