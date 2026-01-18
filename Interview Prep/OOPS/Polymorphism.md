# Polymorphism

Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations.

**Polymorphism is mainly divided into two types**
1. **Compile-time polymorphism**
	It is also known as static polymorphism. This type of polymorphism is achieved by function overloading.
	
	**Method Overloading**: When there are multiple functions with same name but different parameters then these functions are said to be **overloaded**. Functions can be overloaded by **change in number of arguments** or/and **change in type of arguments**.

```java
// Java program for Method overloading
  
class MultiplyFun {
  
    // Method with 2 parameter
    static int Multiply(int a, int b) {
        return a * b;
    }
  
    // Method with the same name but 2 double parameter
    static double Multiply(double a, double b) {
        return a * b;
    }
  
    // Method with the same name but 3 parameter
    static int Multiply(int a, int b, int c) {
        return a * b * c;
    }
}
  
class Main {
    public static void main(String[] args) {
        System.out.println(MultiplyFun.Multiply(2, 4));
        System.out.println(MultiplyFun.Multiply(5.5, 6.3));
    }
}
```

2. **Run-time polymorphism**
	It is a process in which a function call to the overridden method is resolved at Runtime. This type of polymorphism is achieved by Method Overriding.
	
	Method overriding, on the other hand, occurs when a derived class has a definition for one of the member functions of the base class. That base function is said to be overridden.
	
```java
// Java program for Method overriding

class Parent {
	void Print() {
		System.out.println("parent class");
	}
}

class subclass1 extends Parent {
	void Print() {
		System.out.println("subclass1");
	}
}

class subclass2 extends Parent {
	void Print() {
		System.out.println("subclass2");
	}
}

class TestPolymorphism3 {
	public static void main(String[] args) {
		Parent a;

		a = new subclass1();
		a.Print();

		a = new subclass2();
		a.Print();
	}
}
```

