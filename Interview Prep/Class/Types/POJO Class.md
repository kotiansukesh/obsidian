A POJO is a class containing only private member variables. Apart from the private member variables it only contains getter and setter methods used by these member variables.

A POJO class does not have its behavior. However, it may override some methods like equals or interfaces.

**Properties of POJO class:**
-   POJO class must have a public getter and setter method.
-   All the members or instance variables should be private.
-   POJO class does not extend or implement classes or interfaces that are pre-specified.
-   They do not contain annotations that are pre-specified.
-   Does not have a constructor without any arguments (no-argument constructor).

```java
//declare a POJO class
class POJO_Class {
  private int daysOfWeek=7;         //private variable
  public int getdaysOfWeek() {      //getter
      return daysOfWeek;
   }
   public void setdaysOfWeek(int dow) {     //setter
      this.daysOfWeek = dow;
   }
}
public class Main {
   public static void main(String args[]){
      POJO_Class pojoDemo = new POJO_Class();   //instance of POJO class
      System.out.println("Days of the week:" + pojoDemo.getdaysOfWeek());
   }
}