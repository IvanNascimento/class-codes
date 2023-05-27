package empresa;
public class Pessoa implements Interface{
    private String nome, sexo;
    private int idade;
    
    Pessoa(){}
    
    Pessoa(String n){
        this.nome = n;
    }
    
    Pessoa(String nome, String sexo, int idade){
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
    
    public void setNome(String s){
        this.nome = s;
    }
    
    public void setIdade(int i){
        this.idade = i;
    }
    
    public void setSexo(String s){
        this.sexo = s;
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public int getIdade(){
        return this.idade;
    }
    
    public String getSexo(){
        return this.sexo;
    }
    
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Idade: " + this.getIdade());
        System.out.println("Sexo: " + this.getSexo());
        System.out.println("=================");
    }

    @Override
    public String compareIdade(int idade) {
        if(idade > this.idade){
            return "Mais Novo";// mais novo
        }
        else{
            return "Mais Velho";// mais velho
        }
    }

    @Override
    public double compareSalario(Object o){
        return 0;
    }
    
}
