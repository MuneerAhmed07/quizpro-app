import { Quiz } from "../../../../types";

export const basicDataStructure01: Quiz = {
  id: "01-basic-data-structure",
  title: "Basic Data Structure",
  description: "Basic Data Structure MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which data structure uses a \"Last In, First Out\" (LIFO) approach?",
    "options": ["Queue", "Stack", "Linked List", "Tree"],
    "answer": 1
  },
  {
    "question": "The time complexity of accessing an element in an array by its index is:",
    "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    "answer": 2
  },
  {
    "question": "In a Singly Linked List, each node contains data and a:",
    "options": ["Pointer to the previous node", "Pointer to the next node", "Pointer to the root", "Priority value"],
    "answer": 1
  },
  {
    "question": "A \"Queue\" data structure follows which principle?",
    "options": ["LIFO", "LILO", "FIFO (First In, First Out)", "Random Access"],
    "answer": 2
  },
  {
    "question": "A Linked List where the last node points back to the first node is called:",
    "options": ["Doubly Linked List", "Circular Linked List", "Skip List", "Static List"],
    "answer": 1
  },
  {
    "question": "Which data structure is best suited for implementing \"undo\" functionality in applications?",
    "options": ["Queue", "Stack", "Array", "Graph"],
    "answer": 1
  },
  {
    "question": "In a Doubly Linked List, how many pointers does each node (excluding head/tail) maintain?",
    "options": ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "question": "The operation of adding an element to a stack is called:",
    "options": ["Pop", "Peek", "Push", "Enqueue"],
    "answer": 2
  },
  {
    "question": "The term \"overflow\" occurs when:",
    "options": ["An element is popped from an empty stack", "An element is pushed onto a full stack", "The stack pointer is reset", "The memory is cleared"],
    "answer": 1
  },
  {
    "question": "Which data structure is used by the compiler to manage function calls and recursion?",
    "options": ["Heap", "Queue", "Stack", "Hash Table"],
    "answer": 2
  },
  {
    "question": "In a circular Queue, if Front == Rear + 1, then the Queue is:",
    "options": ["Empty", "Full", "Overflowing", "Underflowing"],
    "answer": 1
  },
  {
    "question": "A \"Deque\" is defined as a:",
    "options": ["Single-ended Queue", "Double-ended Queue", "Type of Tree", "Sorted Array"],
    "answer": 1
  },
  {
    "question": "Which of the following applications typically uses a Queue?",
    "options": ["Undo/Redo operations", "Printer waiting list", "Function call management", "Evaluating postfix expressions"],
    "answer": 1
  },
  {
    "question": "The \"Peek\" operation in a stack:",
    "options": ["Removes the top element", "Returns the top element without removing it", "Deletes the entire stack", "Adds a new element to the bottom"],
    "answer": 1
  },
  {
    "question": "The time complexity to insert an element at the front of a Linked List is:",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "answer": 0
  },
  {
    "question": "Which of the following is classified as a non-linear data structure?",
    "options": ["Stack", "Queue", "Tree", "Array"],
    "answer": 2
  },
  {
    "question": "In a Binary Tree, what is the maximum number of children a node can have?",
    "options": ["1", "2", "3", "Unlimited"],
    "answer": 1
  },
  {
    "question": "The root node of a tree is traditionally considered to be at which level?",
    "options": ["Level -1", "Level 0", "Level 1", "Level n"],
    "answer": 1
  },
  {
    "question": "A Binary Search Tree (BST) maintains the property that:",
    "options": ["Left child > Parent > Right child", "Left child < Parent < Right child", "All nodes are equal", "Right child < Parent < Left child"],
    "answer": 1
  },
  {
    "question": "Which tree traversal visits the root node last?",
    "options": ["Pre-order", "In-order", "Post-order", "Level-order"],
    "answer": 2
  },
  {
    "question": "The height of a Null (empty) tree is usually considered to be:",
    "options": ["0", "-1", "1", "Infinite"],
    "answer": 1
  },
  {
    "question": "A graph with no cycles is called a:",
    "options": ["Cyclic graph", "Directed graph", "Acyclic graph", "Complete graph"],
    "answer": 2
  },
  {
    "question": "BFS (Breadth-First Search) on a graph uses which data structure?",
    "options": ["Stack", "Queue", "Tree", "Array"],
    "answer": 1
  },
  {
    "question": "DFS (Depth-First Search) on a graph uses which data structure?",
    "options": ["Stack", "Queue", "Heap", "Linked List"],
    "answer": 0
  },
  {
    "question": "What is an \"Edge\" in a graph?",
    "options": ["A data point", "A connection between two vertices", "The center of the graph", "A leaf node"],
    "answer": 1
  },
  {
    "question": "An Adjacency Matrix is used to represent:",
    "options": ["Stacks", "Linked Lists", "Graphs", "Queues"],
    "answer": 2
  },
  {
    "question": "A \"Heap\" is a special type of:",
    "options": ["Binary Search Tree", "Complete Binary Tree", "Spanning Tree", "B-Tree"],
    "answer": 1
  },
  {
    "question": "An \"AVL\" tree is a:",
    "options": ["Completely full Binary Tree", "Self-balancing Binary Search Tree", "Tree with only one leaf", "Unsorted tree"],
    "answer": 1
  },
  {
    "question": "What is the \"Balance Factor\" in an AVL Tree?",
    "options": ["(Height of Right) + (Height of Left)", "(Height of Left Subtree) - (Height of Right Subtree)", "Total number of nodes / 2", "Root value - Leaf value"],
    "answer": 1
  },
  {
    "question": "Which data structure is used to represent hierarchical relationships?",
    "options": ["Array", "Stack", "Tree", "Queue"],
    "answer": 2
  },
  {
    "question": "What is the worst-case time complexity of Linear Search?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "answer": 2
  },
  {
    "question": "Binary Search can only be applied to:",
    "options": ["Unsorted Arrays", "Sorted Arrays", "Linked Lists", "Graphs"],
    "answer": 1
  },
  {
    "question": "The \"Divide and Conquer\" strategy is used in which sorting algorithm?",
    "options": ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    "answer": 2
  },
  {
    "question": "What is the worst-case complexity of Bubble Sort?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
    "answer": 2
  },
  {
    "question": "Which sort is known for being stable and having O(n log n) worst-case complexity?",
    "options": ["Quick Sort", "Merge Sort", "Selection Sort", "Bubble Sort"],
    "answer": 1
  },
  {
    "question": "Hashing is used to achieve which time complexity for searching (on average)?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "answer": 0
  },
  {
    "question": "A \"collision\" in a Hash Table occurs when:",
    "options": ["The table is empty", "Two keys map to the same index", "The search fails", "The memory is corrupted"],
    "answer": 1
  },
  {
    "question": "\"Chaining\" is a technique used to handle:",
    "options": ["Memory allocation", "Hash collisions", "Tree traversals", "Queue overflows"],
    "answer": 1
  },
  {
    "question": "In Binary Search, after each comparison, the search space is reduced by:",
    "options": ["One element", "One third", "Half", "Double"],
    "answer": 2
  },
  {
    "question": "Which algorithm is most efficient for sorting a very small number of elements?",
    "options": ["Quick Sort", "Merge Sort", "Insertion Sort", "Heap Sort"],
    "answer": 2
  },
  {
    "question": "Priority Queues are often implemented using which structure for maximum efficiency?",
    "options": ["Stack", "Linked List", "Heap", "Array"],
    "answer": 2
  },
  {
    "question": "Postfix notation is also known as:",
    "options": ["Polish Notation", "Reverse Polish Notation", "Infix Notation", "Prefix Notation"],
    "answer": 1
  },
  {
    "question": "A Sparse Matrix is a matrix where:",
    "options": ["All elements are zero", "Most elements are zero", "No elements are zero", "Elements are random"],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of a Dynamic Data Structure?",
    "options": ["Fixed Array", "Linked List", "Sparse Matrix", "Level 0 Root"],
    "answer": 1
  },
  {
    "question": "The space complexity of an \"n x n\" Adjacency Matrix is:",
    "options": ["O(n)", "O(n^2)", "O(2n)", "O(log n)"],
    "answer": 1
  },
  {
    "question": "An \"In-order\" traversal of a Binary Search Tree (BST) results in:",
    "options": ["Descending order", "Random order", "Ascending order", "Level-wise order"],
    "answer": 2
  },
  {
    "question": "A vertex with degree \"0\" in a graph is called an:",
    "options": ["Root vertex", "Leaf vertex", "Isolated vertex", "Cycle vertex"],
    "answer": 2
  },
  {
    "question": "What is the time complexity of building a heap from an array of \"n\" elements?",
    "options": ["O(1)", "O(n)", "O(n^2)", "O(n log n)"],
    "answer": 1
  },
  {
    "question": "The process of visiting every node in a data structure exactly once is called:",
    "options": ["Deleting", "Traversing", "Sorting", "Hashing"],
    "answer": 1
  },
  {
    "question": "Which sorting algorithm has the best average-case time complexity?",
    "options": ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    "answer": 1
  }
]
};