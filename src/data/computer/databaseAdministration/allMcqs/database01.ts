import { Quiz } from "../../../../types";

export const database01: Quiz = {
  id: "01-dabase",
  title: "Basic MySQL",
  description: "Basic MySQL MCQs",
  timeLimit: 6000,
  questions: [
  {
    "question": "What is the primary responsibility of a Database Administrator (DBA)?",
    "options": ["Writing front-end HTML code", "Ensuring data availability, integrity, and security", "Designing marketing logos", "Selling hardware"],
    "answer": 1
  },
  {
    "question": "Which command is used to check the status of the MySQL service on a Linux server?",
    "options": ["service mysql status", "check mysql", "mysql --verify", "status mysql"],
    "answer": 0
  },
  {
    "question": "What is a \"Schema\" in database administration?",
    "options": ["The physical hard drive", "The logical structure and organization of data", "A type of virus", "A backup file"],
    "answer": 1
  },
  {
    "question": "When installing MySQL, which user account is created by default with full privileges?",
    "options": ["Admin", "System", "Root", "Super"],
    "answer": 2
  },
  {
    "question": "Which file is the primary configuration file for MySQL on Linux?",
    "options": ["config.php", "my.cnf", "mysql.ini", "boot.ini"],
    "answer": 1
  },
  {
    "question": "What is \"Metadata\"?",
    "options": ["Large video files", "Data about data (e.g., table structures)", "Encrypted passwords", "Deleted records"],
    "answer": 1
  },
  {
    "question": "Which tool provides a GUI for managing MySQL databases?",
    "options": ["MySQL Workbench", "Notepad", "Command Prompt", "VLC Player"],
    "answer": 0
  },
  {
    "question": "What does \"Instance\" mean in DBA terms?",
    "options": ["A single table", "The background processes and memory structures of the DB", "A quick query", "A database error"],
    "answer": 1
  },
  {
    "question": "Why should a DBA use a \"Staging Server\"?",
    "options": ["To play games", "To test changes before applying them to Production", "To store personal photos", "To host the public website"],
    "answer": 1
  },
  {
    "question": "The standard SQL command to create a new user is:",
    "options": ["ADD USER", "NEW USER", "CREATE USER", "MAKE USER"],
    "answer": 2
  },
  {
    "question": "Which command grants a user the ability to only read data?",
    "options": ["GRANT ALL", "GRANT SELECT", "GRANT READ", "ALLOW SELECT"],
    "answer": 1
  },
  {
    "question": "What is the \"Principle of Least Privilege\"?",
    "options": ["Giving users full access", "Giving users only the minimum access needed for their job", "Giving access to everyone", "Having no passwords"],
    "answer": 1
  },
  {
    "question": "Which command removes a specific privilege from a user?",
    "options": ["DELETE", "REMOVE", "REVOKE", "CANCEL"],
    "answer": 2
  },
  {
    "question": "Where does MySQL store user account and privilege information?",
    "options": ["In the mysql system database", "In a text file on the desktop", "In the information_schema", "In the performance_schema"],
    "answer": 0
  },
  {
    "question": "To apply privilege changes immediately without restarting, which command is used?",
    "options": ["REFRESH", "RELOAD", "FLUSH PRIVILEGES", "UPDATE"],
    "answer": 2
  },
  {
    "question": "What is \"SQL Injection\"?",
    "options": ["A way to speed up queries", "A security attack where malicious code is inserted into queries", "A database backup method", "A type of data join"],
    "answer": 1
  },
  {
    "question": "Which command is used to delete a user account?",
    "options": ["REMOVE USER", "DROP USER", "DELETE USER", "CLEAR USER"],
    "answer": 1
  },
  {
    "question": "What is \"Data Masking\"?",
    "options": ["Hiding sensitive data (like credit card numbers) from unauthorized users", "Deleting data", "Compressing data", "Encrypting the whole drive"],
    "answer": 0
  },
  {
    "question": "Which of the following is a strong password policy for a DBA?",
    "options": ["Using \"password123\"", "Minimum 12 characters with symbols, numbers, and cases", "Using the username as the password", "No password for root"],
    "answer": 1
  },
  {
    "question": "What is an \"Audit Log\"?",
    "options": ["A record of who accessed what data and when", "A list of table names", "A backup file", "A query optimizer"],
    "answer": 0
  },
  {
    "question": "What is a \"Full Backup\"?",
    "options": ["A backup of only new changes", "A complete copy of the entire database", "A backup of one table", "A backup of the configuration file"],
    "answer": 1
  },
  {
    "question": "What is an \"Incremental Backup\"?",
    "options": ["A backup of only the data changed since the last backup", "A backup that deletes old data", "A very slow backup", "A backup of the operating system"],
    "answer": 0
  },
  {
    "question": "Which MySQL utility is used to create a logical backup?",
    "options": ["mysqladmin", "mysqldump", "mysqlcheck", "mysqllog"],
    "answer": 1
  },
  {
    "question": "What is a \"Hot Backup\"?",
    "options": ["A backup taken while the database is online and running", "A backup that is very fast", "A backup taken after a server fire", "A backup stored on a USB"],
    "answer": 0
  },
  {
    "question": "What is \"Point-in-Time Recovery\" (PITR)?",
    "options": ["Restoring a database to a specific second in the past", "Restoring only the tables", "Restoring the hardware", "Deleting data until a certain point"],
    "answer": 0
  },
  {
    "question": "Which log file is essential for Point-in-Time Recovery in MySQL?",
    "options": ["Error Log", "General Log", "Binary Log (binlog)", "Slow Query Log"],
    "answer": 2
  },
  {
    "question": "What does \"RTO\" (Recovery Time Objective) mean?",
    "options": ["How much data you can lose", "How quickly you must recover after a failure", "The size of the backup", "The cost of the server"],
    "answer": 1
  },
  {
    "question": "What does \"RPO\" (Recovery Point Objective) mean?",
    "options": ["The time it takes to fix the PC", "The maximum age of files that must be recovered (allowable data loss)", "The location of the backup", "The password of the DBA"],
    "answer": 1
  },
  {
    "question": "What is a \"Cold Backup\"?",
    "options": ["A backup taken while the database is shut down", "A backup stored in a freezer", "A backup of old data", "An automated backup"],
    "answer": 0
  },
  {
    "question": "Where should backups be stored for maximum safety?",
    "options": ["On the same hard drive as the DB", "On an off-site or cloud location", "In the Recycle Bin", "On a sticky note"],
    "answer": 1
  },
  {
    "question": "Which command shows currently running queries and their duration?",
    "options": ["SHOW QUERIES", "SHOW PROCESSLIST", "DISPLAY STATUS", "VIEW LOGS"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the \"Slow Query Log\"?",
    "options": ["To slow down the database", "To identify queries that take a long time to execute", "To log all successful logins", "To store deleted data"],
    "answer": 1
  },
  {
    "question": "What is \"Index Fragmentation\"?",
    "options": ["When an index becomes scattered and inefficient over time", "When a table is deleted", "When a query is too long", "A type of security breach"],
    "answer": 0
  },
  {
    "question": "Which command helps optimize a table by reclaiming unused space?",
    "options": ["REFRESH TABLE", "OPTIMIZE TABLE", "CLEAN TABLE", "FIX TABLE"],
    "answer": 1
  },
  {
    "question": "What is \"Query Execution Plan\"?",
    "options": ["A list of future queries", "The steps the DB engine takes to run a query", "A backup schedule", "A user manual"],
    "answer": 1
  },
  {
    "question": "In MySQL, which keyword provides the Execution Plan?",
    "options": ["ANALYZE", "SHOW", "EXPLAIN", "DESC"],
    "answer": 2
  },
  {
    "question": "What is \"Buffer Pool\" in InnoDB?",
    "options": ["A place to store logs", "A memory area for caching data and indexes", "A physical disk partition", "A group of users"],
    "answer": 1
  },
  {
    "question": "What happens if the innodb_buffer_pool_size is set too low?",
    "options": ["The DB runs faster", "More disk I/O occurs, slowing down the DB", "The DB uses less disk space", "No impact"],
    "answer": 1
  },
  {
    "question": "What is \"Throughput\" in database monitoring?",
    "options": ["The color of the server", "The number of transactions processed per second", "The length of the password", "The number of tables"],
    "answer": 1
  },
  {
    "question": "Which tool is used for real-time Linux system monitoring (CPU/Memory)?",
    "options": ["top (or htop)", "notepad", "mysql_config", "fdisk"],
    "answer": 0
  },
  {
    "question": "Which storage engine is the default for MySQL 8.0?",
    "options": ["MyISAM", "InnoDB", "Memory", "CSV"],
    "answer": 1
  },
  {
    "question": "Which storage engine does NOT support transactions?",
    "options": ["InnoDB", "MyISAM", "BDB", "Cluster"],
    "answer": 1
  },
  {
    "question": "What is the main benefit of the MEMORY storage engine?",
    "options": ["Extreme speed (stores data in RAM)", "Permanent storage", "Supports large videos", "Encrypts data"],
    "answer": 0
  },
  {
    "question": "What is a \"Deadlock\"?",
    "options": ["A very strong password", "When two transactions block each other indefinitely", "A deleted table", "A disconnected cable"],
    "answer": 1
  },
  {
    "question": "What does \"ACID\" stand for in database theory?",
    "options": ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Always, Clean, Internal, Database", "All, Columns, In, Dictionary"],
    "answer": 0
  },
  {
    "question": "Which ACID property ensures a transaction is \"all or nothing\"?",
    "options": ["Consistency", "Atomicity", "Isolation", "Durability"],
    "answer": 1
  },
  {
    "question": "What is \"Normalization\"?",
    "options": ["Deleting old data", "Organizing data to reduce redundancy", "Speeding up a computer", "A backup technique"],
    "answer": 1
  },
  {
    "question": "What is \"Denormalization\"?",
    "options": ["Fixing errors", "Intentionally adding redundancy to improve read performance", "Deleting indexes", "Reinstalling MySQL"],
    "answer": 1
  },
  {
    "question": "What is a \"Primary Key\"?",
    "options": ["Any column", "A unique identifier for each row", "A column with names", "A secret password"],
    "answer": 1
  },
  {
    "question": "What is a \"Foreign Key\"?",
    "options": ["A key from another country", "A column that links to a Primary Key in another table", "A password for guests", "A deleted index"],
    "answer": 1
  },
  {
    "question": "What is \"Database Replication\"?",
    "options": ["Deleting the DB", "Copying data from one server (Master) to another (Slave/Replica)", "Writing code twice", "Renaming a table"],
    "answer": 1
  },
  {
    "question": "In Master-Slave replication, where do \"Write\" operations usually go?",
    "options": ["To the Slave", "To the Master", "To both equally", "To the backup drive"],
    "answer": 1
  },
  {
    "question": "What is the main purpose of \"Read Replicas\"?",
    "options": ["To store logs", "To offload \"Read\" queries and improve performance", "To take up space", "To act as a primary server"],
    "answer": 1
  },
  {
    "question": "What is \"Failover\"?",
    "options": ["When a query fails", "Automatically switching to a standby server when the primary fails", "A type of error message", "Uninstalling the DB"],
    "answer": 1
  },
  {
    "question": "What is \"Load Balancing\"?",
    "options": ["Weighing the server", "Distributing traffic across multiple servers", "Deleting slow queries", "Increasing RAM"],
    "answer": 1
  },
  {
    "question": "What is a \"Database Cluster\"?",
    "options": ["A group of connected servers acting as a single system", "A mess of tables", "A single backup file", "A type of index"],
    "answer": 0
  },
  {
    "question": "What does \"High Availability\" (HA) mean?",
    "options": ["The database is very tall", "The database is operational and accessible 99.99% of the time", "The database is expensive", "The database has many users"],
    "answer": 1
  },
  {
    "question": "What is \"Horizontal Scaling\"?",
    "options": ["Adding more RAM to one server", "Adding more servers to the system", "Rotating the server", "Deleting columns"],
    "answer": 1
  },
  {
    "question": "What is \"Vertical Scaling\"?",
    "options": ["Adding more servers", "Adding more CPU/RAM to an existing server", "Creating more tables", "Making the monitor bigger"],
    "answer": 1
  },
  {
    "question": "What is \"Data Sharding\"?",
    "options": ["Deleting data", "Breaking a large database into smaller, faster pieces across servers", "Encrypting data", "Backing up data"],
    "answer": 1
  },
  {
    "question": "A user cannot connect and gets \"Too many connections\". What should the DBA increase?",
    "options": ["RAM", "max_connections system variable", "Hard drive space", "CPU speed"],
    "answer": 1
  },
  {
    "question": "Which command is used to repair a corrupted MyISAM table?",
    "options": ["REPAIR TABLE", "FIX TABLE", "MEND TABLE", "UPDATE TABLE"],
    "answer": 0
  },
  {
    "question": "What should a DBA do if the \"Disk Full\" error occurs?",
    "options": ["Delete the database", "Purge old logs and expand storage", "Restart the computer", "Change the password"],
    "answer": 1
  },
  {
    "question": "What is \"Database Bloat\"?",
    "options": ["Too many users", "Unnecessary disk space usage due to deleted/updated rows not being reclaimed", "A large font size", "High CPU usage"],
    "answer": 1
  },
  {
    "question": "Which command shows the storage engine used by each table?",
    "options": ["SHOW ENGINES", "SHOW TABLE STATUS", "SHOW CREATE TABLE", "Both B and C"],
    "answer": 3
  },
  {
    "question": "What is the \"Error Log\" used for?",
    "options": ["Storing user data", "Recording startup/shutdown and critical server failures", "Listing all SELECT queries", "Tracking employee hours"],
    "answer": 1
  },
  {
    "question": "What is \"General Query Log\"?",
    "options": ["Only errors", "A log of every single query sent to the server (use with caution)", "A backup", "A list of users"],
    "answer": 1
  },
  {
    "question": "What is a \"Long-Running Transaction\"?",
    "options": ["A transaction that finishes in 1ms", "A transaction that stays open for a long time, potentially locking tables", "A backup", "A type of index"],
    "answer": 1
  },
  {
    "question": "How do you stop a specific runaway query in MySQL?",
    "options": ["Turn off the server", "Use KILL [process_id]", "Delete the table", "Press Escape"],
    "answer": 1
  },
  {
    "question": "What is the risk of \"Auto-Increment\" overflow?",
    "options": ["The server gets faster", "The ID reaches its maximum limit and new records cannot be inserted", "The data gets deleted", "The computer restarts"],
    "answer": 1
  },
  {
    "question": "What is a \"Stored Procedure\"?",
    "options": ["A manual for DBAs", "A set of SQL statements stored and executed on the server", "A type of hard drive", "A backup schedule"],
    "answer": 1
  },
  {
    "question": "What is a \"Trigger\"?",
    "options": ["A button on the server", "Code that automatically runs in response to an Insert, Update, or Delete", "A type of error", "A fast query"],
    "answer": 1
  },
  {
    "question": "What is a \"View\"?",
    "options": ["A physical table", "A virtual table based on a SELECT query", "A way to see the server", "A backup file"],
    "answer": 1
  },
  {
    "question": "What is a \"Materialized View\"?",
    "options": ["A view that is not real", "A view whose results are physically stored to improve performance", "A deleted view", "A text file"],
    "answer": 1
  },
  {
    "question": "What is \"Partitioning\"?",
    "options": ["Dividing a large table into smaller physical pieces for performance", "Deleting half a table", "Sharing a password", "Installing two databases"],
    "answer": 0
  },
  {
    "question": "What is \"Data Migration\"?",
    "options": ["Deleting data", "Moving data from one system to another", "Backing up data", "Sorting data"],
    "answer": 1
  },
  {
    "question": "What is \"ETL\" in data administration?",
    "options": ["Every Table List", "Extract, Transform, Load", "Easy Table Logic", "Entry Time Log"],
    "answer": 1
  },
  {
    "question": "What is a \"Data Warehouse\"?",
    "options": ["A room full of servers", "A large database used for reporting and analysis rather than daily transactions", "A backup folder", "An old database"],
    "answer": 1
  },
  {
    "question": "What is \"Data Integrity\"?",
    "options": ["The speed of the data", "The accuracy and consistency of data", "The size of the data", "The color of the data"],
    "answer": 1
  },
  {
    "question": "What is a \"Constraint\"?",
    "options": ["A rule applied to data (like NOT NULL)", "A slow server", "A limited user", "A type of cable"],
    "answer": 0
  },
  {
    "question": "What is \"Amazon RDS\"?",
    "options": ["A type of PC", "A Managed Database Service in the cloud", "A programming language", "An antivirus"],
    "answer": 1
  },
  {
    "question": "What is the benefit of a \"Managed\" database service?",
    "options": ["The user has to do everything", "The provider handles backups, patching, and scaling", "It is free", "It is only for games"],
    "answer": 1
  },
  {
    "question": "What is \"NoSQL\"?",
    "options": ["A database with no speed", "Non-relational databases (like MongoDB)", "A database with no tables", "A broken SQL server"],
    "answer": 1
  },
  {
    "question": "When would you use a NoSQL database?",
    "options": ["For strictly structured banking data", "For unstructured, high-volume data like social media feeds", "For small Excel files", "Never"],
    "answer": 1
  },
  {
    "question": "What is \"In-Memory Database\" (e.g., Redis)?",
    "options": ["A database that remembers passwords", "A database that stores all data in RAM for sub-millisecond response", "A database on a USB stick", "A backup"],
    "answer": 1
  },
  {
    "question": "What is \"Database as a Service\" (DBaaS)?",
    "options": ["Buying a server", "Cloud-based database access on a subscription basis", "Hiring a DBA", "Using Excel"],
    "answer": 1
  },
  {
    "question": "What is \"Data Sovereignty\"?",
    "options": ["Data being the boss", "Legal requirement that data is subject to the laws of the country where it is stored", "Encrypting data", "Deleting data"],
    "answer": 1
  },
  {
    "question": "What is \"Multi-Tenancy\"?",
    "options": ["Many DBAs on one server", "A single instance of software serving multiple customers/groups", "Having many hard drives", "Using many languages"],
    "answer": 1
  },
  {
    "question": "What is \"Auto-Scaling\"?",
    "options": ["Automatically writing code", "Automatically increasing resources (CPU/RAM) based on traffic", "Automatically deleting data", "Automatically restarting"],
    "answer": 1
  },
  {
    "question": "What is a \"Containerized Database\" (e.g., Docker)?",
    "options": ["A database in a box", "Running a database inside a lightweight, portable container", "A physical server", "A backup zip file"],
    "answer": 1
  },
  {
    "question": "You suspect a data breach. What is your first action?",
    "options": ["Format the drive", "Isolate the affected system and follow the incident response plan", "Ignore it", "Tell the users it's fine"],
    "answer": 1
  },
  {
    "question": "How often should a DBA test their backups?",
    "options": ["Never", "Regularly (Monthly/Quarterly) to ensure they actually work", "Only after a crash", "Once every 10 years"],
    "answer": 1
  },
  {
    "question": "What is \"Data Retention Policy\"?",
    "options": ["How fast data is saved", "Rules on how long data must be kept before being deleted", "A backup password", "A type of index"],
    "answer": 1
  },
  {
    "question": "What is \"Cold Data\"?",
    "options": ["Data stored in a freezer", "Data that is rarely accessed but must be kept", "Deleted data", "New data"],
    "answer": 1
  },
  {
    "question": "What is \"Hot Data\"?",
    "options": ["Data from a fire", "Frequently accessed data that needs high performance", "Illegal data", "Temporary data"],
    "answer": 1
  },
  {
    "question": "Why use \"Connection Pooling\"?",
    "options": ["To allow everyone to see the data", "To reuse existing database connections and reduce overhead", "To delete connections", "To encrypt the line"],
    "answer": 1
  },
  {
    "question": "What is \"Database Hardening\"?",
    "options": ["Dropping the server", "Securing a database by removing unnecessary features and closing vulnerabilities", "Increasing the RAM", "Making the password longer"],
    "answer": 1
  },
  {
    "question": "What is \"Shadow IT\"?",
    "options": ["IT work done at night", "Use of IT systems/software without explicit organizational approval", "A type of backup", "A dark theme for MySQL"],
    "answer": 1
  },
  {
    "question": "What is \"Uptime\"?",
    "options": ["The time the DBA wakes up", "The percentage of time a system is fully functional", "The time spent writing queries", "The speed of the CPU"],
    "answer": 1
  },
  {
    "question": "Which of these is the most important skill for a DBA during a system crash?",
    "options": ["Panic", "Calmness and methodical troubleshooting", "Typing fast", "Blaming the hardware"],
    "answer": 1
  }
]
};