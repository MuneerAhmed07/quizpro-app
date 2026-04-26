import { Quiz } from "../../../../types";

export const basicProgramming: Quiz = {
  id: "01-basic-programming",
  title: "Basic Programming",
  description: "Basic Programming MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Who is known as the \"Father of the C Programming Language\"?",
    "options": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of a \"High-Level Language\"?",
    "options": ["Assembly", "Machine Code", "Python", "Binary"],
    "answer": 2
  },
  {
    "question": "What is a \"Syntax Error\"?",
    "options": ["An error during program execution", "A violation of the language's grammatical rules", "A logical flaw in the code", "A hardware failure"],
    "answer": 1
  },
  {
    "question": "The process of finding and fixing errors in a program is called:",
    "options": ["Compiling", "Executing", "Debugging", "Scanning"],
    "answer": 2
  },
  {
    "question": "Which of the following is used to convert the entire source code into machine code at once?",
    "options": ["Interpreter", "Compiler", "Linker", "Assembler"],
    "answer": 1
  },
  {
    "question": "An Interpreter executes code in which manner?",
    "options": ["All at once after compilation", "Line by line", "Only when requested by the user", "In reverse order"],
    "answer": 1
  },
  {
    "question": "What is the result of the expression 10 % 3 in most programming languages?",
    "options": ["3", "3.33", "1", "0"],
    "answer": 2
  },
  {
    "question": "Which data type is used to store a single character?",
    "options": ["String", "Int", "Float", "Char"],
    "answer": 3
  },
  {
    "question": "In programming, what is a \"Variable\"?",
    "options": ["A fixed constant that never changes", "A named memory location that stores data", "A type of syntax error", "A hardware component"],
    "answer": 1
  },
  {
    "question": "A loop that never ends is called a/an:",
    "options": ["While loop", "For loop", "Infinite loop", "Nested loop"],
    "answer": 2
  },
  {
    "question": "Which statement is used to exit from a loop prematurely?",
    "options": ["Exit", "Return", "Break", "Stop"],
    "answer": 2
  },
  {
    "question": "The \"if-else\" statement is an example of a:",
    "options": ["Iteration structure", "Selection structure", "Sequential structure", "Looping structure"],
    "answer": 1
  },
  {
    "question": "What is \"Recursion\"?",
    "options": ["A function that calls itself", "A loop that runs 10 times", "A way to delete variables", "A method of sorting arrays"],
    "answer": 0
  },
  {
    "question": "Which loop is guaranteed to execute its block of code at least once?",
    "options": ["For loop", "While loop", "Do-While loop", "If-Else"],
    "answer": 2
  },
  {
    "question": "What is the \"Scope\" of a variable?",
    "options": ["The total size of the variable in bytes", "The region of the program where the variable is accessible", "The time it takes to execute a function", "The name given to a variable"],
    "answer": 1
  },
  {
    "question": "A \"Header File\" (e.g., .h in C++) typically contains:",
    "options": ["The main logic of the program", "Function declarations and macros", "Documentation only", "Compiled machine code"],
    "answer": 1
  },
  {
    "question": "Which of the following is the standard entry point of a C, C++, or Java program?",
    "options": ["Start()", "Main()", "Begin()", "Init()"],
    "answer": 1
  },
  {
    "question": "The \"continue\" statement is used to:",
    "options": ["Terminate the entire program", "Skip the rest of the current iteration and move to the next", "Restart the loop from the beginning", "Pause execution for a few seconds"],
    "answer": 1
  },
  {
    "question": "What is an \"Argument\" in programming?",
    "options": ["A type of error", "A value passed to a function", "A comment in the code", "The name of a program"],
    "answer": 1
  },
  {
    "question": "Which operator is used for \"Logical AND\"?",
    "options": ["||", "!", "&&", "&"],
    "answer": 2
  },
  {
    "question": "Which of the following is NOT one of the primary pillars of OOP?",
    "options": ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    "answer": 2
  },
  {
    "question": "What is a \"Class\" in OOP?",
    "options": ["A specific instance of an object", "A blueprint for creating objects", "A type of array", "A function that returns nothing"],
    "answer": 1
  },
  {
    "question": "The process of hiding internal details and showing only necessary functionality is:",
    "options": ["Encapsulation", "Abstraction", "Inheritance", "Overloading"],
    "answer": 1
  },
  {
    "question": "\"Inheritance\" allows a class to:",
    "options": ["Hide its data from other classes", "Acquire properties and behavior from another class", "Call itself recursively", "Be used as a main function"],
    "answer": 1
  },
  {
    "question": "What is \"Polymorphism\"?",
    "options": ["The ability of a function to take different forms", "The process of deleting objects", "A way to secure data", "Inheriting from multiple classes"],
    "answer": 0
  },
  {
    "question": "A \"Constructor\" is a special function that is automatically called:",
    "options": ["When the program finishes", "When an object is created", "When an error occurs", "Every time a loop runs"],
    "answer": 1
  },
  {
    "question": "Wrapping data (variables) and methods (functions) into a single unit is called:",
    "options": ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
    "answer": 2
  },
  {
    "question": "In OOP, a \"Destructor\" is used to:",
    "options": ["Create a new class", "Free up memory when an object is destroyed", "Copy an object", "Initialize variables"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to refer to the current instance of a class in Java or C++?",
    "options": ["Self", "This", "Instance", "Me"],
    "answer": 1
  },
  {
    "question": "What is \"Method Overloading\"?",
    "options": ["Multiple methods with the same name but different parameters", "A method that calls another method", "A method that is too long to compile", "Deleting a method from a class"],
    "answer": 0
  },
  {
    "question": "What is the index of the first element in an array in most programming languages?",
    "options": ["1", "-1", "0", "10"],
    "answer": 2
  },
  {
    "question": "A \"Pointer\" is a variable that stores:",
    "options": ["A whole number", "A character string", "The memory address of another variable", "A boolean value"],
    "answer": 2
  },
  {
    "question": "In C++, which operator is used to access the value at the address stored in a pointer?",
    "options": ["&", "*", "->", "#"],
    "answer": 1
  },
  {
    "question": "Which data structure is used for \"First In, First Out\" (FIFO)?",
    "options": ["Stack", "Tree", "Queue", "Linked List"],
    "answer": 2
  },
  {
    "question": "The size of a standard Array is usually:",
    "options": ["Dynamic (changes automatically)", "Fixed at the time of declaration", "Only 10 elements", "Unlimited"],
    "answer": 1
  },
  {
    "question": "Which of the following is NOT a reserved keyword in the C language?",
    "options": ["auto", "volatile", "main", "default"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a \"try-catch\" block?",
    "options": ["To speed up the code", "To handle exceptions and errors during runtime", "To create a loop", "To define a class"],
    "answer": 1
  },
  {
    "question": "In Java, which keyword is used to prevent a variable from being modified (making it a constant)?",
    "options": ["Static", "Private", "Final", "Volatile"],
    "answer": 2
  },
  {
    "question": "Which of the following is considered a \"Backend\" programming language or framework?",
    "options": ["HTML", "CSS", "Python (Django/Flask)", "JavaScript (Vanilla)"],
    "answer": 2
  },
  {
    "question": "The binary representation of the decimal number 5 is:",
    "options": ["100", "101", "110", "111"],
    "answer": 1
  },
  {
    "question": "A \"Null Pointer\" points to:",
    "options": ["The first element of an array", "No valid memory location", "The main function", "The stack"],
    "answer": 1
  },
  {
    "question": "What does SQL stand for?",
    "options": ["Simple Query Language", "Structured Query Language", "Standard Query Logic", "Sequential Query List"],
    "answer": 1
  },
  {
    "question": "Which language is primarily used for native Android app development?",
    "options": ["Swift", "Java / Kotlin", "Objective-C", "PHP"],
    "answer": 1
  },
  {
    "question": "What is an \"IDE\"?",
    "options": ["Internal Data Element", "Integrated Development Environment", "Input Device Equipment", "International Developer Engine"],
    "answer": 1
  },
  {
    "question": "The standard extension of a Python source file is:",
    "options": [".c", ".java", ".py", ".cpp"],
    "answer": 2
  },
  {
    "question": "Which of these is used for a multi-line comment in C, C++, or Java?",
    "options": ["//", "#", "/* */", ""],
    "answer": 2
  },
  {
    "question": "What is \"Garbage Collection\" in programming?",
    "options": ["Deleting old code files", "Automatic memory management (freeing unused memory)", "A type of syntax error", "Cleaning the hardware keyboard"],
    "answer": 1
  },
  {
    "question": "A Boolean variable can hold which of the following values?",
    "options": ["Any number", "Only True or False", "A single character", "A sequence of text"],
    "answer": 1
  },
  {
    "question": "What is the \"Time Complexity\" of a Linear Search algorithm?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "answer": 1
  },
  {
    "question": "Which company originally developed the Java programming language?",
    "options": ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    "answer": 2
  }
]
};