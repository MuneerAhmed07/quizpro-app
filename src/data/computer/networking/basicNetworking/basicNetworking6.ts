import { Quiz } from "../../../../types";

export const basicNetworking06: Quiz = {
  id: "12-basic-networking-06",
  title: "Basic Computer Networking 06",
  description: "Basic Computer networking",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which layer of the OSI model is responsible for logical addressing?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 2
  },
  {
    "question": "What is the data unit at the Data Link Layer?",
    "options": ["Bit", "Frame", "Packet", "Segment"],
    "answer": 1
  },
  {
    "question": "Which protocol works at the Application layer of the TCP/IP model?",
    "options": ["IP", "TCP", "FTP", "UDP"],
    "answer": 2
  },
  {
    "question": "The process-to-process delivery of the entire message is the responsibility of which layer?",
    "options": ["Network", "Transport", "Session", "Physical"],
    "answer": 1
  },
  {
    "question": "Which device operates at Layer 3 (Network) of the OSI model?",
    "options": ["Hub", "Switch", "Bridge", "Router"],
    "answer": 3
  },
  {
    "question": "How many layers are in the OSI model?",
    "options": ["4", "5", "7", "9"],
    "answer": 2
  },
  {
    "question": "Which layer provides the interface between the user and the network?",
    "options": ["Presentation", "Session", "Application", "Physical"],
    "answer": 2
  },
  {
    "question": "Which layer is responsible for data encryption and compression?",
    "options": ["Application", "Presentation", "Session", "Transport"],
    "answer": 1
  },
  {
    "question": "Which layer of the OSI model handles error detection and flow control between adjacent nodes?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 1
  },
  {
    "question": "Which layer deals with mechanical and electrical specifications?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 0
  },
  {
    "question": "What is the size of an IPv4 address?",
    "options": ["16 bits", "32 bits", "64 bits", "128 bits"],
    "answer": 1
  },
  {
    "question": "What is the bit length of an IPv6 address?",
    "options": ["32 bits", "48 bits", "64 bits", "128 bits"],
    "answer": 3
  },
  {
    "question": "The /24 CIDR notation corresponds to which subnet mask?",
    "options": ["255.255.0.0", "255.255.255.0", "255.255.255.128", "255.255.255.192"],
    "answer": 1
  },
  {
    "question": "Which range represents Class \"B\" Private IP addresses?",
    "options": ["10.0.0.0 – 10.255.255.255", "172.16.0.0 – 172.31.255.255", "192.168.0.0 – 192.168.255.255", "169.254.0.0 – 169.254.255.255"],
    "answer": 1
  },
  {
    "question": "What is the maximum number of hosts in a \"/30\" subnet?",
    "options": ["1", "2", "4", "6"],
    "answer": 1
  },
  {
    "question": "In a Class \"C\" network, how many bits are used for the Network ID?",
    "options": ["8", "16", "24", "32"],
    "answer": 2
  },
  {
    "question": "What is the loop-back address for IPv4?",
    "options": ["0.0.0.0", "127.0.0.1", "192.168.1.1", "255.255.255.255"],
    "answer": 1
  },
  {
    "question": "The range 224.0.0.0 to 239.255.255.255 is reserved for?",
    "options": ["Private use", "Experimental use", "Multicast", "Loopback"],
    "answer": 2
  },
  {
    "question": "What is the broadcast address for the network 192.168.1.0/24?",
    "options": ["192.168.1.1", "192.168.1.0", "192.168.1.254", "192.168.1.255"],
    "answer": 3
  },
  {
    "question": "Which protocol is used to map an IP address to a MAC address?",
    "options": ["DNS", "DHCP", "ARP", "ICMP"],
    "answer": 2
  },
  {
    "question": "Which protocol is considered \"connectionless\"?",
    "options": ["TCP", "UDP", "FTP", "HTTP"],
    "answer": 1
  },
  {
    "question": "Port \"80\" is used by which service?",
    "options": ["HTTPS", "HTTP", "SMTP", "DNS"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for sending emails?",
    "options": ["POP3", "IMAP", "SMTP", "SNMP"],
    "answer": 2
  },
  {
    "question": "Which protocol provides secure remote access to a network device?",
    "options": ["Telnet", "SSH", "FTP", "TFTP"],
    "answer": 1
  },
  {
    "question": "The well-known port number for DNS is:",
    "options": ["21", "25", "53", "443"],
    "answer": 2
  },
  {
    "question": "What is the standard port for HTTPS?",
    "options": ["80", "110", "443", "3389"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to automatically assign IP addresses to hosts?",
    "options": ["ARP", "DNS", "DHCP", "RARP"],
    "answer": 2
  },
  {
    "question": "Which protocol is used by the \"Ping\" command?",
    "options": ["TCP", "UDP", "ICMP", "IGMP"],
    "answer": 2
  },
  {
    "question": "Which port is used by FTP Data Transfer?",
    "options": ["20", "21", "22", "23"],
    "answer": 0
  },
  {
    "question": "Which protocol is used for transferring files in a simple, low-overhead way without authentication?",
    "options": ["FTP", "SFTP", "HTTP", "TFTP"],
    "answer": 3
  },
  {
    "question": "Which routing protocol uses the \"Dijkstra\" algorithm?",
    "options": ["RIP", "OSPF", "EIGRP", "BGP"],
    "answer": 1
  },
  {
    "question": "Which of the following is a \"Distance Vector\" routing protocol?",
    "options": ["OSPF", "IS-IS", "RIP", "BGP"],
    "answer": 2
  },
  {
    "question": "The Spanning Tree Protocol (STP) is defined in which IEEE standard?",
    "options": ["802.11", "802.3", "802.1D", "802.1Q"],
    "answer": 2
  },
  {
    "question": "What is the \"Administrative Distance\" (AD) of a directly connected route?",
    "options": ["0", "1", "90", "110"],
    "answer": 0
  },
  {
    "question": "What is the default \"Administrative Distance\" of OSPF?",
    "options": ["90", "100", "110", "120"],
    "answer": 2
  },
  {
    "question": "A switch creates a separate ________ for each port?",
    "options": ["Broadcast Domain", "Collision Domain", "Subnet", "VLAN"],
    "answer": 1
  },
  {
    "question": "Which switching method starts forwarding a frame as soon as the destination address is read?",
    "options": ["Store-and-forward", "Cut-through", "Fragment-free", "Adaptive switching"],
    "answer": 1
  },
  {
    "question": "The physical address of a network interface card (NIC) is also known as?",
    "options": ["IP Address", "Port Address", "MAC Address", "Socket Address"],
    "answer": 2
  },
  {
    "question": "What is the purpose of the TTL (Time to Live) field in an IP header?",
    "options": ["To speed up data transfer", "To prevent infinite loops", "To prioritize voice traffic", "To encrypt the payload"],
    "answer": 1
  },
  {
    "question": "Which device works exclusively at the physical layer?",
    "options": ["Hub", "Switch", "Router", "Gateway"],
    "answer": 0
  },
  {
    "question": "Which mechanism allows a single Public IP address to represent multiple Private IPs?",
    "options": ["DHCP", "DNS", "NAT (Network Address Translation)", "ARP"],
    "answer": 2
  },
  {
    "question": "Which layer in the TCP/IP model corresponds to the OSI Physical and Data Link layers?",
    "options": ["Network", "Internet", "Transport", "Network Access"],
    "answer": 3
  },
  {
    "question": "What is the maximum distance for a \"100Base-TX\" Ethernet cable?",
    "options": ["50 meters", "100 meters", "200 meters", "500 meters"],
    "answer": 1
  },
  {
    "question": "Which topology requires a central controller or hub?",
    "options": ["Bus", "Ring", "Star", "Mesh"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a VLAN?",
    "options": ["To increase internet speed", "To logically segment a physical switch", "To connect two different cities", "To assign IP addresses automatically"],
    "answer": 1
  },
  {
    "question": "What is the function of the \"Traceroute\" utility?",
    "options": ["To check the speed of the NIC", "To show the path packets take to a destination", "To assign a hostname to an IP", "To delete the DNS cache"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for management and monitoring of network devices?",
    "options": ["SMTP", "FTP", "SNMP", "DHCP"],
    "answer": 2
  },
  {
    "question": "How many layers are in the TCP/IP model?",
    "options": ["3", "4", "7", "8"],
    "answer": 1
  }
]
};