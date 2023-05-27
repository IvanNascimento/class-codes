/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author aluno
 */
public class AvesMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        String[] _coresTucano = new String[]{"Azul","Branco","Vermelho"};
        String[] _coresBeijaFlor = new String[]{"Verde","Branco","Amarelo"};

        Aves umTucanoGenerico = new Tucano();
        umTucanoGenerico.setTamAsa("1,5m");
        umTucanoGenerico.setTamEnvergadura("4m");
        umTucanoGenerico.setTamBico("30cm");
        umTucanoGenerico.setTamPenasAsas("15cm");
        umTucanoGenerico.setCores(_coresTucano);
        umTucanoGenerico.mostraCores();

        Aves umBeijaFlorGenerico = new BeijaFlor();
        umBeijaFlorGenerico.setTamAsa("5cm");
        umBeijaFlorGenerico.setTamEnvergadura("12cm");
        umBeijaFlorGenerico.setTamBico("4cm");
        umBeijaFlorGenerico.setTamPenasAsas("1cm");
        umBeijaFlorGenerico.setCores(_coresBeijaFlor);
        umBeijaFlorGenerico.mostraCores();

        System.out.println(umTucanoGenerico);
        System.out.println(umBeijaFlorGenerico);
    }

}
