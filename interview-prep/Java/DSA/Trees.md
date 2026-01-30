

Node contains
* key
* children: list of children nodes
* parent (optional)


For binary tree: node contains
* key
* left
* right
* parent (optional)

Height of the tree
```Algorithm
Height(tree)
	if tree = nil:
		return 0;
	return 1 + Max(Height(tree.left), Height(tree.left))
```


## Traverse a tree
1. **Depth first search (DFS)**
   We completly traverse one sub-tree before exploring a sibling sub-tree 

```Algorithm
InOrderTraversal(tree)
	if tree = nil:
		return
	InOrderTraversal(tree.left)
	Print(tree.key)
	InOrderTraversal(tree.right)
```

```Algorithm
PreOrderTraversal(tree)
	if tree = nil:
		return
	Print(tree.key)
	PreOrderTraversal(tree.left)
	PreOrderTraversal(tree.right)
```

```Algorithm
PostOrderTraversal(tree)
	if tree = nil:
		return
	PostOrderTraversal(tree.left)
	PostOrderTraversal(tree.right)
	Print(tree.key)
```

2. **Breadth first search (BFS)**
   We traverse all nodes at one level before progressing to the next level
```Algorithm
LevelTraversal(tree)
	if tree = nil:
		return
	Queue q
	q.Enqueue(tree)
	while not q.Empty():
		node <- q.Dequeue()
		Print(node)
		if node.left != nil:
			q.Enqueue(node.left)
		if node.right != nil:
			q.Enqueue(node.right)
	
```



