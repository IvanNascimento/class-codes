package banco;

/**
 * @author Ivan
 * @email ivanluis431@gmail.com
 */
import java.util.*;

public class Banco {

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    Conta usuario = new Conta();
    boolean continua = true;
    while (continua) {
      System.out.println("-------------------------------------");
      System.out.println("| Opções:                           |");
      System.out.println("| 0. Sair                           |");
      System.out.println("| 1. Cadastrar                      |");
      System.out.println("| 2. Transferir                     |");
      System.out.println("| 3. Sacar                          |");
      System.out.println("| 4. Depositar                      |");
      System.out.println("| 5. Mostrar conta                  |");
      System.out.println("| 6. Mostrar contas                 |");
      System.out.println("| 7. Mostrar Saldo                  |");
      System.out.println("-------------------------------------");
      int opcao = input.nextInt();
      int conta;
      double valor;
      switch (opcao) {
        case 0:
          System.out.println("Obrigado por usar meus servisos");
          continua = false;
          break;
        case 1:
          System.out.print("Nome: ");
          String Nome = input.next();
          System.out.print("Limite de Saque: ");
          double saque = input.nextDouble();
          System.out.print("Limite de Transferencia: ");
          double transferencia = input.nextDouble();
          usuario.Cadastrar(Nome, saque, transferencia);
          usuario.Print(usuario.getN() - 1);
          continue;
        case 2:
          System.out.print("Numero da sua conta: ");
          conta = input.nextInt();
          System.out.print("Numero da conta de destino: ");
          int destino = input.nextInt();
          System.out.print("Valor: ");
          valor = input.nextDouble();
          usuario.Transferir(conta, destino, valor);
          continue;
        case 3:
          System.out.print("Numero da sua conta: ");
          conta = input.nextInt();
          System.out.print("Valor: ");
          valor = input.nextDouble();
          usuario.Sacar(conta, valor);
          continue;
        case 4:
          System.out.print("Numero da sua conta: ");
          conta = input.nextInt();
          System.out.print("Valor: ");
          valor = input.nextDouble();
          usuario.Depositar(conta, valor);
          continue;
        case 5:
          System.out.print("Numero da sua conta: ");
          conta = input.nextInt();
          usuario.Print(conta);
          continue;
        case 6:
          usuario.PrintTodos();
          continue;
        case 7:
          System.out.print("Numero da conta: ");
          conta = input.nextInt();
          usuario.Saldo(conta);
          continue;
      }
    }
  }
}
