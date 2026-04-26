import { Quiz } from "../../../../types";

export const basicNetworking: Quiz = {
  id: "01-basic-networking",
  title: "Basic Networking Quiz",
  description: "Foundational concepts of computer networks, OSI model, and protocols.",
  timeLimit: 3000,
  questions: [
  {
    "question": "A Bridge functions at which OSI layer?",
    "options": ["Layer 1 (Physcial)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"],
    "answer": 1
  },
  {
    "question": "Which address is used by a switch to make forwarding decisions?",
    "options": ["IP Address", "MAC Address", "Port Address", "Gateway Address"],
    "answer": 1
  },
  {
    "question": "CSMA/CD is a protocol used in which type of network?",
    "options": ["Token Ring", "Ethernet", "FDDI", "Wireless LAN"],
    "answer": 1
  },
  {
    "question": "Which field in the TCP header is used for flow control?",
    "options": ["Sequence number", "Window size", "Checksum", "Urgent pointer"],
    "answer": 1
  },
  {
    "question": "What is the default port for Telnet?",
    "options": ["21", "22", "23", "25"],
    "answer": 2
  },
  {
    "question": "Which of the following is a private IP address?",
    "options": ["11.0.0.1", "172.32.0.1", "192.168.50.1", "200.10.10.1"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to provide security at the Network Layer?",
    "options": ["SSL", "TLS", "IPsec", "HTTPS"],
    "answer": 2
  },
  {
    "question": "What is the binary representation of the decimal 192?",
    "options": ["11000000", "10101000", "11110000", "10000001"],
    "answer": 0
  },
  {
    "question": "Which OSPF state indicates that the adjacency between routers is fully established?",
    "options": ["Init", "2-Way", "Exchange", "Full"],
    "answer": 3
  },
  {
    "question": "Which protocol uses port 110?",
    "options": ["IMAP", "SMTP", "POP3", "SNMP"],
    "answer": 2
  },
  {
    "question": "Which device separates broadcast domains?",
    "options": ["Hub", "Switch", "Router", "Bridge"],
    "answer": 2
  },
  {
    "question": "The first 3 bytes of a MAC address are known as?",
    "options": ["Serial Number", "OUI (Organizationally Unique Identifier)", "Network ID", "Vendor Code"],
    "answer": 1
  },
  {
    "question": "Which IPv6 address is the equivalent of the IPv4 loopback?",
    "options": ["::", "::1", "FE80::1", "2001::1"],
    "answer": 1
  },
  {
    "question": "Which layer ensures that data is in a readable format for the Application layer?",
    "options": ["Transport (Layer 4)", "Session (Layer 5)", "Presentation (Layer 6)", "Data Link (Layer 2)"],
    "answer": 2
  },
  {
    "question": "What does the 'A' in CIA Triad stand for?",
    "options": ["Authentication", "Availability", "Authorization", "Accountability"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for synchronization of clocks in a network?",
    "options": ["SNMP", "NTP", "DHCP", "DNS"],
    "answer": 1
  },
  {
    "question": "A /26 subnet mask has how many hosts?",
    "options": ["30", "62", "126", "254"],
    "answer": 1
  },
  {
    "question": "Which of the following is a Link-State routing protocol?",
    "options": ["RIP", "BGP", "IS-IS", "IGRP"],
    "answer": 2
  },
  {
    "question": "What is the standard port for RDP (Remote Desktop Protocol)?",
    "options": ["22", "443", "3389", "8080"],
    "answer": 2
  },
  {
    "question": "Which type of firewall inspects traffic based on the state of the connection?",
    "options": ["Packet Filter", "Proxy Firewall", "Stateful Inspection", "Next-Gen Firewall"],
    "answer": 2
  },
  {
    "question": "Which field is used in 802.1Q to identify the VLAN?",
    "options": ["MAC address", "VLAN Tag", "Priority bit", "Frame Check Sequence"],
    "answer": 1
  },
  {
    "question": "What is the maximum value of any octet in an IPv4 address?",
    "options": ["128", "254", "255", "256"],
    "answer": 2
  },
  {
    "question": "Which layer provides reliable end-to-end communication?",
    "options": ["Network (Layer 3)", "Transport (Layer 4)", "Data Link (Layer 2)", "Session (Layer 5)"],
    "answer": 1
  },
  {
    "question": "The \"Three-Way Handshake\" is a feature of which protocol?",
    "options": ["UDP", "IP", "TCP", "ICMP"],
    "answer": 2
  },
  {
    "question": "Which address is used to deliver a packet to a specific host on a different network?",
    "options": ["MAC Address", "Port Address", "IP Address", "Session ID"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to query and modify directory services (e.g., Active Directory)?",
    "options": ["DHCP", "LDAP", "SNMP", "SIP"],
    "answer": 1
  },
  {
    "question": "Which network device uses a 'Routing Table'?",
    "options": ["Switch", "Hub", "Router", "Repeater"],
    "answer": 2
  },
  {
    "question": "Which wireless standard provides the highest theoretical speed among these?",
    "options": ["802.11a", "802.11b", "802.11g", "802.11ac"],
    "answer": 3
  },
  {
    "question": "What is the default subnet mask for a Class A network?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "0.0.0.0"],
    "answer": 0
  },
  {
    "question": "Which layer is concerned with routing packets?",
    "options": ["Data Link (Layer 2)", "Transport (Layer 4)", "Network (Layer 3)", "Application (Layer 7)"],
    "answer": 2
  },
  {
    "question": "Which port is used by DNS for zone transfers?",
    "options": ["53 UDP", "53 TCP", "67 UDP", "68 UDP"],
    "answer": 1
  },
  {
    "question": "What is the term for a logical grouping of users and resources regardless of physical location?",
    "options": ["Subnet", "VLAN", "WAN", "VPN"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to fetch web pages?",
    "options": ["SMTP", "FTP", "HTTP", "SNMP"],
    "answer": 2
  },
  {
    "question": "Which layer handles the dialog between two applications?",
    "options": ["Presentation (Layer 6)", "Transport (Layer 4)", "Session (Layer 5)", "Network (Layer 3)"],
    "answer": 2
  },
  {
    "question": "In TCP, the FIN flag is used to?",
    "options": ["Synchronize numbers", "Reset a connection", "Terminate a connection", "Acknowledge a packet"],
    "answer": 2
  },
  {
    "question": "What is the standard for PoE (Power over Ethernet)?",
    "options": ["802.3af", "802.11n", "802.1Q", "802.3x"],
    "answer": 0
  },
  {
    "question": "Which protocol is used to translate private IP addresses into public ones?",
    "options": ["DHCP", "ARP", "NAT", "DNS"],
    "answer": 2
  },
  {
    "question": "What is the hexadecimal equivalent of binary 1010?",
    "options": ["A", "B", "C", "F"],
    "answer": 0
  },
  {
    "question": "Which protocol is an Exterior Gateway Protocol (EGP)?",
    "options": ["OSPF", "RIP", "BGP", "EIGRP"],
    "answer": 2
  },
  {
    "question": "What happens to a packet if its TTL reaches 0?",
    "options": ["It is delivered", "It is buffered", "It is discarded and an ICMP error is sent", "It is retransmitted"],
    "answer": 2
  },
  {
    "question": "The 'Dual Stack' term in networking refers to?",
    "options": ["Two switches connected together", "A system running both IPv4 and IPv6", "Two NICs on a single computer", "Using TCP and UDP together"],
    "answer": 1
  },
  {
    "question": "Which layer is responsible for translating human-readable names to IP addresses?",
    "options": ["Network (Layer 3)", "Transport (Layer 4)", "Application (Layer 7)", "Physical (Layer 1)"],
    "answer": 2
  },
  {
    "question": "What is the port for SSH?",
    "options": ["21", "22", "23", "25"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to manage VLAN information between switches?",
    "options": ["STP", "VTP", "LACP", "HSRP"],
    "answer": 1
  },
  {
    "question": "What does a 'Subnet Mask' identify?",
    "options": ["The Gateway", "The MAC address", "The Network and Host portions of an IP", "The DNS server"],
    "answer": 2
  },
  {
    "question": "Which device operates at the Application Layer to filter content?",
    "options": ["Hub", "Layer 2 Switch", "Application Proxy/Firewall", "Repeater"],
    "answer": 2
  },
  {
    "question": "The range 169.254.x.x is used for?",
    "options": ["Private class A", "Multicast", "APIPA (Automatic Private IP Addressing)", "Loopback"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to voice/video calls over the internet?",
    "options": ["FTP", "SIP", "SNMP", "SMTP"],
    "answer": 1
  },
  {
    "question": "What is the bit length of a MAC address?",
    "options": ["32", "48", "64", "128"],
    "answer": 1
  },
  {
    "question": "Which routing protocol has an AD of 90?",
    "options": ["OSPF", "RIP", "EIGRP", "BGP"],
    "answer": 2
  }
]
};