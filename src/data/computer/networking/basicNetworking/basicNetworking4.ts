import { Quiz } from "../../../../types";

export const basicNetworking4: Quiz = {
  id: "07-basic-networking-04",
  title: "Basic Computer Networking 04",
  description: "Basic Computer Networking",
  timeLimit: 3000,
  questions: [
  {
    "question": "What is the full form of LAN?",
    "options": ["Local Access Network", "Local Area Network", "Logical Area Network", "Low Area Network"],
    "answer": 1
  },
  {
    "question": "Which network covers a city or a large campus?",
    "options": ["PAN", "LAN", "MAN", "WAN"],
    "answer": 2
  },
  {
    "question": "The collection of interconnected networks is called:",
    "options": ["Intranet", "Extranet", "Internet", "Ethernet"],
    "answer": 2
  },
  {
    "question": "Which topology requires a central controller or hub?",
    "options": ["Mesh", "Star", "Bus", "Ring"],
    "answer": 1
  },
  {
    "question": "In which topology is every node connected to every other node?",
    "options": ["Bus", "Star", "Mesh", "Ring"],
    "answer": 2
  },
  {
    "question": "What is the full form of WAN?",
    "options": ["Wide Area Network", "World Area Network", "Wireless Area Network", "Web Area Network"],
    "answer": 0
  },
  {
    "question": "A Bluetooth connection is an example of:",
    "options": ["LAN", "MAN", "PAN", "WAN"],
    "answer": 2
  },
  {
    "question": "Which device is used to connect two different types of networks?",
    "options": ["Repeater", "Bridge", "Hub", "Gateway"],
    "answer": 3
  },
  {
    "question": "The physical layout of a network is called its:",
    "options": ["Protocol", "Topology", "Architecture", "Routing"],
    "answer": 1
  },
  {
    "question": "Which topology uses a single backbone cable?",
    "options": ["Star", "Ring", "Bus", "Mesh"],
    "answer": 2
  },
  {
    "question": "How many layers are in the OSI model?",
    "options": ["4", "5", "7", "8"],
    "answer": 2
  },
  {
    "question": "Which layer is responsible for routing data packets?",
    "options": ["Transport Layer", "Data Link Layer", "Network Layer", "Physical Layer"],
    "answer": 2
  },
  {
    "question": "HTTP operates at which layer of the OSI Model?",
    "options": ["Transport", "Network", "Session", "Application"],
    "answer": 3
  },
  {
    "question": "What is the Data Link Layer unit of data called?",
    "options": ["Segment", "Packet", "Frame", "Bit"],
    "answer": 2
  },
  {
    "question": "Which layer provides end-to-end communication services?",
    "options": ["Network", "Transport", "Data Link", "Physical"],
    "answer": 1
  },
  {
    "question": "Which layer is responsible for character encoding and data compression?",
    "options": ["Application", "Session", "Presentation", "Network"],
    "answer": 2
  },
  {
    "question": "Which layer deals with the mechanical and electrical specifications of the interface?",
    "options": ["Data Link", "Physical", "Network", "Transport"],
    "answer": 1
  },
  {
    "question": "The standard TCP/IP model has how many layers?",
    "options": ["3", "4", "5", "7"],
    "answer": 1
  },
  {
    "question": "IP (Internet Protocol) belongs to which layer of the OSI model?",
    "options": ["Data Link", "Network", "Transport", "Session"],
    "answer": 1
  },
  {
    "question": "MAC Address works at which layer?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 1
  },
  {
    "question": "What is the default port number for HTTP?",
    "options": ["21", "25", "80", "443"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to transfer files between a client and server?",
    "options": ["SMTP", "FTP", "HTTP", "SNMP"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for sending emails?",
    "options": ["POP3", "IMAP", "SMTP", "FTP"],
    "answer": 2
  },
  {
    "question": "Which protocol automatically assigns IP addresses to devices?",
    "options": ["DNS", "ARP", "DHCP", "ICMP"],
    "answer": 2
  },
  {
    "question": "What is the port number for HTTPS?",
    "options": ["80", "110", "443", "53"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to map an IP address to a MAC address?",
    "options": ["DNS", "RARP", "ARP", "DHCP"],
    "answer": 2
  },
  {
    "question": "What is the port number for DNS?",
    "options": ["22", "23", "53", "67"],
    "answer": 2
  },
  {
    "question": "Which protocol is “connectionless”?",
    "options": ["TCP", "UDP", "FTP", "HTTP"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for remote terminal access (unsecured)?",
    "options": ["SSH", "Telnet", "SNMP", "SFTP"],
    "answer": 1
  },
  {
    "question": "What is the port number for SSH?",
    "options": ["21", "22", "23", "25"],
    "answer": 1
  },
  {
    "question": "Which device works at the physical layer and simply repeats signals?",
    "options": ["Switch", "Bridge", "Hub", "Router"],
    "answer": 2
  },
  {
    "question": "A switch is also known as a:",
    "options": ["Multiport Repeater", "Multipoint bridge", "Multiport Gateway", "Single port hub"],
    "answer": 1
  },
  {
    "question": "Which device connects different networks and makes routing decisions?",
    "options": ["Hub", "Switch", "Router", "Bridge"],
    "answer": 2
  },
  {
    "question": "Which device converts digital signals to analog and vice versa?",
    "options": ["Router", "Modem", "NIC", "Bridge"],
    "answer": 1
  },
  {
    "question": "NIC stands for:",
    "options": ["Network Internal Card", "Network Interface Card", "Networking Internet Connection", "Node Interface Card"],
    "answer": 1
  },
  {
    "question": "Which device reduces traffic by dividing a network into segments?",
    "options": ["Hub", "Repeater", "Bridge", "Modem"],
    "answer": 2
  },
  {
    "question": "What is the standard connector used for Ethernet cables?",
    "options": ["RJ-11", "RJ-45", "BNC", "USB-C"],
    "answer": 1
  },
  {
    "question": "Which cable consists of a glass or plastic core?",
    "options": ["Coaxial", "UTP", "STP", "Fiber optic"],
    "answer": 3
  },
  {
    "question": "Which device is “intelligent” and sends data only to the intended port?",
    "options": ["Hub", "Repeater", "Switch", "Bridge"],
    "answer": 2
  },
  {
    "question": "How many wires are inside a standard UTP Ethernet cable?",
    "options": ["4", "6", "8", "10"],
    "answer": 2
  },
  {
    "question": "How many bits are in an IPv4 address?",
    "options": ["16 bits", "32 bits", "48 bits", "64 bits"],
    "answer": 1
  },
  {
    "question": "How many bits are in an IPv6 address?",
    "options": ["32", "48", "64", "128"],
    "answer": 3
  },
  {
    "question": "Which IP address class is used for large organizations (16 million hosts)?",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "answer": 0
  },
  {
    "question": "What is the range of Class “C” IP addresses?",
    "options": ["1–126", "128–191", "192–223", "224–239"],
    "answer": 2
  },
  {
    "question": "Which address is used for loopback testing?",
    "options": ["192.168.1.1", "127.0.0.1", "10.0.0.1", "0.0.0.0"],
    "answer": 1
  },
  {
    "question": "What is the default subnet mask for a Class “B” address?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    "answer": 1
  },
  {
    "question": "IPv6 addresses are written in which format?",
    "options": ["Binary", "Dotted Decimal", "Hexadecimal", "Octal"],
    "answer": 2
  },
  {
    "question": "Class “D” IP addresses are reserved for?",
    "options": ["Experimental use", "Government use", "Multicasting", "Broadcasting"],
    "answer": 2
  },
  {
    "question": "How many octets are in an IPv4 address?",
    "options": ["2", "3", "4", "6"],
    "answer": 2
  },
  {
    "question": "Which of the following is a Private IP address?",
    "options": ["8.8.8.8", "172.16.0.1", "11.0.0.1", "200.1.1.1"],
    "answer": 1
  }
]
};