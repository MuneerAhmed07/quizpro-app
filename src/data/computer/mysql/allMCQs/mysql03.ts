import { Quiz } from "../../../../types";

export const mysql03: Quiz = {
  id: "03-mysql03",
  title: "Computer Scenario-Based Questions",
  description: "ComputerScenario-Based Questions MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "A user reports that their computer turns on, fans spin, but the screen remains black with no \"Beep\" sound. What is the most likely culprit?",
    "options": ["Monitor power cable", "Faulty RAM or Motherboard", "Keyboard not plugged in", "Printer driver error"],
    "answer": 1
  },
  {
    "question": "You notice a PC is rebooting randomly throughout the day. You feel the back of the case and it is extremely hot. What should you check first?",
    "options": ["The Hard Drive speed", "The CPU fan and dust buildup", "The Mouse sensitivity", "The Windows Update history"],
    "answer": 1
  },
  {
    "question": "A staff member accidentally spilled water on their laptop. What is your immediate first step?",
    "options": ["Dry it with a hair dryer", "Turn it off and remove the power/battery immediately", "Restart it to see if it still works", "Put it in a bag of rice while it's turned on"],
    "answer": 1
  },
  {
    "question": "A printer is printing \"garbage\" characters and weird symbols instead of the document. What is the likely cause?",
    "options": ["Out of ink", "Incorrect or corrupted printer driver", "Paper jam", "The document is too long"],
    "answer": 1
  },
  {
    "question": "A user says their \"mouse is lagging\" on a wireless connection. You see multiple routers and microwaves nearby. What is the likely issue?",
    "options": ["Low battery or Signal interference", "The PC is too fast for the mouse", "Windows 10 is incompatible", "The mousepad is the wrong color"],
    "answer": 0
  },
  {
    "question": "A user can access internal office folders but cannot open Google or any website. What is the most likely problem?",
    "options": ["Their network cable is unplugged", "The DNS or Default Gateway is misconfigured", "Their PC is turned off", "The local file server is down"],
    "answer": 1
  },
  {
    "question": "You can ping a server's IP address (192.168.1.10) but you cannot ping it by its name \"Office-Server\". What needs fixing?",
    "options": ["The Network Card", "The DNS Server", "The IP Address", "The Router Hardware"],
    "answer": 1
  },
  {
    "question": "An entire department suddenly loses internet, but the rest of the office is fine. Where do you start troubleshooting?",
    "options": ["The Main ISP line", "The specific switch connecting that department", "Every single computer's RAM", "The Office website"],
    "answer": 1
  },
  {
    "question": "You find that a network cable is 150 meters long and the connection is dropping constantly. Why?",
    "options": ["Ethernet (Cat5/6) has a 100-meter limit", "The cable is too thin", "The color of the cable is wrong", "The internet is too fast for the cable"],
    "answer": 0
  },
  {
    "question": "A user's laptop connects to Wi-Fi but shows \"No Internet, Secured.\" They have a static IP set from their home network. What should you do?",
    "options": ["Change the Wi-Fi password", "Set the IPv4 settings to \"Obtain an IP address automatically\" (DHCP)", "Replace the Wi-Fi card", "Reinstall Windows"],
    "answer": 1
  },
  {
    "question": "You run a DELETE query without a WHERE clause by mistake. What happens?",
    "options": ["Only the first row is deleted", "An error message appears and nothing happens", "Every single record in the table is deleted", "The table itself is deleted"],
    "answer": 2
  },
  {
    "question": "The HR manager wants a list of employees who earn more than 50,000 AND work in 'Sales'. Which operator is needed?",
    "options": ["OR", "AND", "BETWEEN", "PLUS"],
    "answer": 1
  },
  {
    "question": "A database query is taking 30 seconds to load a simple list. What should you add to the table to speed it up?",
    "options": ["More rows", "An Index", "A new Primary Key", "A larger font"],
    "answer": 1
  },
  {
    "question": "You need to ensure that no two employees have the same \"Employee_ID\". Which constraint do you apply?",
    "options": ["NOT NULL", "DEFAULT", "PRIMARY KEY", "CHECK"],
    "answer": 2
  },
  {
    "question": "You are asked to provide a list of all products, including those that have never been ordered. Which Join do you use?",
    "options": ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"],
    "answer": 1
  },
  {
    "question": "A Windows PC shows the \"Blue Screen of Death\" (BSOD) immediately after a new RAM stick was installed. What is the first step?",
    "options": ["Reinstall Windows", "Remove the new RAM and test again", "Format the Hard Drive", "Buy a new monitor"],
    "answer": 1
  },
  {
    "question": "A user cannot open a .docx file. They do not have Microsoft Word installed. What is a free alternative you can suggest?",
    "options": ["Notepad", "Google Docs or LibreOffice", "Adobe Reader", "Paint"],
    "answer": 1
  },
  {
    "question": "You need to see which application is using 99% of the CPU. Which tool do you open?",
    "options": ["Control Panel", "Task Manager (Ctrl+Shift+Esc)", "Disk Management", "Device Manager"],
    "answer": 1
  },
  {
    "question": "A \"System Support Officer\" needs to run a command that requires administrative privileges. How should they open the CMD?",
    "options": ["Double click the icon", "Right-click and \"Run as Administrator\"", "Press F1", "Type 'Admin' inside the CMD"],
    "answer": 1
  },
  {
    "question": "A user's C: Drive is completely full. What is the safest way to clear space?",
    "options": ["Delete the Windows folder", "Run \"Disk Cleanup\" and delete temporary files", "Format the drive", "Delete the System32 folder"],
    "answer": 1
  },
  {
    "question": "A user receives an email asking them to \"Click here to verify your bank password\" immediately. What is this called?",
    "options": ["Spamming", "Phishing", "Hacking", "Cracking"],
    "answer": 1
  },
  {
    "question": "You find a USB drive in the office parking lot. What should you do?",
    "options": ["Plug it into your work PC to find the owner", "Give it to the IT Security department for safe scanning", "Format it and keep it for personal use", "Throw it in the trash"],
    "answer": 1
  },
  {
    "question": "An employee leaves the company. What is the most important IT task?",
    "options": ["Clean their desk", "Disable their user account and access immediately", "Delete all their emails", "Give their password to their manager"],
    "answer": 1
  },
  {
    "question": "You want to ensure that even if someone steals a laptop, they cannot read the data on the hard drive. What do you enable?",
    "options": ["A screensaver password", "Disk Encryption (e.g., BitLocker)", "An Antivirus", "A stronger Wi-Fi password"],
    "answer": 1
  },
  {
    "question": "A user keeps writing their password on a sticky note and putting it on their monitor. Why is this a problem?",
    "options": ["The sticky note might fall off", "It is a Physical Security risk", "It makes the monitor dirty", "It slows down the computer"],
    "answer": 1
  },
  {
    "question": "A manager wants to see the total of sales, but only for the \"East\" region. Which function should you use?",
    "options": ["SUM()", "SUMIF()", "COUNT()", "TOTAL()"],
    "answer": 1
  },
  {
    "question": "You have a list of 5,000 names and need to find duplicates quickly. Which feature helps?",
    "options": ["Bold text", "Conditional Formatting > Highlight Duplicate Values", "AutoSum", "Spell Check"],
    "answer": 1
  },
  {
    "question": "An Excel formula shows #VALUE!. What does this mean?",
    "options": ["The cell is too small", "You are trying to do math on a cell that contains text", "The formula is correct but the value is zero", "The computer is out of memory"],
    "answer": 1
  },
  {
    "question": "You want to keep the top row visible while you scroll down a long list. What do you use?",
    "options": ["Split Screen", "Freeze Panes", "Zoom Out", "Wrap Text"],
    "answer": 1
  },
  {
    "question": "Which chart is best for showing the percentage of a total budget?",
    "options": ["Line Chart", "Bar Chart", "Pie Chart", "Scatter Plot"],
    "answer": 2
  },
  {
    "question": "A server is scheduled for maintenance at 2:00 AM. Why is this time chosen?",
    "options": ["The IT staff likes working at night", "To minimize \"Downtime\" impact on users", "The internet is faster at night", "Electricity is cheaper at night"],
    "answer": 1
  },
  {
    "question": "You are asked to set up a \"Work from Home\" system. Which technology is most critical for secure access to the office files?",
    "options": ["A faster monitor", "VPN (Virtual Private Network)", "A high-quality webcam", "A wireless mouse"],
    "answer": 1
  },
  {
    "question": "A backup failed last night. What is your first action?",
    "options": ["Delete the old backups", "Check the error log to see why it failed", "Buy a new server", "Ignore it and wait for tonight"],
    "answer": 1
  },
  {
    "question": "You need to explain a technical problem to a non-technical manager. What is the best approach?",
    "options": ["Use high-level coding jargon", "Use simple analogies and focus on the business impact", "Tell them it's too complicated to explain", "Show them the raw database code"],
    "answer": 1
  },
  {
    "question": "A computer is \"Beeping\" in a specific pattern when it starts. What is it trying to tell you?",
    "options": ["It's happy", "It's a POST (Power-On Self-Test) error code", "The speakers are broken", "The music player is on"],
    "answer": 1
  },
  {
    "question": "You wrote a program that never stops running (Infinite Loop). Which key combination usually stops it in the terminal?",
    "options": ["Ctrl + S", "Ctrl + C", "Ctrl + Z", "Alt + F4"],
    "answer": 1
  },
  {
    "question": "In Python, you have x = \"5\" and y = 5. What happens if you try print(x + y)?",
    "options": ["10", "55", "TypeError (Cannot add string to integer)", "5"],
    "answer": 2
  },
  {
    "question": "You are writing a \"C\" program and forgot a semicolon ; at the end of a line. What kind of error is this?",
    "options": ["Runtime Error", "Syntax Error", "Logical Error", "Human Error"],
    "answer": 1
  },
  {
    "question": "You need to store a price like 19.99 in a C++ variable. Which data type is best?",
    "options": ["int", "float or double", "char", "bool"],
    "answer": 1
  },
  {
    "question": "A function in your code is supposed to calculate a value and give it back to the main program. Which keyword is missing?",
    "options": ["give", "return", "send", "exit"],
    "answer": 1
  },
  {
    "question": "You need to see if a remote server is \"alive\" on the network. Which command do you use?",
    "options": ["ipconfig", "ping", "tracert", "get-server"],
    "answer": 1
  },
  {
    "question": "A user's keyboard isn't working. You check and it's plugged in. What is the next logical step?",
    "options": ["Replace the motherboard", "Try the keyboard in a different USB port", "Reinstall Windows", "Buy a new PC"],
    "answer": 1
  },
  {
    "question": "You are installing a new software that requires 8GB of RAM, but the PC only has 4GB. What will happen?",
    "options": ["The PC will explode", "The software will run very slowly or not at all", "The PC will automatically download more RAM", "The monitor will turn off"],
    "answer": 1
  },
  {
    "question": "A user reports their internet is \"slow.\" You run a speed test and it shows 1 Mbps, but the office plan is 100 Mbps. Who should you contact?",
    "options": ["The Electric company", "The ISP (Internet Service Provider)", "The PC manufacturer", "The Janitor"],
    "answer": 1
  },
  {
    "question": "You need to create a folder that only \"Managers\" can open. Where do you set this?",
    "options": ["In the folder's \"Properties > Security\" tab (NTFS Permissions)", "By naming the folder \"Managers Only\"", "In the BIOS settings", "By hiding the folder"],
    "answer": 0
  },
  {
    "question": "An IP address is 169.254.0.1. What does this tell you about the PC?",
    "options": ["It is connected to the internet", "it failed to get an IP from the DHCP server (APIPA)", "It is a high-speed server", "The IP is manually set correctly"],
    "answer": 1
  },
  {
    "question": "You see a blue port on the back of a PC. What is it most likely for?",
    "options": ["USB 3.0", "Audio Out", "Power", "VGA"],
    "answer": 0
  },
  {
    "question": "A user wants to know if they should \"Shut down\" or \"Restart\" after a software update. What is better?",
    "options": ["Shut down", "Restart", "Log off", "Lock"],
    "answer": 1
  },
  {
    "question": "A staff member wants to send a 5GB video file via email. What do you advise?",
    "options": ["Just click send", "It is too large for email; use a Cloud link (Google Drive/OneDrive)", "Zip the file (it will become 10MB)", "Delete the file"],
    "answer": 1
  },
  {
    "question": "You are the System Support Officer. What is the most important trait when dealing with an angry user?",
    "options": ["Being loud", "Patience and clear communication", "Telling them it's their fault", "Walking away"],
    "answer": 1
  }
]
};