* Contiguous area of memory consisting of equal-size elements indexed by contiguous integers
* Constant time access to Read and Write


> [!INFO] 
> array_addr + elem_size * (i - first_index) 

## Multi-Dimensional Arrays
### Row Major
|(1,1)|(1,2)|(1,3)|(1,4)|(1,5)|(1,6)|(2,1)|...|
|---|---|---|---|---|---|---|---|

### Column Major
|(1,1)|(2,1)|(3,1)|(1,2)|(2,2)|(3,2)|(1,3)|...|
|---|---|---|---|---|---|---|---|

## Times for common operations
||Add|Remove|
|---|---|---|
|Beginning|O(n)|O(n)|
|End|O(1)|O(1)|
|Middle|O(n)|O(n)|