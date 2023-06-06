package Lista.Estatica;

import Lista.Lista;

public class ListaEstatica implements Lista {

  /* VARIÁVEIS */
    private Object[] elementos;
    private int tamanho;
    public static final int TAM_MAX = 50000;

  /* FUNÇÕES */
    /* Overrides */
      @Override
      public void inicializa() {
        this.elementos = new Object[ListaEstatica.TAM_MAX];
        this.tamanho = 0;
      }
      @Override
      public void adicionar(Object e) {
        this.elementos[this.tamanho] = e;
        this.tamanho++;
      }
      @Override
      public void adicionar(int posicao, Object e) {
        if(! this.posicaoValida(posicao)){
          throw new IllegalArgumentException("Posição inválida");
        }
        for(int i=this.tamanho;i>posicao;i--){
          this.elementos[i] = this.elementos[i-1];
        }
        this.elementos[posicao] = e;
        this.tamanho++;
      }
      @Override
      public Object recuperar(int posicao) {
        if(!this.posicaoValida(posicao)){
         throw new IllegalArgumentException("Posição inválida");
        }
        return this.elementos[posicao];
      }
      @Override
      public void remover(int posicao) {
        if(this.posicaoValida(posicao)){
          this.elementos[posicao] = null;
          this.tamanho--;
        }
        for(int i=posicao;i<this.tamanho();i++){
          this.elementos[i] = this.elementos[i+1];
        }
      }
      @Override
      public boolean verificar(Object e) {
        for(int i=0;i<this.tamanho()-1;i++){
          if(this.elementos[i].equals(e)){
            return true;
          }
        }
        return false;
      }
      @Override
      public int tamanho() {
        return this.tamanho;
      }
      @Override
      public String toString(){
        if(this.tamanho() == 0){
          return "[]";
        }
        StringBuilder string = new StringBuilder();
        string.append("[");
        for(int i=0;i<this.tamanho()-1;i++){
          string.append(this.elementos[i]);
          string.append(", ");
        }
        string.append(this.elementos[this.tamanho()-1]);
        string.append("]");
        return string.toString();
      }
    /* Outras */
      private boolean posicaoValida(int posicao){
        return (posicao >= 0 && posicao <= this.tamanho && this.tamanho <= TAM_MAX);
      }
}
