import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("How many numbers do you want to enter?");
    int count = scanner.nextInt();

    double smallest = 1000000000;
    double largest = 0;
    double avg = 0;
    double sum = 0;
    
    for(int i = 1; i <= count; i++){
        System.err.println("Enter #" + i + ": ");
        double n = scanner.nextDouble();
        if(n > largest) largest = n;
        if(n < smallest) smallest = n;
        sum += n;
    }

    avg = sum / (double) count;

    System.out.println("The smallest number is " + smallest);
    System.out.println("The largest number is " + largest);
    System.out.println("The average of the numbers is " + avg);
    System.out.println("The sum of the numbers is " + sum);


    scanner.close();

    }
}
