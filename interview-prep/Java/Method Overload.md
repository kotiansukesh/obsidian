# Method Overload


1. Passing null to the Overloaded methods
	```java
	public class TestNull {
	 public static void nullTest(Object b) {
		System.out.println("object");
	 } 

	 public static void nullTest(String x) {
		System.out.println("String");
	 }

	 public static void main(String x[]) { 
		nullTest(null); 
	 }
	}
	```
> String

```java
public class TestNull {
	public static void nullTest(Object b) {
		System.out.println("object");
	}       

	public static void nullTest(String x) {
		System.out.println("String");
	}

	public static void nullTest(Integer i) {
		System.out.println("Integer ");
	}

	public static void main(String x[]) {       
		nullTest(null);     
	}
}
```
> Exception in thread "main" java.lang.Error: Unresolved compilation problem: The method nullTest(Object) is ambiguous for the type testNull
