package estruturas;

/**
 * @author Ivan
 */

public class Executavel {

    public static void main(String[] args) throws ClassNotFoundException, Exception{
        
        Salvar salva = new Salvar();
        
        System.out.println("");
        
        System.out.println("Porta");
        Porta p1 = new Porta();
        p1.Pintar("Vervelho");
        System.out.println("Cor: "+p1.getCor());
        System.out.println("DimensaoX: "+p1.getDimensaoX());
        System.out.println("DimensaoY: "+p1.getDimensaoY());
        System.out.println("DimensaoZ: "+p1.getDimensaoZ());
        System.out.println("Aberta: "+p1.EstaAbreta());
        p1.Abrir();
        System.out.println("Aberta: "+p1.EstaAbreta());
        p1.Fechar();
        System.out.println("Aberta: "+p1.EstaAbreta());

        System.out.println("");
        
        System.out.println("Casa");
        Casa c1 = new Casa();
        c1.Pintar("Vermelha");
        System.out.println("Cor: "+c1.getCor());
        c1.AbrirPorta(2);
        System.out.println("Portas abertas: "+c1.QuantidadePortasAbertas());
        System.out.println("Total de portas: "+c1.TotalDePortas());
        
        System.out.println("");

        System.out.println("Edificil");
        Edificio Predio = new Edificio();
        Predio.AdicionarAndar();
        System.out.println("Total de andares: "+Predio.TotalAndares());
        Predio.Pintar("Azul");
        System.out.println("Cor: "+Predio.getCor());
        Predio.AdicionarPorta(new Porta());
        Predio.AdicionarPorta(new Porta());
        Predio.AdicionarPorta(new Porta());
        Predio.AdicionarPorta(new Porta());
        System.out.println("Total de portas: "+Predio.TotalPortas());
        Predio.AbrirPorta(0);
        Predio.AbrirPorta(2);
        System.out.println("Portas abertas: "+Predio.QuantidadePortasAbertas());
        
        System.out.println("");
    
        System.out.println("Salvar");
        salva.SalvarDisco("Teste", p1, c1, Predio);
        
        System.out.println("Teste");
        salva.anotacao();
        
        System.out.println("Log");
        salva.CarregarDisco();
        
    }
}
