# Multilevel Inheritance

Derived class will be inheriting a base class and as well as the derived class also act as the base class to other class.

```java
// Java program to illustrate the
// concept of Multilevel inheritance
import java.io.*;
import java.lang.*;
import java.util.*;

class one {
	public void print_geek() {
		System.out.println("Geeks");
	}
}

class two extends one {
	public void print_for() { 
		System.out.println("for");
	}
}

class three extends two {
	public void print_geek() {
		System.out.println("Geeks");
	}
}

// Drived class
public class Main {
	public static void main(String[] args) {
		three g = new three();
		g.print_geek();
		g.print_for();
		g.print_geek();
	}
}
```

class A serves as a base class for the derived class B, which in turn serves as a base class for the derived class C
![[Pasted image 20210915233842.png]]