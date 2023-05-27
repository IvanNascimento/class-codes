/* Arquivo: '''Moto.java ''' *
 * IFPB - CAMPUS PICUÍ.
 * PROGRAMAÇÃO. Turma: POO. 2017.1
 *  Prof.: Me. Sergio ESPINOLA. http://mestre.sergiodbe.net/IFPB
 *  Objetivo: Classe de Veículo direcionada para motos (classe filha)
 *
 *  Data: 25/7/2017.
 */

/**
 *
 * @author Ivan Luís Silva do Nascimento
 */

public class Moto extends Veiculo{

    @Override
  public String toString(){
    String res = "";
    res += "*** Moto ***\n";
    res += "Autonomia: \t" + this.autonomia+"\n";
    res +=  "Carga: \t\t20\n";
    res += "Passageiros: \t2\n";
    res += "Tanque: \t" + this.tanque+"\n";
    res += "Km p/ Ltr (md):\t" + this.relKmPorLitro+"\n";
    res += "Veloc.Max:\t" + this.velMax+"\n";

    // Fonte: http://ascii.co.uk/art/motorcycles

    res +="              RUUUUUMMMMBLE!!!            ______\n";
    res +="     ___                                .'-----\\\\ _\n";
    res +="     \\  \\                              //      #``.) __\n";
    res +="      \\  \\_________                     __--~~--_-\\\\/ |)\n";
    res +="       \\           ~~-              _-~~         -_``.|)\n";
    res +=" |\\_.--~~~~~~~~~~-._  \\________   _~   Harley-   |   \\\\\n";
    res +=" |/   (} _..._/*/   \\          ~\\~      Davidson |    ``.--~~~~~--__\n";
    res +=" /___-~~~    /=/~-_  ~~~--------~~--------------/    .-~\\\\ _________~\n";
    res +="   *     ---/=/    \\  \\       /{}===_____===_  ||   /  __``.    / \\   *\n";
    res +="       / __/=/_\\____\\__\\     /[]###/===  \\###\\ ||  /__/    \\\\ /\n";
    res +="  |   | [ |*|___________~~~~~==/ ##\\_____/## \\ \\|  |  |------*------|  |\n";
    res +="       \\ ~~___________________/ /_##+++++##*  | |           / \\\n";
    res +="   *     ---\\_)________________/___________\\_/ /    *   \\ /     \\ /   *\n";
    res +="     *           *     \\_)____________________/       *    ~~~~~    *\n";
    res +="        -------                                           -------\n\n";
    res +="-------------------------------------------------------------------------------\n";
    res +="-------------------------------------------------------------------------------\n";
    
    return res;
  }
}
