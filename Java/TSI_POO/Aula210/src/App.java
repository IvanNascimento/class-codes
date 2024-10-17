import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {
        if (false) {
            testCarro();
        }
        if (true) {
            testCalculadora();
        }
    }

    private static void testCalculadora() {
        Scanner sc = new Scanner(System.in);
        Calculadora calc = new Calculadora();

        Printer.println("Digite o 1° numero: ");
        double db1 = sc.nextDouble();
        Printer.println("Digite o 2° numero: ");
        double db2 = sc.nextDouble();

        double res = calc.soma(db1, db2);
        Printer.println(db1 + " + " + db2 + " = " + res);
    }

    private static void testCarro() {
        Carro caru = new Carro("Corsa", "Joy", "A57CD1BR", "Vermelho", 25500);
        System.err.println("--- Inicio ---");
        System.out.println(caru.toString());
        caru.acelerar(300);
        System.err.println("--- Meio ---");
        System.out.println(caru.toString());
        caru.reduzir(400);
        System.err.println("--- Fim ---");
        System.out.println(caru.toString());
    }
}
