import code.Elevador;
import common.*;

public class App {
  public static void main(String[] args) throws Exception {
    boolean encerrar = false;
    Printer.ln("Iniciando o sistema...");
    Printer.ln("Bem vindo ao controlador do elevador.");

    Printer.ln("Informe o total de andares do prédio.");
    int andares, capacidade, andarAtual;
    do {
      Printer.l("Andares: ");
      andares = Reader.getInt();
      if (andares <= 0) {
        Printer.ln("Informe um valor válido");
      } else {
        break;
      }
    } while (true);

    Printer.ln("Informe a capacidade máxima do elevador.");
    do {
      Printer.l("Capacidade: ");
      capacidade = Reader.getInt();
      if (capacidade <= 0) {
        Printer.ln("Informe um valor válido");
      } else {
        break;
      }
    } while (true);

    Printer.ln("Iniciar fora do térreo ?");
    Printer.ln("0 - Não, 'X' - Andar inicial");

    do {
      Printer.l("Andar inicial: ");
      andarAtual = Reader.getInt();
      if ((andarAtual > andares) || (andarAtual < 0)) {
        Printer.ln("Informe um andar válido");
      } else {
        break;
      }
    } while (true);

    Elevador elvd = new Elevador(andarAtual, andares, capacidade);

    do {
      Printer.ln("--- Opções ---");
      Printer.ln("- 1 - Encerrar o programa");
      Printer.ln("  0 - Exibir informações");
      Printer.ln("  1 - Subir 1 andar");
      Printer.ln("  2 - Subir x andares");
      Printer.ln("  3 - Descer 1 andar");
      Printer.ln("  4 - Descer x andares");
      Printer.ln("  5 - Deixar 1 pessoa entrar");
      Printer.ln("  6 - Deixar x pessoas entrar");
      Printer.ln("  7 - Deixar 1 pessoa sair");
      Printer.ln("  8 - Deixar x pessoas sair");
      Printer.l("Opção: ");
      switch (Reader.getInt()) {
        case -1 -> {
          encerrar = true;
        }
        case 0 -> {
          Printer.l("Andar atual: ");
          Printer.l((int) elvd.getAndarAtual(), "%d");
          Printer.l(" de ");
          Printer.ln((int) elvd.getTotalAndares(), "%d");

          Printer.l("Quantidade de pessoas: ");
          Printer.l((int) elvd.getQtdPessoas(), "%d");
          Printer.l(" de ");
          Printer.ln((int) elvd.getCapacidade(), "%d");
        }
        case 1 -> {
          if (elvd.sobe()) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Já está na cobertura.");
          }
        }
        case 2 -> {
          Printer.l("Quantidade de andares: ");
          if (elvd.sobe(Reader.getInt())) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Entrada excede a quantidade de andares.");
          }
        }
        case 3 -> {
          if (elvd.desce()) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Já está no térreo.");

          }
        }
        case 4 -> {
          Printer.l("Quantidade de andares: ");
          if (elvd.desce(Reader.getInt())) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. O valor informado levaria ao subsolo.");
          }
        }
        case 5 -> {
          if (elvd.entra()) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Elevador lotado.");
          }
        }
        case 6 -> {
          Printer.l("Quantidade de pessoas: ");
          if (elvd.entra(Reader.getInt())) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Quantidade excede a capacidade.");
          }
        }
        case 7 -> {
          if (elvd.sai()) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Elevador vazio.");
          }
        }
        case 8 -> {
          Printer.l("Quantidade de pessoas: ");
          if (elvd.sai(Reader.getInt())) {
            Printer.ln("Operação concluída com sucesso");
          } else {
            Printer.ln("Impossível completar operação. Quantidade excede o total de pessoas.");
          }
        }

        default -> {
          Printer.ln("Informe uma opção válida.");
        }

      }
      if (encerrar) {
        Printer.ln("Encerrando o programa...");
        break;
      }
    } while (true);
  }

}
