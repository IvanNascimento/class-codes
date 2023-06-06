/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author aluno
 */
public class Tucano extends Aves {

   @Override
   public String toString(){
        String resultado = "";

        resultado += "   *** Tucano  ***\n\n";
        resultado += "Tamanho da asa(m): \t\t"+this.tamanhoDaAsa+"\n";
        resultado += "Tamanho da envergadura(m): \t"+this.tamanhoDaEnvergadura +"\n";
        resultado += "Tamanho do bico(cm): \t\t"+this.tamanhoDoBico+"\n";
        resultado += "Tamanho das penas da asa(cm): \t"+this.tamanhoDasPenasDaAsa+"\n";
        resultado += "Cores: \t\t"+this.cores2+"\n\n";
        
        //fonte: http://www.asciiarte.com/-Aves-e-insectos-.html
        resultado += "                         _oo888888._\n";
        resultado += "                       oo888888888f')-,..._\n";
        resultado += "                     .8888887 (6)///(     /8o.._\n";
        resultado += "                    /888\"(   `--' ||_\\____\\88888o-.\n";
        resultado += "                   /6-'   `-...--.'`-.__   \"\"\"\"\"888\\\n";
        resultado += "                 .%/             `._ ::88ooo.___ \"88\"\n";
        resultado += "                /%|                ,'`\"\"o8888.==\"\"  `\n";
        resultado += "               j%%Y            _,-`\n";
        resultado += "              /%%/             (\n";
        resultado += "             f%%%|              `.\n";
        resultado += "            /%%%%|                \\\n";
        resultado += "            j%%%%Y                 !\n";
        resultado += "           /%%%%/                  !\n";
        resultado += "         .%%%%%/                   !\n";
        resultado += "        /%%%%%'                    !\n";
        resultado += "       y%%%%f                      ;\n";
        resultado += "      /%%%%y`                   .;/                 |\n";
        resultado += "     (%%%%%|                  .;:/                  |\n";
        resultado += "     /%%%%f                .!!;:'                   |\n";
        resultado += "    /%%%/!|               ;!!!!'                    |\n";
        resultado += "    Y%%%|!t            .!!!!!(                      (\n";
        resultado += "    j%%;|!!\\          _;!!!\\!!\\_                    |\n";
        resultado += "    \\%%;\\!!!\\        ;!!!!!'\\   `-._           _.~~'\n";
        resultado += "     |%;;)!!!!.     /!!!!'  '`--.__ `---,___.~'\n";
        resultado += "     \\%;'!-!!!!!. .!!!!!'_,~\"\"\"~.  `>,=-..--\\\n";
        resultado += " _.~~~~/,,/`~~~\"\"\"\"\"~~\"\"         `~('    ))  _.~~~.\n";
        resultado += " ~~~~~(( ||~~,,,~._      __.-\".      _.~~~~'      \\\n";
        resultado += "       \\):\\)8;;;;;'8T~~~~'      `~~~~'             |\n";
        resultado += "        \\:888';;;888|                              \\\n";
        resultado += "         Y88888V8888|                               \\\n";
        resultado += "          \\8888|8888|                               |\n";
        resultado += "           \\8888\\888L                               |\n";
        resultado += "            \\8888|888|                hjw           |\n";
        resultado += "             j:::\\:::|\n";
        resultado += "              \\::|:::|\n";
        resultado += "               \\::7::/\n";
        resultado += "                `-^-'\n";

       return resultado;
   }
}
