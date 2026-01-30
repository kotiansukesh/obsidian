# Singleton Class

A class whose single instance can be created.

A singleton class allows a single instance at a time. In Java, a singleton is a design pattern. This design pattern ensures that only one instance of a class exists at any point in time. So any class defined as a singleton has a single access point and it is global.

Note that termination of the application life cycle does not destroy a singleton class like the normal classes. When a class is declared singleton, then we do not create a new instance every time a new request for the object is made.

The same instance is used again and again. This way we can save the memory space mostly in case of multi-threaded and database applications.

We can use a singleton class for activities like caching, logging, etc.