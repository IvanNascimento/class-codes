package banco;

import java.util.ArrayList;

/**
 * @author Ivan
 * @email ivanluis431@gmail.com
 */
public class Conta {

  protected int numeroDaConta;
  protected String nomeCliente;
  protected double saldo;
  protected double limiteSaque;
  protected double limiteTransferencia;
  protected int n;
  protected ArrayList clientes = new ArrayList();

  //voids saca, deposita, transferir
  public String getNomeCliente() {
    return this.nomeCliente;
  }

  public int getNumeroDaConta() {
    return this.numeroDaConta;
  }

  public double getSaldo() {
    return this.saldo;
  }

  public double getLimiteSaque() {
    return this.limiteSaque;
  }

  public double getLimiteTransferencia() {
    return this.limiteTransferencia;
  }
  
  public int getN(){
    return n;
  }

  public void Cadastrar(String _Nome, double _LimiteSaque, double _LimiteTransferencia) {
    Conta cliente = new Conta();
    cliente.numeroDaConta = n;
    cliente.nomeCliente = _Nome;
    cliente.saldo = 0;
    cliente.limiteSaque = _LimiteSaque;
    cliente.limiteTransferencia = _LimiteTransferencia;
    n++;
    clientes.add(cliente);
  }

  public void Sacar(int _Numero, double _Valor) {
    Conta cliente = Buscar(_Numero);
    int idCliente = BuscarId(_Numero);
    if (cliente != null) {
      if (cliente.saldo > _Valor) {
        if (cliente.limiteSaque + 1 > _Valor) {
          cliente.saldo -= _Valor;
          clientes.set(idCliente, cliente);
        } else {
          System.out.println("Valor de saque excedido");
        }
      } else {
        System.out.println("Conta não possui saldo suficiente");
      }
    } else {
      System.out.println("Numero de conta invalido");
    }
  }

  public void Depositar(int _Numero, double _Valor) {
    Conta cliente = Buscar(_Numero);
    int idCliente = BuscarId(_Numero);
    if (cliente != null) {
      cliente.saldo += _Valor;
      clientes.set(idCliente, cliente);
    } else {
      System.out.println("Numero de conta invalido");
    }
  }

  public void Transferir(int _NumeroDaConta, int _ContaDestinatario, double _Valor) {
    Conta cliente = Buscar(_NumeroDaConta);
    int idCliente = BuscarId(_NumeroDaConta);
    Conta destinatario = Buscar(_ContaDestinatario);
    int idDestinatario = BuscarId(_ContaDestinatario);
    if (cliente != null && destinatario != null) {
      if (cliente.saldo >= _Valor) {
        if (cliente.limiteTransferencia + 1 > _Valor) {
          cliente.saldo -= _Valor;
          clientes.set(idCliente, cliente);
          destinatario.saldo += _Valor;
          clientes.set(idDestinatario, destinatario);
        } else {
          System.out.println("Valor de limite de transferencia excedido");
        }
      } else {
        System.out.println("Conta não possui saldo suficiente");
      }
    } else {
      System.out.println("Numero de conta invalido");
    }
  }

  public void PrintTodos() {
    for (int i = 0; i < clientes.size(); i++) {
      Conta cliente = (Conta) clientes.get(i);
      System.out.println("|=====================================");
      System.out.println("| Nome: " + cliente.nomeCliente);
      System.out.println("| Saldo: " + cliente.saldo);
      System.out.println("| N° da conta: " + cliente.numeroDaConta);
      System.out.println("| Limite de saque: " + cliente.limiteSaque);
      System.out.println("| Limite de transferencia: " + cliente.limiteTransferencia);
      System.out.println("|=====================================");

    }
  }

  public void Print(int _NumeroConta) {
    Conta cliente = Buscar(_NumeroConta);
    if (cliente != null) {
      System.out.println("|=====================================");
      System.out.println("| Nome: " + cliente.nomeCliente);
      System.out.println("| Saldo: " + cliente.saldo);
      System.out.println("| N° da conta: " + cliente.numeroDaConta);
      System.out.println("| Limite de saque: " + cliente.limiteSaque);
      System.out.println("| Limite de transferencia: " + cliente.limiteTransferencia);
      System.out.println("|=====================================");
    }
  }

  public void Saldo(int _NumeroConta) {
    Conta cliente = Buscar(_NumeroConta);
    System.out.println("O cliente "+ cliente.nomeCliente +" tem saldo atual de :" + cliente.saldo);
  }

  protected Conta Buscar(int _Numero) {
    for (int i = 0; i < clientes.size(); i++) {
      Conta cliente = (Conta) clientes.get(i);
      if (_Numero == cliente.getNumeroDaConta()) {
        return cliente;
      }
    }
    return null;
  }

  protected int BuscarId(int _Numero) {
    for (int i = 0; i < clientes.size(); i++) {
      Conta cliente = (Conta) clientes.get(i);
      if (_Numero == cliente.getNumeroDaConta()) {
        return i;
      }
    }
    return -1;
  }
}
