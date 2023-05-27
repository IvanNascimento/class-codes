/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Admin
 */
public class BeijaFlor extends Aves {

   @Override
   public String toString(){
        String resultado = "";

        resultado += "   *** Beija Flor ***\n\n";
        resultado += "Tamanho da asa(m): \t\t"+this.tamanhoDaAsa+"\n";
        resultado += "Tamanho da envergadura(m): \t"+this.tamanhoDaEnvergadura +"\n";
        resultado += "Tamanho do bico(cm): \t\t"+this.tamanhoDoBico+"\n";
        resultado += "Tamanho das penas da asa(cm): \t"+this.tamanhoDasPenasDaAsa+"\n";
        resultado += "Cores: \t\t"+this.cores2+"\n\n";
        
        //Fonte: http://www.asciiarte.com/-Aves-e-insectos-.html
        resultado += "                   ....\n";
        resultado += "         ,' .  ';             ,:\n";
        resultado += ".:::::::oO '-'   ;       .;-\n";
        resultado += "          '$$.   '; ,.o '         ' '\n";
        resultado += "           $$$$  (;'   .o.o.o.........\n";
        resultado += "           $@'        ...      .\n";
        resultado += "           $.        ..  ' ,  '.  '  ;\n";
        resultado += "           '$         'o    .    ''\n";
        resultado += "             'b       )' 'o.   ',\n";
        resultado += "             '$      ';,\n";
        resultado += "            ,b 'b:,     ';,\n";
        resultado += "           $'   .; o. .'., ';,\n";
        resultado += "          d;   :$    ',   ''-;\n";
        resultado += "         $ $   $$A\n";
        resultado += "         '       '\n";
        
        return resultado;
   }
}