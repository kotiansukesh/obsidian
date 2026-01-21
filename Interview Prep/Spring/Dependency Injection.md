# Spring [[Dependency Injection]]

### Spring Dependency Injection – Service Classes
Let’s say we want to send email message and twitter message to the users. For dependency injection, we need to have a base class for the services. So I have `MessageService` interface with single method declaration for sending message.

```java
public interface MessageService {
	boolean sendMessage(String msg, String rec);
}
```

Now we will have actual implementation classes to send email and twitter message.
```java
public class EmailService implements MessageService {
	public boolean sendMessage(String msg, String rec) {
		System.out.println("Email Sent to "+rec+ " with Message="+msg);
		return true;
	}
}

public class TwitterService implements MessageService {
	public boolean sendMessage(String msg, String rec) {
		System.out.println("Twitter message Sent to "+rec+ " with Message="+msg);
		return true;
	}
}
```

### Spring Dependency Injection – Component Classes
Let’s write a consumer class for above services.
```java
@Component
public class MyApplication {
	//field-based dependency injection
	//@Autowired
	private MessageService service;
	
//	constructor-based dependency injection	
//	@Autowired
//	public MyApplication(MessageService svc) {
//		this.service=svc;
//	}
	
	@Autowired
	public void setService(MessageService svc) {
		this.service=svc;
	}
	
	public boolean processMessage(String msg, String rec){
		//some magic like validation, logging etc
		return this.service.sendMessage(msg, rec);
	}
}
```

- `@Component` annotation is added to the class, so that when Spring framework will scan for the components, this class will be treated as component. @Component annotation can be applied only to the class and it’s retention policy is Runtime.

-   `@Autowired` annotation is used to let Spring know that autowiring is required. This can be applied to field, constructor and methods. This annotation allows us to implement constructor-based, field-based or method-based dependency injection in our components.

