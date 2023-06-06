package estruturas;

import java.io.*;

/**
 * @author Ivan
 */

public class Porta implements Serializable{

    private boolean aberta;
    private String Cor;
    private double dimensaoX;
    private double dimensaoY;
    private double dimensaoZ;

    //Construtores
    Porta() {
        this.aberta = false;
        this.Cor = "";
        this.dimensaoX = 1.0;
        this.dimensaoY = 2.0;
        this.dimensaoZ = 0.5;
    }
    //Gets

    public String getCor() {
        return this.Cor;
    }

    public double getDimensaoX() {
        return this.dimensaoX;
    }

    public double getDimensaoY() {
        return this.dimensaoY;
    }

    public double getDimensaoZ() {
        return this.dimensaoZ;
    }

    public boolean EstaAbreta() {
        return this.aberta;
    }
    //Sets

    public void Abrir() {
        this.aberta = true;
    }

    public void Fechar() {
        this.aberta = false;
    }

    public void Pintar(String Cor) {
        this.Cor = Cor;
    }

    public void setDimensaoX(float dimensao) {
        this.dimensaoX = dimensao;
    }

    public void setDimensaoY(float dimensao) {
        this.dimensaoY = dimensao;
    }

    public void setDimensaoZ(float dimensao) {
        this.dimensaoZ = dimensao;
    }
}
