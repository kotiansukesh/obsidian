# Nested Class or Inner Class
An Nested class/inner class is a class that is a member of another class.
Used to enhance encapsulation. 

Just like a class has variables and methods as its members, it can also have an inner class as its member.

```java
public class Main {
   //nested/inner class enclosed inside Main class.
   class InnerClass {
      public void inner_print() {
         System.out.println("Inner class");
      }
   }
   public static void main(String[] args) {
      System.out.println("Main in Outer class");
    }
}  
```

**Inner classes have the following subtypes:**
-   [[Nested Inner class]]
-   [[Method Local Inner class]]
-   [[Anonymous Inner class]]
-   [[Static Nested class]]

