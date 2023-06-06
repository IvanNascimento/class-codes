package empresa;
public class main {
    public static void main(String[] args) {
        Pessoa p = new Pessoa("Ivan", "Masculino", 16);
        
        Pessoa c = new Cliente("Moleque", 15555);
        
        Pessoa e = new Empregado("Ceverino", 1500, "555888");
        e.setIdade(30);
        e.setSexo("Masculino");
        
        Pessoa g = new Gerente("Hosvaldo", 1500, "156464", "7");
        g.setIdade(40);
        
        Pessoa v = new Vendedor("Ronald", 980, "8648647321");
        v.setIdade(25);
        v.setSexo("Masculino");
        
        Loja l = new Loja("Vendas.io", "Ivan");
        
        p.Status();
        c.Status();
        e.Status();
        g.Status();
        v.Status();
        l.Status();
        
        System.out.println(p.compareIdade(15));
        System.out.println(v.compareSalario(g));
    }
    
}
