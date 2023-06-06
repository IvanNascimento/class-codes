package estruturas;

import java.io.*;
import java.util.*;

/**
 * @author Ivan
 */
public class Salvar {

    //http://www.guj.com.br/t/como-gravar-objetos-serializados-em-arquivos-sem-sobrescrever/141323/2
    String caminhoP = "D:\\arquivos\\POO\\Dados\\portas.I";
    String caminhoC = "D:\\arquivos\\POO\\Dados\\casas.I";
    String caminhoE = "D:\\arquivos\\POO\\Dados\\edificios.I";
    String caminhoL = "D:\\arquivos\\POO\\Dados\\logs.I";

    ArrayList<Casa> casas;
    ArrayList<Porta> portas;
    ArrayList<Edificio> predios;
    String logs;

    ObjectOutputStream outputCasa = null;
    ObjectOutputStream outputPorta = null;
    ObjectOutputStream outputEdificio = null;
    ObjectOutputStream outputLog = null;

    ObjectInputStream inputCasa = null;
    ObjectInputStream inputPortas = null;
    ObjectInputStream inputPredios = null;
    ObjectInputStream inputLog = null;

    public void SalvarDisco(String objeto, Porta p, Casa c, Edificio e) throws ClassNotFoundException, Exception {
            outputPorta = new ObjectOutputStream(new FileOutputStream(caminhoP));
            outputCasa = new ObjectOutputStream(new FileOutputStream(caminhoC));
            outputEdificio = new ObjectOutputStream(new FileOutputStream(caminhoE));
            outputLog = new ObjectOutputStream(new FileOutputStream(caminhoL));

            inputCasa = new ObjectInputStream(new FileInputStream(caminhoC));
            inputPortas = new ObjectInputStream(new FileInputStream(caminhoP));
            inputPredios = new ObjectInputStream(new FileInputStream(caminhoE));
            inputLog = new ObjectInputStream(new FileInputStream(caminhoL));

            casas = (ArrayList<Casa>) inputCasa.readObject();
            portas = (ArrayList<Porta>) inputPortas.readObject();
            predios = (ArrayList<Edificio>) inputPredios.readObject();
            logs = inputLog.readUTF();

            casas.add(c);
            portas.add(p);
            predios.add(e);
            logs += objeto;

            outputCasa.writeObject(casas);
            outputEdificio.writeObject(predios);
            outputPorta.writeObject(portas);
            outputLog.writeChars(logs);

            inputCasa.close();
            inputPortas.close();
            inputPredios.close();
            inputLog.close();

            outputCasa.close();
            outputEdificio.close();
            outputPorta.close();
            outputLog.close();
    }

    public void CarregarDisco() throws ClassNotFoundException, Exception {
        try {

            inputCasa = new ObjectInputStream(new FileInputStream(caminhoC));
            inputPortas = new ObjectInputStream(new FileInputStream(caminhoP));
            inputPredios = new ObjectInputStream(new FileInputStream(caminhoE));
            inputLog = new ObjectInputStream(new FileInputStream(caminhoL));

            casas = (ArrayList<Casa>) inputCasa.readObject();
            portas = (ArrayList<Porta>) inputPortas.readObject();
            predios = (ArrayList<Edificio>) inputPredios.readObject();
            logs = inputLog.readUTF();

            inputCasa.close();
            inputLog.close();
            inputPortas.close();
            inputPredios.close();

            System.out.println(casas);
            System.out.println(portas);
            System.out.println(predios);
            System.out.println(logs);

        } catch (FileNotFoundException ex) {
            System.out.println("FileNotFoundException");
            File c = new File(caminhoC);
            File p = new File(caminhoP);
            File e = new File(caminhoE);
            File l = new File(caminhoL);

            c.createNewFile();
            p.createNewFile();
            e.createNewFile();
            l.createNewFile();
        } catch (IOException ex) {
            System.out.println("3");
            ex.printStackTrace();
        }
    }
    
    public void anotacao(){
        LinkedList alunos = new LinkedList();
        
        alunos.add("sdfsdfsdfs");
        
        for(Iterator iterator = alunos.iterator(); iterator.hasNext();){
            Porta proxPorta = (Porta) iterator.next();
            System.out.println(proxPorta.toString());
        }
    }
}
