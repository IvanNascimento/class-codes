/* Arquivo: Veiculo.java
 *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Esta é a classe mãe de um conjunto de tipos herdados (carro, onibus etc).
 *  Data: 2/6/2017.
 */

/**
 *
 * @author Me. Sérgio ESPINOLA <http://mestre.sergiodbe.net/IFPB>
 */

 public abstract class Veiculo {

    // ATRIBUTOS (VARIÁVEIS) DE CLASSE
    protected double autonomia;
    protected double carga;
    protected int passageiros;
    protected double relKmPorLitro;
    protected double tanque;
    protected double velMax;


    public Veiculo(){
        autonomia        = 100;
        carga            = 300;
        passageiros      = 5;
        relKmPorLitro    = 10;
        tanque           = 10;
        velMax           = 80;
    }

    public Veiculo(int _autonomia, double _carga, int _passageiros,
                        double _relKmPorLitro, double _tanque){
        this.autonomia = _autonomia;
        this.carga = _carga;
        this.passageiros = _passageiros;
        this.relKmPorLitro    = _relKmPorLitro;
        this.tanque= _tanque;
    }


    // set será usado como sinônimo para definir ATRIBUTOS !
    public void setAutonomia(double _autonomia){
            this.autonomia = _autonomia;
    }

    public void setCarga(double _carga){
            this.carga = _carga;
    }

    public void setPassageiros(int _passageiros){
            this.passageiros = _passageiros;
    }

    public void setRelKmPorLitro(double _relKmPorLitro){
            this.relKmPorLitro = _relKmPorLitro;
    }

    public void setTanque(double _tanque){
            this.tanque = _tanque;
    }

    public void setVelocidadeMax(double _velMax){
                this.velMax = _velMax;
    };


    @Override
    public String toString(){
        String msgRet = "";
        msgRet += "*** VEÍCULO ***\n";
        msgRet += "Autonomia: \t" + this.autonomia;
        msgRet += "\n";
        msgRet +=  "Carga: \t\t" + this.carga;
        msgRet += "\n";
        msgRet += "Passageiros: \t" + this.passageiros;
        msgRet += "\n";
        msgRet += "Tanque: \t" + this.tanque;
        msgRet += "\n";
        msgRet += "Km p/ Ltr (md):\t" + this.relKmPorLitro;
        msgRet += "\n";
        msgRet += "Vel. Max.: \t" + this.velMax;
        msgRet += "\n";

        return msgRet;
    }

 } //fim Classe Veículo
