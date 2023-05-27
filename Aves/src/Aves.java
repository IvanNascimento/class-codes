/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author aluno
 */
public abstract class Aves {

    String tamanhoDaAsa;
    String tamanhoDaEnvergadura;
    String tamanhoDoBico;
    String tamanhoDasPenasDaAsa;
    String[] cores = new String[]{"","",""};
    String cores2 = "";

    public Aves(){
      tamanhoDaAsa = "1m";
      tamanhoDaEnvergadura = "3m";
      tamanhoDoBico = "10cm";
      tamanhoDasPenasDaAsa = "5cm";
    }

    public Aves(String _TamanhoDaAsa, String _TamanhoDaEnvergadura, String _TamanhoDoBico, String _TamanhoDasPenasDasAsas,String[] _cores){
      this.tamanhoDaAsa = _TamanhoDaAsa;
      this.tamanhoDaEnvergadura = _TamanhoDaEnvergadura;
      this.tamanhoDoBico = _TamanhoDoBico;
      this.tamanhoDasPenasDaAsa = _TamanhoDasPenasDasAsas;
      this.cores = _cores;
    }

    public void setTamAsa(String _TamanhoDaAsa){
        this.tamanhoDaAsa = _TamanhoDaAsa;
    }

    public void setTamEnvergadura(String _TamanhoDaEnvergadura){
        this.tamanhoDaEnvergadura = _TamanhoDaEnvergadura;
    }

    public void setTamBico(String _TamanhoDoBico){
        this.tamanhoDoBico = _TamanhoDoBico;
    }

    public void setTamPenasAsas(String _TamanhoDasPenasDasAsas){
        this.tamanhoDasPenasDaAsa = _TamanhoDasPenasDasAsas;
    }
    public void setCores(String[] _cores){
        for(int i = 0;i < _cores.length; i++){
            this.cores[i] = _cores[i];
        }
    }
    public void mostraCores(){
        for(int i =0;i < cores.length ;i++){
            cores2 += cores[i]+" ";
        }
    }
}
