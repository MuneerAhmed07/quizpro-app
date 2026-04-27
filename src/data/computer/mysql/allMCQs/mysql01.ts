import { Quiz } from "../../../../types";

export const mysql01: Quiz = {
  id: "01-mysql01",
  title: "Basic MySQL",
  description: "Basic MySQL MCQs",
  timeLimit: 6000,
  questions: [
  {
    "question": "What does SQL stand for?",
    "options": ["Structured Query Language", "Simple Query Level", "System Query Logic", "Standard Quick List"],
    "answer": 0
  },
  {
    "question": "What is a DBMS?",
    "options": ["Data Base Management System", "Digital Base Management Software", "Data Binary Main System", "Digital Backup Main Store"],
    "answer": 0
  },
  {
    "question": "In a database, what is a \"Record\"?",
    "options": ["A single column", "A single row in a table", "The whole database", "A type of software"],
    "answer": 1
  },
  {
    "question": "In a database, what is a \"Field\"?",
    "options": ["A row", "A column", "A table", "A query"],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of an RDBMS?",
    "options": ["MySQL", "Oracle", "Microsoft SQL Server", "All of these"],
    "answer": 3
  },
  {
    "question": "What does the \"R\" in RDBMS stand for?",
    "options": ["Rapid", "Relational", "Random", "Record"],
    "answer": 1
  },
  {
    "question": "What is a \"Primary Key\"?",
    "options": ["A key that allows duplicates", "A unique identifier for a row", "A key that can be NULL", "A type of secondary index"],
    "answer": 1
  },
  {
    "question": "Which key establishes a relationship between two tables?",
    "options": ["Primary Key", "Foreign Key", "Candidate Key", "Unique Key"],
    "answer": 1
  },
  {
    "question": "Can a Primary Key contain NULL values?",
    "options": ["Yes", "No"],
    "answer": 1
  },
  {
    "question": "Which constraint ensures that all values in a column are different?",
    "options": ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
    "answer": 1
  },
  {
    "question": "Which command is used to create a new database in MySQL?",
    "options": ["MAKE DATABASE", "NEW DATABASE", "CREATE DATABASE", "ADD DATABASE"],
    "answer": 2
  },
  {
    "question": "To start using a specific database, which command is used?",
    "options": ["OPEN", "USE", "SELECT", "CONNECT"],
    "answer": 1
  },
  {
    "question": "Which SQL command is used to create a table?",
    "options": ["NEW TABLE", "MAKE TABLE", "CREATE TABLE", "DEFINE TABLE"],
    "answer": 2
  },
  {
    "question": "Which command removes all data from a table but keeps the structure?",
    "options": ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    "answer": 2
  },
  {
    "question": "Which command is used to delete a table and its structure permanently?",
    "options": ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    "answer": 2
  },
  {
    "question": "To change the structure of an existing table, use:",
    "options": ["UPDATE", "CHANGE", "ALTER", "MODIFY"],
    "answer": 2
  },
  {
    "question": "Which keyword is used to add a new column to a table?",
    "options": ["ADD", "INSERT", "UPDATE", "NEW"],
    "answer": 0
  },
  {
    "question": "Which DDL command deletes a whole database?",
    "options": ["DELETE DATABASE", "REMOVE DATABASE", "DROP DATABASE", "TRUNCATE DATABASE"],
    "answer": 2
  },
  {
    "question": "What is the default port for MySQL?",
    "options": ["80", "443", "3306", "21"],
    "answer": 2
  },
  {
    "question": "Which type of SQL command is CREATE, DROP, and ALTER?",
    "options": ["DML", "DCL", "DDL", "TCL"],
    "answer": 2
  },
  {
    "question": "Which command is used to insert new data into a table?",
    "options": ["ADD", "INSERT INTO", "UPDATE", "SET"],
    "answer": 1
  },
  {
    "question": "Which command is used to fetch/view data from a table?",
    "options": ["GET", "VIEW", "SELECT", "SEARCH"],
    "answer": 2
  },
  {
    "question": "To modify existing data within a table, use:",
    "options": ["CHANGE", "ALTER", "UPDATE", "MODIFY"],
    "answer": 2
  },
  {
    "question": "Which clause is used to filter records based on a condition?",
    "options": ["IF", "FOR", "WHERE", "WHILE"],
    "answer": 2
  },
  {
    "question": "Which command is used to delete specific rows from a table?",
    "options": ["DROP", "TRUNCATE", "DELETE", "REMOVE"],
    "answer": 2
  },
  {
    "question": "Which keyword is used with SELECT to return only unique values?",
    "options": ["UNIQUE", "DIFFERENT", "DISTINCT", "ONLY"],
    "answer": 2
  },
  {
    "question": "To sort the result-set in MySQL, use:",
    "options": ["SORT BY", "ALIGN BY", "ORDER BY", "GROUP BY"],
    "answer": 2
  },
  {
    "question": "What is the default sorting order of ORDER BY?",
    "options": ["Descending", "Ascending", "Random", "Numerical"],
    "answer": 1
  },
  {
    "question": "To sort data in descending order, use which keyword?",
    "options": ["ASC", "DESC", "DOWN", "BACK"],
    "answer": 1
  },
  {
    "question": "Which operator is used to search for a specified pattern in a column?",
    "options": ["AS", "LIKE", "IN", "IS"],
    "answer": 1
  },
  {
    "question": "Which data type is used for fixed-length strings?",
    "options": ["VARCHAR", "CHAR", "TEXT", "STRING"],
    "answer": 1
  },
  {
    "question": "Which data type is used for variable-length strings?",
    "options": ["CHAR", "VARCHAR", "INT", "BLOB"],
    "answer": 1
  },
  {
    "question": "Which data type is best for storing whole numbers?",
    "options": ["DECIMAL", "FLOAT", "INT", "CHAR"],
    "answer": 2
  },
  {
    "question": "Which data type is used for dates in 'YYYY-MM-DD' format?",
    "options": ["TIME", "DATE", "YEAR", "TIMESTAMP"],
    "answer": 1
  },
  {
    "question": "What does the NOT NULL constraint do?",
    "options": ["Allows empty values", "Ensures a column cannot have a NULL value", "Deletes NULL rows", "Makes a column a Primary Key"],
    "answer": 1
  },
  {
    "question": "Which keyword allows a column to automatically generate a unique number for new rows?",
    "options": ["AUTO_ADD", "AUTO_INCREMENT", "SEQUENCE", "AUTO_NUMBER"],
    "answer": 1
  },
  {
    "question": "What is the maximum length of a CHAR data type?",
    "options": ["255", "1024", "65535", "Unlimited"],
    "answer": 0
  },
  {
    "question": "Which data type is used to store large binary objects (like images)?",
    "options": ["TEXT", "VARCHAR", "BLOB", "LONGINT"],
    "answer": 2
  },
  {
    "question": "The DEFAULT constraint is used to:",
    "options": ["Limit values", "Provide a value if none is specified", "Connect tables", "Primary key"],
    "answer": 1
  },
  {
    "question": "Which constraint is used to check if a value meets a specific condition?",
    "options": ["CHECK", "VERIFY", "VALIDATE", "LIMIT"],
    "answer": 0
  },
  {
    "question": "Which clause is used to group rows that have the same values?",
    "options": ["ORDER BY", "SORT BY", "GROUP BY", "CLUSTER BY"],
    "answer": 2
  },
  {
    "question": "Which clause is used to filter groups created by GROUP BY?",
    "options": ["WHERE", "HAVING", "FILTER", "LIMIT"],
    "answer": 1
  },
  {
    "question": "Which command is used to limit the number of rows returned?",
    "options": ["TOP", "COUNT", "LIMIT", "STOP"],
    "answer": 2
  },
  {
    "question": "Which operator is used to select values within a specific range?",
    "options": ["IN", "BETWEEN", "WITHIN", "RANGE"],
    "answer": 1
  },
  {
    "question": "Which operator allows you to specify multiple possible values for a WHERE clause?",
    "options": ["OR", "LIKE", "IN", "AND"],
    "answer": 2
  },
  {
    "question": "What does the wildcard % represent in a LIKE operator?",
    "options": ["Exactly one character", "Zero, one, or multiple characters", "Only numbers", "Only letters"],
    "answer": 1
  },
  {
    "question": "What does the wildcard _ (underscore) represent in LIKE?",
    "options": ["Multiple characters", "A single character", "No characters", "Spaces"],
    "answer": 1
  },
  {
    "question": "Which JOIN returns all records when there is a match in either table?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    "answer": 3
  },
  {
    "question": "Which JOIN returns all records from the left table and matched records from the right?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
    "answer": 1
  },
  {
    "question": "Which JOIN returns only the records that have matching values in both tables?",
    "options": ["OUTER JOIN", "INNER JOIN", "LEFT JOIN", "FULL JOIN"],
    "answer": 1
  },
  {
    "question": "Which function returns the total number of rows?",
    "options": ["SUM()", "TOTAL()", "COUNT()", "ADD()"],
    "answer": 2
  },
  {
    "question": "Which function returns the highest value in a column?",
    "options": ["HIGH()", "TOP()", "MAX()", "GREATEST()"],
    "answer": 2
  },
  {
    "question": "Which function returns the lowest value in a column?",
    "options": ["LOW()", "MIN()", "LEAST()", "BOTTOM()"],
    "answer": 1
  },
  {
    "question": "Which function calculates the total sum of a numeric column?",
    "options": ["COUNT()", "ADD()", "SUM()", "TOTAL()"],
    "answer": 2
  },
  {
    "question": "Which function returns the average value of a numeric column?",
    "options": ["AVG()", "MEAN()", "MEDIAN()", "TOTAL/COUNT"],
    "answer": 0
  },
  {
    "question": "Aggregate functions are often used with which clause?",
    "options": ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"],
    "answer": 2
  },
  {
    "question": "Can aggregate functions be used in a WHERE clause directly?",
    "options": ["Yes", "No (Use HAVING instead)"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to give a table or a column a temporary name?",
    "options": ["AS", "NAME", "ALIAS", "SET"],
    "answer": 0
  },
  {
    "question": "What is an Alias?",
    "options": ["A permanent name", "A temporary name for a column/table", "A type of index", "A database error"],
    "answer": 1
  },
  {
    "question": "The CONCAT() function is used to:",
    "options": ["Add numbers", "Join two or more strings", "Delete data", "Split strings"],
    "answer": 1
  },
  {
    "question": "What is the purpose of an INDEX in MySQL?",
    "options": ["To save space", "To speed up data retrieval", "To encrypt data", "To prevent deletes"],
    "answer": 1
  },
  {
    "question": "Which command is used to create an index?",
    "options": ["ADD INDEX", "MAKE INDEX", "CREATE INDEX", "SET INDEX"],
    "answer": 2
  },
  {
    "question": "Can a table have more than one index?",
    "options": ["Yes", "No"],
    "answer": 0
  },
  {
    "question": "Which command is used to remove an index?",
    "options": ["DELETE INDEX", "DROP INDEX", "REMOVE INDEX", "CLEAR INDEX"],
    "answer": 1
  },
  {
    "question": "What is a \"Unique Index\"?",
    "options": ["An index that allows duplicates", "An index that ensures all values in the column are unique", "The same as a Primary Key", "A temporary index"],
    "answer": 1
  },
  {
    "question": "What is the command to create a user in MySQL?",
    "options": ["ADD USER", "NEW USER", "CREATE USER", "MAKE USER"],
    "answer": 2
  },
  {
    "question": "Which command is used to give permissions to a user?",
    "options": ["ALLOW", "GRANT", "REVOKE", "PERMIT"],
    "answer": 1
  },
  {
    "question": "Which command is used to take away permissions?",
    "options": ["REMOVE", "DENY", "REVOKE", "STOP"],
    "answer": 2
  },
  {
    "question": "Which command is used to change a user's password?",
    "options": ["UPDATE PASSWORD", "CHANGE PASSWORD", "ALTER USER", "MODIFY USER"],
    "answer": 2
  },
  {
    "question": "MySQL is a ______ database.",
    "options": ["Hierarchical", "Network", "Relational", "NoSQL"],
    "answer": 2
  },
  {
    "question": "Which statement is used to combine the result-set of two or more SELECT statements?",
    "options": ["JOIN", "UNION", "PLUS", "COMBINE"],
    "answer": 1
  },
  {
    "question": "What is the difference between UNION and UNION ALL?",
    "options": ["UNION ALL removes duplicates", "UNION removes duplicates", "There is no difference", "UNION is faster"],
    "answer": 1
  },
  {
    "question": "A \"Subquery\" is:",
    "options": ["A query inside another query", "A small database", "A type of index", "An error message"],
    "answer": 0
  },
  {
    "question": "Which command is used to show all tables in a database?",
    "options": ["LIST TABLES", "SHOW TABLES", "VIEW TABLES", "DISPLAY TABLES"],
    "answer": 1
  },
  {
    "question": "Which command shows the structure of a table?",
    "options": ["VIEW", "DESCRIBE", "STRUCTURE", "HELP"],
    "answer": 1
  },
  {
    "question": "Which command shows the code used to create a table?",
    "options": ["SHOW TABLE", "SHOW CREATE TABLE", "DESCRIBE TABLE", "VIEW CREATE"],
    "answer": 1
  },
  {
    "question": "A \"View\" in SQL is:",
    "options": ["A physical table", "A virtual table based on a query result", "A database backup", "A user interface"],
    "answer": 1
  },
  {
    "question": "Which command is used to create a View?",
    "options": ["MAKE VIEW", "NEW VIEW", "CREATE VIEW", "DEFINE VIEW"],
    "answer": 2
  },
  {
    "question": "SQL comments for a single line start with:",
    "options": ["//", "--", "#", "Both B and C"],
    "answer": 3
  },
  {
    "question": "SQL comments for multiple lines start and end with:",
    "options": ["--", "/* */", "# #", "{ }"],
    "answer": 1
  },
  {
    "question": "\"Normalization\" is used to:",
    "options": ["Increase duplicates", "Reduce data redundancy and improve integrity", "Delete data", "Encrypt tables"],
    "answer": 1
  },
  {
    "question": "1NF (First Normal Form) requires:",
    "options": ["No partial dependencies", "Atomic values (no repeating groups)", "No transitive dependencies", "A Foreign Key"],
    "answer": 1
  },
  {
    "question": "In ACID properties, \"A\" stands for:",
    "options": ["Availability", "Atomicity", "Accuracy", "Access"],
    "answer": 1
  },
  {
    "question": "In ACID properties, \"C\" stands for:",
    "options": ["Complexity", "Consistency", "Control", "Connectivity"],
    "answer": 1
  },
  {
    "question": "In ACID properties, \"I\" stands for:",
    "options": ["Integrity", "Isolation", "Identity", "Instant"],
    "answer": 1
  },
  {
    "question": "In ACID properties, \"D\" stands for:",
    "options": ["Durability", "Dependency", "Data", "Digital"],
    "answer": 0
  },
  {
    "question": "Which ACID property ensures that all parts of a transaction are completed or none are?",
    "options": ["Consistency", "Atomicity", "Isolation", "Durability"],
    "answer": 1
  },
  {
    "question": "A \"Deadlock\" occurs when:",
    "options": ["Two transactions wait for each other to release locks", "The server crashes", "A user logs out", "No data is found"],
    "answer": 0
  },
  {
    "question": "What is a \"Transaction\"?",
    "options": ["A single SELECT statement", "A sequence of operations performed as a single logical unit", "A database backup", "A user login"],
    "answer": 1
  },
  {
    "question": "Which command saves all changes made during a transaction?",
    "options": ["SAVE", "ROLLBACK", "COMMIT", "FINISH"],
    "answer": 2
  },
  {
    "question": "Which command cancels changes made during a transaction?",
    "options": ["UNDO", "DELETE", "ROLLBACK", "CANCEL"],
    "answer": 2
  },
  {
    "question": "A \"Stored Procedure\" is:",
    "options": ["A type of error", "A prepared SQL code that you can save and reuse", "A temporary table", "A database user"],
    "answer": 1
  },
  {
    "question": "A \"Trigger\" is:",
    "options": ["A button in the UI", "A stored program that automatically executes when an event occurs", "A Primary Key", "A fast query"],
    "answer": 1
  },
  {
    "question": "Which operator is used for bitwise AND in MySQL?",
    "options": ["&&", "AND", "&", ".AND."],
    "answer": 2
  },
  {
    "question": "Which function returns the current date and time?",
    "options": ["DATE()", "TIME()", "NOW()", "CURRENT()"],
    "answer": 2
  },
  {
    "question": "Which command is used to view the users currently in the MySQL system?",
    "options": ["SHOW USERS", "SELECT user FROM mysql.user", "LIST USERS", "VIEW USERS"],
    "answer": 1
  },
  {
    "question": "MySQL belongs to which company?",
    "options": ["Microsoft", "Oracle", "Google", "Apple"],
    "answer": 1
  },
  {
    "question": "What is the difference between DELETE and TRUNCATE?",
    "options": ["TRUNCATE is slower", "DELETE can have a WHERE clause; TRUNCATE cannot", "TRUNCATE is DML; DELETE is DDL", "There is no difference"],
    "answer": 1
  },
  {
    "question": "A database schema represents:",
    "options": ["The data itself", "The logical structure of the database", "The server hardware", "The user's password"],
    "answer": 1
  },
  {
    "question": "Which statement is used to delete a database?",
    "options": ["REMOVE DATABASE", "DELETE DATABASE", "DROP DATABASE", "ERASE DATABASE"],
    "answer": 2
  }
]
};