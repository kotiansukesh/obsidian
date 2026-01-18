Node contains
* Key
* Next pointer

![[Pasted image 20230725103254.png]]


## List API
|Operation|Meaning|
|-|-|
|PushFront(Key)| Add to front|
|Key TopFront| Return front item|
|PopFront| Remove front item|
|PushBack(Key)| Add to back|
|Key TopBack| Return back item|
|PopBack| Remove back item|
|Boolean Find(Key)| Is key in list?|
|Erase(Key)| Remove key from list|
|AddBefore(Node, Key)| Adds key before node|

#### PushFront(key)
```Algorithm
node <- new node
node.key <- key
node.next <- head
head <- node
if tail = nil:
	tail <- head
```

#### PopFront()
```Algorithm
if head = nil:
	ERROR: empty list
head <- head.next
if head = nil:
	tail <- nil
```

#### PushBack(key)
```Algorithm
node <- new node
node.key <- key
node.next == nil
if tail = nil:
	head <- tail <- node
else
	tail.next <- node
	tail <- node
```

#### PopBack()
```Algorithm
if head = nil: ERROR: empty list
if head = tail:
	head <- tail <- nil
else
	p <- head
	while p.next.next != nil"
		p <- p.next
```

#### AddAfter(node, key)
```Algorithm
node2 <- new node
node2.key <- key
node2.next = node.next
node.next = node2
if tail = node:
	tail <- node2
```


## Times for operations
|Operation|No tail|With tail|
|-|-|-|
|PushFront|O(1)||
|TopFront|O(1)||
|PopFront|O(1)||
|PushBack|O(n)|(1)|
|PopBack|O(n)|O(n)|
|TopBack|O(n)|(1)|
|Find(Key)|O(n)||
|Erase(Key)|O(n)||
|AddBefore(Node, Key)|O(n)||
|AddAfter(Node, Key)|O(1)||