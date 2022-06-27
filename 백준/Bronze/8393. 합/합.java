import java.util.*;
public class Main{
    static int sum(int x){
        return x*(x+1)/2;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        if(a>=1 && a<=10000){
            System.out.println(sum(a));
        }
    }
}