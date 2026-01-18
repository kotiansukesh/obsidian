A static in Java in general means the object that belongs to a class and not to the individual instances. So a static member or method in Java need not be accessed with an object but directly using a class name.

A static class in Java can contain only static members. Also, we cannot instantiate a static class.

```java
class Static_Class {
   static int total; // static variable
   static void sum(int val1, int val2) { // static method
        System.out.print("Static method to calculate sum:" + " ");
        total = val1 + val2;
        System.out.println(val1 + "+" + val2); // print the numbers
    }
   static class Nested_Class { // static class
      static { // static block
         System.out.println("static block inside a static nested class");
      }
      public void displaySum() {
         sum(25, 75); // call static method
         // print the value in static variable total, it holds the sum of two numbers
         System.out.println("Sum of two numbers:" + total); 
      }
   }
}

public class Main {
   public static void main(String args[]) {
       // declare static class object
      Static_Class.Nested_Class object = new Static_Class.Nested_Class(); 
      object.displaySum(); // call displaySum method inside a static class
   }
}