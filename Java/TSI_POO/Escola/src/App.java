import java.util.ArrayList;
import java.util.Arrays;

import code.Aluno;
import code.Printer;
import code.Reader;

public class App {
  public static void main(String[] args) throws Exception {
    exemplo1(false);
    exemplo2(false);
    exemplo3(true);
  }

  private static void exemplo1(boolean exec) {
    if (exec) {
      ArrayList<Integer> notas = new ArrayList<Integer>(Arrays.asList(80, 50, 70, 90));
      Aluno a = new Aluno("João", "8° B", notas);
      a.verInfo(true);
    }
  }

  private static void exemplo2(boolean exec) {
    if (exec) {
      Aluno a = new Aluno("Maria", "7° A");
      a.definiNotas();
      a.verInfo(true);
    }
  }

  private static void exemplo3(boolean exec) {
    if (exec) {
      Aluno a = new Aluno();
      Printer.l("Nome do Aluno: ");
      a.setNome(Reader.getString());
      Printer.l("Sala do Aluno: ");
      a.setSala(Reader.getString());
      a.definiNotas();
      a.definirSituacao();
      a.verInfo(true);
    }
  }

}
