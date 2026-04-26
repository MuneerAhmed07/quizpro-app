import { Quiz } from "../../../../types";

export const intermediateNetworking02: Quiz = {
  id: "10-intermediate-networking-02",
  title: "Intermediate Networking 02",
  description: "Intermediate Networking 50 MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which command is used to verify the DNS resolution of a domain?",
    "options": ["ping", "ipconfig", "nslookup", "netstat"],
    "answer": 2
  },
  {
    "question": "What does the command “netstat -a” display?",
    "options": ["The routing table", "All active connections and listening ports", "The MAC address table", "CPU usage"],
    "answer": 1
  },
  {
    "question": "In NAT (Network Address Translation), “PAT” stands for:",
    "options": ["Private Address Translation", "Port Address Translation", "Public Access Technology", "Packet Advanced Transmission"],
    "answer": 1
  },
  {
    "question": "Which HTTP Status code represents “Internal Server Error”?",
    "options": ["200", "404", "500", "403"],
    "answer": 2
  },
  {
    "question": "Which protocol is used for reporting errors and management of IP networks?",
    "options": ["SMTP", "ICMP", "DHCP", "ARP"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the “TTL” (Time to Live) field in an IP packet?",
    "options": ["To measure network speed", "To prevent the packet from looping infinitely", "To prioritize the packet", "To encrypt the packet"],
    "answer": 1
  },
  {
    "question": "If you can ping an IP but not a domain name, where is the problem?",
    "options": ["The NIC", "The Router", "The DNS Server", "The Firewall"],
    "answer": 2
  },
  {
    "question": "What does the command ipconfig /release do in Windows?",
    "options": ["Fixes the IP address", "Drops the current DHCP-assigned IP address", "Renews the DNS cache", "Shows the MAC address"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to sync the clocks of network devices?",
    "options": ["DNS", "DHCP", "NTP (Network Time Protocol)", "SNMP"],
    "answer": 2
  },
  {
    "question": "“Quality of Service” (QoS) is used to:",
    "options": ["Clean the network cables", "Prioritize specific types of traffic (e.g., VoIP)", "Increase the hard drive space", "Monitor employee activity"],
    "answer": 1
  },
  {
    "question": "What is “SDN”?",
    "options": ["Secure Data Network", "Software Defined Networking", "System Digital Node", "Standard Domain Name"],
    "answer": 1
  },
  {
    "question": "In cloud computing, “SaaS” stands for:",
    "options": ["System as a Service", "Storage as a Service", "Software as a Service", "Security as a Service"],
    "answer": 2
  },
  {
    "question": "What is the frequency of the Wi-Fi (802.11n) standard?",
    "options": ["2.4 GHz only", "5 GHz only", "2.4 GHz, 5 GHz, 6 GHz", "10 GHz"],
    "answer": 2
  },
  {
    "question": "A “Load Balancer” is used to:",
    "options": ["Increase the weight of the server", "Distribute traffic across multiple servers", "Charge the batteries of a router", "Encrypt the entire network"],
    "answer": 1
  },
  {
    "question": "What is “BGP” primarily used for?",
    "options": ["Routing inside an office", "Routing between Autonomous Systems (the Internet)", "Connecting a printer", "Assigning IP addresses"],
    "answer": 1
  },
  {
    "question": "Which wireless security protocol uses the “Handshake” that was vulnerable to KRACK?",
    "options": ["WEP", "WPA", "WPA2", "WPA3"],
    "answer": 2
  },
  {
    "question": "What is “IoT” (Internet of Things)?",
    "options": ["A new version of the internet", "Connecting physical devices to the internet", "A method of cloud storage", "A type of fiber optic cable"],
    "answer": 1
  },
  {
    "question": "“Anycast” addressing involves sending data to:",
    "options": ["Every node on the network", "A specific single node", "The nearest node in a group", "No nodes at all"],
    "answer": 2
  },
  {
    "question": "Which protocol is widely used for “IoT” communication due to its low overhead?",
    "options": ["HTTP", "FTP", "MQTT", "SSH"],
    "answer": 2
  },
  {
    "question": "What is a “container” (e.g., Docker) in a networking context?",
    "options": ["A box for storing cables", "A lightweight, stand-alone package that includes everything to run software", "A large database", "A physical server rack"],
    "answer": 1
  },
  {
    "question": "Which layer adds a “Header” and “Trailer” to the data?",
    "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Presentation Layer"],
    "answer": 1
  },
  {
    "question": "What is “MTU” (Maximum Transmission Unit)?",
    "options": ["The speed of the connection", "The largest size of a packet/frame that can be sent", "The number of users allowed", "The strength of the Wi-Fi signal"],
    "answer": 1
  },
  {
    "question": "Fragmenting a packet occurs when:",
    "options": ["The packet is too small", "The packet exceeds the MTU of the next link", "The packet is encrypted", "The TTL is 0"],
    "answer": 1
  },
  {
    "question": "The “Port Number” is located in which header?",
    "options": ["IP Header", "Ethernet Header", "TCP/UDP Header", "Frame Trailer"],
    "answer": 2
  },
  {
    "question": "The “IP address” is located in which header?",
    "options": ["TCP Header", "IP Header", "LLC Header", "MAC Header"],
    "answer": 1
  },
  {
    "question": "Which field in the TCP header helps in reassembling data in the correct order?",
    "options": ["Checksum", "Window Size", "Sequence Number", "Port Number"],
    "answer": 2
  },
  {
    "question": "Which protocol is used by the “Traceroute” command on Linux?",
    "options": ["TCP", "UDP (with ICMP response)", "ARP", "FTP"],
    "answer": 1
  },
  {
    "question": "What happens to an IP packet when the “TTL” reaches “0”?",
    "options": ["It is saved for later", "It is discarded and an ICMP message is sent back", "It is sent to the broadcast address", "It is encrypted"],
    "answer": 1
  },
  {
    "question": "What is “Encapsulation”?",
    "options": ["Removing headers as data move up layers", "Adding headers as data move down the layers", "Compressing a file", "Encrypting a password"],
    "answer": 1
  },
  {
    "question": "What is “De-encapsulation”?",
    "options": ["Adding headers", "Removing headers as data moves up the layers", "Sending data over a VPN", "Breaking a switch into VLANs"],
    "answer": 1
  },
  {
    "question": "What is the default port for RDP (Remote Desktop Protocol)?",
    "options": ["22", "443", "3389", "8080"],
    "answer": 2
  },
  {
    "question": "SMB (Server Message Block) is primarily used for:",
    "options": ["Sending emails", "File and printer sharing", "Web browsing", "Assigning IP addresses"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to exchange routing information between different Autonomous Systems?",
    "options": ["OSPF", "RIP", "BGP", "EIGRP"],
    "answer": 2
  },
  {
    "question": "What is “PoE” (Power over Ethernet)?",
    "options": ["A high-speed internet connection", "Passing electric power along with data on Ethernet cabling", "A way to turn off a router remotely", "A type of fiber optic cable"],
    "answer": 1
  },
  {
    "question": "What is the standard for “PoE”?",
    "options": ["IEEE 802.11", "IEEE 802.3af", "IEEE 802.1Q", "IEEE 802.1X"],
    "answer": 1
  },
  {
    "question": "A “Bridge” is different from a “Repeater” because:",
    "options": ["It is more expensive", "It filters traffic based on MAC addresses", "It uses fiber optic cables", "It works at the Network Layer"],
    "answer": 1
  },
  {
    "question": "What is Throughput?",
    "options": ["The potential maximum speed", "The actual rate of successful data delivery", "The length of time a server is down", "The size of the routing table"],
    "answer": 1
  },
  {
    "question": "A “Proxy Server” is primarily used for:",
    "options": ["Speeding up the CPU", "Providing anonymity and caching web content", "Connecting a mouse to a computer", "Encrypting a hard drive"],
    "answer": 1
  },
  {
    "question": "What is “SFP” (Small Form-factor Pluggable)?",
    "options": ["A type of software", "A compact, hot-pluggable network interface module", "A security password", "A new version of IP"],
    "answer": 1
  },
  {
    "question": "In a fiber optic network, “Single-mode” is used for:",
    "options": ["Short distances (inside a room)", "Long distances", "Only for audio data", "Only for home routers"],
    "answer": 1
  },
  {
    "question": "What is the port for “Syslog”?",
    "options": ["161", "443", "514", "25"],
    "answer": 2
  },
  {
    "question": "Which address represents “All Nodes” in IPv4 multicast?",
    "options": ["255.255.255.255", "127.0.0.1", "224.0.0.1", "0.0.0.0"],
    "answer": 2
  },
  {
    "question": "What does the “A” in the CIA triad stand for?",
    "options": ["Authentication", "Accountability", "Availability", "Authorization"],
    "answer": 2
  },
  {
    "question": "Which device works at Layer 4 of the OSI model?",
    "options": ["Hub", "Switch", "Firewall / Load balancer", "Repeater"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a “Crossover cable”?",
    "options": ["Connect a PC to a Switch", "Connect a Router to a Switch", "Connect two similar devices directly (e.g., PC to PC)", "Connect a phone to a wall jack"],
    "answer": 2
  },
  {
    "question": "What is “Jitter”?",
    "options": ["A type of network virus", "Variation in packet delay", "A loose cable connection", "High signal strength"],
    "answer": 1
  }
]
};