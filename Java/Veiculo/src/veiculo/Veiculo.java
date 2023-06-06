/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package veiculo;

/**
 *
 * @author Ivan Luís Silva do Nascimento
 */
abstract class Veiculo {

    int passageiros;
    double autonomia;
    double carga;
    private double tanque = 50;
    private double relKmLitro = 14;

    public Veiculo(){
      passageiros = 2;
      autonomia = 300;
      carga = 500;
    }
    public Veiculo(int _passageiros,double _autonomia, double _carga){
      this.passageiros = _passageiros;
      this.autonomia = _autonomia;
      this.carga = _carga;
    }
    public Veiculo(int _passageiros,double _autonomia, double _carga, double _tanque){
      this.passageiros = _passageiros;
      this.autonomia = _autonomia;
      this.carga = _carga;
      this.tanque = _tanque;
    }
    public Veiculo(int _passageiros,double _autonomia, double _carga, double _tanque, double _relKmLitro){
      this.passageiros = _passageiros;
      this.autonomia = _autonomia;
      this.carga = _carga;
      this.tanque = _tanque;
      this.relKmLitro = _relKmLitro;
    }
    public int transportouPassageiros(){
      return this.passageiros;
    }
    public double autonomiaViagem(){
      return this.autonomia;
    }
    public double distanciaPercorrida(float _litros){
      return relKmLitro * tanque;
    }
    public double cargaTransportada(){
      return this.carga;
    }
    public double getRelKmLitro(){
      return this.relKmLitro;
    }

    @Override
    public String toString(){
      String msgRetorno = "";
      msgRetorno += "\n passageiros: "+this.passageiros;
      msgRetorno += "\n Autonomia (em Km): "+this.autonomia;
      msgRetorno += "\n Carga (em Kg): "+this.carga;
      msgRetorno += "\n Km/l: "+this.getRelKmLitro();
      return msgRetorno;
    }
}
