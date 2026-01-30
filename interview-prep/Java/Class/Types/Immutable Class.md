# Immutable Class

A class whose object cannot be changed.
An immutable class generates immutable objects. An immutable object is an object whose contents cannot be changed once the object is created. So an immutable class is the one whose object cannot be changed once created.

All the wrapper classes in Java for primitive types (Integer, Boolean, Byte, etc.) are immutable. The String class is also immutable.

We can also have user-defined immutable classes in Java.

For a class to be immutable, it needs to be declared final along with all its data members. Also, the class should have a parameterized constructor. All the member variables should have a getter method but not a setter method.

All the above requirements must be fulfilled for a class to be immutable.

```java
final class City { 
    final String city_name; 
    final int cityId; 
    //parameterised constructor
    public City(String name, int id) { 
        this.city_name = name; 
        this.cityId = id; 
    } 
    //getters for member variables
    public String getcityName() { 
        return city_name; 
    } 
    public int getcityId() { 
        return cityId; 
    } 
} 
   
// Driver class 
class Main 
{ 
    public static void main(String args[]) { 
        City city = new City("New York", 1001); 
        System.out.print("City Id:" + city.getcityId() + " ");
        System.out.println("City Name:" + city.getcityName()); 
           
        //city.cityId = 1002;    //cannot assign a value to final variable regNo 
    } 
}
```


## Handle Immutable data type
```java
final class Employee {
	private String employeeName;
	private Date dob;
	
	public Employee(String employeeName, Date dob) {
		this.employeeName = employeeName;
		this.dob = dob;
	}
	
	public String getEmployeeName() {
		return this.employeeName
	}
	
	public Date getDob() {
		return new Date(this.dob)
	}
}

public class Test {
	public static void main(String[] args) {
		Employee e = new Employee("Sukesh", new Date());
		Date d = e.getDob;
		d.setYear("1947");
	}
}
```

