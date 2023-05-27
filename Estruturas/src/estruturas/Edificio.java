package estruturas;

import java.io.*;

/**
 * @author Ivan
 */

public class Edificio extends Imovel implements Serializable{

    private String Cor;
    private int TotalDePortas = 0;
    private int TotalDeAndares;
    private Porta[] portas = new Porta[1000];

    //Gets
    @Override
    public int QuantidadePortasAbertas() {
        int result = 0;
        for (Porta P : portas) {
            if(P != null){
                if (P.EstaAbreta()) {
                    result++;
                }
            }
        }
        return result;
    }

    public int TotalPortas() {
        return this.TotalDePortas;
    }

    public int TotalAndares() {
        return this.TotalDeAndares;
    }

    @Override
    public String getCor() {
        return this.Cor;
    }

    //Sets
    public void Pintar(String Cor) {
        this.Cor = Cor;
    }

    public void AdicionarPorta(Porta P) {
        portas[TotalDePortas] = P;
        TotalDePortas++;
    }

    public void AdicionarAndar() {
        this.TotalDeAndares++;
    }
    
    public void AbrirPorta(int i){
        portas[i].Abrir();
    }
    
    public void FecharPorta(int i){
        portas[i].Fechar();
    }
}
