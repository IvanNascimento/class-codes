package classes;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Dados {
  private String caminho;
  private ArrayList dados;
  private ObjectOutputStream output;  
  private ObjectInputStream input;
  
  public Dados(){
    this.caminho = System.getProperty("user.dir")+"/dados.db";
    this.dados = new ArrayList();
  }

  public String getCaminho() {
    return caminho;
  }
  public void setCaminho(String caminho) {
    this.caminho = caminho;
  }
  public ArrayList getDados() {
    return dados;
  }
  public void setDados(ArrayList dados) {
    this.dados = dados;
  }
  
  public void Salvar(ArrayList<Objeto> a) {
    try {
      this.output = new ObjectOutputStream(new FileOutputStream(new File(this.caminho)));
      output.writeObject(a);
      output.flush();
      output.close();
    } catch (IOException ex) {
      Logger.getLogger(Dados.class.getName()).log(Level.SEVERE, null, ex);
    }
  }
  public ArrayList<Objeto> Carregar() {
    try {
      this.input = new ObjectInputStream(new FileInputStream(new File(this.caminho)));
    } catch (IOException ex) {
      Logger.getLogger(Dados.class.getName()).log(Level.SEVERE, null, ex);
      // Não encontrou o arquivo, ou seja, base de dados vasia
      return new ArrayList();
    }
    try {
      while(true){
        ArrayList<Objeto> objeto = (ArrayList<Objeto>) input.readObject();
        this.dados = objeto;
        if(input.read() == -1) break;
      }
    } catch (ClassNotFoundException | IOException ex) {
      Logger.getLogger(Dados.class.getName()).log(Level.SEVERE, null, ex);
      // Erro na leitura
      return new ArrayList();
    }
    try {
      input.close();
    } catch (IOException ex) {
      Logger.getLogger(Dados.class.getName()).log(Level.SEVERE, null, ex);
    }
    
    // Tudo Ok
    return this.dados;
  }
}
