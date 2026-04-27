import { Quiz } from "../../../../types";

export const programming03: Quiz = {
  id: "03-basic-programming",
  title: "Core Programming and Logic 02",
  description: "Core Programming and Logics MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "What is the output of the expression: 5 + 3 * 2?",
    "options": ["16", "11", "13", "10"],
    "answer": 1
  },
  {
    "question": "In standard programming operator precedence, which of these has the highest precedence?",
    "options": ["+", "-", "*", "/"],
    "answer": 2
  },
  {
    "question": "A \"Flowchart\" is best described as a:",
    "options": ["Type of software", "Graphical representation of an algorithm", "Hardware component", "Programming language"],
    "answer": 1
  },
  {
    "question": "In computing, what does \"Algorithm\" mean?",
    "options": ["A fast computer", "A step-by-step procedure for solving a problem", "A digital image", "A type of battery"],
    "answer": 1
  },
  {
    "question": "Which of the following is technically a markup language, not a programming language?",
    "options": ["Python", "C++", "HTML", "Java"],
    "answer": 2
  },
  {
    "question": "Which of the following is a valid variable name in most programming languages?",
    "options": ["1name", "_name", "name-1", "name 1"],
    "answer": 1
  },
  {
    "question": "The \"Integer\" data type is used specifically to store:",
    "options": ["Text", "Whole numbers", "Decimals", "Images"],
    "answer": 1
  },
  {
    "question": "Which of the following represents a \"Floating Point\" number?",
    "options": ["5", "5.5", "\"5.5\"", "True"],
    "answer": 1
  },
  {
    "question": "In programming, \"Boolean\" values consist of:",
    "options": ["Any number", "True and False", "Letters A to Z", "Positive numbers only"],
    "answer": 1
  },
  {
    "question": "Which symbol is commonly used for \"Assignment\" (giving a value to a variable)?",
    "options": ["==", "=", ":", "<-"],
    "answer": 1
  },
  {
    "question": "An \"IF\" statement is primarily used for:",
    "options": ["Repeating code", "Decision making", "Mathematical calculations", "Exiting the program"],
    "answer": 1
  },
  {
    "question": "What will be the output? if (5 > 3) print('Yes')",
    "options": ["No output", "Yes", "5", "3"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to provide an alternative condition if the \"IF\" condition is false?",
    "options": ["Then", "Else", "Loop", "Stop"],
    "answer": 1
  },
  {
    "question": "What is meant by a \"Nested IF\"?",
    "options": ["An IF statement at the end of the code", "An IF statement placed inside another IF statement", "A broken IF statement", "An IF statement with no condition"],
    "answer": 1
  },
  {
    "question": "In C-style languages, the \"Logical AND\" operator is represented by:",
    "options": ["||", "&&", "!!", "++"],
    "answer": 1
  },
  {
    "question": "A \"Loop\" structure is used in programming for:",
    "options": ["One-time execution", "Repetition of a task", "Deleting variables", "Saving files"],
    "answer": 1
  },
  {
    "question": "Which loop structure is guaranteed to execute at least once?",
    "options": ["while", "for", "do-while", "if-else"],
    "answer": 2
  },
  {
    "question": "An \"Infinite Loop\" is a loop that:",
    "options": ["Runs 100 times", "Never ends", "Runs only once", "Causes a syntax error"],
    "answer": 1
  },
  {
    "question": "The \"Break\" statement is used to:",
    "options": ["Pause the computer", "Immediately exit a loop", "Start a new function", "Fix an error"],
    "answer": 1
  },
  {
    "question": "The \"Continue\" statement is used to:",
    "options": ["Stop the program", "Skip the rest of the current iteration and move to the next", "Restart the computer", "Clear the screen"],
    "answer": 1
  },
  {
    "question": "What is a \"Function\" in programming?",
    "options": ["A hardware component", "A reusable block of code that performs a specific task", "A type of monitor", "A mathematical constant"],
    "answer": 1
  },
  {
    "question": "What does the \"Return\" statement do in a function?",
    "options": ["Restarts the function", "Sends a value back to the caller", "Deletes the function", "Prints text to the screen"],
    "answer": 1
  },
  {
    "question": "Parameters are best described as:",
    "options": ["The name of the function", "Inputs provided to a function", "Errors in the code", "The output of a function"],
    "answer": 1
  },
  {
    "question": "A function that does not return any value is often called a:",
    "options": ["Null function", "Void function", "Static function", "Empty function"],
    "answer": 1
  },
  {
    "question": "Recursion occurs when a:",
    "options": ["Loop runs too long", "Function calls itself", "Variable is overwritten", "Program crashes"],
    "answer": 1
  },
  {
    "question": "An \"Array\" is a data structure that stores:",
    "options": ["Only one value", "Multiple values of the same type in a single variable", "Only text", "The computer's BIOS"],
    "answer": 1
  },
  {
    "question": "In most programming languages, the index of the first element in an array is:",
    "options": ["1", "0", "-1", "10"],
    "answer": 1
  },
  {
    "question": "Which of the following is considered a \"Linear\" data structure?",
    "options": ["Tree", "Array", "Graph", "Hash Map"],
    "answer": 1
  },
  {
    "question": "A \"Stack\" data structure follows which principle?",
    "options": ["FIFO", "LIFO (Last-In, First-Out)", "LILO", "Random access"],
    "answer": 1
  },
  {
    "question": "A \"Queue\" data structure follows which principle?",
    "options": ["LIFO", "FIFO (First-In, First-Out)", "FILO", "Priority only"],
    "answer": 1
  },
  {
    "question": "The \"Equality\" operator (to check if two values are equal) is:",
    "options": ["=", "==", "!=", "+="],
    "answer": 1
  },
  {
    "question": "The \"Not Equal\" operator is represented as:",
    "options": ["==", "!=", "<>", "!!"],
    "answer": 1
  },
  {
    "question": "The \"Logical OR\" operator is represented by:",
    "options": ["&&", "||", "^^", "//"],
    "answer": 1
  },
  {
    "question": "The \"Modulus\" (%) operator returns the:",
    "options": ["Quotient", "Remainder of a division", "Sum", "Product"],
    "answer": 1
  },
  {
    "question": "The \"Increment\" operator (to increase a value by 1) is:",
    "options": ["--", "++", "**", "//"],
    "answer": 1
  },
  {
    "question": "A \"Syntax Error\" is most similar to a:",
    "options": ["Logic mistake", "Grammar or spelling mistake in the code", "Hardware failure", "Internet disconnection"],
    "answer": 1
  },
  {
    "question": "A \"Runtime Error\" is an error that occurs:",
    "options": ["Before the program starts", "During the execution of the program", "After the program finishes", "Only on Linux"],
    "answer": 1
  },
  {
    "question": "The term \"Debugging\" refers to the process of:",
    "options": ["Writing new code", "Finding and fixing errors in code", "Deleting old files", "Installing a virus scanner"],
    "answer": 1
  },
  {
    "question": "A \"Logical Error\" is characterized by:",
    "options": ["The program not starting", "The program starting but giving the wrong output", "A blue screen", "A syntax error"],
    "answer": 1
  },
  {
    "question": "What is the primary job of a \"Compiler\"?",
    "options": ["To browse the web", "To convert source code into machine language", "To clean the hard drive", "To increase RAM speed"],
    "answer": 1
  },
  {
    "question": "What is \"Pseudocode\"?",
    "options": ["A secret code", "An informal, high-level description of an algorithm", "A type of virus", "Binary code"],
    "answer": 1
  },
  {
    "question": "Which of the following is an \"Interpreted\" language?",
    "options": ["C++", "Python", "Assembly", "COBOL"],
    "answer": 1
  },
  {
    "question": "A \"Variable\" is used in a program to:",
    "options": ["Print text", "Store data", "Change the monitor brightness", "Connect to a network"],
    "answer": 1
  },
  {
    "question": "Unlike a variable, a \"Constant\" value is:",
    "options": ["Random", "Fixed (cannot be changed)", "Always zero", "Invisible"],
    "answer": 1
  },
  {
    "question": "In computer terms, \"Input\" refers to:",
    "options": ["The data produced by the computer", "The data given to the system (from a user or sensor)", "The monitor", "The power supply"],
    "answer": 1
  },
  {
    "question": "What is the very first step in effective problem solving?",
    "options": ["Writing the code", "Understanding the problem", "Testing the program", "Buying new hardware"],
    "answer": 1
  },
  {
    "question": "By default, the flow of a standard program is:",
    "options": ["Random", "Sequential (line by line)", "Backwards", "Parallel only"],
    "answer": 1
  },
  {
    "question": "Which approach is best for troubleshooting a complex software bug?",
    "options": ["Guessing", "Step-by-step analysis", "Reinstalling Windows", "Ignoring it"],
    "answer": 1
  },
  {
    "question": "The \"Binary System\" is based on which two digits?",
    "options": ["1 and 2", "0 and 1", "0 and 9", "A and B"],
    "answer": 1
  },
  {
    "question": "What does \"CPU\" stand for?",
    "options": ["Computer Personal Unit", "Central Processing Unit", "Central Power Unit", "Core Processing Utility"],
    "answer": 1
  }
]
};