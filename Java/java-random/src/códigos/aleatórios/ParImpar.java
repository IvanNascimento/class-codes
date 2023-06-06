import java.util.Scanner;

public class ParImpar{

     public static void main(String []args){
        Scanner input = new Scanner(System.in);
        System.out.println("par ou impar: '0' ou '1'");
        int num = input.nextInt();
        for (int c=100;c>0;c--){
            if (num == 0){
            if (c%2 == 0){ System.out.println(c+" he par"); }  }
            else{
            if (c%2 != 0){ System.out.println(c+" he impar"); } }
    }
}
}