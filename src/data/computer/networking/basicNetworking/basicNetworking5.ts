import { Quiz } from "../../../../types";

export const basicNetworking5: Quiz = {
  id: "08-basic-networking-05",
  title: "Basic Computer Networking 05",
  description: "Basic Computer Networking",
  timeLimit: 3000,
  questions: [
  {
    "question": "Data Transmission in one direction only is called:",
    "options": ["Simplex", "Half-Duplex", "Full-Duplex", "Multiplex"],
    "answer": 0
  },
  {
    "question": "A Walkie-Talkie is an example of:",
    "options": ["Simplex", "Half-Duplex", "Full-Duplex", "Automatic"],
    "answer": 1
  },
  {
    "question": "Simultaneous communication in both directions is called:",
    "options": ["Simplex", "Half-Duplex", "Full-Duplex", "Dual-Simplex"],
    "answer": 2
  },
  {
    "question": "Which transmission media has the highest data rate?",
    "options": ["Twisted Pair", "Coaxial Cable", "Fiber optic", "Radio waves"],
    "answer": 2
  },
  {
    "question": "The loss in signal intensity as it travels through a medium is called:",
    "options": ["Noise", "Distortion", "Attenuation", "Reflection"],
    "answer": 2
  },
  {
    "question": "Unwanted electrical signals that interfere with data are called:",
    "options": ["Echo", "Noise", "Attenuation", "Jitter"],
    "answer": 1
  },
  {
    "question": "Which frequency is commonly used for Wi-Fi?",
    "options": ["1.2 GHz", "2.4 GHz", "10 GHz", "100 MHz"],
    "answer": 1
  },
  {
    "question": "What is the maximum length of a standard UTP CAT5e cable?",
    "options": ["50 meters", "100 meters", "200 meters", "500 meters"],
    "answer": 1
  },
  {
    "question": "Which device regenerates a signal to extend the distance of a network?",
    "options": ["Switch", "Hub", "Repeater", "Bridge"],
    "answer": 2
  },
  {
    "question": "\"Broadband\" refers to:",
    "options": ["Low speed data transmission", "High speed data transmission", "Voice only transmission", "Analog only transmission"],
    "answer": 1
  },
  {
    "question": "What does DNS stand for?",
    "options": ["Data Name System", "Digital Name System", "Domain Name System", "Domain Node Service"],
    "answer": 2
  },
  {
    "question": "DNS translates a domain name into what?",
    "options": ["Binary code", "MAC address", "IP address", "URL"],
    "answer": 2
  },
  {
    "question": "The \".com\" in a URL is known as:",
    "options": ["Protocol", "Subdomain", "Top-level Domain (TLD)", "Hostname"],
    "answer": 2
  },
  {
    "question": "Which organization manages IP address allocations?",
    "options": ["IEEE", "ICANN", "ISO", "W3C"],
    "answer": 1
  },
  {
    "question": "URL stands for:",
    "options": ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Link", "Uniform Reset Link"],
    "answer": 0
  },
  {
    "question": "A webpage is usually written in:",
    "options": ["HTTP", "HTML", "FTP", "SMTP"],
    "answer": 1
  },
  {
    "question": "Which protocol allows you to view webpages securely?",
    "options": ["HTTP", "FTP", "HTTPS", "SSH"],
    "answer": 2
  },
  {
    "question": "What is a cookie in web browsing?",
    "options": ["A virus", "A small text file stored by the website", "A hardware component", "An internet speed booster"],
    "answer": 1
  },
  {
    "question": "Which record in DNS maps a domain name to an IPv4 address?",
    "options": ["MX record", "CNAME record", "A record", "AAAA record"],
    "answer": 2
  },
  {
    "question": "Which record in DNS maps a domain name to an IPv6 address?",
    "options": ["A record", "MX record", "AAAA record", "NS record"],
    "answer": 2
  },
  {
    "question": "A system designed to prevent unauthorized access to a private network is a:",
    "options": ["Router", "Switch", "Firewall", "Gateway"],
    "answer": 2
  },
  {
    "question": "What does VPN stand for?",
    "options": ["Very Private Network", "Virtual Private Network", "Virtual Personal Network", "Verified Public Network"],
    "answer": 1
  },
  {
    "question": "Which software is used to detect and remove malicious software?",
    "options": ["Firewall", "Antivirus", "Browser", "Operating System"],
    "answer": 1
  },
  {
    "question": "What is “Phishing”?",
    "options": ["A way to catch network errors", "A fraudulent attempt to obtain sensitive info", "A method of data encryption", "A type of network topology"],
    "answer": 1
  },
  {
    "question": "Encryption is the process of:",
    "options": ["Deleting data", "Compressing data", "Converting plain text into cipher text", "Backing up data"],
    "answer": 2
  },
  {
    "question": "Which of the following is an example of a strong password?",
    "options": ["123456", "password", "P@ssw0rd2026!", "admin"],
    "answer": 2
  },
  {
    "question": "What is a “Denial of Service” (DoS) attack?",
    "options": ["Stealing a password", "Flooding a system to make it unavailable", "Spying on emails", "Fixing a server error"],
    "answer": 1
  },
  {
    "question": "What is a Trojan Horse?",
    "options": ["A helpful utility program", "Malicious software disguised as legitimate", "A high-speed router", "A type of firewall"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for secure remote login (replaces Telnet)?",
    "options": ["FTP", "HTTP", "SSH", "SNMP"],
    "answer": 2
  },
  {
    "question": "What is “WPA2” used for?",
    "options": ["Ethernet speed", "Web design", "Wi-Fi security", "IP addressing"],
    "answer": 2
  },
  {
    "question": "Which layer is responsible for error detection and correction?",
    "options": ["Network", "Data Link", "Physical", "Session"],
    "answer": 1
  },
  {
    "question": "What does “CRC” stand for?",
    "options": ["Central Redundancy Code", "Cyclic Redundancy Check", "Control Repeat Code", "Cipher Reset Check"],
    "answer": 1
  },
  {
    "question": "In TCP, what ensures data is sent at a rate the receiver can handle?",
    "options": ["Segmentation", "Flow control", "Error control", "Routing"],
    "answer": 1
  },
  {
    "question": "Which protocol uses a “3-way handshake” to establish a connection?",
    "options": ["UDP", "IP", "TCP", "ARP"],
    "answer": 2
  },
  {
    "question": "What is “Latency” in networking?",
    "options": ["The speed of the CPU", "The amount of data stored", "The delay in data delivery", "The number of users online"],
    "answer": 2
  },
  {
    "question": "ICMP is primarily used for:",
    "options": ["Transferring files", "Error reporting & diagnostics (e.g. Ping)", "Encrypting web traffic", "Assigning IP addresses"],
    "answer": 1
  },
  {
    "question": "The process of breaking data into smaller pieces is called:",
    "options": ["Encapsulation", "Routing", "Segmentation", "Compression"],
    "answer": 2
  },
  {
    "question": "What is “Bandwidth”?",
    "options": ["The length of a cable", "The maximum data transfer rate", "The number of routers in a network", "The time it takes to boot a PC"],
    "answer": 1
  },
  {
    "question": "Which method is used by Ethernet to handle collisions?",
    "options": ["CSMA/CA", "CSMA/CD", "Token Passing", "Polling"],
    "answer": 1
  },
  {
    "question": "Which method is used by wireless LANs (Wi-Fi) to handle collisions?",
    "options": ["CSMA/CD", "CSMA/CA", "ALOHA", "TDMA"],
    "answer": 1
  },
  {
    "question": "What is the full form of Mbps?",
    "options": ["Mega bytes per second", "Mega bits per second", "Multi bits per second", "Mega binary per second"],
    "answer": 1
  },
  {
    "question": "Which of the following is NOT a network operating system?",
    "options": ["Windows Server", "Linux", "MS-DOS", "UNIX"],
    "answer": 2
  },
  {
    "question": "What is an “intranet”?",
    "options": ["A public network like the internet", "A private network for an organization", "A network for only two people", "A network that doesn't use IP"],
    "answer": 1
  },
  {
    "question": "The “Ping” command uses which protocol?",
    "options": ["TCP", "UDP", "ICMP", "SMTP"],
    "answer": 2
  },
  {
    "question": "What is the length of a MAC Address?",
    "options": ["32 bits", "48 bits", "64 bits", "128 bits"],
    "answer": 1
  },
  {
    "question": "Which command is used to see the path a packet takes to a destination?",
    "options": ["IPCONFIG", "PING", "TRACERT / TRACEROUTE", "NETSTAT"],
    "answer": 2
  },
  {
    "question": "What is a “Default Gateway”?",
    "options": ["The IP of the host machine", "The IP of the DNS server", "The IP of the router connecting to other networks", "The MAC address of the switch"],
    "answer": 2
  },
  {
    "question": "How many layers are in the updated version of the TCP/IP model?",
    "options": ["4", "5", "6", "7"],
    "answer": 1
  },
  {
    "question": "Which device is used for connecting computers in a wireless network?",
    "options": ["Switch", "Modem", "Access Point (AP)", "Repeater"],
    "answer": 2
  },
  {
    "question": "The process of adding a header to data as it moves down the OSI layers is?",
    "options": ["Decapsulation", "Segmentation", "Encapsulation", "Translation"],
    "answer": 2
  }
]
};