import { Quiz } from "../../../../types";

export const mysql04: Quiz = {
  id: "04-mysql04",
  title: "Scenario-Based Questions for MySQL and Database Management.",
  description: "Scenario-Based Questions for MySQL and Database Management. MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "You are creating a \"Students\" table. You want to ensure that no two students can have the same Email address. Which constraint should you apply?",
    "options": ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
    "answer": 1
  },
  {
    "question": "You have a \"Sales\" table. You want the \"SaleDate\" column to automatically fill with today's date if the user leaves it blank. What do you use?",
    "options": ["AUTO_INCREMENT", "DEFAULT CURRENT_TIMESTAMP", "PRIMARY KEY", "INDEX"],
    "answer": 1
  },
  {
    "question": "In a \"Library\" database, you want to make sure a \"BookID\" in the \"Issues\" table actually exists in the \"Books\" table. What should you define?",
    "options": ["A Primary Key on Issues", "A Foreign Key on Issues(BookID)", "A Unique index on Books", "A Check constraint on Issues"],
    "answer": 1
  },
  {
    "question": "You are designing an \"Employees\" table. The \"Salary\" should never be a negative number. Which constraint is best for this?",
    "options": ["NOT NULL", "UNIQUE", "CHECK (Salary > 0)", "PRIMARY KEY"],
    "answer": 2
  },
  {
    "question": "A user tries to delete a record from the \"Departments\" table, but MySQL prevents it because there are employees assigned to that department. What is this concept called?",
    "options": ["Data Redundancy", "Referential Integrity", "Database Normalization", "Atomicity"],
    "answer": 1
  },
  {
    "question": "Your manager wants a list of all customers whose names start with 'S' and end with 'n' (e.g., Steven, Sultan). Which LIKE pattern is correct?",
    "options": ["LIKE 'S%n'", "LIKE 'S_n'", "LIKE '%Sn%'", "LIKE 'S*n'"],
    "answer": 0
  },
  {
    "question": "You need to generate a report showing the total revenue for each month. Which clause is mandatory in your query?",
    "options": ["ORDER BY", "GROUP BY", "LIMIT", "DISTINCT"],
    "answer": 1
  },
  {
    "question": "You are asked to find the 3rd highest salary in the company. Which query structure works in MySQL?",
    "options": ["SELECT Salary FROM Emp ORDER BY Salary DESC LIMIT 2, 1;", "SELECT MAX(Salary) FROM Emp WHERE Salary < 3;", "SELECT Salary FROM Emp LIMIT 3;", "SELECT TOP 3 Salary FROM Emp;"],
    "answer": 0
  },
  {
    "question": "You want to list all \"Products\" but only for those where the \"StockQuantity\" is between 10 and 50. Which operator is most efficient?",
    "options": ["IN", "BETWEEN", "EXISTS", "LIKE"],
    "answer": 1
  },
  {
    "question": "You need a list of employees who work in 'Sales' OR 'Marketing' AND were hired after 2024. How should you handle the logic?",
    "options": ["WHERE (Dept='Sales' OR Dept='Marketing') AND HireDate > '2024-01-01'", "WHERE Dept='Sales' OR Dept='Marketing' AND HireDate > '2024-01-01'", "WHERE Dept IN ('Sales', 'Marketing', '2024')", "WHERE Dept='Sales' AND Dept='Marketing'"],
    "answer": 0
  },
  {
    "question": "A specific SELECT query on a table with 1 million rows is taking 10 seconds to run. The query filters by \"National_ID\". What is the first thing you should check?",
    "options": ["If the computer has enough RAM", "If there is an INDEX on the \"National_ID\" column", "If the table is too colorful", "If the internet is slow"],
    "answer": 1
  },
  {
    "question": "You are told that the database is becoming slow because of duplicate data across multiple tables. Which process should you perform?",
    "options": ["Indexing", "Normalization", "Encryption", "Defragmentation"],
    "answer": 1
  },
  {
    "question": "You have a large table and you want to remove all 5 million rows instantly to start fresh. Which command is faster than DELETE?",
    "options": ["DROP TABLE", "TRUNCATE TABLE", "REMOVE ALL", "ALTER TABLE"],
    "answer": 1
  },
  {
    "question": "You want to see the \"execution plan\" of a query to understand why it is slow. Which keyword do you put before your SELECT statement?",
    "options": ["SHOW", "EXPLAIN", "DESCRIBE", "VIEW"],
    "answer": 1
  },
  {
    "question": "Your database keeps crashing during high traffic. You notice many \"Read\" operations. What could help reduce the load on the main database?",
    "options": ["Deleting the data", "Creating a Database Cache or Read Replicas", "Changing the Primary Key", "Increasing the font size of the code"],
    "answer": 1
  },
  {
    "question": "You are transferring 1,000 PKR from Account A to Account B. Halfway through, the power goes out. Which ACID property ensures the money isn't lost or doubled?",
    "options": ["Atomicity", "Consistency", "Isolation", "Durability"],
    "answer": 0
  },
  {
    "question": "You made a mistake in a transaction and haven't typed COMMIT yet. How do you undo the changes?",
    "options": ["UNDO", "ROLLBACK", "DELETE", "EXIT"],
    "answer": 1
  },
  {
    "question": "You need to give a new intern the ability to see data in the \"Orders\" table, but they should not be able to change or delete anything. Which command do you use?",
    "options": ["GRANT ALL ON Orders TO 'intern';", "GRANT SELECT ON Orders TO 'intern';", "ALLOW intern TO SEE Orders;", "REVOKE DELETE ON Orders FROM 'intern';"],
    "answer": 1
  },
  {
    "question": "You suspect someone is trying to perform an \"SQL Injection\" attack on your login form. What is the best way to prevent this in your code?",
    "options": ["Using Prepared Statements (Parameterized Queries)", "Making the password longer", "Using a different font", "Hiding the database name"],
    "answer": 0
  },
  {
    "question": "You want to keep a log of every time a price is changed in the \"Products\" table. What database object should you create to automate this?",
    "options": ["A View", "A Trigger", "An Index", "A Stored Procedure"],
    "answer": 1
  },
  {
    "question": "You have a \"Customers\" table and an \"Orders\" table. You want to see a list of ALL customers, including those who have never placed an order. Which Join is required?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
    "answer": 1
  },
  {
    "question": "You want to find employees who earn more than their own managers. This requires comparing a table to itself. What is this called?",
    "options": ["INNER JOIN", "SELF JOIN", "OUTER JOIN", "AUTO JOIN"],
    "answer": 1
  },
  {
    "question": "You have two queries: one for \"Old_Customers\" and one for \"New_Customers\". You want to see them in a single combined list without duplicates. Which keyword do you use?",
    "options": ["JOIN", "UNION", "UNION ALL", "INTERSECT"],
    "answer": 1
  },
  {
    "question": "You want to find the \"Total Sales\" for each \"Region,\" but you only want to see regions where the total is greater than 1 million. Which clause do you use for the 1 million filter?",
    "options": ["WHERE", "HAVING", "GROUP BY", "LIMIT"],
    "answer": 1
  },
  {
    "question": "A column \"Discount\" has some NULL values. You want to display '0' instead of 'NULL' in your report. Which function helps?",
    "options": ["NULLIF()", "IFNULL(Discount, 0)", "ISNULL()", "ZEROIF()"],
    "answer": 1
  },
  {
    "question": "You are told to perform a \"Logical Backup\" of a MySQL database so it can be moved to another server. Which tool do you use?",
    "options": ["MySQL Workbench", "mysqldump", "MySQL Router", "Ping"],
    "answer": 1
  },
  {
    "question": "You find that a table has \"orphaned\" records (orders belonging to a customer who was deleted). How could you have prevented this?",
    "options": ["Using a Primary Key", "Using \"ON DELETE CASCADE\" on the Foreign Key", "Using a Trigger", "By not deleting customers"],
    "answer": 1
  },
  {
    "question": "You need to change the \"Department\" of all employees in 'HR' to 'Human Resources'. Which query is correct?",
    "options": ["UPDATE Employees SET Department = 'Human Resources' WHERE Department = 'HR';", "ALTER Employees SET Department = 'Human Resources';", "MODIFY Employees WHERE Dept = 'HR';", "CHANGE Employees HR TO Human Resources;"],
    "answer": 0
  },
  {
    "question": "You want to create a \"Virtual Table\" that shows only the Names and Phone Numbers of employees so you don't have to write the full query every time. What do you create?",
    "options": ["A Subquery", "A View", "A Backup", "A Schema"],
    "answer": 1
  },
  {
    "question": "You are running out of disk space on the database server. You notice the \"Binary Logs\" are taking up 50GB. What are these logs used for?",
    "options": ["Storing images", "Point-in-time recovery and Replication", "Storing user passwords", "Speeding up SELECT queries"],
    "answer": 1
  },
  {
    "question": "A user reports they cannot connect to the MySQL database. You check the server and it is running. What is the next logical thing to check?",
    "options": ["The user's RAM", "The Firewall and the MySQL port (3306)", "The color of the network cable", "The user's monitor resolution"],
    "answer": 1
  },
  {
    "question": "You try to insert '2024-15-40' into a DATE column. MySQL gives an error. Why?",
    "options": ["The date is in the future", "It is an invalid date (15th month and 40th day don't exist)", "MySQL only accepts years after 2025", "You need to use a string type"],
    "answer": 1
  },
  {
    "question": "You want to store a user's biography which could be very long (5,000 words). Which data type is most appropriate?",
    "options": ["CHAR", "VARCHAR(50)", "TEXT", "INT"],
    "answer": 2
  },
  {
    "question": "A \"Student\" can take many \"Courses,\" and a \"Course\" can have many \"Students.\" What type of relationship is this?",
    "options": ["One-to-One", "One-to-Many", "Many-to-Many", "None"],
    "answer": 2
  },
  {
    "question": "To implement the Many-to-Many relationship above, what do you need?",
    "options": ["A Primary Key in the Student table", "A third \"Junction\" or \"Link\" table", "A very large VARCHAR column", "A View"],
    "answer": 1
  },
  {
    "question": "You have a table \"Employees\" and \"Passport_Details.\" Each employee has exactly one passport. What relationship is this?",
    "options": ["One-to-One", "One-to-Many", "Many-to-Many", "Single-to-Single"],
    "answer": 0
  },
  {
    "question": "You are building a \"Comment\" system for a blog. One \"Post\" can have many \"Comments.\" What relationship is this?",
    "options": ["One-to-One", "One-to-Many", "Many-to-Many", "Recursive"],
    "answer": 1
  },
  {
    "question": "You want to delete a user but keep their \"Posts\" and mark them as 'Anonymous'. What logic should you use?",
    "options": ["ON DELETE CASCADE", "ON DELETE SET NULL", "ON DELETE RESTRICT", "DROP TABLE"],
    "answer": 1
  },
  {
    "question": "You forgot the \"root\" password for your MySQL server. What is the general process to fix this?",
    "options": ["Reinstall Windows", "Restart MySQL with --skip-grant-tables", "Delete the database files", "Ask the ISP"],
    "answer": 1
  },
  {
    "question": "You see many \"Sleep\" connections in the SHOW PROCESSLIST. What does this mean?",
    "options": ["The database is dreaming", "Applications are opening connections but not closing them", "The server is about to crash", "The users are idle"],
    "answer": 1
  },
  {
    "question": "You need to duplicate a table \"Staff\" including its data into a new table \"Staff_Backup\". Which query is fastest?",
    "options": ["CREATE TABLE Staff_Backup AS SELECT * FROM Staff;", "INSERT INTO Staff_Backup SELECT * FROM Staff;", "COPY TABLE Staff TO Staff_Backup;", "SELECT * INTO Staff_Backup FROM Staff;"],
    "answer": 0
  },
  {
    "question": "Which MySQL storage engine is preferred for transactions and foreign keys?",
    "options": ["MyISAM", "InnoDB", "Memory", "CSV"],
    "answer": 1
  },
  {
    "question": "You want to see which version of MySQL is currently running. Which command works?",
    "options": ["SELECT VERSION();", "SHOW VERSION;", "VERSION --CHECK;", "GET VERSION;"],
    "answer": 0
  },
  {
    "question": "You need to store the value 0.0000001. Which data type is best?",
    "options": ["INT", "FLOAT or DECIMAL", "VARCHAR", "BIGINT"],
    "answer": 1
  },
  {
    "question": "You want to select all users whose \"Age\" is NOT between 20 and 30. Which is correct?",
    "options": ["WHERE Age NOT BETWEEN 20 AND 30", "WHERE Age < 20 OR Age > 30", "Both A and B", "WHERE Age != 20-30"],
    "answer": 2
  },
  {
    "question": "What happens if you try to insert a string 'Hello' into an INT column?",
    "options": ["It becomes 0", "It gives an error", "It works fine", "The table is deleted"],
    "answer": 1
  },
  {
    "question": "You want to sort a list of names but you want 'Z' to come first. What do you use?",
    "options": ["ORDER BY Name ASC", "ORDER BY Name DESC", "SORT Name Z-A", "GROUP BY Name"],
    "answer": 1
  },
  {
    "question": "You want to find the total number of \"Orders\" placed in the last 24 hours. Which condition is correct?",
    "options": ["WHERE OrderDate > NOW() - INTERVAL 1 DAY", "WHERE OrderDate = TODAY", "WHERE OrderDate < 24", "WHERE OrderDate IS RECENT"],
    "answer": 0
  }
]
};