
public class Carro {

    private final String marca;
    private final String modelo;
    private final String placa;
    private final String cor;
    private final double quilometragem;
    private double velocidade;
    private final double aceleracao;
    private final double velocidadeMIN;
    private final double velocidadeMAX;
    private final int ano;

    public Carro(String m, String md, String p, String c, double q) {
        this.marca = m;
        this.modelo = md;
        this.placa = p;
        this.cor = c;
        this.quilometragem = q;
        this.ano = 2017;
        this.aceleracao = 2;
        this.velocidadeMIN = 0;
        this.velocidadeMAX = 200;
    }

    public Carro(String m, String md, String p, String c, double q, double ac, double min, double max) {
        this.marca = m;
        this.modelo = md;
        this.placa = p;
        this.cor = c;
        this.quilometragem = q;
        this.ano = 2017;
        this.aceleracao = ac;
        this.velocidadeMIN = min;
        this.velocidadeMAX = max;
    }

    public Carro(String m, String md, String p, String c, double q, int a) {
        this.marca = m;
        this.modelo = md;
        this.placa = p;
        this.cor = c;
        this.quilometragem = q;
        this.ano = a;
        this.aceleracao = 2;
        this.velocidadeMIN = 0;
        this.velocidadeMAX = 200;
    }

    public Carro(String m, String md, String p, String c, double q, int a, double ac, double min, double max) {
        this.marca = m;
        this.modelo = md;
        this.placa = p;
        this.cor = c;
        this.quilometragem = q;
        this.ano = a;
        this.aceleracao = ac;
        this.velocidadeMIN = min;
        this.velocidadeMAX = max;
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("===========");
        stringBuilder.append("\n Marca: ");
        stringBuilder.append(this.marca);
        stringBuilder.append("\n Modelo: ");
        stringBuilder.append(this.modelo);
        stringBuilder.append("\n Placa: ");
        stringBuilder.append(this.placa);
        stringBuilder.append("\n Cor: ");
        stringBuilder.append(this.cor);
        stringBuilder.append("\n Quilometragem: ");
        stringBuilder.append(this.quilometragem);
        stringBuilder.append("\n Ano: ");
        stringBuilder.append(this.ano);
        stringBuilder.append("\n Velocidade: ");
        stringBuilder.append(this.velocidade);
        stringBuilder.append("\n===========");
        stringBuilder.append("\n Velocidade Minima: ");
        stringBuilder.append(this.velocidadeMIN);
        stringBuilder.append("\n===========");
        stringBuilder.append("\n Velocidade Máxima: ");
        stringBuilder.append(this.velocidadeMAX);
        stringBuilder.append("\n===========");
        stringBuilder.append("\n Aceleração Padrão: ");
        stringBuilder.append(this.aceleracao);
        stringBuilder.append("\n===========");
        return stringBuilder.toString();
    }

    public void velocidadeAtual() {
        System.out.println("Velocidade: " + this.velocidade);
    }

    public void acelerar() {
        velocidade += 1;
        corrigirVelocidade();
    }

    public void acelerar(int a) {
        velocidade += a;
        corrigirVelocidade();
    }

    public void reduzir() {
        velocidade -= 1;
        corrigirVelocidade();
    }

    public void reduzir(int r) {
        velocidade -= r;
        corrigirVelocidade();
    }

    private void corrigirVelocidade() {
        if (this.velocidade < velocidadeMIN) {
            this.velocidade = velocidadeMIN;
            System.out.println("Velocidade minima atingida");
        } else if (this.velocidade > velocidadeMAX) {
            this.velocidade = velocidadeMAX;
            System.out.println("Velocidade máxima atingida");
        }
    }
}
