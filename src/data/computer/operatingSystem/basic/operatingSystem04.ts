import { Quiz } from "../../../../types";

export const operatingSystem04: Quiz = {
  id: "04-operating-system",
  title: "Instruction Set Architecture (ISA)",
  description: "Instruction Set Architecture MCQs",
  timeLimit: 1200,
  questions: [
  {
    "question": "RISC (Reduced Instruction Set Computer) architecture primarily emphasizes:",
    "options": [
      "Large and complex instruction sets",
      "Simple and fast instruction execution",
      "Maximizing hardware complexity",
      "Minimizing the number of registers"
    ],
    "answer": 1
  },
  {
    "question": "CISC (Complex Instruction Set Computer) architecture is characterized by:",
    "options": [
      "One instruction per clock cycle",
      "Complex instructions that can perform multiple operations",
      "Absence of micro-programming",
      "Very few addressing modes"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture typically utilizes \"Fixed-Length\" instructions for easier decoding?",
    "options": [
      "CISC",
      "RISC",
      "Both RISC and CISC",
      "Neither"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture uses \"Variable-Length\" instructions depending on the operation?",
    "options": [
      "RISC",
      "VLIW",
      "CISC",
      "EPIC"
    ],
    "answer": 2
  },
  {
    "question": "The RISC philosophy can best be described as:",
    "options": [
      "Do more per instruction but slower",
      "Do less per instruction but faster",
      "Only perform mathematical tasks",
      "Avoid using compilers"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture is inherently easier to implement in a \"Pipelined\" processor?",
    "options": [
      "CISC",
      "RISC",
      "VLIW",
      "Parallel"
    ],
    "answer": 1
  },
  {
    "question": "Instructions in a CISC architecture often require:",
    "options": [
      "Exactly one clock cycle",
      "Multiple clock cycles to complete",
      "No clock cycles",
      "A manual restart"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture uses a \"Load/Store\" design, where only specific instructions access memory?",
    "options": [
      "CISC",
      "VLIW",
      "RISC",
      "Mainframe"
    ],
    "answer": 2
  },
  {
    "question": "In RISC systems, memory access is strictly performed via:",
    "options": [
      "Any arithmetic instruction",
      "Only Load and Store instructions",
      "The Control Unit directly",
      "The keyboard"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture generally has higher \"Code Density\" (shorter programs for the same task)?",
    "options": [
      "RISC",
      "CISC",
      "VLIW",
      "EPIC"
    ],
    "answer": 1
  },
  {
    "question": "VLIW (Very Long Instruction Word) architecture is designed to execute:",
    "options": [
      "One operation per hour",
      "Multiple operations packaged into a single instruction word",
      "Only one operation per instruction",
      "Random instructions"
    ],
    "answer": 1
  },
  {
    "question": "The efficiency of VLIW architecture relies heavily on:",
    "options": [
      "User input",
      "Compiler scheduling",
      "Hardware sensors",
      "The monitor's refresh rate"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture reduces hardware complexity but significantly increases compiler complexity?",
    "options": [
      "CISC",
      "VLIW",
      "RISC",
      "x86"
    ],
    "answer": 1
  },
  {
    "question": "The \"EPIC\" architecture is considered an advanced extension of:",
    "options": [
      "CISC",
      "RISC",
      "VLIW",
      "GPU"
    ],
    "answer": 2
  },
  {
    "question": "EPIC (Explicitly Parallel Instruction Computing) provides:",
    "options": [
      "Hidden parallelism",
      "Explicit parallelism information within the instruction",
      "No parallelism",
      "Slower processing"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture depends most heavily on \"Compiler Optimization\" for performance?",
    "options": [
      "CISC",
      "RISC",
      "VLIW/EPIC",
      "BIOS"
    ],
    "answer": 2
  },
  {
    "question": "Which architecture extensively uses \"Micro-programming\" to implement complex instructions?",
    "options": [
      "RISC",
      "VLIW",
      "CISC",
      "EPIC"
    ],
    "answer": 2
  },
  {
    "question": "Modern CPUs (like Intel x86) generally use which architecture approach?",
    "options": [
      "Pure RISC",
      "Pure CISC",
      "A hybrid combination of RISC and CISC",
      "No instruction set"
    ],
    "answer": 2
  },
  {
    "question": "Which architecture is best suited for \"Parallel\" instruction execution at the hardware level?",
    "options": [
      "Single-core RISC",
      "VLIW/EPIC",
      "Standard CISC",
      "8-bit processors"
    ],
    "answer": 1
  },
  {
    "question": "The main drawback or challenge of the VLIW architecture is its:",
    "options": [
      "High electricity consumption",
      "Dependency on compiler accuracy and complexity",
      "Large physical size",
      "Slow clock speed"
    ],
    "answer": 1
  }
]
};