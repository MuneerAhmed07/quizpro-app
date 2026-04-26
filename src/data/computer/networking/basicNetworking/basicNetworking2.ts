import { Quiz } from "../../../../types";

export const basicNetworking2: Quiz = {
  id: "02-basic-networking",
  title: "Basic Networking Quiz 01",
  description: "Deep dive into BGP, subnetting, and network security.",
  timeLimit: 3000,
  questions: [
    {
    "question": "What is the primary advantage of Fiber Optic over Copper?",
    "options": ["Lower cost", "Easier installation", "Immunity to Electromagnetic Interference (EMI)", "Lower bandwidth"],
    "answer": 2
  },
  {
    "question": "Which layer of the OSI model does a Bridge operate?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 1
  },
  {
    "question": "Which OSI layer handles routing?",
    "options": ["Data Link (Layer 2)", "Network (Layer 3)", "Transport (Layer 4)", "Session (Layer 5)"],
    "answer": 1
  },
  {
    "question": "Which protocol resolves IP to MAC address?",
    "options": ["DNS", "ICMP", "ARP", "RARP"],
    "answer": 2
  },
  {
    "question": "Which routing protocol uses hop count?",
    "options": ["OSPF", "EIGRP", "RIP", "BGP"],
    "answer": 2
  },
  {
    "question": "Default administrative distance of OSPF is:",
    "options": ["90", "100", "110", "120"],
    "answer": 2
  },
  {
    "question": "Which device works at Layer 3 (Network)?",
    "options": ["Switch", "Hub", "Router", "Bridge"],
    "answer": 2
  },
  {
    "question": "Which protocol is connection-oriented?",
    "options": ["UDP", "IP", "TCP", "ICMP"],
    "answer": 2
  },
  {
    "question": "VLANs are used for:",
    "options": ["Speed increase", "Logical segmentation", "Encryption", "Routing"],
    "answer": 1
  },
  {
    "question": "Which command shows routing table?",
    "options": ["show ip route", "show vlan", "show interface", "show arp"],
    "answer": 0
  },
  {
    "question": "Maximum UTP cable length is:",
    "options": ["50 m", "90 m", "100 m", "150 m"],
    "answer": 2
  },
  {
    "question": "Secure remote login protocol is:",
    "options": ["Telnet", "FTP", "SSH", "SNMP"],
    "answer": 2
  },
  {
    "question": "Main function of firewall is:",
    "options": ["Routing", "Traffic filtering", "Encryption", "Authentication"],
    "answer": 1
  },
  {
    "question": "VPN commonly uses:",
    "options": ["SMTP", "IPSec", "FTP", "SNMP"],
    "answer": 1
  },
  {
    "question": "HTTPS runs on port:",
    "options": ["21", "25", "80", "443"],
    "answer": 3
  },
  {
    "question": "IDS stands for:",
    "options": ["Internet Detection System", "Intrusion Detection System", "Internal Defense System", "Integrated Data Security"],
    "answer": 1
  },
  {
    "question": "AAA stands for:",
    "options": ["Authentication Authorization Accounting", "Access Authentication Audit", "Authorization Access Accounting", "Authentication Access Audit"],
    "answer": 0
  },
  {
    "question": "Two-factor authentication includes:",
    "options": ["Two passwords", "Password + biometric/token", "Two usernames", "Two devices"],
    "answer": 1
  },
  {
    "question": "ISO 27001 relates to:",
    "options": ["Quality", "Environment", "Information Security", "Safety"],
    "answer": 2
  },
  {
    "question": "Which attack floods a network?",
    "options": ["Phishing", "DoS", "Sniffing", "Spoofing"],
    "answer": 1
  },
  {
    "question": "CISA certification relates to:",
    "options": ["Networking", "Programming", "IT Auditing", "Hardware"],
    "answer": 2
  },
  {
    "question": "CISM focuses on:",
    "options": ["Network cabling", "Security management", "Software testing", "Programming"],
    "answer": 1
  },
  {
    "question": "Which tier provides fault tolerance?",
    "options": ["Tier I", "Tier II", "Tier III", "Tier 0"],
    "answer": 2
  },
  {
    "question": "Redundant power path is feature of:",
    "options": ["Tier I", "Tier II", "Tier III", "Tier IV"],
    "answer": 2
  },
  {
    "question": "PUE measures:",
    "options": ["Cooling efficiency", "Energy efficiency", "Network speed", "Power backup"],
    "answer": 1
  },
  {
    "question": "Hot aisle / Cold aisle improves:",
    "options": ["Security", "Cooling efficiency", "Cabling", "Redundancy"],
    "answer": 1
  },
  {
    "question": "Core layer in DC network provides:",
    "options": ["Access", "Aggregation", "High-speed switching", "End-user access"],
    "answer": 2
  },
  {
    "question": "SAN mainly uses:",
    "options": ["Ethernet", "Fiber Channel", "Wi-Fi", "DSL"],
    "answer": 1
  },
  {
    "question": "Rack unit (U) equals:",
    "options": ["1 inch", "1.5 inch", "1.75 inch", "2 inch"],
    "answer": 2
  },
  {
    "question": "Which is passive DC component?",
    "options": ["Switch", "UPS", "Patch panel", "Firewall"],
    "answer": 2
  },
  {
    "question": "CDCP focuses on:",
    "options": ["Cabling", "Data Centre design", "Auditing", "Software"],
    "answer": 1
  },
  {
    "question": "CDCS focuses on:",
    "options": ["Strategy", "Operations", "Security", "Programming"],
    "answer": 1
  },
  {
    "question": "Single mode fiber core size is:",
    "options": ["50 µm", "62.5 µm", "8–10 µm", "100 µm"],
    "answer": 2
  },
  {
    "question": "Multimode fiber mostly used for:",
    "options": ["Long distance", "WAN", "Short distance", "Submarine cable"],
    "answer": 2
  },
  {
    "question": "Fiber testing uses:",
    "options": ["Multimeter", "OTDR", "LAN tester", "Clamp meter"],
    "answer": 1
  },
  {
    "question": "Splicing loss should be less than:",
    "options": ["1 dB", "0.5 dB", "0.1 dB", "2 dB"],
    "answer": 1
  },
  {
    "question": "SC (Square Connector) , LC (Little Connector) are:",
    "options": ["Switches", "Fiber connectors", "Protocols", "Testers"],
    "answer": 1
  },
  {
    "question": "OFC (Optical Fiber Cable) termination is done at:",
    "options": ["Switch", "ODF", "Router", "Sever"],
    "answer": 1
  },
  {
    "question": "Bending loss occurs due to:",
    "options": ["High temperature", "Sharp bends", "Dust", "Voltage"],
    "answer": 1
  },
  {
    "question": "Typical wavelength for SMF is:",
    "options": ["850 nm", "1310/1550 nm", "780 nm", "980 nm"],
    "answer": 1
  },
  {
    "question": "OTDR (Optical Time Domain Reflectometer) measures:",
    "options": ["Bandwidth", "Distance & faults", "Voltage", "Current"],
    "answer": 1
  },
  {
    "question": "Armored fiber protects against:",
    "options": ["EMI", "Rodents", "Moisture", "Heat"],
    "answer": 1
  },
  {
    "question": "CCTV stands for:",
    "options": ["Central Camera TV", "Closed Circuit Television", "Camera Control TV", "Cable Camera TV"],
    "answer": 1
  },
  {
    "question": "IP (Internet Protocol) cameras use:",
    "options": ["Coaxial cable", "Twisted pair only", "Ethernet network", "Fiber only"],
    "answer": 2
  },
  {
    "question": "NVR (Network video Recorder) is used with:",
    "options": ["Analog cameras", "IP cameras", "Sensors", "Access control"],
    "answer": 1
  },
  {
    "question": "DVR (Digital Video Recorder) is used with:",
    "options": ["IP cameras", "Analog cameras", "Sensors", "Servers"],
    "answer": 1
  },
  {
    "question": "Access control authentication includes:",
    "options": ["Card, PIN, Biometric", "Camera", "Switch", "Router"],
    "answer": 0
  },
  {
    "question": "Perimeter security sensors include:",
    "options": ["Motion, IR, Fence", "Switch", "Router", "UPS"],
    "answer": 0
  },
  {
    "question": "PTZ camera means:",
    "options": ["Pan Tilt Zoom", "Power Tilt Zone", "Picture Transfer Zoom", "Pan Time Zone"],
    "answer": 0
  },
  {
    "question": "WDR (Wide dynamic Range) improves:",
    "options": ["Storage", "Image quality in lighting", "Network speed", "Resolution only"],
    "answer": 1
  }
]
};