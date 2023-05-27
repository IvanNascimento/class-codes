package com.example.ifpb.quiz_vfeiraifciencias;

import android.util.Log;

public class Questao {
    private String alternativa1="",
            alternativa2="",
            alternativa3="",
            certa="";
    private String questao="";

    private boolean respondida = false, acertou = false;

    public Questao(String questao, String alternativa1, String alternativa2, String alternativa3, String certa) {
        this.questao = questao;
        this.alternativa1 = alternativa1;
        this.alternativa2 = alternativa2;
        this.alternativa3 = alternativa3;
        this.certa = certa;
        this.respondida = false;
        this.acertou = false;
    }

    public boolean isRespondida() {
        return respondida;
    }

    public String getQuestao() {
        return questao;
    }

    public String getAlternativa2() {
        return alternativa2;
    }

    public String getAlternativa1() {
        return alternativa1;
    }

    public String getAlternativa3() {
        return alternativa3;
    }

    public String getCerta() {
        return certa;
    }

    public void setRespondida(boolean respondida) {
        this.respondida = respondida;
    }

    public boolean isAcertou() {
        return acertou;
    }

    public void setAcertou(boolean acertou) {
        this.acertou = acertou;
    }

    public void setQuestao(String questao) {
        this.questao = questao;
    }

    public void setAlternativa1(String alternativa1) {
        this.alternativa1 = alternativa1;
    }

    public void setAlternativa2(String alternativa2) {
        this.alternativa2 = alternativa2;
    }

    public void setCerta(String certa) {
        this.certa = certa;
    }

    public void setAlternativa3(String alternativa3) {
        this.alternativa3 = alternativa3;
    }

    @Override
    public String toString() {
        if(!isRespondida()){
            return "Não respondida";
        }else{
            if(isAcertou()){
                return "Acertou";
            }else{
                return "Errou";
            }
        }
    }
    public void print(){
        String msg = "";
        msg += "Questão: "+ getQuestao()+"\n";
        msg += "Alternativa - 1: "+ getAlternativa1()+"\n";
        msg += "Alternativa - 2: "+ getAlternativa2()+"\n";
        msg += "Alternativa - 3: "+ getAlternativa3()+"\n";
        msg += "Certa: "+ getCerta()+"\n";
        Log.e("print", msg);
    }

}
