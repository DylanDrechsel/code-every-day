<h1 align='center'>Trees - Log</h1>

<h3 align='center'>intro to trees notes</h3>

treeNode will have three components: data, left, right

```
treeNode {
    this.data
    this.left
    this.right
}
```

<h3 align='center'>iterating over trees notes</h3>

trees have Nodes, Branches, and leaves

leaves is a node that has no children

we use recursion to access every node in the tree. To do this we have to use a public/private pair function. In the less were using 'collect' and '_collect'