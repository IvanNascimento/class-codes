package empresa;

import java.util.ArrayList;

public class Loja {
    private String nome, dono;
    private ArrayList<Empregado> listaEmpregados;
    private ArrayList<Cliente> listaClientes;
    private int numClientes, numEmpregados;
    
    Loja(){}
    
    Loja(String loja, String dono){
        this.nome = loja;
        this.dono = dono;
        listaClientes = new ArrayList<>(10);
        listaEmpregados = new ArrayList<>(10);
    }
    
    public void addEmpregado(Empregado e){
        listaEmpregados.add(e);
        this.numEmpregados += 1;
    }
    
    public void addCliente(Cliente c){
        listaClientes.add(c);
        this.numClientes += 1;
    }
    
    public void setNomeLoja(String s){
        this.nome = s;
    }
    
    public void setNomeDono(String s){
        this.dono = s;
    }
    
    public void setEmpregados(ArrayList<Empregado> e){
        this.listaEmpregados = e;
        this.numEmpregados = e.size();
    }
    
    public void setClientes(ArrayList<Cliente> c){
        this.listaClientes = c;
        this.numClientes = c.size();
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public String getDono(){
        return this.dono;
    }
    
    public ArrayList getEmpregados(){
        return this.listaEmpregados;
    }
    
    public ArrayList getClientes(){
        return this.listaClientes;
    }
    
    public int getNumClientes(){
        return this.numClientes;
    }
    
    public int getNumEmpregados(){
        return this.numEmpregados;
    }

    public Empregado getEmpregados(int i){
        return this.listaEmpregados.get(i);
    }
    
    public Cliente getClientes(int i){
        return this.listaClientes.get(i);
    }
    
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Dono: " + this.getDono());
        System.out.println("Total de Empregados: " + this.getNumEmpregados());
        System.out.println("Total de Clientes: " + this.getNumClientes());
        System.out.println("=================");
    }
    
    public void exibeEmpregados(){
        for(Empregado e: listaEmpregados){
            e.Status();
        }
    }
}
