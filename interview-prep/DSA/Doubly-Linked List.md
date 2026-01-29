Node contains
* Key
* Next pointer
* Previous pointer

![[Pasted image 20230728114551.png]]


#### PushBack(key)
```Algorithm
node <- new node
node.key <- key; node.next = nil
if tail = nil:
	head <- tail <- node
	node.prev <- nil
else:
	tail.next <- node
	node.prev <- tail
	tail <- node
```

#### PopBack()
```Algorithm
if head = nil: ERROR: empty list
if head = tail:
	head <- tail <- nil
else:
	tail <- tail.prev
	tail.next <- nil
```

#### AddAfter(node, key)
```Algorithm
node2 <- new node
node2.key <- key
node2.next <- node.next
node2.prev <- node
node2.next <- node2
if node2.next != nil:
	node2.next.prev <- node2
if tail = node:
	tail <- node2
```

#### AddBefore(node, key)
```Algorithm
node2 <- new node
node2.key <- key
node2.next <- node
node2.prev <- node.prev
node2.prev <- node2
if node2.prev != nil:
	node2.prev.next <- node2
if head = node:
	head <- node2
```


## Times for operations
|Operation|No tail|With tail|
|-|-|-|
|PushFront(Key)|O(1)||
|TopFront|O(1)||
|PopFront|O(1)||
|PushBack(Key)|O(n)|(1)|
|PopBack|O(1)||
|TopBack|O(n)|(1)|
|Find(Key)|O(n)||
|Erase(Key)|O(n)||
|Empty()|O(1)||
|AddBefore(Node, Key)|O(1)||
|AddAfter(Node, Key)|O(1)||