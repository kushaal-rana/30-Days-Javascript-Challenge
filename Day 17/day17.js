// Day 17: Data Structures

// Activity 1: Linked List

    // • Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
        class Node {
            constructor(data, next=null) {
                this.data = data;
                this.next = next;
            }
        }
        const node1 = new Node(2);
        const node2 = new Node(3,node1);
        const node3 = new Node(4,node2);
        console.log(node1);
        console.log(node2);
        console.log(node3);
    // • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
        class LinkedList {
            LinkedList(){
                this.head = null;
            }
            add(data) {
                let newNode = new Node(data);
                if(!this.head){
                    this.head = newNode;
                }
                else {
                    let current = this.head;
                    while(current.next){
                        current = current.next;
                    }
                    current.next = newNode;
                }
            }
            remove() {
                if(!this.head){
                    console.log("The list is empty");
                    return null;
                }
                let current = this.head;
                while(current.next==NULL){
                    current = current.next;
                }
                current.next = null;
            }
            
            display() {
                let current = this.head;
                while(current){
                    console.log(current.data);
                    current = current.next;
                }
                console.log("NULL");
            }
        }   
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

// Activity 2: Stack
    // • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
        class Stack {
            constructor() {
                this.items = [];
            }
            push(item){
                this.items.push(item);
                console.log("Elements Pushed Successfully");
            }
            pop(){
                if(this.items.length >= 0){
                    console.log("Elements Popped Successfully");
                    return this.items.pop();
                }
                else{
                    console.log("Stack is empty");
                }
            }
            peek(){
                console.log(this.items[this.items.length-1]);
            }
        }
    // • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
        const stack = new Stack();
        const str = "Hello World";
        for(let char of str){
            stack.push(char);
        }
        let reversedStr = "";
        while(stack.items.length > 0){
            reversedStr += stack.pop();
        }
        console.log(reversedStr); // Output: dlroW olleH

// Activity 3: Queue
    // • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
        class Queue{
            constructor() {
                this.items = [];
            }
            enqueue(item){
                this.items.push(item);
                console.log("Elements Enqueued Successfully");
            }
            dequeue(){
                if(this.isEmpty()){
                    console.log("The queue is empty");
                    return null;
                }
                return this.items.shift(1);
            }
            front(){
                if(!this.isEmpty())
                console.log(this.items[0]);
            }
            isEmpty(){
                return this.items.length === 0;
            }
        }
    // • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
        const queue = new Queue();
        queue.enqueue("Job 1");
        queue.enqueue("Job 2");
        queue.enqueue("Job 3");
        console.log(queue.dequeue()); // Output: Job 1
        console.log(queue.dequeue()); // Output: Job 2
        console.log(queue.dequeue()); // Output: Job 3
        console.log(queue.dequeue()); // Output: The queue is empty

// Activity 4: Binary Tree
    // • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
        class TreeNode {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        const treeNode1 = new TreeNode(1);
        const treeNode2 = new TreeNode(2);
        const treeNode3 = new TreeNode(3);
        treeNode1.left = treeNode2;
        treeNode1.right = treeNode3;
        console.log(treeNode1);
        console.log(treeNode2);
        console.log(treeNode3);

    // • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
        class BinaryTree {
            constructor() {
                this.root = null;
            }
            insert(value) {
                const newNode = new TreeNode(value);
                if(!this.root) {
                    this.root = newNode;
                } else {
                    this._insertNode(this.root, newNode);
                }
            }
            _insertNode(node, newNode) {
                if(newNode.value < node.value) {
                    if(!node.left) {
                        node.left = newNode;
                    } else {
                        this._insertNode(node.left, newNode);
                    }
                } else {
                    if(!node.right) {
                        node.right = newNode;
                    } else {
                        this._insertNode(node.right, newNode);
                    }
                }
            }
            inOrderTraversal(node = this.root) {
                if(node!==null) {
                    this.inOrderTraversal(node.left);
                    console.log(node.value);
                    this.inOrderTraversal(node.right);
                }
            }
        }
        const binaryTree = new BinaryTree();
        binaryTree.insert(10);
        binaryTree.insert(5);
        binaryTree.insert(15);
        binaryTree.insert(3);
        binaryTree.insert(7);

        binaryTree.inOrderTraversal(); // Output: 3 5 7 10 15
            

// Activity 5: Graph (Optional)
    // • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
        class Graph {
            constructor() {
                this.vertices = [];
                this.adjacencyList = {};
            }
            addVertex(vertex) {
                this.vertices.push(vertex);
                this.adjacencyList[vertex] = [];
            }
            addEdge(vertex1, vertex2) {
                this.adjacencyList[vertex1].push(vertex2);
                this.adjacencyList[vertex2].push(vertex1);
            }
            breadthFirstSearch(startVertex) {
                const visited = {};
                const queue = [];
                queue.push(startVertex);
                visited[startVertex] = true;
                while(queue.length > 0) {
                    const currentVertex = queue.shift();
                    console.log(currentVertex);
                    const adjacentVertex = this.adjacencyList[currentVertex];
                    for(let neighbour of adjacentVertex) {
                        if(!visited[neighbour]) {
                            visited[neighbour] = true;
                            queue.push(neighbour);
                        }
                    }
                }
            }

            findShortestPath(startVertex, endVertex) {
                const visited = {};
                const queue = [];
                const predecessors = {};
        
                queue.push(startVertex);
                visited[startVertex] = true;
        
                while (queue.length > 0) {
                    const currentVertex = queue.shift();
                    if (currentVertex === endVertex) {
                        // Found the target vertex, build the path
                        let path = [];
                        let step = endVertex;
                        while (step !== startVertex) {
                            path.unshift(step);
                            step = predecessors[step];
                        }
                        path.unshift(startVertex);
                        return path;
                    }
        
                    const adjacentVertices = this.adjacencyList[currentVertex];
                    for (let neighbour of adjacentVertices) {
                        if (!visited[neighbour]) {
                            visited[neighbour] = true;
                            predecessors[neighbour] = currentVertex;
                            queue.push(neighbour);
                        }
                    }
                }
                return null; // No path found
            }
        }
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("B", "E");
        graph.breadthFirstSearch("A"); // Output: A B C D E
    
    // • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
    console.log("Shortest path from A to E:");
    const path = graph.findShortestPath("A", "E");
    console.log(path); // Output: [ 'A', 'B', 'E' ] 
        


        