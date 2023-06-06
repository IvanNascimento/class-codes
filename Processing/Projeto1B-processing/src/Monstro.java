import java.util.ArrayList;

public class Monstro {
  
  // http://www.daemon.com.br/home/conceitos-basicos-de-rpg/
  // http://diagrame.com.br/account
  // carisma == para doma na classe Hunter
  
  private float constituicao, // vida do personagem
        forca, // poder de ataque
        defesaAtk, // potos de defesa fisica
        defesaMag, // potos de defesa magica
        destreza, // % de acerto
        agilidade, // velocidade de ataque
        inteligencia, // mais inteligensia == maior magia
        percepcao; // % de esquiva
  private ArrayList<Magia> magias;//  +/- ataque, ataques magicos, etc;
  
  Monstro(){
    this.constituicao = 0;
    this.forca = 0;
    this.defesaAtk = 0;
    this.defesaMag = 0;
    this.destreza = 0;
    this.agilidade = 0;
    this.inteligencia = 0;
    this.percepcao = 0;
    this.magias = new ArrayList<>();
  }
  
  Monstro(float constituicao, float forca, float defesaAtk, float defesaMag, float destreza, 
    float agilidade, float inteligencia, float percepcao, ArrayList<Magia> magias){
      this.constituicao = constituicao;
      this.forca = forca;
      this.defesaAtk = defesaAtk;
      this.defesaMag = defesaMag;
      this.destreza = destreza;
      this.agilidade = agilidade;
      this.inteligencia = inteligencia;
      this.percepcao = percepcao;
      this.magias = magias;
  }
  
  public float getConst(){
    return this.constituicao;
  }
  
  public float getForca(){
    return this.forca;
  }
  
  public float getDes(){
    return this.destreza;
  }
  
  public float getAgi(){
    return this.agilidade;
  }
  
  public float getInte(){
    return this.inteligencia;
  }
  
  public float getPer(){
    return this.percepcao;
  }
  
  public float getDefAtk(){
    return this.defesaAtk;
  }
  
  public float getDefMag(){
    return this.defesaMag;
  }
  
  public ArrayList getMag(){
    return this.magias;
  }
  
  public void setConst(float num){
    this.constituicao = num;
  }
  
  public void setForca(float num){
    this.forca = num;
  }
  
  public void setDefAtk(float num){
    this.defesaAtk = num;
  }
  
  public void setDefMag(float num){
    this.defesaMag = num;
  }
  
  public void setDes(float num){
    this.destreza = num;
  }
  
  public void setAgi(float num){
    this.agilidade = num;
  }
  
  public void setInte(float num){
    this.inteligencia = num;
  }
  
  public void setPer(float num){
    this.percepcao = num;
  }
  
  public void setMagias(ArrayList magias){
    this.magias = magias;
  }
  
  public float atacar(){
    return this.forca;
  }
  
  public void receberDano(float dano){
    dano -= this.defesaAtk;
    if(dano > 0){
      this.constituicao -= dano;
    }
  }
}
