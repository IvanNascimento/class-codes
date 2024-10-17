package code;

import java.util.ArrayList;

public class Aluno {
  private ArrayList<Integer> notas;
  private String nome;
  private String sala;

  public Aluno() {
    this.notas = new ArrayList<Integer>();
  }

  public Aluno(ArrayList<Integer> notas) {
    this.notas = notas;
  }

  public Aluno(String nome, String sala) {
    this.notas = new ArrayList<Integer>();
    this.nome = nome;
    this.sala = sala;
  }

  public Aluno(String nome, String sala, ArrayList<Integer> notas) {
    this.notas = notas;
    this.nome = nome;
    this.sala = sala;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getSala() {
    return sala;
  }

  public void setSala(String sala) {
    this.sala = sala;
  }

  public boolean addNota(int nota) {
    if (nota < 0 || nota > 100) {
      return false;
    }
    this.notas.add(nota);
    return true;
  }

  public void setNotas(ArrayList<Integer> notas) {
    this.notas = notas;
  }

  public boolean editNota(int index, int nota) {
    if (nota < 0 || nota > 100) {
      return false;
    }
    this.notas.set(index, nota);
    return true;
  }

  public void removeNota(int index) {
    this.notas.remove(index);
  }

  public void limparNotas() {
    this.notas.clear();
  }

  public ArrayList<Integer> getNotas() {
    return this.notas;
  }

  public int getNota(int index) {
    return this.notas.get(index);
  }

  public double getMedia() {
    int sum = 0;
    for (Integer nota : this.notas) {
      sum += nota;
    }
    double result = sum / this.notas.size();
    return result;
  }

  /**
   * @param print Indica se o resultado dever ser colocado no terminal ou
   *              retornado
   * @return uma string vazia ou um texto com as informações do aluno
   */
  public String verInfo(boolean print) {
    StringBuilder result = new StringBuilder();
    result.append("--- Informações do Aluno ---\n");
    result.append("Nome: " + this.nome + "\n");
    result.append("Sala: " + this.sala + "\n");
    result.append("Notas: \n");
    for (int i = 0; i < this.notas.size(); i++) {
      result.append((i + 1) + "° nota: " + this.getNota(i) + " de 100" + "\n");
    }
    result.append("Média: " + this.getMedia() + "\n");
    result.append("Situação: " + (this.getMedia() >= 70 ? "Aprovado" : "Reprovado") + "\n");

    if (print) {
      Printer.ln(result.toString());
      return "";
    } else {
      return result.toString();
    }
  }

  public void definirSituacao() {
    if (this.getMedia() > 70) {
      Printer.ln("O Aluno " + this.nome + " está Aprovado");
    } else {
      Printer.ln("O Aluno " + this.nome + " está Reprovado");
    }
  }

  public void definiNotas() {
    this.definiNotas(4);
  }

  public void definiNotas(int qtdNotas) {
    this.limparNotas();
    int toAdd;
    Printer.ln("Informe as " + qtdNotas + " notas do aluno. Ex.: 75");
    for (int i = 0; i < qtdNotas; i++) {
      Printer.l((i + 1) + "° Nota: ");
      toAdd = Reader.getInt();
      if (toAdd >= 0 && toAdd <= 100) {
        this.addNota(toAdd);
      } else {
        Printer.ln("A nota deve estar entre 0 e 100.");
        i--;
      }
    }
  }

}
