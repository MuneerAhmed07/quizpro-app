import { Quiz } from "../../../../types";

export const operatingSystem03: Quiz = {
  id: "03-operating-system",
  title: "CPU & RAM Core 01",
  description: "CPU and RAM Core MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which specific unit controls the sequence of instruction execution?",
    "options": [
      "ALU",
      "Control Unit",
      "RAM",
      "Input Unit"
    ],
    "answer": 1
  },
  {
    "question": "Which register holds the address of the next instruction to be executed?",
    "options": [
      "Accumulator",
      "Instruction Register",
      "Program Counter",
      "Memory Data Register"
    ],
    "answer": 2
  },
  {
    "question": "What is stored in the Instruction Register (IR)?",
    "options": [
      "Address of the next instruction",
      "The instruction currently being decoded or executed",
      "Total number of instructions",
      "Result of the last calculation"
    ],
    "answer": 1
  },
  {
    "question": "Which part of the CPU is responsible for performing arithmetic operations?",
    "options": [
      "Control Unit",
      "ALU",
      "Cache",
      "Bus"
    ],
    "answer": 1
  },
  {
    "question": "In computer architecture, \"Micro-operations\" are defined as:",
    "options": [
      "High-level software commands",
      "Low-level CPU operations that implement instructions",
      "User inputs",
      "External hardware repairs"
    ],
    "answer": 1
  },
  {
    "question": "A \"Pipeline Hazard\" typically occurs due to:",
    "options": [
      "High voltage",
      "Instruction dependency or resource conflict",
      "Using a wireless mouse",
      "Slow internet speed"
    ],
    "answer": 1
  },
  {
    "question": "\"Superscalar Architecture\" allows the CPU to execute:",
    "options": [
      "One instruction every two cycles",
      "Multiple instructions per clock cycle",
      "Only mathematical instructions",
      "Instructions without using RAM"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following improves CPU performance the most by overlapping instruction stages?",
    "options": [
      "Formatting",
      "Pipelining",
      "Defragmentation",
      "Encryption"
    ],
    "answer": 1
  },
  {
    "question": "What is \"Interrupt Latency\"?",
    "options": [
      "The speed of the interrupt signal",
      "The delay between an interrupt request and its handling",
      "The time it takes to reboot",
      "The length of a data cable"
    ],
    "answer": 1
  },
  {
    "question": "Which addressing mode contains the actual operand inside the instruction itself?",
    "options": [
      "Direct addressing",
      "Immediate addressing",
      "Indirect addressing",
      "Relative addressing"
    ],
    "answer": 1
  },
  {
    "question": "The Control Unit generates which type of signals to coordinate system components?",
    "options": [
      "Data signals",
      "Control signals",
      "Video signals",
      "Audio signals"
    ],
    "answer": 1
  },
  {
    "question": "Among the following, which is the fastest type of storage?",
    "options": [
      "RAM",
      "Hard Disk",
      "Cache",
      "Register"
    ],
    "answer": 3
  },
  {
    "question": "Which register interacts directly with the memory address lines?",
    "options": [
      "MDR",
      "MAR (Memory Address Register)",
      "PC",
      "IR"
    ],
    "answer": 1
  },
  {
    "question": "The Memory Data Register (MDR) is used to store:",
    "options": [
      "Addresses only",
      "Data being transferred to or from memory",
      "The CPU's clock speed",
      "Deleted files"
    ],
    "answer": 1
  },
  {
    "question": "A \"Clock Cycle\" refers to:",
    "options": [
      "The time on the taskbar",
      "The fundamental unit of CPU operation timing",
      "The battery life of a laptop",
      "The time taken to boot Windows"
    ],
    "answer": 1
  },
  {
    "question": "In performance measurement, \"CPI\" stands for:",
    "options": [
      "Control Per Instruction",
      "Cycles Per Instruction",
      "Central Processing Item",
      "Computer Power Index"
    ],
    "answer": 1
  },
  {
    "question": "\"Branch Prediction\" is a technique used by CPUs to:",
    "options": [
      "Guess the next instruction path to speed up execution",
      "Predict when the computer will crash",
      "Estimate the size of a file",
      "Calculate the weather"
    ],
    "answer": 0
  },
  {
    "question": "Which is a primary feature of \"RISC\" (Reduced Instruction Set Computer) architecture?",
    "options": [
      "Very complex instructions",
      "Simple and uniform instructions",
      "Slow execution speed",
      "Large instruction set"
    ],
    "answer": 1
  },
  {
    "question": "\"Context Switching\" is a process that occurs in:",
    "options": [
      "Single-tasking systems",
      "Multi-tasking systems",
      "Computers with no OS",
      "Calculator apps"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following affects CPU performance the least?",
    "options": [
      "Clock speed",
      "Cache size",
      "Keyboard type",
      "Number of cores"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following memory types is the fastest?",
    "options": [
      "RAM",
      "Register",
      "Cache",
      "ROM"
    ],
    "answer": 1
  },
  {
    "question": "In cache mapping, which type requires a full search of all cache tags?",
    "options": [
      "Direct mapping",
      "Fully associative mapping",
      "Set-associative mapping",
      "Binary mapping"
    ],
    "answer": 1
  },
  {
    "question": "A \"Cache Hit\" occurs when:",
    "options": [
      "The cache is broken",
      "Requested data is found in the cache",
      "The CPU restarts",
      "Data is deleted"
    ],
    "answer": 1
  },
  {
    "question": "What is a \"Cache Miss Penalty\"?",
    "options": [
      "A fine paid to a company",
      "The extra delay required to fetch data from RAM",
      "The cost of buying new RAM",
      "A type of software error"
    ],
    "answer": 1
  },
  {
    "question": "\"Virtual Memory\" is a management technique that uses:",
    "options": [
      "Extra CPU cores",
      "Disk space as an extension of RAM",
      "Cloud storage",
      "High-resolution monitors"
    ],
    "answer": 1
  },
  {
    "question": "A \"Page Fault\" occurs when:",
    "options": [
      "A web page fails to load",
      "A requested page of data is not currently in physical RAM",
      "The printer runs out of paper",
      "The hard drive is full"
    ],
    "answer": 1
  },
  {
    "question": "\"Thrashing\" in an operating system occurs due to:",
    "options": [
      "Excessive paging (swapping data between RAM and Disk)",
      "Shaking the computer",
      "Too many mouse clicks",
      "Fast internet"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is a non-volatile memory?",
    "options": [
      "RAM",
      "Cache",
      "ROM",
      "L2 Cache"
    ],
    "answer": 2
  },
  {
    "question": "DRAM (Dynamic RAM) is different from SRAM because it requires:",
    "options": [
      "Higher voltage",
      "Periodic refreshing to maintain data",
      "No electricity",
      "A cooling fan"
    ],
    "answer": 1
  },
  {
    "question": "SRAM (Static RAM) is generally characterized as:",
    "options": [
      "Slow and cheap",
      "Fast and expensive",
      "Used for secondary storage",
      "Non-volatile"
    ],
    "answer": 1
  },
  {
    "question": "The \"Memory Hierarchy\" is primarily arranged according to:",
    "options": [
      "Manufacturer date",
      "Physical weight",
      "Speed and cost",
      "Color"
    ],
    "answer": 2
  },
  {
    "question": "Which memory level is physically closest to the CPU cores?",
    "options": [
      "RAM",
      "Hard Disk",
      "Cache",
      "BIOS"
    ],
    "answer": 2
  },
  {
    "question": "The \"TLB\" (Translation Lookaside Buffer) is used to:",
    "options": [
      "Store images",
      "Speed up virtual-to-physical address translation",
      "Connect to the internet",
      "Manage the keyboard"
    ],
    "answer": 1
  },
  {
    "question": "The technique of \"Paging\" helps to eliminate:",
    "options": [
      "Internal fragmentation",
      "External fragmentation",
      "Software bugs",
      "Viruses"
    ],
    "answer": 1
  },
  {
    "question": "\"Fragmentation\" is a problem that occurs in:",
    "options": [
      "CPU cooling",
      "Memory allocation",
      "Monitor resolution",
      "Keyboard typing"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is considered \"Secondary Memory\"?",
    "options": [
      "L1 Cache",
      "RAM",
      "HDD / SSD",
      "Registers"
    ],
    "answer": 2
  },
  {
    "question": "\"Memory Access Time\" is defined as the:",
    "options": [
      "Time it takes to turn on the PC",
      "Time required to read or write data to/from memory",
      "Duration of a movie",
      "Age of the RAM sticks"
    ],
    "answer": 1
  },
  {
    "question": "\"Dual-channel memory\" configuration primarily improves:",
    "options": [
      "Storage capacity",
      "Memory bandwidth",
      "Monitor colors",
      "Sound quality"
    ],
    "answer": 1
  },
  {
    "question": "In a \"Write-through\" cache policy:",
    "options": [
      "Data is written only to the cache",
      "Data is written to the cache and main memory simultaneously",
      "Data is never written",
      "Data is written only to the disk"
    ],
    "answer": 1
  },
  {
    "question": "In a \"Write-back\" cache policy:",
    "options": [
      "Data is written to memory immediately",
      "Data is written to the cache first and updated in memory later",
      "Data is deleted immediately",
      "Data is sent to the printer"
    ],
    "answer": 1
  }
]
};