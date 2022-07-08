public class Main{
    static int d[] = new int[10036];
    
    static int dk(int i){
        int k = i;
        if(i>= 10000) { k+= i/ 10000; i%=10000;}
        if(i>= 1000) {k+=i/1000; i%=1000;}
        if(i>= 100){k+=i/100; i%=100;}
        if(i>=10){k+=i/10; i%=10;}
        return k += i;
    }
    public static void main(String[] args){
        for(int i=1; i<=10000; i++){
            d[dk(i)]=1;
            if(d[i]!=1){System.out.println(i);}
        }
    }
}