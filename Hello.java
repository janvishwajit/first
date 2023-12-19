package practiceCodes;

import java.util.Scanner;

public class Binarytodecimal {

	public static int BinaryToDecimal(int no) {
		int decimal=0,temp,i=0;
		while(no!=0) {
			temp=no%10;
			no=no/10;
			if(temp!=0 && temp!=1) {
				return 0;
			}
			int x =temp *(int)Math.pow(2, i++);
			decimal=decimal+x;
			
		}
		return decimal;
	}
	
	public static void main(String []args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Binary number : ");
		int n= sc.nextInt();
		if(n==0) {
			System.out.println("Decimal no is 0" );
		}
		else {
			int decimalNo=BinaryToDecimal(n);
			if(decimalNo==0) {
				System.out.println("Enter Valid Binary Number");
			}
			else
				System.out.println("Decimal no is "+decimalNo );
			
		}
		
	}
}
 
