/* Arquivo: Trem.java
 *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Classe de Veículo direcionada para Trem (classe filha)
 *
 *  Data: 2/6/2017.
 */

/**
 *
 * @author Me. Sérgio ESPINOLA <http://mestre.sergiodbe.net/IFPB>
 */

 public class Trem extends Veiculo{
     
   @Override
   public String toString(){
     String resultado = "";
     resultado += "*** Trem ***\n";
     resultado  += "Autonomia: \tEste trem é elétrico\n";
     resultado +=  "Carga: \t\t" + this.carga + "\n";
     resultado += "Passageiros: \t" + this.passageiros + "\n";
     resultado += "Tanque: \tEste trem é elétrico\n";
     resultado  += "Km p/ Ltr (md):\tEste trem é elétrico\n";
     resultado += "Veloc.Max:\t" + this.velMax + "\n";

     //Fonte: http://www.ascii-code.com/ascii-art/vehicles/trains.php

     resultado +="___________   _______________________________________^__\n";
     resultado +=" ___   ___ |||  ___   ___   ___    ___ ___  |   __  ,----\\\n";
     resultado +="|   | |   |||| |   | |   | |   |  |   |   | |  |  | |_____\\\n";
     resultado +="|___| |___|||| |___| |___| |___|  | O | O | |  |  |        \\\n";
     resultado +="           |||                    |___|___| |  |__|         )\n";
     resultado +="___________|||______________________________|______________/\n";
     resultado +="           |||                                        /--------\n";
     resultado +="-----------\'\'\'---------------------------------------\'\n\n";
     resultado +="-------------------------------------------------------------------------------\n";
     resultado +="-------------------------------------------------------------------------------\n";
     
     return resultado;
   }
}
