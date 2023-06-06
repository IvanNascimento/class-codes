package view;

import classes.Administrador;
import classes.Dados;
import classes.Objeto;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;
public class Main extends javax.swing.JFrame {

  private Administrador admim;
  private Dados dados;
  public Main() {
    initComponents();
    
    this.admim = new Administrador();
    this.dados = new Dados();
    
    this.admim.inicializar();
    this.admim.setLista(this.dados.Carregar());
    
    ArrayList<Objeto> as = admim.getLista();    
    DefaultTableModel modeloTabela = (DefaultTableModel) tabela.getModel();
    
    for(int i=0;i<as.size();i++){
      Object[] item = {as.get(i).getNome(), as.get(i).getTipo()};
      modeloTabela.addRow(item);
    }
    
    System.out.println(this.admim.toString());
  }

  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    jPanel1 = new javax.swing.JPanel();
    jScrollPane1 = new javax.swing.JScrollPane();
    tabela = new javax.swing.JTable();
    labelNome = new javax.swing.JLabel();
    nome = new javax.swing.JTextField();
    labelTipo = new javax.swing.JLabel();
    tipo = new javax.swing.JTextField();
    adicionar = new javax.swing.JButton();
    jSeparator1 = new javax.swing.JSeparator();
    atualizar = new javax.swing.JButton();
    deletar = new javax.swing.JButton();
    sair = new javax.swing.JButton();
    jSeparator2 = new javax.swing.JSeparator();

    setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    setBackground(new java.awt.Color(102, 102, 102));
    setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
    setMaximumSize(new java.awt.Dimension(500, 500));
    setMinimumSize(new java.awt.Dimension(500, 500));
    setPreferredSize(new java.awt.Dimension(500, 500));
    setResizable(false);
    setSize(new java.awt.Dimension(500, 500));

    tabela.setModel(new javax.swing.table.DefaultTableModel(
      new Object [][] {

      },
      new String [] {
        "Nome", "Tipo"
      }
    ) {
      Class[] types = new Class [] {
        java.lang.String.class, java.lang.String.class
      };

      public Class getColumnClass(int columnIndex) {
        return types [columnIndex];
      }
    });
    jScrollPane1.setViewportView(tabela);

    labelNome.setText("Nome:");

    nome.setName(""); // NOI18N

    labelTipo.setText("Tipo:");

    adicionar.setText("Adicionar");
    adicionar.addActionListener(new java.awt.event.ActionListener() {
      public void actionPerformed(java.awt.event.ActionEvent evt) {
        adicionarActionPerformed(evt);
      }
    });

    atualizar.setText("Atualizar");
    atualizar.addActionListener(new java.awt.event.ActionListener() {
      public void actionPerformed(java.awt.event.ActionEvent evt) {
        atualizarActionPerformed(evt);
      }
    });

    deletar.setText("Deletar");
    deletar.addActionListener(new java.awt.event.ActionListener() {
      public void actionPerformed(java.awt.event.ActionEvent evt) {
        deletarActionPerformed(evt);
      }
    });

    sair.setText("Fechar");
    sair.addMouseListener(new java.awt.event.MouseAdapter() {
      public void mouseClicked(java.awt.event.MouseEvent evt) {
        sairMouseClicked(evt);
      }
    });

    javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
    jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(
      jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addGroup(jPanel1Layout.createSequentialGroup()
        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
          .addComponent(jSeparator2)
          .addGroup(jPanel1Layout.createSequentialGroup()
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
              .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 480, Short.MAX_VALUE)
              .addComponent(jSeparator1)
              .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                  .addComponent(labelNome, javax.swing.GroupLayout.DEFAULT_SIZE, 60, Short.MAX_VALUE)
                  .addComponent(labelTipo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                  .addComponent(nome)
                  .addComponent(tipo))))
            .addGap(0, 0, Short.MAX_VALUE))
          .addGroup(jPanel1Layout.createSequentialGroup()
            .addGap(0, 0, Short.MAX_VALUE)
            .addComponent(adicionar, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
              .addComponent(sair, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
              .addComponent(atualizar, javax.swing.GroupLayout.DEFAULT_SIZE, 90, Short.MAX_VALUE))
            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(deletar, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
            .addGap(0, 0, Short.MAX_VALUE)))
        .addContainerGap())
    );
    jPanel1Layout.setVerticalGroup(
      jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addGroup(jPanel1Layout.createSequentialGroup()
        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 250, javax.swing.GroupLayout.PREFERRED_SIZE)
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 11, Short.MAX_VALUE)
        .addComponent(jSeparator1, javax.swing.GroupLayout.PREFERRED_SIZE, 10, javax.swing.GroupLayout.PREFERRED_SIZE)
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
          .addComponent(labelNome, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE)
          .addComponent(nome, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE))
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
          .addComponent(tipo, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE)
          .addComponent(labelTipo, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE))
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
          .addComponent(atualizar, javax.swing.GroupLayout.DEFAULT_SIZE, 35, Short.MAX_VALUE)
          .addComponent(adicionar, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
          .addComponent(deletar, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 15, Short.MAX_VALUE)
        .addComponent(jSeparator2, javax.swing.GroupLayout.PREFERRED_SIZE, 10, javax.swing.GroupLayout.PREFERRED_SIZE)
        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 13, Short.MAX_VALUE)
        .addComponent(sair, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE)
        .addContainerGap(35, Short.MAX_VALUE))
    );

    nome.getAccessibleContext().setAccessibleDescription("");

    javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
    getContentPane().setLayout(layout);
    layout.setHorizontalGroup(
      layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
    );
    layout.setVerticalGroup(
      layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
    );

    pack();
  }// </editor-fold>//GEN-END:initComponents

  private void sairMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_sairMouseClicked
    // Salvar os dados
    System.out.println(admim.toString());
    this.dados.Salvar(admim.getLista());
    this.dispose();
  }//GEN-LAST:event_sairMouseClicked

  private void atualizarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_atualizarActionPerformed
    if(tabela.getSelectedRow() != -1){
      tabela.setValueAt(nome.getText(), tabela.getSelectedRow(), 0);
      tabela.setValueAt(tipo.getText(), tabela.getSelectedRow(), 1);
      admim.editItem(tabela.getSelectedRow(), new Objeto(nome.getText(), tipo.getText()));
      nome.setText("");tipo.setText("");
    }
  }//GEN-LAST:event_atualizarActionPerformed

  private void adicionarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_adicionarActionPerformed
    if((!"".equals(nome.getText())) && (!"".equals(tipo.getText()))){
      DefaultTableModel modeloTabela = (DefaultTableModel) tabela.getModel();
      Object[] item = {nome.getText(), tipo.getText()};
      admim.addItem(nome.getText(), tipo.getText());
      modeloTabela.addRow(item);
      nome.setText("");tipo.setText("");
    }
  }//GEN-LAST:event_adicionarActionPerformed

  private void deletarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_deletarActionPerformed
    if(tabela.getSelectedRow() != -1){
      DefaultTableModel modeloTabela = (DefaultTableModel) tabela.getModel();
      admim.delItem(tabela.getSelectedRow());
      modeloTabela.removeRow(tabela.getSelectedRow());
    }
  }//GEN-LAST:event_deletarActionPerformed
  public static void main(String args[]) {
    java.awt.EventQueue.invokeLater(new Runnable() {
      public void run() {
        new Main().setVisible(true);
      }
    });
  }

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private javax.swing.JButton adicionar;
  private javax.swing.JButton atualizar;
  private javax.swing.JButton deletar;
  private javax.swing.JPanel jPanel1;
  private javax.swing.JScrollPane jScrollPane1;
  private javax.swing.JSeparator jSeparator1;
  private javax.swing.JSeparator jSeparator2;
  private javax.swing.JLabel labelNome;
  private javax.swing.JLabel labelTipo;
  private javax.swing.JTextField nome;
  private javax.swing.JButton sair;
  private javax.swing.JTable tabela;
  private javax.swing.JTextField tipo;
  // End of variables declaration//GEN-END:variables
}
