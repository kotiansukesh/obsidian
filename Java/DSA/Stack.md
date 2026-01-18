* Can be implemented with either an [[Array]] or a [[Linked List]]
* Abstract data type with the following operations

	|Operation|Meaning|
	|-|-|
	|Push(Key)|adds key to collection|
	|Key Top()|Returns most recently added key|
	|Key Pop()|Removes and returns most recently added key|
	|Boolean Empty()|Are there any elements?|

* Each stack operation is O(1)
* Occasionally known as LIFO queues

### Balanced Brackets
Balanced:
* ```([])[]()```
* ```((([([])]))())```

Unbalanced:
* ```([]]()```
* ```][```

IsBalanced(str)
```Algorithm
Stack stack
for char in str:
	if char in ['(', '[']:
		stack.Push(char)
	else:
		if stack.Empty(): return False
		top <- stack.Pop()
		if (top = '[' and char != ']') or (top = '(' and char != ')'):
			return False
return stack.Empty()			
```