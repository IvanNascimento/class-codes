package empresa;

import static java.lang.Math.abs;

public class Empregado extends Pessoa{
    private double salario;
    private String matricula;
    
    Empregado(){}
    Empregado(String nome, double salario, String matricula){
        this.setNome(nome);
        this.salario = salario;
        this.matricula = matricula;
    }
    
    public void setSalario(double salario){
        this.salario = salario;
    }
    
    public void setMatricula(String matricula){
        this.matricula = matricula;
    }
    
    public double getSalario(){
        return this.salario;
    }
    
    public String getMatricula(){
        return this.matricula;
    }
    
    @Override
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Sexo: " + this.getSexo());
        System.out.println("Idade: " + this.getIdade());
        System.out.println("Salario: " + this.getSalario());
        System.out.println("Matricula: " + this.getMatricula());
        System.out.println("=================");
    }
    @Override
    public double compareSalario(Object o){
        Empregado p = (Empregado) o;
        
        return abs(this.salario - p.getSalario());
    }
}
