# Final Class
* A final class cannot be inherited or subclassed.
* Once a class is declared final in Java, it is a sort of constant and it becomes immutable.

Hence to make a class immutable, we have to declare it as final.

```java
//final class
final class Base_Class {
	void Display() {
   		System.out.println("Base_Class::Display()");
   	}
}

//class Derived_Class extends Base_Class { //Compile-time error - can't inherit final class
class Derived_Class{
	void Display() {
		System.out.println("Derived_Class::Display()");
	}
}

public class Main {
   public static void main(String[] arg) {
      Base_Class base_obj = new Base_Class();   //create a final class object
      base_obj.Display();
      Derived_Class deri_obj = new Derived_Class();
      deri_obj.Display();
   }
}
```
