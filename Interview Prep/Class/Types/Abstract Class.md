# Abstract Class

This class has one or more abstract methods.
An abstract class is a class that is incomplete or whose implementation is not completed. An abstract class cannot be instantiated. It needs to be extended by the other classes and implement it's methods to form a concrete class.

An abstract class is declared by using the keyword **abstract**. 
An abstract class can have static and final methods as well as constructors.


```java
// An example abstract class in Java
abstract class Shape {
    int color;
  
    abstract void draw();
}
```

Following are some important observations about abstract classes in Java.
1. An instance of an abstract class cannot be created, we can have references to abstract class type though.
```java
abstract class Base {
    abstract void fun();
}
class Derived extends Base {
    void fun() {
        System.out.println("Derived fun() called");
    }
}
class Main {
    public static void main(String args[]) {
  
        // Uncommenting the following line will cause
        // compiler error as the line tries to create an
        // instance of abstract class. Base b = new Base();
  
        // We can have references of Base type.
        Base b = new Derived();
        b.fun();
    }
}
```

2. Abstract class can contain constructors in Java. And a constructor of abstract class is called when an instance of an inherited class is created.
```java
abstract class Base {
    Base() {
        System.out.println("Base Constructor Called");
    }
    abstract void fun();
}

class Derived extends Base {
    Derived() {
        System.out.println("Derived Constructor Called");
    }
	
    void fun() {
        System.out.println("Derived fun() called");
    }
}

class Main {
    public static void main(String args[])
    {
        Derived d = new Derived();
    }
}
```

3. We can have an abstract class without any abstract method. This allows us to create classes that cannot be instantiated but can only be inherited.
```java
// An abstract class without any abstract method
abstract class Base {
    void fun() {
		System.out.println("Base fun() called");
	}
}
  
class Derived extends Base {
}
  
class Main {
    public static void main(String args[]) {
        Derived d = new Derived();
        d.fun();
    }
}
```

4. Abstract classes can also have final methods (methods that cannot be overridden).
```java
// An abstract class with a final method
abstract class Base {
    final void fun() {
        System.out.println("Derived fun() called");
    }
}
  
class Derived extends Base {
}
  
class Main {
    public static void main(String args[]) {
        Base b = new Derived();
        b.fun();
    }
}
```

5. For any abstract java class we are not allowed to create an object i.e., for abstract class instantiation is not possible.
```java
abstract class Test {
    public static void main(String args[]) {
        // Try to create an object
        Test t = new Test();
    }
}
```

6. Similar to the interface we can define static methods in an abstract class that can be called independently without an object.
```java
abstract class Party {
    static void doParty() {
        System.out.println("Lets have some fun!!");
    }
}
  
public class Main extends Party {
    public static void main(String[] args) {
        Party.doParty();
    }
}
```


_____

**Questions**
1. Is it possible to create an abstract and final class in Java?
2. Is it possible to have an abstract method in a final class?
	 =>No, it's not possible to have an abstract method in a final class
3. Is it possible to inherit from multiple abstract classes in Java?