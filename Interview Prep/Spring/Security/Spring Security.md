# Spring Security

-   Authentication - The identity of users are checked for providing the access to the system. User is verified. Validating that users whom they claim to be.
-   Authorization - Giving the user permission to access a specific resource or function


**DelegatingFilterProxy**
- Provided by Spring Security
- Extract servlet request and convert it to **Authentication** object


**Authentication Object**
- Contains username & password as principal object
- Containts user credentials


**Filter**
- A filter is an object that is invoked at the preprocessing and post processing of a request
- Filter doesn't know how to authenticate with the Authentication object
	Filter doesn't contain any logic to authenticate
- Filter will deligate the request to another component **Authentication Manager**	
- Once the valid Authentication object is obtained, filter will set the Authentication object to SecurityContext 
	`securityContextHolder.getContext().setAuthentication(auth)`


**Authentication Manager**
- Takes **Authentication Object** as argument and invokes authenticate method
	`authenticate(Authentication auth)`
- Authentication Manager doesn't know how to authenticate
- We can't directly invoke Authentication Provider

**Provider Manager**
- Responsible to indentify authentication provider
- Invokes `supports` method to verify the authentication method


**Authentication Provider**
- Spring Framweork provides multiple authentication providers
- It makes use of `UserDetailsService` 


**UserDetailService**
- Will validate the username and password against external resource like database
- Returns `UserDetails` object to Authentication Provider
- If no username exists; throws exception





# OAuth2.0
**Terminology**
- Resource Owner -> Owner of the protected resource
- Resource Server -> A Server which server/stores/hosts the protected resource
- Client -> A service/application which is accessing the resource through Resource Owner
- Public Client -> Web, mobile, desktop, smart TV apps which can be access by public
- Confidential Client -> Remote shell scripts, CRON jobs, Microservices, etc
- Authorization Server -> Server that generated and validates Access Tokens for Clients and permissions of Users
	- Examples: AWS Cognito, Microsoft Azure AD, Google Identity Platform, OKTA, Key 	Cloak, Spring Authorization Server (Early Access)

![[Pasted image 20211019220915.png]]


## OIDC
- OpenID Connect
- Protocol built on top of OAuth2
- Acts as an Identity layer

