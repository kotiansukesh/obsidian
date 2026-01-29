# Wrapper Class

Every primitive data type in Java has a wrapper class.

Java provides a feature called wrapper class which has a mechanism that converts primitive data type into object and vice versa. Wrapper classes are the classes that represent primitive types like int, char, etc. as objects.

**The following table shows the primitive data types and their equivalent wrapper class.**

| Primitive type| Wrapper type |
| :---:   		| :-: 		|
|boolean		| Boolean 	|
|char			| Character |
|byte			| Byte 		|
|int			| Integer 	|
|long			| Long 		|


**Autoboxing**
Autoboxing is a technique of automatically converting a primitive data type to an object of its corresponding wrapper class. **For example**, conversion of int to Integer class, char to Character class, etc. are instances of autoboxing.

**Note:** Wrapper classes use the valueOf () method to convert the primitive into objects which are depreciated since Java 5.

**Unboxing**
The reverse conversion of wrapper class objects into their corresponding primitive data types is called “unboxing”.

**Note:** Since Java 5, the method intValue () that converts the wrapper object into a primitive type is depreciated.

```java
public class Main {  
    public static void main(String args[]){  
    //Convert int to Integer : boxing 
    int num = 20;  
    Integer int_class =  Integer.valueOf(num);//explicit conversion from int to Integer   
    Integer inum = num;//autoboxing  
    System.out.println("int => Integer: " + num+" => "+inum);  
         
    //Convert Integer to int: unboxing    
    Integer val=new Integer (3);    
    int ival=val.intValue();//explicit conversion from Integer to int  
    int jval=val;//unboxing    
     
    System.out.println("Integer => int:" + val+" => "+jval); 
    }
}  
```

