import { Quiz } from "../../../../types";

export const basicNetworking08: Quiz = {
  id: "14-basic-networking-08",
  title: "Basic Networking and IT",
  description: "Basic Networking and IT",
  timeLimit: 6000,
  questions: [
  {
    "question": "What does LAN stand for?",
    "options": ["Local Access Node", "Local Area Network", "Light Area Network", "Logical Area Network"],
    "answer": 1
  },
  {
    "question": "What does WAN stand for?",
    "options": ["Wide Area Network", "Wired Area Network", "Wireless Access Network", "Web Area Network"],
    "answer": 0
  },
  {
    "question": "Which device is used to connect different networks together?",
    "options": ["Hub", "Switch", "Router", "Repeater"],
    "answer": 2
  },
  {
    "question": "Which device operates at the Physical layer (Layer 1) of the OSI model?",
    "options": ["Router", "Switch", "Hub", "Bridge"],
    "answer": 2
  },
  {
    "question": "How many layers are there in the standard OSI Model?",
    "options": ["4", "5", "7", "9"],
    "answer": 2
  },
  {
    "question": "Which OSI layer handles routing and logical addressing?",
    "options": ["Data Link", "Network Layer", "Transport", "Session"],
    "answer": 1
  },
  {
    "question": "Which device forwards data to specific ports using MAC addresses?",
    "options": ["Hub", "Switch", "Modem", "Repeater"],
    "answer": 1
  },
  {
    "question": "Which device connects a computer to the internet via a telephone or cable line?",
    "options": ["Router", "Access Point", "Modem", "Hub"],
    "answer": 2
  },
  {
    "question": "Which OSI layer handles data framing?",
    "options": ["Physical", "Network", "Data Link", "Application"],
    "answer": 2
  },
  {
    "question": "Which layer of the OSI model converts bits into electrical or optical signals?",
    "options": ["Physical", "Presentation", "Session", "Transport"],
    "answer": 0
  },
  {
    "question": "What does TCP stand for?",
    "options": ["Transfer Control Protocol", "Transmission Control Protocol", "Technical Connection Protocol", "Terminal Communication Protocol"],
    "answer": 1
  },
  {
    "question": "What does IP stand for?",
    "options": ["Internet Protocol", "Internal Path", "Intranet Point", "Interface Protocol"],
    "answer": 0
  },
  {
    "question": "What is the default port number used by HTTP?",
    "options": ["443", "21", "80", "25"],
    "answer": 2
  },
  {
    "question": "What is the default port number used by HTTPS?",
    "options": ["80", "23", "443", "53"],
    "answer": 2
  },
  {
    "question": "Which protocol uses port numbers 20 and 21?",
    "options": ["SMTP", "FTP", "SSH", "DNS"],
    "answer": 1
  },
  {
    "question": "Which protocol is primarily used to send emails?",
    "options": ["POP3", "IMAP", "SMTP", "HTTP"],
    "answer": 2
  },
  {
    "question": "Which protocol is used by clients to retrieve email from a server?",
    "options": ["SMTP", "POP3", "FTP", "SSH"],
    "answer": 1
  },
  {
    "question": "The Domain Name System (DNS) is responsible for converting:",
    "options": ["IP Address to MAC Address", "Domain name to IP Address", "URL to Port number", "Binary to Text"],
    "answer": 1
  },
  {
    "question": "Which protocol uses port 22 for secure remote terminal access?",
    "options": ["Telnet", "SSH", "FTP", "DNS"],
    "answer": 1
  },
  {
    "question": "Which protocol uses port 53?",
    "options": ["DHCP", "HTTP", "DNS", "SMTP"],
    "answer": 2
  },
  {
    "question": "What is the bit length of an IPv4 address?",
    "options": ["16 bits", "32 bits", "64 bits", "128 bits"],
    "answer": 1
  },
  {
    "question": "What is the bit length of an IPv6 address?",
    "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
    "answer": 2
  },
  {
    "question": "Which address is reserved as the loopback address?",
    "options": ["192.168.0.1", "127.0.0.1", "10.0.0.1", "169.254.0.1"],
    "answer": 1
  },
  {
    "question": "Which IP class range covers 1 to 126?",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "answer": 0
  },
  {
    "question": "Which IP class range covers 192 to 223?",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "answer": 2
  },
  {
    "question": "What is the default subnet mask for Class C?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    "answer": 2
  },
  {
    "question": "Which IP range is used for Private Class A networking?",
    "options": ["192.168.x.x", "10.0.0.0", "172.16.x.x", "127.0.x.x"],
    "answer": 1
  },
  {
    "question": "What is the Private Class C IP range?",
    "options": ["10.0.0.0 – 10.255.255.255", "192.168.0.0 – 192.168.255.255", "172.16.0.0 – 172.31.255.255", "169.254.0.0 – 169.254.255.255"],
    "answer": 1
  },
  {
    "question": "Which protocol assigns IP addresses automatically to devices?",
    "options": ["NAT", "DHCP", "DNS", "ARP"],
    "answer": 1
  },
  {
    "question": "What is the purpose of NAT (Network Address Translation)?",
    "options": ["To filter viruses", "To translate Private IP to Public IP", "To speed up the CPU", "To backup data"],
    "answer": 1
  },
  {
    "question": "Which command displays the IP configuration in Windows?",
    "options": ["ping", "tracert", "ipconfig", "netstat"],
    "answer": 2
  },
  {
    "question": "Which command is used to test connectivity between two hosts?",
    "options": ["cls", "config", "ping", "renew"],
    "answer": 2
  },
  {
    "question": "Which command shows the exact path taken to a destination server?",
    "options": ["ipconfig", "tracert", "netstat", "nslookup"],
    "answer": 1
  },
  {
    "question": "Which command is used to view all active network connections?",
    "options": ["ping", "ipconfig", "netstat", "cls"],
    "answer": 2
  },
  {
    "question": "Which command releases the current DHCP IP address?",
    "options": ["ipconfig /all", "ipconfig /renew", "ipconfig /release", "ipconfig /flushdns"],
    "answer": 2
  },
  {
    "question": "Which command renews the DHCP IP address?",
    "options": ["ipconfig /renew", "ipconfig /release", "ping /renew", "netstat /renew"],
    "answer": 0
  },
  {
    "question": "Which command clears the CMD screen?",
    "options": ["clear", "reset", "cls", "exit"],
    "answer": 2
  },
  {
    "question": "What is the length of a MAC address?",
    "options": ["32 bits", "48 bits", "64 bits", "128 bits"],
    "answer": 1
  },
  {
    "question": "A MAC Address is often referred to as the:",
    "options": ["Logical address", "Gateway address", "Physical address", "Loopback address"],
    "answer": 2
  },
  {
    "question": "Which command shows the route path of a packet?",
    "options": ["ping", "tracert", "netstat", "ipconfig"],
    "answer": 1
  },
  {
    "question": "What does CPU stand for?",
    "options": ["Central Power Unit", "Central Processing Unit", "Computer Personal Unit", "Core Processing Utility"],
    "answer": 1
  },
  {
    "question": "Which component is considered the \"brain\" of the computer?",
    "options": ["RAM", "CPU", "Motherboard", "Hard Disk"],
    "answer": 1
  },
  {
    "question": "RAM (Random Access Memory) is known as:",
    "options": ["Permanent memory", "Temporary memory", "Secondary storage", "Read-only memory"],
    "answer": 1
  },
  {
    "question": "ROM (Read-Only Memory) is known as:",
    "options": ["Volatile memory", "Permanent memory", "Flash memory", "Cache memory"],
    "answer": 1
  },
  {
    "question": "Which of these is the fastest storage device?",
    "options": ["HDD", "SSD", "DVD", "Floppy Disk"],
    "answer": 1
  },
  {
    "question": "Which file system is primarily used in modern Windows OS?",
    "options": ["FAT32", "NTFS", "EXT4", "HFS"],
    "answer": 1
  },
  {
    "question": "Cloud computing involves storing data on:",
    "options": ["Local hard drives", "CD-ROMs", "Internet servers", "Floppy disks"],
    "answer": 2
  },
  {
    "question": "What is \"bandwidth\" in networking?",
    "options": ["The physical size of a cable", "The data transfer rate", "The number of users", "The length of a network"],
    "answer": 1
  },
  {
    "question": "Which OS is known for being \"Open Source\"?",
    "options": ["Windows", "Linux", "MacOS", "iOS"],
    "answer": 1
  },
  {
    "question": "What does ISP stand for?",
    "options": ["Internet System Provider", "Internet Service Provider", "Internal Serial Port", "International Storage Point"],
    "answer": 1
  },
  {
    "question": "Which topology uses a central hub or switch?",
    "options": ["Bus", "Ring", "Star", "Mesh"],
    "answer": 2
  },
  {
    "question": "Which topology connects all devices in a closed circle?",
    "options": ["Star", "Ring", "Bus", "Hybrid"],
    "answer": 1
  },
  {
    "question": "Which topology uses a single main cable to connect all nodes?",
    "options": ["Mesh", "Bus", "Star", "Tree"],
    "answer": 1
  },
  {
    "question": "Which connector is used with standard Ethernet cables?",
    "options": ["RJ11", "RJ45", "USB-C", "VGA"],
    "answer": 1
  },
  {
    "question": "Which cable type supports the highest transmission speed?",
    "options": ["Coaxial", "Twisted Pair", "Fiber Optic", "Cat 5"],
    "answer": 2
  },
  {
    "question": "What does Mbps stand for?",
    "options": ["Mega bits Per Second", "Multi bits Per Second", "Micro bytes Per Second", "Main bits Per Server"],
    "answer": 0
  },
  {
    "question": "Which network type covers an entire city?",
    "options": ["LAN", "PAN", "MAN", "WAN"],
    "answer": 2
  },
  {
    "question": "What does VPN stand for?",
    "options": ["Visual Private Network", "Virtual Private Network", "Verified Protocol Node", "Variable Private Network"],
    "answer": 1
  },
  {
    "question": "Which cable is most common in small Ethernet networks?",
    "options": ["Twisted Pair", "Coaxial", "Fiber", "All of these"],
    "answer": 0
  },
  {
    "question": "The 802.11 standard refers to:",
    "options": ["Ethernet", "Bluetooth", "Wi-Fi", "Fiber Optic"],
    "answer": 2
  },
  {
    "question": "A Firewall is used to:",
    "options": ["Increase internet speed", "Protect a network from unauthorized access", "Store user passwords", "Cool the server room"],
    "answer": 1
  },
  {
    "question": "Antivirus software is designed to protect against:",
    "options": ["Power surges", "Dust", "Malware", "Cable breaks"],
    "answer": 2
  },
  {
    "question": "Which malware spreads automatically without user intervention?",
    "options": ["Virus", "Worm", "Trojan", "Adware"],
    "answer": 1
  },
  {
    "question": "Which layer of the OSI model handles encryption?",
    "options": ["Network", "Application", "Presentation", "Transport"],
    "answer": 2
  },
  {
    "question": "Which OSI layer is responsible for end-to-end delivery?",
    "options": ["Physical", "Network", "Transport", "Session"],
    "answer": 2
  },
  {
    "question": "A \"DoS\" attack stands for:",
    "options": ["Data on Service", "Denial of Service", "Disk on System", "Desktop of Server"],
    "answer": 1
  },
  {
    "question": "Which protocol is used for secure remote file transfer?",
    "options": ["HTTP", "FTP", "SSH", "SMTP"],
    "answer": 2
  },
  {
    "question": "ARP (Address Resolution Protocol) is used to find:",
    "options": ["IP Address", "MAC Address", "Port Number", "Domain Name"],
    "answer": 1
  },
  {
    "question": "ICMP is mainly used for:",
    "options": ["File transfer", "Error reporting and diagnostics", "Sending emails", "Browsing web pages"],
    "answer": 1
  },
  {
    "question": "Which protocol assigns IP addresses automatically?",
    "options": ["DNS", "SMTP", "DHCP", "NAT"],
    "answer": 2
  },
  {
    "question": "Which IP address range represents Class B?",
    "options": ["1-126", "128-191", "192-223", "224-239"],
    "answer": 1
  },
  {
    "question": "Which IP address range represents Class D (Multicast)?",
    "options": ["128-191", "192-223", "224-239", "240-255"],
    "answer": 2
  },
  {
    "question": "What is the default subnet mask for Class A?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    "answer": 0
  },
  {
    "question": "What is the default subnet mask for Class B?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "0.0.0.0"],
    "answer": 1
  },
  {
    "question": "The IP address 8.8.8.8 is widely known as:",
    "options": ["Microsoft Update Server", "Google Public DNS", "Localhost", "Default Gateway"],
    "answer": 1
  },
  {
    "question": "In CIDR notation, /24 represents which subnet mask?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.240"],
    "answer": 2
  },
  {
    "question": "The address range 169.254.x.x is known as:",
    "options": ["Private Class A", "APIPA", "Loopback", "Multicast"],
    "answer": 1
  },
  {
    "question": "Which port does DNS use?",
    "options": ["25", "53", "80", "443"],
    "answer": 1
  },
  {
    "question": "Which port does SMTP use?",
    "options": ["21", "25", "110", "143"],
    "answer": 1
  },
  {
    "question": "What is the \"Default Gateway\" used for?",
    "options": ["Assigning IPs", "Accessing external networks/Internet", "Cooling the PC", "Connecting a mouse"],
    "answer": 1
  },
  {
    "question": "Which address is reserved for research and experimental use?",
    "options": ["Class C", "Class D", "Class E", "Class A"],
    "answer": 2
  },
  {
    "question": "The very first address in a subnet is the:",
    "options": ["Gateway Address", "Host Address", "Network Address", "Broadcast Address"],
    "answer": 2
  },
  {
    "question": "The very last address in a subnet is the:",
    "options": ["Subnet Mask", "Network Address", "Broadcast Address", "Host ID"],
    "answer": 2
  },
  {
    "question": "Which cable supports the highest speed and bandwidth over copper?",
    "options": ["Cat 3", "Cat 5", "Cat 6", "RJ11"],
    "answer": 2
  },
  {
    "question": "Bluetooth technology is used for:",
    "options": ["Long-range city communication", "Short-range wireless communication", "Connecting to a WAN", "Fiber optic testing"],
    "answer": 1
  },
  {
    "question": "Which protocol is used to transfer web pages?",
    "options": ["FTP", "SMTP", "HTTP", "SNMP"],
    "answer": 2
  },
  {
    "question": "Which protocol is used to transfer files?",
    "options": ["HTTP", "DNS", "FTP", "POP3"],
    "answer": 2
  },
  {
    "question": "Which address identifies a specific device on a local network segment?",
    "options": ["Subnet ID", "Host ID", "Network ID", "DNS ID"],
    "answer": 1
  },
  {
    "question": "Which device provides wireless internet to a specific area?",
    "options": ["Repeater", "Access Point", "Switch", "Hub"],
    "answer": 1
  },
  {
    "question": "Which OSI layer interacts directly with the user application?",
    "options": ["Physical", "Transport", "Network", "Application"],
    "answer": 3
  },
  {
    "question": "What is the primary role of a \"Server\"?",
    "options": ["To browse the web for a single user", "To provide services or resources to clients", "To act as a physical monitor", "To increase the mouse speed"],
    "answer": 1
  },
  {
    "question": "What is a \"Client\" in a network?",
    "options": ["A machine providing service", "A user's computer that requests services", "A router", "A power supply"],
    "answer": 1
  },
  {
    "question": "What is the address 255.255.255.255 used for?",
    "options": ["Loopback", "Private IP", "Limited Broadcast", "Gateway"],
    "answer": 2
  },
  {
    "question": "Which of the following is a valid IPv4 address?",
    "options": ["192.168.0.256", "192.168.0.10", "300.10.10.1", "172.16.255.257"],
    "answer": 1
  },
  {
    "question": "What does MAC represent?",
    "options": ["Main Access Controller", "Media Access Control", "Modern Access Card", "Memory Access Center"],
    "answer": 1
  },
  {
    "question": "Which tool is used to create a safety copy of data?",
    "options": ["Antivirus", "Firewall", "Backup software", "Browser"],
    "answer": 2
  },
  {
    "question": "Which device connects a PC to the internet?",
    "options": ["Switch", "Modem", "Scanner", "Printer"],
    "answer": 1
  },
  {
    "question": "What is the brain of the computer?",
    "options": ["Motherboard", "CPU", "PSU", "BIOS"],
    "answer": 1
  },
  {
    "question": "Which memory is temporary?",
    "options": ["ROM", "SSD", "RAM", "HDD"],
    "answer": 2
  },
  {
    "question": "Which layer of OSI handles logical routing?",
    "options": ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
    "answer": 1
  }
]
};