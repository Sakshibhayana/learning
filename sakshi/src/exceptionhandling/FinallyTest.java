package exceptionhandling;


public class FinallyTest {
	public static void main(String s[]) {
		int x,y,z;
		try {
			x = 12;
			y = 0;
			// z=x/y;
			z = calc(x,y);
			/*if(z<5){
				return;
			}*/
			System.out.println("REsult= "+z);
		}catch(ArithmeticException e) {
			System.out.println(e.getMessage());
			
			// todo: 
			//e.getS
			//System.out.println("REskbbkj");
		}
		finally {
			System.out.println("This is finally block");
			//return;
		}
		System.out.println("Thank you");
	}
	static int calc(int a, int b) {
		try {
			System.out.println("Welcome to calc");
			int c;
			c=a/b;
			return(c);
			
		}
		catch(ArithmeticException e) {
			System.out.println(e.getMessage());
			return 0;
		}
		finally {
			System.out.println("Finally in calc");
			return 1;
			//return;
		}
	}
	
}

