
/* Arquivo: '''Onibus.java ''' *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Classe de Veículo direcionada para ônibux (classe filha)
 *
 *  Data: 2/6/2017.
 */

/**
 *
 * @author Me. Sérgio ESPINOLA <http://mestre.sergiodbe.net/IFPB>
 */

 public class Onibus extends Veiculo{

        @Override
    public String toString(){
        String msgRet = "";
        msgRet += "*** ÔNIBUS ***\n";
        msgRet += "Autonomia: \t" + this.autonomia+"\n";
        msgRet +=  "Carga: \t\t" + this.carga+"\n";
        msgRet += "Passageiros: \t" + this.passageiros+"\n";
        msgRet += "Tanque: \t" + this.tanque+"\n";
        msgRet += "Km p/ Ltr (md):\t" + this.relKmPorLitro+"\n";
        msgRet += "Veloc.Max:\t" + this.velMax+"\n";

        //Fonte: http://www.ascii-code.com/ascii-art/vehicles/busses.php
        msgRet += "   _____________\n";
        msgRet += " _/_|[][][][][] | - -\n";
        msgRet += "(      City Bus | - -\n";
        msgRet += "=--OO-------OO-- = dwb\n\n";
        msgRet +="-------------------------------------------------------------------------------\n";
        msgRet +="-------------------------------------------------------------------------------\n";

        return msgRet;
    }

 } //fim classe Onibus
