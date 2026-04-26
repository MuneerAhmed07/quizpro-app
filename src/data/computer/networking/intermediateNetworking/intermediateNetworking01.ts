import { Quiz } from "../../../../types";

export const intermediateNetworking01: Quiz = {
  id: "09-intermediate-networking-01",
  title: "Intermediate Networking 01",
  description: "Intermediate Networking 50 MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which layer is responsible for flow control using the sliding window protocol?",
    "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
    "answer": 1
  },
  {
    "question": "A “Collision Domain” is most effectively broken up by which device?",
    "options": ["Hub", "Repeater", "Switch", "Amplifier"],
    "answer": 2
  },
  {
    "question": "Which sub-layer of the Data Link layer provides an interface with the Network layer?",
    "options": ["MAC (Media Access Control)", "LLC (Logical Link Control)", "Physical Coding Sublayer", "ARP Sublayer"],
    "answer": 1
  },
  {
    "question": "What is the standard Ethernet frame size (excluding Preamble)?",
    "options": ["32 to 1024 bytes", "64 to 1518 bytes", "128 to 2048 bytes", "512 to 4096 bytes"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to prevent loops in a Layer 2 switched network?",
    "options": ["OSPF", "BGP", "STP (Spanning Tree Protocol)", "RIP"],
    "answer": 2
  },
  {
    "question": "What is the hexadecimal representation of a broadcast MAC Address?",
    "options": ["00:00:00:00:00:00", "FF:FF:FF:FF:FF:FF", "11:11:11:11:11:11", "AA:AA:AA:AA:AA:AA"],
    "answer": 1
  },
  {
    "question": "In an Ethernet frame, the “Preamble” consists of how many bytes?",
    "options": ["1 byte", "4 bytes", "7 bytes", "8 bytes"],
    "answer": 2
  },
  {
    "question": "VLANs (Virtual LAN) primarily function at which layer?",
    "options": ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
    "answer": 1
  },
  {
    "question": "Which IEEE standard defines wireless LAN (Wi-Fi)?",
    "options": ["802.3", "802.5", "802.11", "802.15"],
    "answer": 2
  },
  {
    "question": "What is the purpose of the Frame Check Sequence (FCS) field?",
    "options": ["Flow control", "Routing", "Error detection", "Data encryption"],
    "answer": 2
  },
  {
    "question": "How many usable hosts are available in a /24 subnet?",
    "options": ["256", "255", "254", "510"],
    "answer": 2
  },
  {
    "question": "What is the CIDR notation for a subnet mask of “255.255.255.224”?",
    "options": ["/26", "/27", "/28", "/29"],
    "answer": 1
  },
  {
    "question": "Which IP address is the network address for “192.168.10.45/27”?",
    "options": ["192.168.10.0", "192.168.10.16", "192.168.10.32", "192.168.10.40"],
    "answer": 2
  },
  {
    "question": "What is the broadcast address for the network “172.16.0.0/16”?",
    "options": ["172.16.0.255", "172.16.255.0", "172.16.255.255", "172.255.255.255"],
    "answer": 2
  },
  {
    "question": "Which of the following is a valid “link-local” address for IPv6?",
    "options": ["2001::/3", "FE80::/10", "FC00::/7", "FF00::/8"],
    "answer": 1
  },
  {
    "question": "VLSM (Variable Length Subnet Masking) helps in:",
    "options": ["Increasing network speed", "Reducing IP address wastage", "Securing the network", "Automating IP assignments"],
    "answer": 1
  },
  {
    "question": "What is the decimal value of the binary octet “11000000”?",
    "options": ["128", "191", "192", "224"],
    "answer": 2
  },
  {
    "question": "In IPv6, the “::” (double colon) symbol can be used how many times in an address?",
    "options": ["Once", "Twice", "Thrice", "Unlimited"],
    "answer": 0
  },
  {
    "question": "An IPv4 address starting with “169.254.x.x” is known as:",
    "options": ["Loopback", "Private IP", "APIPA", "Multicast"],
    "answer": 2
  },
  {
    "question": "How many subnets are created if you borrow “3” bits from a Class “C” network?",
    "options": ["4", "6", "8", "16"],
    "answer": 2
  },
  {
    "question": "Which Routing protocol uses the “Dijkstra” algorithm?",
    "options": ["RIP", "BGP", "OSPF", "EIGRP"],
    "answer": 2
  },
  {
    "question": "What is the “Administrative Distance” (AD) of OSPF?",
    "options": ["90", "100", "110", "120"],
    "answer": 2
  },
  {
    "question": "Which protocol is considered an Exterior Gateway Protocol (EGP)?",
    "options": ["RIP", "OSPF", "BGP", "IS-IS"],
    "answer": 2
  },
  {
    "question": "The metric used by RIP (Routing Information Protocol) is:",
    "options": ["Bandwidth", "Delay", "Hop count", "Reliability"],
    "answer": 2
  },
  {
    "question": "What is the minimum hop count allowed by RIP before a route is unreachable?",
    "options": ["10", "15", "16", "20"],
    "answer": 1
  },
  {
    "question": "Which routing protocol is proprietary to “Cisco”?",
    "options": ["OSPF", "BGP", "EIGRP", "RIP"],
    "answer": 2
  },
  {
    "question": "“Convergence” in a network refers to:",
    "options": ["The speed of the data transfer", "All routers having consistent routing information", "Connecting two different networks", "Encryption of routing tables"],
    "answer": 1
  },
  {
    "question": "Which table does an OSPF router use to store the shortest path to all networks?",
    "options": ["Neighbor Table", "Topology Table", "Routing Table", "ARP Table"],
    "answer": 2
  },
  {
    "question": "Static Routes have an Administrative Distance of:",
    "options": ["0", "1", "5", "20"],
    "answer": 1
  },
  {
    "question": "Which OSPF area is known as the “Backbone Area”?",
    "options": ["Area 1", "Area 10", "Area 0", "Area 51"],
    "answer": 2
  },
  {
    "question": "Which flag is sent by a receiver to acknowledge the receipt of TCP segments?",
    "options": ["SYN", "ACK", "PSH", "URG"],
    "answer": 1
  },
  {
    "question": "What is the “window size” in a TCP header used for?",
    "options": ["Error checking", "Flow control", "Routing", "Encryption"],
    "answer": 1
  },
  {
    "question": "Which port does the SNMP (Simple Network Management Protocol) use?",
    "options": ["22 & 23", "80 & 443", "161 & 162", "53 & 67"],
    "answer": 2
  },
  {
    "question": "Which Transport Protocol is used for real-time video streaming where speed is more important than reliability?",
    "options": ["TCP", "UDP", "ICMP", "ARP"],
    "answer": 1
  },
  {
    "question": "The combination of an IP address and a port number is called a:",
    "options": ["Packet", "Frame", "Socket", "Segment"],
    "answer": 2
  },
  {
    "question": "What is the port number for the IMAP protocol?",
    "options": ["110", "25", "143 and 993", "445"],
    "answer": 2
  },
  {
    "question": "Which TCP flag is used to gracefully terminate a connection?",
    "options": ["RST", "SYN", "FIN", "ACK"],
    "answer": 2
  },
  {
    "question": "Which range is reserved for “well-known” ports?",
    "options": ["0 – 1023", "1024 – 49151", "49152 – 65535", "0 – 255"],
    "answer": 0
  },
  {
    "question": "Which port does LDAP (Lightweight Directory Access Protocol) use?",
    "options": ["3389", "443", "389", "22"],
    "answer": 2
  },
  {
    "question": "How does TCP handle a lost packet?",
    "options": ["It ignores it", "The receiver asks for a retransmission", "It terminates the connection", "It changes the port number"],
    "answer": 1
  },
  {
    "question": "What is “DMZ” in network security?",
    "options": ["A zone with no security", "A subnet that exposes external-facing services to an untrusted network", "A type of encrypted tunnel", "A backup server location"],
    "answer": 1
  },
  {
    "question": "IPS stands for:",
    "options": ["Internet Protocol System", "Intrusion Prevention System", "Internal Protection Software", "Integrated Port Security"],
    "answer": 1
  },
  {
    "question": "Which encryption algorithm is “Symmetric”?",
    "options": ["RSA", "Diffie-Hellman", "AES", "ECC"],
    "answer": 2
  },
  {
    "question": "What is the primary difference between a Hub and a Switch regarding security?",
    "options": ["Hubs are faster", "Switches use MAC addresses to send data to specific ports, preventing sniffing", "Hubs use encryption", "There is no difference"],
    "answer": 1
  },
  {
    "question": "Which protocol provides secure terminal access over a network?",
    "options": ["Telnet", "SSH", "HTTP", "SNMP"],
    "answer": 1
  },
  {
    "question": "What is a “Man-in-the-Middle” (MitM) attack?",
    "options": ["Cracking a password by force", "Secretly intercepting and relaying communication between two parties", "Sending a virus via email", "Overloading a server with traffic"],
    "answer": 1
  },
  {
    "question": "Which security protocol is used for EAP-based authentication in Wi-Fi?",
    "options": ["WEP", "RADIUS", "FTP", "DNSSEC"],
    "answer": 1
  },
  {
    "question": "In hashing (like SHA-256), the process is:",
    "options": ["Reversible", "One-way (irreversible)", "Only used for encryption", "Slower than encryption"],
    "answer": 1
  },
  {
    "question": "An “Access Control List” (ACL) on a router is used for:",
    "options": ["Speeding up traffic", "Filtering traffic based on IP or Port", "Assigning IP addresses", "Routing packets to the internet"],
    "answer": 1
  },
  {
    "question": "What does a “stateful” firewall keep track of?",
    "options": ["The physical location of the server", "The state of active network connections", "The brand of the router", "The user's browser history"],
    "answer": 1
  }
]
};