import { Quiz } from "../../../../types";

export const computerArchitecture01: Quiz = {
  id: "02-computer-architecture",
  title: "Computer Architecture 01",
  description: "Computer Architecture MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Computer Architecture primarily refers to the:",
    "options": ["Physical size of the computer", "Structure and organization of a computer system", "Price of the hardware", "External software applications"],
    "answer": 1
  },
  {
    "question": "Which component is known as the \"Brain\" of the computer?",
    "options": ["RAM", "Hard Disk", "CPU", "Motherboard"],
    "answer": 2
  },
  {
    "question": "What does the acronym \"CPU\" stand for?",
    "options": ["Computer Processing Unit", "Central Processing Unit", "Central Peripheral Unit", "Core Processing Utility"],
    "answer": 1
  },
  {
    "question": "The main function of the CPU is:",
    "options": ["To store permanent files", "To display images", "Processing instructions", "Cooling the hardware"],
    "answer": 2
  },
  {
    "question": "A complete computer system consists of which two main elements?",
    "options": ["Keyboard and Mouse", "Hardware and Software", "Monitor and Printer", "Internet and Electricity"],
    "answer": 1
  },
  {
    "question": "The CPU is generally divided into how many main functional parts?",
    "options": ["2", "3", "4", "5"],
    "answer": 1
  },
  {
    "question": "What does \"ALU\" stand for?",
    "options": ["Alternative Logic Unit", "Arithmetic Logic Unit", "Array Logic Utility", "Applied Logical Union"],
    "answer": 1
  },
  {
    "question": "The primary role of the ALU is to perform:",
    "options": ["Data storage", "Control signals", "Arithmetic & logical operations", "User interface management"],
    "answer": 2
  },
  {
    "question": "The \"Control Unit\" (CU) of the CPU is responsible for:",
    "options": ["Performing addition and subtraction", "Controlling the operations of the CPU", "Storing the operating system permanently", "Generating high-definition graphics"],
    "answer": 1
  },
  {
    "question": "What are \"Registers\"?",
    "options": ["Large magnetic storage drives", "Small, fast memory locations inside the CPU", "External backup devices", "Types of internet protocols"],
    "answer": 1
  },
  {
    "question": "Which of the following is considered \"Primary Memory\"?",
    "options": ["Hard Disk", "DVD", "RAM", "USB Flash Drive"],
    "answer": 2
  },
  {
    "question": "RAM (Random Access Memory) is classified as:",
    "options": ["Non-volatile memory", "Volatile memory", "Optical memory", "Read-only memory"],
    "answer": 1
  },
  {
    "question": "ROM (Read-Only Memory) is classified as:",
    "options": ["Volatile memory", "Non-volatile memory", "Temporary memory", "Virtual memory"],
    "answer": 1
  },
  {
    "question": "What is \"Cache Memory\"?",
    "options": ["The slowest memory in the system", "Fast memory located between the CPU and RAM", "Permanent storage for photos", "A type of printer memory"],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of \"Secondary Storage\"?",
    "options": ["RAM", "L1 Cache", "Hard Disk", "Register"],
    "answer": 2
  },
  {
    "question": "The Binary numbering system uses which two digits?",
    "options": ["1 and 2", "0 and 1", "0 and 9", "A and B"],
    "answer": 1
  },
  {
    "question": "In computer data units, 1 Byte is equal to:",
    "options": ["4 bits", "8 bits", "16 bits", "1024 bits"],
    "answer": 1
  },
  {
    "question": "The term \"Bit\" stands for:",
    "options": ["Binary Integer", "Binary Digit", "Basic IT", "Binary Technical"],
    "answer": 1
  },
  {
    "question": "What is the base of the Hexadecimal numbering system?",
    "options": ["2", "8", "10", "16"],
    "answer": 3
  },
  {
    "question": "The Decimal System used in daily life has a base of:",
    "options": ["2", "5", "10", "16"],
    "answer": 2
  },
  {
    "question": "Which of the following is a common \"Input Device\"?",
    "options": ["Monitor", "Keyboard", "Printer", "Speaker"],
    "answer": 1
  },
  {
    "question": "Which of the following is a common \"Output Device\"?",
    "options": ["Scanner", "Mouse", "Monitor", "Microphone"],
    "answer": 2
  },
  {
    "question": "Input and Output (I/O) devices connect to the CPU via:",
    "options": ["Wires only", "Buses", "The Power Supply", "The CPU Fan"],
    "answer": 1
  },
  {
    "question": "\"Peripheral Devices\" are generally categorized as:",
    "options": ["Internal CPU cores", "External devices connected to the computer", "Operating system files", "Mathematical formulas"],
    "answer": 1
  },
  {
    "question": "A Computer Printer is classified as an:",
    "options": ["Input device", "Processing unit", "Output device", "Storage device"],
    "answer": 2
  },
  {
    "question": "In computer architecture, a \"Bus\" is defined as a:",
    "options": ["Storage compartment", "Data transfer path", "Type of computer case", "Fast processor"],
    "answer": 1
  },
  {
    "question": "The \"Data Bus\" is responsible for carrying:",
    "options": ["Memory addresses", "Timing signals", "Actual data", "Electricity"],
    "answer": 2
  },
  {
    "question": "The \"Address Bus\" is responsible for carrying:",
    "options": ["User files", "Instruction results", "Memory addresses", "Graphics data"],
    "answer": 2
  },
  {
    "question": "The \"Control Bus\" is responsible for carrying:",
    "options": ["Passwords", "Control signals (Read/Write)", "Numbers for calculation", "Internet packets"],
    "answer": 1
  },
  {
    "question": "The \"System Bus\" is a combination of:",
    "options": ["RAM and ROM", "Input and Output", "Data, Address, and Control buses", "Monitor and Keyboard"],
    "answer": 2
  },
  {
    "question": "The standard \"Instruction Cycle\" consists of which steps?",
    "options": ["Start, Stop, Reset", "Fetch, Decode, Execute", "Read, Write, Delete", "Input, Process, Output"],
    "answer": 1
  },
  {
    "question": "In the instruction cycle, \"Fetch\" means:",
    "options": ["To delete an instruction", "To get an instruction from memory", "To calculate a result", "To print a document"],
    "answer": 1
  },
  {
    "question": "In the instruction cycle, \"Decode\" means:",
    "options": ["Encrypting the data", "Interpreting the instruction", "Saving the file", "Shutting down the CPU"],
    "answer": 1
  },
  {
    "question": "In the instruction cycle, \"Execute\" means:",
    "options": ["Closing the program", "Performing the specified operation", "Loading the OS", "Scanning for viruses"],
    "answer": 1
  },
  {
    "question": "The \"Program Counter\" (PC) is a register that stores the:",
    "options": ["Total number of programs installed", "Address of the next instruction to be fetched", "User's password", "Result of the last math operation"],
    "answer": 1
  },
  {
    "question": "\"Clock Speed\" is a common measure of:",
    "options": ["Monitor brightness", "CPU speed and performance", "Internet download rate", "Battery life"],
    "answer": 1
  },
  {
    "question": "The standard unit of measurement for Clock Speed is:",
    "options": ["Bytes", "Watts", "Hertz (Hz)", "Pixels"],
    "answer": 2
  },
  {
    "question": "A \"Multicore CPU\" indicates that the processor has:",
    "options": ["One large fan", "Multiple independent processing units (cores)", "Multiple power buttons", "No RAM required"],
    "answer": 1
  },
  {
    "question": "\"Parallel Processing\" refers to the ability to perform:",
    "options": ["One task at a time", "Multiple tasks simultaneously", "Only mathematical tasks", "Tasks in alphabetical order"],
    "answer": 1
  },
  {
    "question": "\"Pipelining\" is a technique used in CPUs to improve:",
    "options": ["Storage capacity", "Processing speed and throughput", "Audio quality", "Keyboard sensitivity"],
    "answer": 1
  },
  {
    "question": "What is the \"Fastest Memory\" available in a computer system?",
    "options": ["Hard Disk", "RAM", "Cache", "Register"],
    "answer": 3
  },
  {
    "question": "The \"Memory Hierarchy\" in a computer is organized based on:",
    "options": ["Manufacturer name", "Physical size and weight", "Speed and cost per bit", "Date of production"],
    "answer": 2
  },
  {
    "question": "\"Virtual Memory\" is a technique that:",
    "options": ["Speeds up the internet", "Uses the hard disk as an extension of RAM", "Deletes unused files", "Increases monitor resolution"],
    "answer": 1
  },
  {
    "question": "What does \"SSD\" stand for?",
    "options": ["Super Speed Drive", "Solid-State Drive", "System Storage Device", "Secure Software Disk"],
    "answer": 1
  },
  {
    "question": "A traditional Hard Disk Drive (HDD) uses which technology to store data?",
    "options": ["Flash memory", "Magnetic storage", "Optical lasers", "Water cooling"],
    "answer": 1
  },
  {
    "question": "\"RISC\" architecture stands for:",
    "options": ["Random Instruction Set Computer", "Reduced Instruction Set Computer", "Rapid Integrated System Core", "Reliable Internal Software Code"],
    "answer": 1
  },
  {
    "question": "\"CISC\" architecture stands for:",
    "options": ["Central Instruction System Code", "Complex Instruction Set Computer", "Core Integrated Software Circuit", "Coded Internal System Computer"],
    "answer": 1
  },
  {
    "question": "A \"GPU\" (Graphics Processing Unit) is primarily used for:",
    "options": ["Word processing", "Graphics and image processing", "Printing reports", "Managing spreadsheets"],
    "answer": 1
  },
  {
    "question": "In computer architecture, an \"Interrupt\" is:",
    "options": ["A power failure", "A signal to the CPU for immediate attention", "A way to turn off the computer", "A type of computer virus"],
    "answer": 1
  },
  {
    "question": "\"DMA\" (Direct Memory Access) allows peripherals to:",
    "options": ["Delete files without asking", "Transfer data directly to memory without involving the CPU", "Speed up the keyboard", "Connect to the internet directly"],
    "answer": 1
  }
]
};