/* Arquivo: POOVeicMain.java
 *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Programa que invoca objetos e diferentes métodos de
 *   classe mãe (veículo) e classes derivadas (carro, ônibus -- dentre outras)
 *  Data: 2/6/2017.
 */

import static java.lang.System.*; // Para tornar código limpo: "out.println()"

/**
 *
 * @author Me. Sérgio ESPINOLA <http://mestre.sergiodbe.net/IFPB>
 */

 public class POOVeicMain {

    public static void main(String args[]){
        // Objetos acessando atributos de Veículo (Carro ou demais herdeiros)!
        Veiculo umClio = new Carro();
        umClio.passageiros=5;
        umClio.autonomia=500;
        umClio.carga=1500;
        umClio.relKmPorLitro=15;
        umClio.tanque=42.5;
        umClio.velMax=180;

        Veiculo umFusca = new Carro();
        umFusca.passageiros=5;
        umFusca.autonomia=400;
        umFusca.carga=1300;
        umFusca.relKmPorLitro=10;
        umFusca.tanque=50;
        umFusca.velMax=140;

        // Objetos acessando comportamentos "métodos"
        //  de Veículo (Carro ou demais herdeiros)!
        //   Obs. Tais métodos, mudam os atributos internos!
        //Objeto Carro
        Veiculo umCarroGenerico = new Carro();
        umCarroGenerico.setPassageiros(5);
        umCarroGenerico.setAutonomia(333);
        umCarroGenerico.setCarga(1200);
        umCarroGenerico.setRelKmPorLitro(8);
        umCarroGenerico.setTanque(55);
        umCarroGenerico.setVelocidadeMax(140);
        
        //Objeto Onibus
        Veiculo umOnibusGenerico = new Onibus();
        umOnibusGenerico.passageiros=40;
        umOnibusGenerico.setAutonomia(500);
        umOnibusGenerico.setCarga(4500);
        umOnibusGenerico.setRelKmPorLitro(15);
        umOnibusGenerico.setTanque(600);
        umOnibusGenerico.setVelocidadeMax(200);

        //Objeto Trem
        Veiculo umTremGenerico = new Trem();
        umTremGenerico.setPassageiros(150);
        umTremGenerico.setCarga(8000);
        umTremGenerico.setVelocidadeMax(300);

        //Objeto Moto
        Veiculo umaMotoGenerica = new Moto();
        umaMotoGenerica.setAutonomia(50);
        umaMotoGenerica.setVelocidadeMax(180);
        umaMotoGenerica.setTanque(20);
        umaMotoGenerica.setRelKmPorLitro(5);


        //Mesmas Chamadas e impressões diferenciadas!
        // Vide comportamento genéricos Classe Veículo e
        //   especializados (das classes herdeiras).
        out.println(umClio);
        out.println(umFusca);
        out.println(umCarroGenerico);
        out.println(umOnibusGenerico);
        out.println(umTremGenerico);
        out.println(umaMotoGenerica);
    } // fim Main

 } //fim Classe POOVeicMain
