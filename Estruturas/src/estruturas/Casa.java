package estruturas;

import java.io.*;

/**
 * @author Ivan
 */

public class Casa extends Imovel implements Serializable{

    private String Cor;
    private final Porta porta1 = new Porta();
    private final Porta porta2 = new Porta();
    private final Porta porta3 = new Porta();
    
    private final Porta[] portas = {porta1, porta2, porta3};

    //Construtores
    public void Casa() {
        this.Cor = "Branca";
    }
    
    //Gets

    @Override
    public int TotalDePortas() {
        int result = 0;
        for (Porta P : portas) {
            if (P != null) {
                result++;
            }
        }
        return result;
    }

    @Override
    public int QuantidadePortasAbertas() {
        int result = 0;
        for (Porta P : portas) {
            if(P != null){
                if (P.EstaAbreta() == true) {
                   result++;
                }
            }
        }
        return result;
    }

    @Override
    public String getCor() {
        return this.Cor;
    }

    //Sets
    public void Pintar(String Cor) {
        this.Cor = Cor;
    }
    
    public void AbrirPorta(int i){
        portas[i].Abrir();
    }
    
    public void FecharPorta(int i){
        portas[i].Fechar();
    }
}
