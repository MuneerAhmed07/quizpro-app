import { Quiz } from "../../../../types";

export const basicNetworking07: Quiz = {
  id: "13-basic-networking-07",
  title: "Basic Computer Networking 07",
  description: "Basic Computer networking",
  timeLimit: 3000,
  questions: [
  {
    "question": "How many layers are in the OSI (Open System Interconnection) model?",
    "options": ["4", "5", "7", "9"],
    "answer": 2
  },
  {
    "question": "Which layer of the OSI model is responsible for routing data packets across different networks?",
    "options": ["Physical layer", "Data Link layer", "Network layer", "Transport layer"],
    "answer": 2
  },
  {
    "question": "HTTP, FTP, and SMTP operate at which OSI layer?",
    "options": ["Application layer", "Session layer", "Presentation layer", "Transport layer"],
    "answer": 0
  },
  {
    "question": "The \"Data Link\" layer is divided into which two sub-layers?",
    "options": ["TCP and UDP", "MAC and LLC", "IP and ICMP", "Segment and Packet"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to map a known logical IP address to a physical MAC address?",
    "options": ["DNS", "DHCP", "ARP (Address Resolution Protocol)", "FTP"],
    "answer": 2
  },
  {
    "question": "What is the Protocol Data Unit (PDU) used at the Transport layer?",
    "options": ["Bits", "Frames", "Packets", "Segments"],
    "answer": 3
  },
  {
    "question": "Which layer is responsible for the \"Error-free\" end-to-end delivery of data in the OSI model?",
    "options": ["Physical layer", "Network layer", "Transport layer", "Session layer"],
    "answer": 2
  },
  {
    "question": "\"Encryption\" and \"compression\" are primary functions of which OSI layer?",
    "options": ["Application", "Presentation", "Session", "Transport"],
    "answer": 1
  },
  {
    "question": "In the TCP/IP model, which layer directly corresponds to the OSI Network layer?",
    "options": ["Network Access", "Internet", "Transport", "Application"],
    "answer": 1
  },
  {
    "question": "Which network device operates primarily at the Data Link layer (Layer 2)?",
    "options": ["Hub", "Repeater", "Switch", "Router"],
    "answer": 2
  },
  {
    "question": "What is the size of an IPv4 address?",
    "options": ["32 bits", "48 bits", "64 bits", "128 bits"],
    "answer": 0
  },
  {
    "question": "What is the size of an IPv6 address?",
    "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
    "answer": 2
  },
  {
    "question": "Which IP address class is designed for very large networks?",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "answer": 0
  },
  {
    "question": "What is the default subnet mask for a Class C IP address?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    "answer": 2
  },
  {
    "question": "Which of the following is the standard \"loopback address\" used for testing?",
    "options": ["192.168.1.1", "127.0.0.1", "10.0.0.1", "169.254.0.1"],
    "answer": 1
  },
  {
    "question": "What does DHCP stand for?",
    "options": ["Dynamic Host Configuration Protocol", "Digital Hypertext Control Protocol", "Data Handling Connection Protocol", "Distributed Host Communication Process"],
    "answer": 0
  },
  {
    "question": "An IP address that starts with \"169.254.x.x\" is likely assigned by:",
    "options": ["A static configuration", "DNS", "APIPA (Automatic Private IP Addressing)", "A VPN"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to translate human-readable domain names into IP addresses?",
    "options": ["DHCP", "FTP", "DNS", "SNMP"],
    "answer": 2
  },
  {
    "question": "What is the primary purpose of a \"Subnet Mask\"?",
    "options": ["To hide the user's identity", "To distinguish between the network portion and host portion of an IP", "To speed up the internet", "To encrypt data packets"],
    "answer": 1
  },
  {
    "question": "Which of these is a valid Private IP address?",
    "options": ["8.8.8.8", "172.16.0.1", "200.100.50.1", "1.1.1.1"],
    "answer": 1
  },
  {
    "question": "Which transport layer protocol is considered \"Connection-oriented\"?",
    "options": ["UDP", "ICMP", "TCP", "ARP"],
    "answer": 2
  },
  {
    "question": "What is the standard Port number for unencrypted HTTP traffic?",
    "options": ["21", "25", "80", "443"],
    "answer": 2
  },
  {
    "question": "Which Port does HTTPS (Secure) use?",
    "options": ["80", "110", "443", "53"],
    "answer": 2
  },
  {
    "question": "Which protocol is used specifically to send emails from a client to a server?",
    "options": ["POP3", "IMAP", "SMTP", "SNMP"],
    "answer": 2
  },
  {
    "question": "The \"Ping\" command uses which protocol for its echo requests?",
    "options": ["TCP", "UDP", "ICMP", "HTTP"],
    "answer": 2
  },
  {
    "question": "Which protocol is characterized as \"Stateless\" and \"Connectionless\"?",
    "options": ["TCP", "FTP", "UDP", "SSH"],
    "answer": 2
  },
  {
    "question": "What is the default port number for SSH (Secure Shell)?",
    "options": ["21", "22", "23", "25"],
    "answer": 1
  },
  {
    "question": "Telnet sends data in clear text. Which port does it typically use?",
    "options": ["21", "22", "23", "80"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to transfer files between a client and a server?",
    "options": ["HTTP", "DNS", "FTP", "SMTP"],
    "answer": 2
  },
  {
    "question": "What is the Port number for DNS (Domain Name System)?",
    "options": ["20", "53", "67", "161"],
    "answer": 1
  },
  {
    "question": "Which device connects two different networks (e.g., your LAN to the Internet)?",
    "options": ["Hub", "Bridge", "Switch", "Router"],
    "answer": 3
  },
  {
    "question": "A Hub works at which layer of the OSI model?",
    "options": ["Physical layer", "Data Link layer", "Network layer", "Transport layer"],
    "answer": 0
  },
  {
    "question": "In which topology are all nodes connected to a single central cable?",
    "options": ["Star", "Mesh", "Bus", "Ring"],
    "answer": 2
  },
  {
    "question": "Which topology offers the highest redundancy and reliability?",
    "options": ["Bus", "Star", "Ring", "Mesh"],
    "answer": 3
  },
  {
    "question": "What is the maximum effective distance for a standard UTP (Unshielded Twisted Pair) cable?",
    "options": ["50 meters", "100 meters", "500 meters", "1 kilometer"],
    "answer": 1
  },
  {
    "question": "Which connector is commonly used for standard Ethernet (copper) cables?",
    "options": ["RJ-11", "BNC", "RJ-45", "USB-C"],
    "answer": 2
  },
  {
    "question": "Fiber optic cables transmit data using:",
    "options": ["Electrical signals", "Radio waves", "Light pulses", "Sound waves"],
    "answer": 2
  },
  {
    "question": "A \"Bridge\" is primarily used to:",
    "options": ["Connect a PC to a monitor", "Divide a network into segments to reduce traffic", "Provide a wireless signal", "Power a router"],
    "answer": 1
  },
  {
    "question": "What is a \"Gateway\" in networking?",
    "options": ["A type of firewall only", "A node that acts as an entrance to another network", "A specific type of cable", "A user password"],
    "answer": 1
  },
  {
    "question": "Which device reduces \"Collision Domains\" but maintains a single \"Broadcast Domain\"?",
    "options": ["Hub", "Switch", "Repeater", "Amplifier"],
    "answer": 1
  },
  {
    "question": "A \"Firewall\" is used for:",
    "options": ["Increasing CPU speed", "Monitoring & filtering incoming/outgoing traffic", "Storing website files", "Cleaning hardware"],
    "answer": 1
  },
  {
    "question": "What does VPN stand for?",
    "options": ["Visual Private Network", "Virtual Private Network", "Verified Proxy Node", "Variable Protocol Network"],
    "answer": 1
  },
  {
    "question": "Which command is used to trace the path a packet takes to reach a destination?",
    "options": ["ping", "netstat", "tracert (or traceroute)", "ipconfig"],
    "answer": 2
  },
  {
    "question": "What is \"MAC Filtering\"?",
    "options": ["Deleting old emails", "Allowing/Denying devices based on their physical address", "Changing the IP address", "Hiding the SSID"],
    "answer": 1
  },
  {
    "question": "Which command shows the current active network connections on a Windows PC?",
    "options": ["ipconfig", "nslookup", "netstat", "route print"],
    "answer": 2
  },
  {
    "question": "A \"Denial of Service\" (DoS) attack aims to:",
    "options": ["Steal passwords", "Make a service unavailable by overwhelming it with traffic", "Read private files", "Speed up a server"],
    "answer": 1
  },
  {
    "question": "What is the default Port for RDP (Remote Desktop Protocol)?",
    "options": ["22", "443", "3389", "8080"],
    "answer": 2
  },
  {
    "question": "In networking, what does \"Latency\" refer to?",
    "options": ["The amount of data per second", "The physical length of the cable", "The delay in data transmission", "The type of security used"],
    "answer": 2
  },
  {
    "question": "Which wireless security protocol is currently considered the most secure?",
    "options": ["WEP", "WPA", "WPA2/WPA3", "TKIP"],
    "answer": 2
  },
  {
    "question": "What is \"Bandwidth\"?",
    "options": ["The physical width of a router", "The maximum data transfer rate of a network", "The number of users on a network", "The length of a fiber cable"],
    "answer": 1
  }
]
};