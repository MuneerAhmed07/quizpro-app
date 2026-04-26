import { Quiz } from "../../../../types";

export const operatingSystem05: Quiz = {
  id: "05-operating-system",
  title: "Flynn's Classification",
  description: "Flynn's Classification MCQs",
  timeLimit: 1200,
  questions: [
  {
    "question": "Flynn’s classification of computer architectures is based on:",
    "options": [
      "CPU clock speed and RAM size",
      "Instruction and Data streams",
      "The number of ports and buses",
      "Operating system type"
    ],
    "answer": 1
  },
  {
    "question": "What does the acronym \"SISD\" represent?",
    "options": [
      "System Input System Data",
      "Single Instruction Single Data stream",
      "Sequential Instruction Serial Data",
      "Single Integrated System Design"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture is used in traditional, classical single-core computer systems?",
    "options": [
      "SIMD",
      "MIMD",
      "SISD",
      "MISD"
    ],
    "answer": 2
  },
  {
    "question": "The SIMD (Single Instruction Multiple Data) architecture is best suited for:",
    "options": [
      "Sequential word processing",
      "Parallel data processing (e.g., array processing)",
      "Handling a single mouse click",
      "Basic BIOS operations"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is a prominent example of SIMD architecture?",
    "options": [
      "A single-core 1980s PC",
      "GPU processing multiple pixels simultaneously",
      "A simple calculator",
      "A manual typewriter"
    ],
    "answer": 1
  },
  {
    "question": "Regarding practical application, the MISD architecture is considered:",
    "options": [
      "The most common architecture",
      "A rarely used architecture",
      "The fastest architecture for gaming",
      "A standard for mobile phones"
    ],
    "answer": 1
  },
  {
    "question": "The MISD (Multiple Instruction Single Data) architecture executes:",
    "options": [
      "One instruction on many data sets",
      "Multiple instructions on a single data stream",
      "No instructions",
      "One instruction on one data set"
    ],
    "answer": 1
  },
  {
    "question": "Where is the MIMD (Multiple Instruction Multiple Data) architecture primarily used?",
    "options": [
      "In basic digital watches",
      "In parallel systems and multiprocessors",
      "In barcode scanners",
      "In single-threaded applications"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture allows for the truly independent execution of different instructions on different data?",
    "options": [
      "SISD",
      "SIMD",
      "MIMD",
      "MISD"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is considered the most flexible and powerful architecture in Flynn's taxonomy?",
    "options": [
      "SISD",
      "MISD",
      "MIMD",
      "SIMD"
    ],
    "answer": 2
  },
  {
    "question": "In a SIMD system, the processor executes:",
    "options": [
      "Different instructions on the same data",
      "The same instruction on multiple data elements",
      "Different instructions on different data",
      "Only one instruction per hour"
    ],
    "answer": 1
  },
  {
    "question": "In a traditional SISD system, the execution of instructions is strictly:",
    "options": [
      "Parallel",
      "Sequential",
      "Random",
      "Distributed"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture is commonly associated with \"Vector Processing\"?",
    "options": [
      "SISD",
      "SIMD",
      "MISD",
      "BIOS"
    ],
    "answer": 1
  },
  {
    "question": "MISD systems are mostly theoretical or used in niche fault-tolerant systems because they have:",
    "options": [
      "Too many parts",
      "Limited practical use",
      "Low security",
      "High cost for basic tasks"
    ],
    "answer": 1
  },
  {
    "question": "MIMD systems are found in which of the following?",
    "options": [
      "Simple pocket calculators",
      "Multiprocessor and distributed systems",
      "Old floppy disk drives",
      "Standard TV remotes"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture is the foundation for modern multi-core CPUs found in laptops and servers?",
    "options": [
      "SISD",
      "SIMD",
      "MIMD",
      "MISD"
    ],
    "answer": 2
  },
  {
    "question": "Parallelism in a SIMD system is achieved primarily through:",
    "options": [
      "Multiple instruction streams",
      "Multiple data streams",
      "High clock frequency only",
      "Using more RAM"
    ],
    "answer": 1
  },
  {
    "question": "Which architecture offers the lowest level of parallelism?",
    "options": [
      "MIMD",
      "SIMD",
      "SISD",
      "MISD"
    ],
    "answer": 2
  },
  {
    "question": "In a MIMD environment, the individual processors:",
    "options": [
      "Wait for each other to finish every step",
      "Execute different instructions independently",
      "Are controlled by a single master clock for every bit",
      "Can only read data, not write it"
    ],
    "answer": 1
  },
  {
    "question": "Flynn’s classification is a vital tool for:",
    "options": [
      "Fixing hardware errors",
      "Understanding and categorizing parallel processing types",
      "Designing computer cases",
      "Predicting internet speed"
    ],
    "answer": 1
  }
]
};