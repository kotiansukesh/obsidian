# Singleton Pattern

#Creational #DesignPattern

 
## Properties
-   Creational design pattern
-   Only one instance of the class should exist
-   Other classes should be able to get Instance of Singleton class
-   Used in Logging, cache, session and drivers

   

## Implementation
-   Constructor should be `private`
-   `public` method for returning instance
-   Instance Type - `private static`

  

## Initialization Type
1. Eager Initialization
```java
class Eager {
	private static Eager instance = new Eager();
	
	private Eager(){}
	
	public static Eager getInstance() {
		return instance;
	}
}
```

2. Lazy Initialization
```java
class Lazy {
	private static Lazy instance;
	
	private Lazy(){}
	
	public static Lazy getInstance() {
		if(instance == null) {
			instance = new Lazy();
		}
		return instance;
	}
}
```

3. Thread safe method Initialization
```java
class Synchronized1 {
	private static Synchronized1 instance;
	
	private Synchronized1(){}
	
	public static synchronized Synchronized1 getInstance() {
		if(instance == null) {
			instance = new Synchronized1();
		}
		return instance;
	}
}
```

4. Thread safe block Initialization
```java
class MethodSynchronized {
	private static MethodSynchronized instance;
	
	private MethodSynchronized(){}
	
	public static MethodSynchronized getInstance() {
		if(instance == null) {
			synchronized (MethodSynchronized.class) {
				if(instance == null) 
					instance = new MethodSynchronized();
			}
		}
		return instance;
	}
}
```

5. Lazy inner class Initialization
```java
class LazyInnerClass {
	private LazyInnerClass (){}
	
	public static LazyInnerClass getInstance() {
		return SingletonHelper.instance;
	}
	
	private static class SingletonHelper {
		private static final LazyInnerClass instance = new LazyInnerClass();
	}
}
```

## How to break singleton
1.  **Clone**
2.  **Deserialization**
Add the readResolve() method
```java
public class Lazy implements Serializable {
    private static Lazy instance;

    private Lazy() {
    }

    public static Lazy getInstance() {
        if (instance == null) {
            instance = new Lazy();
        }

        return instance;
    }

    protected Object readResolve() {
        return instance;
    }
}
```
4.  **Reflection API**
>**Solution**: Check for object in the constructor
```java
class Lazy {
	private static Lazy instance;
	private Lazy() {
		if (instance != null) {
			throw new IllegalStateException("Object cant be created using reflection");
	}
	
	public static Lazy getInstance() {
		if(instance == null) {
			instance = new Lazy();
		}
		return instance;
	}
}
```



>**NOTE**
>`readObject()` is an existing method in `ObjectInputStream` class. While reading object at the time of deserialization `readObject()` method internally check whether the class object which is being deserialized having `readResolve()` method or not. If `readResolve()` method exists then it will invoke it and return the same instance.
So the intent of writing `readResolve()` method is a good practice to achieve pure singleton design pattern where no one can get another instance by serializing/deserializing.