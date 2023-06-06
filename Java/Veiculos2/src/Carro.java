
/* Arquivo: Carro.java
 *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Classe de Veículo direcionada para Carro (classe filha)
 *  Data: 2/6/2017.
 */

/**
 *
 * @author Me. Sérgio ESPINOLA <http://mestre.sergiodbe.net/IFPB>
 */

 public class Carro
        extends Veiculo {

    Carro() {
        super();
    }


    @Override
    public String toString(){
        String msgRet = "";
        msgRet += "*** CARRO ***\n";
        msgRet += "Autonomia: \t" + this.autonomia+"\n";
        msgRet +=  "Carga: \t\t" + this.carga+"\n";
        msgRet += "Passageiros: \t" + this.passageiros+"\n";
        msgRet += "Tanque: \t" + this.tanque+"\n";
        msgRet += "Km p/ Ltr (md):\t" + this.relKmPorLitro+"\n";
        msgRet += "Veloc.Max:\t" + this.velMax+"\n";

        //Fonte: http://www.asciiarte.com/-Carros-.html
        msgRet += "     ___________\n";
        msgRet += "    //   |||   \\\\\n";
        msgRet += " __//____|||____\\\\____\n";
        msgRet += " | _|      |       _  ||\n";
        msgRet += " |/  \\_____|______/ \\_||\n";
        msgRet += "__\\__/____________\\_/_______\n\n";
        msgRet +="-------------------------------------------------------------------------------\n";
        msgRet +="-------------------------------------------------------------------------------\n";
        
        return msgRet;
    }

 } //fim Classe Carro
