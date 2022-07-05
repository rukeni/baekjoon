import java.io.*;
public class Main{
    static int t;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        t = Integer.parseInt(br.readLine());
        
        if(t>=0 && t<=100){
            if(t>=90){
                bw.write("A\n");
                bw.flush();
                bw.close();
            }else if(t>=80 && t<90) {
                bw.write("B\n");
                bw.flush();
                bw.close();
            }else if(t>=70 && t<80) {
                bw.write("C\n");
                bw.flush();
                bw.close();
            }else if(t>=60 && t<70) {
                bw.write("D\n");
                bw.flush();
                bw.close();
            }else{
                bw.write("F\n");
                bw.flush();
                bw.close();
            }
        }
    }
}