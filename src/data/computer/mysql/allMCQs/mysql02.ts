import { Quiz } from "../../../../types";

export const mysql02: Quiz = {
  id: "02-mysql02",
  title: "SQL Query Logic",
  description: "SQL Query Logic MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which query selects all columns from a table named \"Employees\"?",
    "options": [
      "SELECT ALL FROM Employees;",
      "SELECT * FROM Employees;",
      "SHOW * FROM Employees;",
      "FETCH * FROM Employees;"
    ],
    "answer": 1
  },
  {
    "question": "Which query returns only the \"Name\" and \"Salary\" of employees?",
    "options": [
      "SELECT Name, Salary FROM Employees;",
      "SELECT (Name, Salary) FROM Employees;",
      "SELECT Name & Salary FROM Employees;",
      "SELECT Name AND Salary FROM Employees;"
    ],
    "answer": 0
  },
  {
    "question": "How do you select employees whose salary is greater than 50,000?",
    "options": [
      "SELECT * FROM Employees WHERE Salary > 50000;",
      "SELECT * FROM Employees HAVING Salary > 50000;",
      "SELECT * FROM Employees IF Salary > 50000;",
      "SELECT * FROM Employees WHERE Salary IS 50000+;"
    ],
    "answer": 0
  },
  {
    "question": "Which query finds employees whose name starts with the letter 'A'?",
    "options": [
      "SELECT * FROM Employees WHERE Name LIKE 'A%';",
      "SELECT * FROM Employees WHERE Name = 'A*';",
      "SELECT * FROM Employees WHERE Name LIKE '%A';",
      "SELECT * FROM Employees WHERE Name IN ('A');"
    ],
    "answer": 0
  },
  {
    "question": "Which query lists all unique departments from the \"Employees\" table?",
    "options": [
      "SELECT UNIQUE Department FROM Employees;",
      "SELECT DISTINCT Department FROM Employees;",
      "SELECT DIFFERENT Department FROM Employees;",
      "SELECT ONLY Department FROM Employees;"
    ],
    "answer": 1
  },
  {
    "question": "Which query sorts employees by \"Salary\" from highest to lowest?",
    "options": [
      "SELECT * FROM Employees SORT BY Salary DESC;",
      "SELECT * FROM Employees ORDER BY Salary DESC;",
      "SELECT * FROM Employees ORDER BY Salary ASC;",
      "SELECT * FROM Employees GROUP BY Salary DESC;"
    ],
    "answer": 1
  },
  {
    "question": "How do you select only the top 5 highest-paid employees?",
    "options": [
      "SELECT * FROM Employees ORDER BY Salary DESC TOP 5;",
      "SELECT * FROM Employees LIMIT 5 ORDER BY Salary DESC;",
      "SELECT * FROM Employees ORDER BY Salary DESC LIMIT 5;",
      "SELECT TOP 5 * FROM Employees;"
    ],
    "answer": 2
  },
  {
    "question": "Which query sorts by \"Dept\" alphabetically and then by \"Salary\" descending?",
    "options": [
      "ORDER BY Dept, Salary DESC;",
      "ORDER BY Dept ASC, Salary DESC;",
      "ORDER BY Dept AND Salary DESC;",
      "Both A and B are correct;"
    ],
    "answer": 3
  },
  {
    "question": "How do you find the record with the 2nd highest salary?",
    "options": [
      "SELECT * FROM Employees ORDER BY Salary DESC LIMIT 1, 1;",
      "SELECT * FROM Employees ORDER BY Salary DESC LIMIT 2;",
      "SELECT * FROM Employees WHERE Salary = MAX-1;",
      "SELECT * FROM Employees LIMIT 2, 1;"
    ],
    "answer": 0
  },
  {
    "question": "Which query selects records where the \"City\" is either 'London' or 'Paris'?",
    "options": [
      "SELECT * FROM Employees WHERE City IN ('London', 'Paris');",
      "SELECT * FROM Employees WHERE City = 'London' OR 'Paris';",
      "SELECT * FROM Employees WHERE City LIKE 'London', 'Paris';",
      "SELECT * FROM Employees WHERE City IS ('London' AND 'Paris');"
    ],
    "answer": 0
  },
  {
    "question": "Which query finds the total number of employees in each department?",
    "options": [
      "SELECT Department, COUNT(*) FROM Employees GROUP BY Department;",
      "SELECT Department, SUM(*) FROM Employees GROUP BY Department;",
      "SELECT COUNT(*) FROM Employees;",
      "SELECT Department, COUNT() FROM Employees;"
    ],
    "answer": 0
  },
  {
    "question": "How do you find the maximum salary in the \"IT\" department?",
    "options": [
      "SELECT MAX(Salary) FROM Employees WHERE Department = 'IT';",
      "SELECT Salary FROM Employees WHERE Department = 'IT' LIMIT 1;",
      "SELECT HIGH(Salary) FROM Employees WHERE Department = 'IT';",
      "SELECT SUM(Salary) FROM Employees GROUP BY 'IT';"
    ],
    "answer": 0
  },
  {
    "question": "Which query shows departments that have more than 10 employees?",
    "options": [
      "SELECT Department FROM Employees WHERE COUNT(*) > 10 GROUP BY Department;",
      "SELECT Department FROM Employees GROUP BY Department HAVING COUNT(*) > 10;",
      "SELECT Department FROM Employees GROUP BY Department WHERE COUNT(*) > 10;",
      "SELECT Department FROM Employees HAVING COUNT() > 10;"
    ],
    "answer": 1
  },
  {
    "question": "What is the query to calculate the average age of all employees?",
    "options": [
      "SELECT MEAN(Age) FROM Employees;",
      "SELECT AVG(Age) FROM Employees;",
      "SELECT SUM(Age)/COUNT(Age) FROM Employees;",
      "Both B and C;"
    ],
    "answer": 3
  },
  {
    "question": "Which query finds the total salary paid to all employees?",
    "options": [
      "SELECT COUNT(Salary) FROM Employees;",
      "SELECT SUM(Salary) FROM Employees;",
      "SELECT TOTAL(Salary) FROM Employees;",
      "SELECT ADD(Salary) FROM Employees;"
    ],
    "answer": 1
  },
  {
    "question": "Which query performs an Inner Join between \"Orders\" and \"Customers\" on \"CustomerID\"?",
    "options": [
      "SELECT * FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      "SELECT * FROM Orders, Customers WHERE Orders.ID = Customers.ID;",
      "SELECT * FROM Orders INNER JOIN Customers;",
      "SELECT * FROM Orders PLUS Customers;"
    ],
    "answer": 0
  },
  {
    "question": "How do you select all customers, even those who haven't placed an order?",
    "options": [
      "SELECT * FROM Customers INNER JOIN Orders;",
      "SELECT * FROM Customers LEFT JOIN Orders ON Customers.ID = Orders.CustomerID;",
      "SELECT * FROM Customers RIGHT JOIN Orders ON Customers.ID = Orders.CustomerID;",
      "SELECT * FROM Customers JOIN Orders WHERE Orders.ID IS NULL;"
    ],
    "answer": 1
  },
  {
    "question": "Which query returns names of employees whose salary is above the average salary?",
    "options": [
      "SELECT Name FROM Employees WHERE Salary > AVG(Salary);",
      "SELECT Name FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);",
      "SELECT Name FROM Employees HAVING Salary > AVG(Salary);",
      "SELECT Name FROM Employees WHERE Salary > MAX(Salary);"
    ],
    "answer": 1
  },
  {
    "question": "How do you combine the results of two queries and remove duplicates?",
    "options": [
      "SELECT * FROM Table1 UNION ALL SELECT * FROM Table2;",
      "SELECT * FROM Table1 UNION SELECT * FROM Table2;",
      "SELECT * FROM Table1 JOIN Table2;",
      "SELECT * FROM Table1 INTERSECT Table2;"
    ],
    "answer": 1
  },
  {
    "question": "Which query finds employees who do NOT belong to any department (NULL)?",
    "options": [
      "SELECT * FROM Employees WHERE Dept = NULL;",
      "SELECT * FROM Employees WHERE Dept IS NULL;",
      "SELECT * FROM Employees WHERE Dept NOT NULL;",
      "SELECT * FROM Employees WHERE Dept = '';"
    ],
    "answer": 1
  },
  {
    "question": "How do you insert a new record into the \"Users\" table?",
    "options": [
      "ADD INTO Users VALUES (1, 'Ali');",
      "INSERT INTO Users VALUES (1, 'Ali');",
      "INSERT Users (ID, Name) VALUES (1, 'Ali');",
      "Both B and C are correct;"
    ],
    "answer": 3
  },
  {
    "question": "Which query updates the salary of employee ID 101 to 60,000?",
    "options": [
      "UPDATE Employees SET Salary = 60000 WHERE ID = 101;",
      "MODIFY Employees SET Salary = 60000 WHERE ID = 101;",
      "CHANGE Employees SALARY = 60000 WHERE ID = 101;",
      "UPDATE Employees WHERE ID = 101 SALARY = 60000;"
    ],
    "answer": 0
  },
  {
    "question": "How do you delete all employees from the \"Sales\" department?",
    "options": [
      "REMOVE FROM Employees WHERE Dept = 'Sales';",
      "DELETE FROM Employees WHERE Dept = 'Sales';",
      "DROP FROM Employees WHERE Dept = 'Sales';",
      "TRUNCATE Employees WHERE Dept = 'Sales';"
    ],
    "answer": 1
  },
  {
    "question": "Which command is used to add a new column \"Phone\" to the \"Users\" table?",
    "options": [
      "UPDATE TABLE Users ADD Phone VARCHAR(15);",
      "ALTER TABLE Users ADD Phone VARCHAR(15);",
      "MODIFY TABLE Users ADD Phone VARCHAR(15);",
      "ALTER TABLE Users INSERT Phone VARCHAR(15);"
    ],
    "answer": 1
  },
  {
    "question": "How do you change the data type of column \"Age\" to FLOAT?",
    "options": [
      "ALTER TABLE Employees MODIFY Age FLOAT;",
      "ALTER TABLE Employees CHANGE Age FLOAT;",
      "UPDATE Employees SET Age AS FLOAT;",
      "Both A and B (depending on SQL version);"
    ],
    "answer": 3
  },
  {
    "question": "Find employees whose name has 'a' as the second letter:",
    "options": [
      "WHERE Name LIKE '_a%';",
      "WHERE Name LIKE 'a_%';",
      "WHERE Name LIKE '%a_';",
      "WHERE Name LIKE 'a%';"
    ],
    "answer": 0
  },
  {
    "question": "Find names ending with 'son':",
    "options": [
      "WHERE Name LIKE 'son%';",
      "WHERE Name LIKE '%son';",
      "WHERE Name LIKE '_son';",
      "WHERE Name = '*son';"
    ],
    "answer": 1
  },
  {
    "question": "Select salaries between 3000 and 5000:",
    "options": [
      "WHERE Salary BETWEEN 3000 AND 5000;",
      "WHERE Salary >= 3000 AND Salary <= 5000;",
      "Both A and B are correct;",
      "WHERE Salary IN (3000, 5000);"
    ],
    "answer": 2
  },
  {
    "question": "Select customers from 'USA' or 'UK' or 'Canada':",
    "options": [
      "WHERE Country IN ('USA', 'UK', 'Canada');",
      "WHERE Country = 'USA' OR 'UK' OR 'Canada';",
      "WHERE Country LIKE ('USA%', 'UK%', 'Canada%');",
      "WHERE Country = 'USA' AND 'UK';"
    ],
    "answer": 0
  },
  {
    "question": "Select records where \"Address\" is NOT empty:",
    "options": [
      "WHERE Address != '';",
      "WHERE Address IS NOT NULL;",
      "WHERE Address <> NULL;",
      "Both A and B;"
    ],
    "answer": 3
  },
  {
    "question": "How to get the current date in MySQL?",
    "options": [
      "SELECT CURRENT_DATE();",
      "SELECT CURDATE();",
      "SELECT NOW();",
      "All of the above;"
    ],
    "answer": 3
  },
  {
    "question": "Query to find the length of the string in \"Username\":",
    "options": [
      "SELECT LENGTH(Username) FROM Users;",
      "SELECT LEN(Username) FROM Users;",
      "SELECT SIZE(Username) FROM Users;",
      "SELECT COUNT(Username) FROM Users;"
    ],
    "answer": 0
  },
  {
    "question": "Query to convert \"Name\" to uppercase:",
    "options": [
      "SELECT UPPER(Name) FROM Employees;",
      "SELECT UCASE(Name) FROM Employees;",
      "Both A and B;",
      "SELECT MAX(Name) FROM Employees;"
    ],
    "answer": 2
  },
  {
    "question": "Query to extract the first 3 characters of \"Name\":",
    "options": [
      "SELECT SUBSTRING(Name, 1, 3) FROM Employees;",
      "SELECT LEFT(Name, 3) FROM Employees;",
      "SELECT MID(Name, 1, 3) FROM Employees;",
      "All of the above;"
    ],
    "answer": 3
  },
  {
    "question": "Query to round the \"Price\" to 2 decimal places:",
    "options": [
      "SELECT ROUND(Price, 2) FROM Products;",
      "SELECT DECIMAL(Price, 2) FROM Products;",
      "SELECT FORMAT(Price, 2) FROM Products;",
      "Both A and C;"
    ],
    "answer": 3
  },
  {
    "question": "Command to see the structure of table \"Products\":",
    "options": [
      "SHOW Products;",
      "DESC Products;",
      "EXPLAIN Products;",
      "Both B and C;"
    ],
    "answer": 3
  },
  {
    "question": "Command to rename table \"OldTable\" to \"NewTable\":",
    "options": [
      "RENAME TABLE OldTable TO NewTable;",
      "ALTER TABLE OldTable RENAME NewTable;",
      "UPDATE TABLE NAME OldTable NewTable;",
      "Both A and B;"
    ],
    "answer": 3
  },
  {
    "question": "How to delete a database named \"TestDB\"?",
    "options": [
      "DELETE DATABASE TestDB;",
      "DROP DATABASE TestDB;",
      "REMOVE DATABASE TestDB;",
      "TRUNCATE DATABASE TestDB;"
    ],
    "answer": 1
  },
  {
    "question": "Query to count how many records are in \"Orders\":",
    "options": [
      "SELECT COUNT(*) FROM Orders;",
      "SELECT COUNT(1) FROM Orders;",
      "SELECT SUM(1) FROM Orders;",
      "Both A and B;"
    ],
    "answer": 3
  },
  {
    "question": "Select the first 10 characters of a description field:",
    "options": [
      "SELECT LEFT(Description, 10);",
      "SELECT SUBSTR(Description, 1, 10);",
      "Both A and B;",
      "SELECT LIMIT(Description, 10);"
    ],
    "answer": 2
  },
  {
    "question": "Find the highest salary without using MAX():",
    "options": [
      "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1;",
      "SELECT Salary FROM Employees WHERE Salary > All;",
      "SELECT TOP 1 Salary FROM Employees;",
      "SELECT Salary FROM Employees ORDER BY Salary ASC LIMIT 1;"
    ],
    "answer": 0
  },
  {
    "question": "Find the total salary by Department where total is > 100,000:",
    "options": [
      "SELECT Dept, SUM(Salary) FROM Emp GROUP BY Dept HAVING SUM(Salary) > 100000;",
      "SELECT Dept, SUM(Salary) FROM Emp WHERE SUM(Salary) > 100000;",
      "SELECT Dept, SUM(Salary) FROM Emp GROUP BY Dept WHERE Salary > 100000;",
      "SELECT Dept FROM Emp HAVING SUM(Salary) > 100000;"
    ],
    "answer": 0
  },
  {
    "question": "Get the Day from a Date field \"OrderDate\":",
    "options": [
      "SELECT DAY(OrderDate);",
      "SELECT EXTRACT(DAY FROM OrderDate);",
      "Both A and B;",
      "SELECT DATE_PART(OrderDate, 'day');"
    ],
    "answer": 2
  },
  {
    "question": "Join three tables (A, B, C):",
    "options": [
      "SELECT * FROM A JOIN B ON A.id=B.id JOIN C ON B.id=C.id;",
      "SELECT * FROM A, B, C WHERE A.id=B.id AND B.id=C.id;",
      "Both A and B;",
      "SELECT * FROM A PLUS B PLUS C;"
    ],
    "answer": 2
  },
  {
    "question": "Find users who signed up today:",
    "options": [
      "WHERE SignupDate = CURDATE();",
      "WHERE SignupDate = TODAY();",
      "WHERE SignupDate = NOW();",
      "WHERE SignupDate = DATE();"
    ],
    "answer": 0
  },
  {
    "question": "Result of SELECT 5 + NULL;",
    "options": [
      "5",
      "0",
      "NULL",
      "Error"
    ],
    "answer": 2
  },
  {
    "question": "Result of SELECT '10' + 10; in MySQL:",
    "options": [
      "20",
      "1010",
      "Error",
      "NULL"
    ],
    "answer": 0
  },
  {
    "question": "How to replace 'IT' with 'Tech' in the Dept column in a result set?",
    "options": [
      "SELECT REPLACE(Dept, 'IT', 'Tech') FROM Employees;",
      "SELECT UPDATE(Dept, 'IT', 'Tech') FROM Employees;",
      "SELECT Dept = 'Tech' WHERE Dept = 'IT';",
      "SELECT CHANGE(Dept, 'IT', 'Tech');"
    ],
    "answer": 0
  },
  {
    "question": "Which query selects the last 5 records from a table?",
    "options": [
      "SELECT * FROM Table ORDER BY ID DESC LIMIT 5;",
      "SELECT * FROM Table LIMIT -5;",
      "SELECT * FROM Table ORDER BY ID ASC LIMIT 5;",
      "SELECT BOTTOM 5 * FROM Table;"
    ],
    "answer": 0
  },
  {
    "question": "How to find records where \"Email\" contains '@gmail.com'?",
    "options": [
      "WHERE Email LIKE '%@gmail.com%';",
      "WHERE Email = '*@gmail.com';",
      "WHERE Email LIKE '@gmail.com%';",
      "WHERE Email IN ('@gmail.com');"
    ],
    "answer": 0
  }
]
};