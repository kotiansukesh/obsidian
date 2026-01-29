# Spring Framework

## [[Spring Core]] Concepts – DI, IoC, AOP

-   **Inversion of Control** – this is the principle of [[Object Oriented Programming]], in which objects of the program do not depend on concrete implementations of other objects, but may have knowledge about their abstractions (interfaces) for later interaction.
-   **Dependency Injection** – is a composition of structural design patterns, in which for each function of the application there is one, a conditionally independent object (service) that can have the need to use other objects (dependencies) known to it by interfaces. Dependencies are transferred (implemented) to the service at the time of its creation. This is a situation where we introduce an element of one class into another. In practice, DI is implemented by passing parameters to the constructor or using setters. Libraries that implement this approach are also called IoC containers.


## Spring Framework Architecture
Spring Framework is divided into a number of separate modules, which allows you to decide which ones to use in your application. The below image illustrates the most important modules of Spring Framework architecture.

![[Pasted image 20210916101820.png]]

## Spring Framework Core Components
The Core container from Spring consists of four modules: SpEL , Context, Core, Beans. Description for these elements are as follows:
1. The SpEL module provides a powerful expression language for manipulating objects during execution.
2. Context is built on the basis of Beans and Core and allows you to access any object that is defined in the settings. The key element of the Context module is the ApplicationContext interface.
3. The Core module provides key parts of the framework including IoC and DI properties.
4. The Bean module is responsible for creating and managing [[Spring Beans]] – is application context structure unit

## Spring Framework Web
Spring framework Web layer consists of Web, Web-MVC, Web-Socket, Web-Portlet etc.
1. The Web module provides functions such as downloading files, creating web application, rest web service etc.
2. Web-MVC contains a [[Spring MVC]] implementation for web applications.
3. Web-Socket provides support for communication between the client and the server, using Web-Sockets in web applications.
4. Web-Portlet provides MVC implementation with portlet environment

## Spring Framework Data Access
The Data Access/Integration container consists of JDBC, ORM, OXM, JMS and the Transactions module.
1. JDBC provides an abstract layer of JDBC and eliminates the need for the developer to manually register the monotonous code associated with connecting to the database.
2. [[Spring ORM]] provides integration with popular ORMs such as Hibernate, JDO, which are implementations of JPA.
3. The OXM module is responsible for linking the Object / XML – XMLBeans, JAXB, etc.
4. The JMS (Java Messaging Service) module is responsible for creating, sending and receiving messages.
5. Transactions supports transaction management for classes that implement certain methods and POJOs.
