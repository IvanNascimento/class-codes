public class Cachorro {
  private final String nome;
  private final String raca;
  private double peso;
  private double tamanho;

  Cachorro(String n, String r, double p, double t) {
    this.nome = n;
    this.raca = r;
    this.peso = p;
    this.tamanho = t;
  }

  public void setPeso(double p) {
    this.peso = p;
  }

  public void setTamanho(double t) {
    this.tamanho = t;
  }

  public void exibirInfo() {
    Printer.println(this.toString());
  }

  public void latir() {
    Printer.println("Au!Au!");
  }

  public void beber() {
    Printer.println("lick... lick...");
  }

  public void comer() {
    this.peso++;
    Printer.println("nhack... nhack...");
  }

  public void andar() {
    this.peso--;
    Printer.println("🐕🐕🐕");
  }

  @Override
  public String toString() {
    return "Nome: " + this.nome + "\nRaça: " + this.raca + "\nPeso: " + this.peso + "\nTamanho: " + this.tamanho;
  }
}