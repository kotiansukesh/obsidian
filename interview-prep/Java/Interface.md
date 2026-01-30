# Interface

An interface is just the declaration of methods of an Object, it’s not the implementation. In an interface, we define what kind of operation an object can perform. These operations are defined by the classes that implement the interface. Interfaces form a contract between the class and the outside world, and this contract is enforced at build time by the compiler.

```java
//Creating interface that has 4 methods  
interface A{
	void a();//by default, public and abstract  
	void b();  
	void c();  
	void d();  
}

	interface Vehical {
	            // declaration
	            void changeGear(int newValue);
	             void speedUp(int increment);
	             void applyBrakes(int decrement);
	}
	
	class Car implements Vehical {
	         int speed = 0;
	         int gear = 1;
	         // implementation
	         void changeGear(int newValue) {
	                 gear = newValue;
	          }
	          void speedUp(int increment) {
	                 speed = speed + increment; 
	          }
	           void applyBrakes(int decrement) {
	                 speed = speed - decrement;
	           }
	            void printStates() {
	                  System.out.println(" speed:" + speed + " gear:" + gear);
	            }
	}
```


   

*When to Use Interface*

Consider using interfaces if any of these statements apply to your situation:
- You expect that unrelated classes would implement your interface. For example, the interfaces Comparable and Cloneable are implemented by many unrelated classes.
- You want to specify the behavior of a particular data type, but not concerned about who implements its behavior.
- You want to take advantage of multiple inheritances.


Referece: https://www.geeksforgeeks.org/marker-interface-java


# Functional Interface 
```ad-ref
Reference: https://www.baeldung.com/java-8-functional-interfaces
```

`@FunctionalInterface`
* A functional interface is an interface that contains only one abstract method.
* They can have only one functionality to exhibit
* A functional interface can have any number of default methods.
* _**Runnable**_, _**ActionListener**_, _**Comparable**_ are some of the examples of functional interfaces


```java
@FunctionalInterface
public interface FunctionalInter {
    void getData1();

    default void getData2() {
        System.out.println("In getData2");
    }
}
```



## Consumer Functional Interface
* `Consumer<T>` is an inbuilt functional interface.
* It can be used in all contexts where an object needs to be consumed.
* Taken as input -> Perform operation -> Do not return any result


## Predicate Functional Interface
* Used for conditional check
* Returns `true`/`false`

## Supplier Functional Interface
* Used in all context where there is no input but an output is expected.


# Marker Interfaces
```ad-ref
Reference: https://www.baeldung.com/java-marker-interfaces
```
A marker interface is an interface that **has no methods or constants inside it**. It provides **run-time type information about objects**, so the compiler and JVM have **additional information about the object**.

A marker interface is also called a tagging interface.

Though marker interfaces are still in use, they very likely point to a code smell and should be used carefully. The main reason for this is that they blur the lines about what an interface represents since markers don't define any behavior. Newer development favors annotations to solve some of the same problems.



#question
#### Why Functional Interfaces in Java 8 have one Abstract Method?
The functional interface also known as Single Abstract Method Interface was introduced to facilitate Lambda functions. Since a lambda function can only provide the implementation for 1 method it is mandatory for the functional interface to have ONLY one abstract method