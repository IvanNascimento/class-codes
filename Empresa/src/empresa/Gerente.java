package empresa;
public class Gerente extends Empregado{
    private String setor;
    private int posicaoCarreira;
    
    Gerente(){}
    Gerente(String nome, double salario, String matricula, String setor){
        this.setNome(nome);
        this.setSalario(salario);
        this.setMatricula(matricula);
        this.setor = setor;
    }
    
    public void setSetor(String setor){
        this.setor = setor;
    }
    
    public void setPosicaoCarrreira(int posicao){
        this.posicaoCarreira = posicao;
    }
    
    public String getSetor(){
        return this.setor;
    }
    
    public int getPosicaoCarreira(){
        return this.posicaoCarreira;
    }
    
    @Override
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Sexo: " + this.getSexo());
        System.out.println("Idade: " + this.getIdade());
        System.out.println("Salario: " + this.getSalario());
        System.out.println("Matricula: " + this.getMatricula());
        System.out.println("Setor: " + this.getSetor());
        System.out.println("=================");
    }
}
