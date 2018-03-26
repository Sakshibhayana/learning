/*package statictest;


public class Student {
private static int  count;
private  int rollNo;
private static int storeRoll[] = new int[10];

public Student(int r){
	this.rollNo = r;
	storeRoll[count] = r;
	count++;
	
}

public static int getCount() {
	return count;
}

public int getRollNo() {
	return rollNo;
}

public static void getStoreRoll() {
	int temp[] = new int[count];
	for(int i=0;i<count;i++){
		temp[i]=storeRoll[i];
		//System.out.println(getStoreRoll().length);
		try {
			for(int j=i+1;j<count;j++){
				if(temp[i] == storeRoll[j] )
					throw new ArithmeticException("Roll No must be unique: "+temp[i]);
					
			}
			System.out.println("Roll No is: "+temp[i]);
		} catch(Exception e){
			e.printStackTrace();
			System.out.println();
		}
		
	}
		//return temp;
}
}

*/

