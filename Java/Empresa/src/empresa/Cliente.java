package empresa;
public class Cliente extends Pessoa{
    private double divida, TCompras, CreditoMax;
    
    Cliente(){}
    
    Cliente(String nome, double credito){
        this.setNome(nome);
        this.CreditoMax = credito;
    }
    
    public void setDivida(double divida){
        this.divida = divida;
    }
    
    public void setTotalCompras(double tc){
        this.TCompras = tc;
    }
    
    public void setCreditoMax(double cm){
        this.CreditoMax = cm;
    }
    
    public double getDivida(){
        return this.divida;
    }
    
    public double getTCompras(){
        return this.TCompras;
    }
    
    public double getCreditoMax(){
        return this.CreditoMax;
    }
    
    @Override
    public void Status(){
        System.out.println("=================");
        System.out.println("Nome: " + this.getNome());
        System.out.println("Divida: " + this.getDivida());
        System.out.println("Crédito: " + this.getCreditoMax());
        System.out.println("=================");
    }
    
    public void pagar(double valor){
        if(valor <= this.divida){
            this.divida -= valor;
        }
    }
    
    public void comprar(double divida, double pago, Vendedor v){
        this.divida += divida;
        this.pagar(pago);
        v.setQuantVendas(v.getQuantVendas() + 1);
        v.setVendas(v.getVendas() + divida);
    }
}
