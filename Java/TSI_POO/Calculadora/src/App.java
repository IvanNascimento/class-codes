import code.*;

public class App {
    public static void main(String[] args) throws Exception {

        Printer.ln("Bem vindo(a) a o SuperCalc");
        boolean continua = true;
        Reader read = new Reader();
        double[] nums;
        int opcao;
        do {
            Printer.ln("Opções disponíveis: ");
            Printer.ln("0 - Sair");
            Printer.ln("1 - Somar 2 números");
            Printer.ln("2 - Subtrair 2 números");
            Printer.ln("3 - multiplicar 2 números");
            Printer.ln("4 - dividir 2 números");
            Printer.l("Digite o número da opção escolhida: ");
            try {
                opcao = read.getInt();
                switch (opcao) {
                    case 0 -> {
                        continua = false;
                        Printer.ln("Encerrando o programa...");
                    }
                    case 1 -> {
                        // Soma
                        nums = read.getNumbers(2);
                        Printer.ln("Resultado: ");
                        Printer.l(nums[0] + " + " + nums[1] + " = ");
                        Printer.ln(Calculadora.soma(nums[0], nums[1]));
                    }
                    case 2 -> {
                        // subtração
                        nums = read.getNumbers(2);
                        Printer.ln("Resultado: ");
                        Printer.l(nums[0] + " - " + nums[1] + " = ");
                        Printer.ln(Calculadora.subtracao(nums[0], nums[1]));
                    }
                    case 3 -> {
                        // Multiplicação
                        nums = read.getNumbers(2);
                        Printer.ln("Resultado: ");
                        Printer.l(nums[0] + " * " + nums[1] + " = ");
                        Printer.ln(Calculadora.multiplicacao(nums[0], nums[1]));
                    }

                    case 4 -> {
                        // Divisão
                        nums = read.getNumbers(2);
                        Printer.ln("Resultado: ");
                        Printer.l(nums[0] + " / " + nums[1] + " = ");
                        Printer.ln(Calculadora.divisao(nums[0], nums[1]));
                    }
                    default -> Printer.ln("Opção inválida, tente novamente.");
                }
            } catch (Error err) {
                Printer.ln(err.toString());
                Printer.ln("Digite uma entrada válida!");
            }
            if (!continua) {
                break;
            }
        } while (true);

    }
}
