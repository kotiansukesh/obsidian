# Inheritance

It is the mechanism in java by which one class is allowed to inherit the features(fields and methods) of another class.

**Important terminology**
- **Super Class** The class whose features are inherited is known as superclass(or a base class or a parent class)
- **Sub Class** The class that inherits the other class is known as a subclass(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods.
- **Reusability** Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class.

```java
// Java program to illustrate the
// concept of inheritance
 
// base class
class Bicycle {
    // the Bicycle class has two fields
    public int gear;
    public int speed;
 
    // the Bicycle class has one constructor
    public Bicycle(int gear, int speed) {
        this.gear = gear;
        this.speed = speed;
    }
 
    // the Bicycle class has three methods
    public void applyBrake(int decrement) {
        speed -= decrement;
    }
 
    public void speedUp(int increment) {
        speed += increment;
    }
 
    // toString() method to print info of Bicycle
    public String toString() {
        return ("No of gears are " + gear + "\n" + "speed of bicycle is " + speed);
    }
}
 
// derived class
class MountainBike extends Bicycle {
 
    // the MountainBike subclass adds one more field
    public int seatHeight;
 
    // the MountainBike subclass has one constructor
    public MountainBike(int gear, int speed, int startHeight) {
        // invoking base-class(Bicycle) constructor
        super(gear, speed);
        seatHeight = startHeight;
    }
 
    // the MountainBike subclass adds one more method
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }
 
    // overriding toString() method
    // of Bicycle to print more info
    @Override 
	public String toString() {
        return (super.toString() + "\nseat height is " + seatHeight);
    }
}
 
// driver class
public class Test {
    public static void main(String args[]) {
         MountainBike mb = new MountainBike(3, 100, 25);
        System.out.println(mb.toString());
    }
}
```

<br>

**Types of Inheritance in Java**
1. [[Single Inheritance]]
2. [[Multilevel Inheritance]]
3. [[Hierarchical Inheritance]]
4. [[Multiple Inheritance (Through Interfaces)]]
5. [[Hybrid Inheritance(Through Interfaces)]]

<br>

**Important facts about inheritance in Java**
- **Default superclass** 
	Except Object class, which has no superclass, every class has one and only one direct superclass (single inheritance). In the absence of any other explicit superclass, every class is implicitly a subclass of the Object class.
- **Superclass can only be one** 
	A superclass can have any number of subclasses. But a subclass can have only one superclass. This is because Java does not support multiple inheritances with classes. Although with interfaces, multiple inheritances are supported by java.
- **Inheriting Constructors**
	A subclass inherits all the members (fields, methods, and nested classes) from its superclass. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.
- **Private member inheritance**
	A subclass does not inherit the private members of its parent class. However, if the superclass has public or protected methods(like getters and setters) for accessing its private fields, these can also be used by the subclass.
	
	
	<br>
	
	### Points to remember
	* Inheritance is not intended for code reuse