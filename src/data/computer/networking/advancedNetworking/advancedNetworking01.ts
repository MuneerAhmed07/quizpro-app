import { Quiz } from "../../../../types";

export const advanceNetworking01: Quiz = {
  id: "11-advance-networking-01",
  title: "Advance & Expert Level Networking 01",
  description: "Advanced Networking",
  timeLimit: 3000,
  questions: [
  {
    "question": "In BGP, which attribute is used to influence the outbound path selection within a single Autonomous System (AS)?",
    "options": ["AS-Path", "MED", "Local Preference", "Weight"],
    "answer": 2
  },
  {
    "question": "Which BGP (Border Gateway Protocol) message type is used to keep the session active and verify the neighbor is still reachable?",
    "options": ["Open", "Update", "Notification", "Keepalive"],
    "answer": 3
  },
  {
    "question": "What is the purpose of a BGP Route Reflector?",
    "options": ["To connect different Autonomous Systems", "To reflect external routes to internal neighbors without a full mesh iBGP", "To act as a backup for the default gateway", "To encrypt BGP updates"],
    "answer": 1
  },
  {
    "question": "Which BGP attribute is non-transitive and used to influence the inbound path from an external AS?",
    "options": ["Local Preference", "AS-Path", "MED (Multi-Exit Discriminator)", "Origin"],
    "answer": 2
  },
  {
    "question": "A BGP \"Route Flap Damping\" is used to:",
    "options": ["Increase the speed of route convergence", "Penalize unstable routes to prevent constant updates", "Force traffic through a specific ISP", "Encapsulate BGP in a GRE tunnel"],
    "answer": 1
  },
  {
    "question": "In OSPF, which LSA Type is used to advertise external routes redistributed into the OSPF domain?",
    "options": ["Type 1 (Router LSA)", "Type 2 (Network LSA)", "Type 3 (Summary LSA)", "Type 5 (AS External LSA)"],
    "answer": 3
  },
  {
    "question": "What is the primary difference between OSPF \"Totally Stubby\" areas and \"Stubby\" areas?",
    "options": ["Totally stubby areas allow external routes", "Totally stubby block both external and Summary LSAs (except default route)", "Stubby areas block the default route", "There is no difference"],
    "answer": 1
  },
  {
    "question": "Which IS-IS (Intermediate System to Intermediate System) level is used for routing within an area?",
    "options": ["Level 0", "Level 1", "Level 2", "Level 3"],
    "answer": 1
  },
  {
    "question": "What is the OSPF \"Router ID\" selection priority?",
    "options": ["Highest Physical IP > Loopback > Configured ID", "Configured ID > Highest Loopback > Highest Physical IP", "Lowest IP address on any interface", "Randomly generated number"],
    "answer": 1
  },
  {
    "question": "OSPF uses which multicast address for communication between All SPF Routers?",
    "options": ["224.0.0.1", "224.0.0.5", "224.0.0.9", "224.0.0.10"],
    "answer": 1
  },
  {
    "question": "What does MPLS stand for?",
    "options": ["Multi-Protocol Label Switching", "Multi-Path Link System", "Managed Protocol Link switching", "Multiple Port Label Selection"],
    "answer": 0
  },
  {
    "question": "In MPLS, the \"Label Switched Path\" (LSP) is established based on which protocol?",
    "options": ["BGP", "LDP (Label Distribution Protocol)", "OSPF", "STP"],
    "answer": 1
  },
  {
    "question": "Where does the MPLS label sit in the OSI stack?",
    "options": ["Inside the Layer 3 header", "Between Layer 2 & Layer 3 (Layer 2.5)", "In the Layer 4 segment", "Above the Application Layer"],
    "answer": 1
  },
  {
    "question": "What is the function of the \"Penultimate Hop Popping\" (PHP) in MPLS?",
    "options": ["To add a second label for security", "To remove the outer label one hop before the destination (egress) router", "To change the IP address of the packet", "To encrypt the label"],
    "answer": 1
  },
  {
    "question": "MPLS \"Traffic Engineering\" (TE) primarily uses which protocol extensions for constraint-based routing?",
    "options": ["HTTP/HTTPS", "RSVP-TE or Segment Routing", "RIPv2", "Telnet"],
    "answer": 1
  },
  {
    "question": "Which First Hop Redundancy Protocol (FHRP) is an open standard?",
    "options": ["HSRP (Cisco)", "VRRP (Virtual Router Redundancy Protocol)", "GLBP (Cisco)", "LACP"],
    "answer": 1
  },
  {
    "question": "What is the main advantage of GLBP over HSRP/VRRP?",
    "options": ["It is faster to converge", "It provides automatic load balancing across multiple active gateways", "It uses less memory", "It works only on fiber optics"],
    "answer": 1
  },
  {
    "question": "In data center architecture, the \"Spine-Leaf\" topology is designed to:",
    "options": ["Increase the distance between servers", "Minimize East-West traffic latency and provide high scalability", "Use as many cables as possible", "Replace the need for routers"],
    "answer": 1
  },
  {
    "question": "What is \"VXLAN\" used for?",
    "options": ["Speeding up the internet", "Encapsulating Layer 2 frames within Layer 3 (UDP) packets", "Protecting against viruses", "Assigning IPv6 addresses"],
    "answer": 1
  },
  {
    "question": "Which protocol is used in the \"Control Plane\" of many modern SDN solutions to distribute MAC reachability?",
    "options": ["FTP", "EVPN (Ethernet VPN) via BGP", "DHCP", "RIP"],
    "answer": 1
  },
  {
    "question": "IPsec \"Phase-1\" is primarily responsible for:",
    "options": ["Transferring user data", "Establishing a secure management tunnel (ISAKMP/IKE)", "Checking for malware", "Assigning VLAN IDs"],
    "answer": 1
  },
  {
    "question": "Which IPsec protocol provides data confidentiality (encryption)?",
    "options": ["AH (Authentication Header)", "ESP (Encapsulating Security Payload)", "IKE", "L2TP"],
    "answer": 1
  },
  {
    "question": "What is the primary vulnerability addressed by \"Perfect Forward Secrecy\" (PFS)?",
    "options": ["Brute force attacks on passwords", "Ensuring that the compromise of one long-term key does not compromise past session keys", "Physical theft of the router", "IP spoofing"],
    "answer": 1
  },
  {
    "question": "In a Digital Signature, which key is used to \"sign\" the hash?",
    "options": ["Receiver's Public Key", "Receiver's Private Key", "Sender's Public Key", "Sender's Private Key"],
    "answer": 3
  },
  {
    "question": " \"Certificate Revocation List\" (CRL) is used to:",
    "options": ["List all active users on a network", "Identify certificates that are no longer trusted before their expiry", "Generate new passwords", "Speed up website loading"],
    "answer": 1
  },
  {
    "question": "Which mechanism allows IPv6 packets to be transmitted over an IPv4-only network?",
    "options": ["Dual Stack", "6 to 4 Tunneling", "NAT-PT", "Subnetting"],
    "answer": 1
  },
  {
    "question": "What is \"SLAAC\" in IPv6?",
    "options": ["Static Logical Area Access Control", "Stateless Address Auto-configuration", "Secure Link Access and Authentication Code", "System Level Auto Address Connection"],
    "answer": 1
  },
  {
    "question": "In IPv6, which protocol replaces ARP?",
    "options": ["DHCPv6", "ICMPv6 Neighbor Discovery Protocol (NDP)", "DNS", "SNMP"],
    "answer": 1
  },
  {
    "question": "What is the \"Solicited-Node Multicast\" address used for in IPv6?",
    "options": ["Sending video streams", "Address resolution (Replacing ARP broadcast)", "Routing between different countries", "Testing the loopback address"],
    "answer": 1
  },
  {
    "question": "Which IPv6 address type is equivalent to an IPv4 private address?",
    "options": ["Link-Local Address", "Unique Local Address (ULA)", "Global Unicast Address", "Multicast Address"],
    "answer": 1
  }
]
};