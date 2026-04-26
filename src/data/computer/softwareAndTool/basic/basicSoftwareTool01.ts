import { Quiz } from "../../../../types";

export const basicSoftwareAndTool01: Quiz = {
  id: "01-basic-software-and-tool",
  title: "Basic Software and Tools 01",
  description: "Basic Software and Tools Awareness",
  timeLimit: 3000,
  questions: [
  {
    "question": "What is Git?",
    "options": [
      "A programming language",
      "A distributed version control system",
      "A database management tool",
      "An operating system"
    ],
    "answer": 1
  },
  {
    "question": "Which command is used to initialize a new Git repository in a directory?",
    "options": ["git start", "git create", "git init", "git new"],
    "answer": 2
  },
  {
    "question": "Which command is used to copy an existing Git repository from a remote server?",
    "options": ["git copy", "git download", "git replicate", "git clone"],
    "answer": 3
  },
  {
    "question": "How do you add files to the staging area in Git?",
    "options": ["git stage", "git add", "git include", "git commit"],
    "answer": 1
  },
  {
    "question": "Which command saves your staged changes to the local repository history?",
    "options": ["git push", "git save", "git commit", "git upload"],
    "answer": 2
  },
  {
    "question": "Which command is used to upload local repository content to a remote repository?",
    "options": ["git pull", "git push", "git send", "git export"],
    "answer": 1
  },
  {
    "question": "To fetch and merge changes from a remote repository to your local branch, use:",
    "options": ["git pull", "git fetch", "git update", "git sync"],
    "answer": 0
  },
  {
    "question": "What is the command to create a new branch?",
    "options": [
      "git new-branch [name]",
      "git branch [name]",
      "git checkout [name]",
      "git create [name]"
    ],
    "answer": 1
  },
  {
    "question": "Which command joins two or more development histories (branches) together?",
    "options": ["git combine", "git join", "git merge", "git connect"],
    "answer": 2
  },
  {
    "question": "To undo the last commit while keeping your changes locally, you can use:",
    "options": ["git delete", "git reset", "git remove", "git stop"],
    "answer": 1
  },
  {
    "question": "Which command shows the current state of the working directory and staging area?",
    "options": ["git check", "git view", "git status", "git info"],
    "answer": 2
  },
  {
    "question": "To view the chronological list of commits in a repository, use:",
    "options": ["git history", "git log", "git list", "git show"],
    "answer": 1
  },
  {
    "question": "In Git terminology, what is a \"Repository\"?",
    "options": [
      "A specific line of code",
      "A storage location for code and its version history",
      "A type of server hardware",
      "A user profile"
    ],
    "answer": 1
  },
  {
    "question": "Git is classified as what type of Version Control System (VCS)?",
    "options": [
      "Centralized VCS",
      "Distributed VCS",
      "Local VCS only",
      "Monolithic VCS"
    ],
    "answer": 1
  },
  {
    "question": "What is the primary difference between git pull and git fetch?",
    "options": [
      "Fetch merges data, Pull does not",
      "Pull merges data, Fetch only downloads it",
      "Fetch deletes local data",
      "There is no difference"
    ],
    "answer": 1
  },
  {
    "question": "What is a \"Branch\" in Git?",
    "options": [
      "A copy of the entire operating system",
      "A parallel line of development",
      "A deleted file",
      "A connection to a database"
    ],
    "answer": 1
  },
  {
    "question": "GitHub is best described as:",
    "options": [
      "A compiler for Java",
      "A remote repository hosting platform",
      "A local text editor",
      "A web browser"
    ],
    "answer": 1
  },
  {
    "question": "What is the purpose of the Staging Area (Index)?",
    "options": [
      "To store permanent backups",
      "As an intermediate area to prepare files before a commit",
      "To run code tests",
      "To store user passwords"
    ],
    "answer": 1
  },
  {
    "question": "A \"Merge Conflict\" occurs when:",
    "options": [
      "You try to push to an empty repo",
      "The same file is edited in multiple branches and merged",
      "Your internet connection fails",
      "You use the wrong password"
    ],
    "answer": 1
  },
  {
    "question": "What does the \"HEAD\" pointer refer to in Git?",
    "options": [
      "The first commit ever made",
      "The current commit or branch pointer",
      "The user's name",
      "The master server address"
    ],
    "answer": 1
  },
  {
    "question": "What does API stand for?",
    "options": [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Protocol Integration",
      "Application Process Indicator"
    ],
    "answer": 1
  },
  {
    "question": "What is the primary use of an API?",
    "options": [
      "To build hardware",
      "To allow communication between different systems",
      "To format a hard drive",
      "To increase monitor resolution"
    ],
    "answer": 1
  },
  {
    "question": "Which protocol does a REST API typically use?",
    "options": ["FTP", "SMTP", "HTTP", "SSH"],
    "answer": 2
  },
  {
    "question": "In a REST API, the GET method is used to:",
    "options": [
      "Create a new resource",
      "Retrieve data from a server",
      "Delete a record",
      "Update an existing record"
    ],
    "answer": 1
  },
  {
    "question": "The POST method is primarily used to:",
    "options": [
      "Retrieve information",
      "Send data to a server to create a resource",
      "Delete an account",
      "Format a table"
    ],
    "answer": 1
  },
  {
    "question": "Which HTTP method is used to update an existing resource?",
    "options": ["GET", "POST", "PUT", "HEAD"],
    "answer": 2
  },
  {
    "question": "The DELETE method is used to:",
    "options": [
      "Add a new file",
      "Remove a resource from the server",
      "Refresh a page",
      "Search for data"
    ],
    "answer": 1
  },
  {
    "question": "What are the most common data formats for API responses?",
    "options": ["MP3 and MP4", "JPEG and PNG", "JSON and XML", "EXE and MSI"],
    "answer": 2
  },
  {
    "question": "What does the HTTP status code 200 represent?",
    "options": ["Success", "Created", "Not Found", "Unauthorized"],
    "answer": 0
  },
  {
    "question": "The HTTP status code 404 means:",
    "options": ["Bad Request", "Unauthorized", "Forbidden", "Not Found"],
    "answer": 3
  },
  {
    "question": "Which status code represents an \"Internal Server Error\"?",
    "options": ["200", "400", "404", "500"],
    "answer": 3
  },
  {
    "question": "What is an API Endpoint?",
    "options": [
      "The end of the code",
      "The URL used to access the API service",
      "A type of security token",
      "A hardware port"
    ],
    "answer": 1
  },
  {
    "question": "Authentication in an API is a:",
    "options": [
      "Performance tool",
      "Security mechanism to verify identity",
      "Database type",
      "Programming language"
    ],
    "answer": 1
  },
  {
    "question": "In API security, a \"Token\" is used for:",
    "options": [
      "Compiling code",
      "Authorizing and securing requests",
      "Storing images",
      "Naming variables"
    ],
    "answer": 1
  },
  {
    "question": "What does REST stand for?",
    "options": [
      "Rational Entry State Transfer",
      "Representational State Transfer",
      "Real-time Server Tracking",
      "Remote Storage Tool"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is a popular tool for API testing?",
    "options": ["Photoshop", "Postman", "Excel", "VLC Player"],
    "answer": 1
  },
  {
    "question": "JSON stands for:",
    "options": [
      "Java Standard Object Notation",
      "JavaScript Object Notation",
      "Joint System Online Network",
      "Java Syntax Object Node"
    ],
    "answer": 1
  },
  {
    "question": "An API Key is primarily used for:",
    "options": [
      "Writing code faster",
      "Access control and identification",
      "Encrypting a hard drive",
      "Connecting a keyboard"
    ],
    "answer": 1
  },
  {
    "question": "The API error code 401 stands for:",
    "options": ["Forbidden", "Unauthorized", "Payment Required", "Timeout"],
    "answer": 1
  },
  {
    "question": "In REST architecture, \"Stateless\" means:",
    "options": [
      "The server has no memory of previous requests",
      "The server stores all user passwords locally",
      "The API only works in one country",
      "The API does not require a URL"
    ],
    "answer": 0
  },
  {
    "question": "What is a Database?",
    "options": [
      "A text editor",
      "An organized data storage system",
      "A type of computer monitor",
      "A networking cable"
    ],
    "answer": 1
  },
  {
    "question": "DBMS stands for:",
    "options": [
      "Digital Binary Management System",
      "Database Management System",
      "Data Backup and Main System",
      "Database Master Software"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of a Relational DBMS?",
    "options": ["Windows 11", "MySQL", "Python", "HTML"],
    "answer": 1
  },
  {
    "question": "In a database, a Table stores data in:",
    "options": ["Circles and Squares", "Rows and Columns", "Paragraphs", "Folders"],
    "answer": 1
  },
  {
    "question": "A \"Row\" in a database table represents a:",
    "options": ["Single attribute", "Field", "Record", "Data type"],
    "answer": 2
  },
  {
    "question": "A \"Column\" in a database table represents a:",
    "options": ["Record", "Field (Attribute)", "Primary Key only", "Table index"],
    "answer": 1
  },
  {
    "question": "What is a \"Primary Key\"?",
    "options": [
      "The password to the database",
      "A unique identifier for a record in a table",
      "A link to an external website",
      "A hidden column"
    ],
    "answer": 1
  },
  {
    "question": "A \"Foreign Key\" is used to:",
    "options": [
      "Encrypt the database",
      "Link two tables together",
      "Delete all records",
      "Create a backup"
    ],
    "answer": 1
  },
  {
    "question": "SQL stands for:",
    "options": [
      "Simple Query Language",
      "Structured Query Language",
      "Standard Queue List",
      "Sequential Query Logic"
    ],
    "answer": 1
  },
  {
    "question": "The SELECT statement is used to:",
    "options": [
      "Create a new table",
      "Retrieve data from a database",
      "Update a user's password",
      "Delete a database"
    ],
    "answer": 1
  }
]
};