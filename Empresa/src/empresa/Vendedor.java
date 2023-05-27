package empresa;
public class Vendedor extends Empregado{
    private double vendas, quantVendas;
    
    Vendedor(){}
    Vendedor(String nome, double salario, String matricula){
        this.setNome(nome);
        this.setSalario(salario);
        this.setMatricula(matricula);
    }
    public void setVendas(double venda){
        this.vendas = venda;
    }
    
    public void setQuantVendas(double quant){
        this.quantVendas = quant;
    }
    
    public double getVendas(){
        return this.vendas;
    }
    
    public double getQuantVendas(){
        return this.quantVendas;
    }
    
    @Override
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Sexo: " + this.getSexo());
        System.out.println("Idade: " + this.getIdade());
        System.out.println("Salario: " + this.getSalario());
        System.out.println("Matricula: " + this.getMatricula());
        System.out.println("Total de vendas: " + this.getQuantVendas());
        System.out.println("=================");
    }
}
