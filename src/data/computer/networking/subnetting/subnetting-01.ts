import { Quiz } from "../../../../types";

export const subnetting01: Quiz = {
  id: "06-subnetting-01",
  title: "Subnetting Scenario Base 01",
  description: "Subnetting Scenario Base 50 MCQs",
  timeLimit: 3000,
  questions: [
  {
    "question": "Scenario: You need to create a subnet for a small office branch that has exactly 25 hosts. Which CIDR mask provides enough addresses while wasting the fewest?",
    "options": ["/24", "/26", "/27", "/28"],
    "answer": 2
  },
  {
    "question": "Scenario: A network administrator needs to connect two routers via a serial link. Which mask is the industry standard for point-to-point links to conserve IP space?",
    "options": ["/24", "/28", "/30", "/32"],
    "answer": 2
  },
  {
    "question": "Scenario: You are given the block 10.0.0.0/8. You need to create subnets that can support at least 2,000 hosts each. What is the appropriate mask?",
    "options": ["/20", "/21", "/22", "/19"],
    "answer": 1
  },
  {
    "question": "Scenario: A department requires 12 usable IP addresses. Which subnet mask should be assigned to their VLAN?",
    "options": ["255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.0"],
    "answer": 1
  },
  {
    "question": "Scenario: An ISP gives you a /29 block. How many public-facing servers can you assign unique IP addresses to in this block?",
    "options": ["8", "6", "4", "2"],
    "answer": 1
  },
  {
    "question": "Scenario: A host is assigned the IP 192.168.10.187 with a mask of 255.255.255.192. What is the network address for this host?",
    "options": ["192.168.10.0", "192.168.10.128", "192.168.10.192", "192.168.10.64"],
    "answer": 1
  },
  {
    "question": "Scenario: For the IP address 172.16.45.20/30, what is the directed broadcast address?",
    "options": ["172.16.45.255", "172.16.45.23", "172.16.45.20", "172.16.45.25"],
    "answer": 1
  },
  {
    "question": "Scenario: You are configuring a server with 192.168.1.10/28. Which of the following IPs is in the same subnet?",
    "options": ["192.168.1.17", "192.168.1.31", "192.168.1.14", "192.168.1.32"],
    "answer": 2
  },
  {
    "question": "Scenario: If a network ID is 10.10.10.0/23, what is the last usable IP address in this range?",
    "options": ["10.10.10.254", "10.10.11.254", "10.10.11.255", "10.11.0.254"],
    "answer": 1
  },
  {
    "question": "Scenario: You see a routing table entry for 192.168.5.64/26. What is the broadcast address for this specific route?",
    "options": ["192.168.5.255", "192.168.5.127", "192.168.5.63", "192.168.5.128"],
    "answer": 1
  },
  {
    "question": "Scenario: You have a Class C network and need to create 8 subnets. What is the new subnet mask?",
    "options": ["255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.128"],
    "answer": 0
  },
  {
    "question": "Scenario: You are using VLSM to divide 192.168.1.0/24. You create one /25 subnet. How many /26 subnets can you create from the remaining space?",
    "options": ["1", "2", "4", "0"],
    "answer": 1
  },
  {
    "question": "Scenario: A router interface is configured as 172.16.1.1/25. A host on the network is configured as 172.16.1.128/25. Why can't they communicate?",
    "options": ["IP conflict", "They are on different subnets", "Wrong Gateway", "Cable fault"],
    "answer": 1
  },
  {
    "question": "Scenario: You want to summarize the following four routes into one: 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24. What is the summary route?",
    "options": ["192.168.0.0/22", "192.168.0.0/21", "192.168.0.0/23", "192.168.0.0/20"],
    "answer": 0
  },
  {
    "question": "Scenario: How many subnets are created if you apply a /20 mask to a Class B network?",
    "options": ["4", "8", "16", "32"],
    "answer": 2
  },
  {
    "question": "Scenario: Which of the following is a valid usable host IP in the subnet 192.168.5.32/28?",
    "options": ["192.168.5.32", "192.168.5.47", "192.168.5.33", "192.168.5.48"],
    "answer": 2
  },
  {
    "question": "Scenario: A technician configures a host with 192.168.1.63/26. The host cannot connect to the network. What is the issue?",
    "options": ["Duplicate IP", "IP is the broadcast address", "Wrong mask", "DHCP is off"],
    "answer": 1
  },
  {
    "question": "Scenario: What is the wildcard mask for the subnet mask 255.255.255.248?",
    "options": ["0.0.0.7", "0.0.0.15", "0.0.0.31", "0.0.0.255"],
    "answer": 0
  },
  {
    "question": "Scenario: You are pinging from 10.1.1.1/24 to 10.1.2.1/24. The ping fails. You change both masks to /16 and it works. What was the issue?",
    "options": ["Hardware failure", "They were in different logical networks", "Routing was enabled", "Firewall blocked /24"],
    "answer": 1
  },
  {
    "question": "Scenario: A device has an IP of 172.31.255.254 with a mask of 255.255.0.0. What is its network ID?",
    "options": ["172.31.255.0", "172.31.0.0", "172.0.0.0", "172.31.255.255"],
    "answer": 1
  },
  {
    "question": "Scenario: What is the decimal value of the mask /19?",
    "options": ["255.255.224.0", "255.255.240.0", "255.255.192.0", "255.255.248.0"],
    "answer": 0
  },
  {
    "question": "Scenario: Convert the mask 255.255.255.252 to CIDR notation.",
    "options": ["/30", "/31", "/28", "/29"],
    "answer": 0
  },
  {
    "question": "Scenario: In a /26 mask, what is the 'Magic Number' (increment) used to find subnets?",
    "options": ["16", "32", "64", "128"],
    "answer": 2
  },
  {
    "question": "Scenario: If you borrow 4 bits from a Class C network, how many usable hosts per subnet are available?",
    "options": ["14", "16", "30", "62"],
    "answer": 0
  },
  {
    "question": "Scenario: A network has the mask 255.255.240.0. How many bits are used for the host portion?",
    "options": ["4", "8", "12", "20"],
    "answer": 2
  },
  {
    "question": "What is the first usable IP address in the network 10.20.30.0/23?",
    "options": ["10.20.30.0", "10.20.30.1", "10.20.31.1", "10.20.29.1"],
    "answer": 1
  },
  {
    "question": "What is the last usable IP address in the network 192.168.1.0/24?",
    "options": ["192.168.1.255", "192.168.1.254", "192.168.1.0", "192.168.0.254"],
    "answer": 1
  },
  {
    "question": "How many subnets are created when using a /27 mask on a Class C network?",
    "options": ["4", "6", "8", "16"],
    "answer": 2
  },
  {
    "question": "Which CIDR mask is used to represent a single 'All Hosts' IP address in a Firewall configuration?",
    "options": ["/24", "/30", "/31", "/32"],
    "answer": 3
  },
  {
    "question": "What is the default subnet mask for a Class B IP address?",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    "answer": 1
  },
  {
    "question": "What is the broadcast address for the subnet 192.168.1.192/26?",
    "options": ["192.168.1.255", "192.168.1.192", "192.168.1.223", "192.168.1.254"],
    "answer": 2
  },
  {
    "question": "Can the address 192.168.1.64/26 be assigned to a PC?",
    "options": ["Yes, it is a valid host address.", "No, it is the broadcast address.", "No, it is the Network ID.", "Yes, but only if it is a server."],
    "answer": 2
  },
  {
    "question": "What is the maximum number of usable hosts in a /22 subnet?",
    "options": ["1024", "1022", "510", "2046"],
    "answer": 1
  },
  {
    "question": "What is the maximum number of usable hosts in a /21 subnet?",
    "options": ["2048", "2046", "4094", "1022"],
    "answer": 1
  },
  {
    "question": "What are the total number of addresses (including network and broadcast) in a /28 subnet?",
    "options": ["14", "16", "30", "32"],
    "answer": 1
  },
  {
    "question": "How many usable host addresses are available in a /28 subnet?",
    "options": ["16", "15", "14", "12"],
    "answer": 2
  },
  {
    "question": "What is the range (Network ID to Broadcast) of the second subnet of 192.168.1.0/26?",
    "options": ["192.168.1.0 to 192.168.1.63", "192.168.1.64 to 192.168.1.127", "192.168.1.128 to 192.168.1.191", "192.168.1.65 to 192.168.1.126"],
    "answer": 1
  },
  {
    "question": "What is the 'increment' (block size) for a /28 subnet mask?",
    "options": ["8", "16", "32", "64"],
    "answer": 1
  },
  {
    "question": "What is the 'increment' (block size) for a /29 subnet mask?",
    "options": ["4", "8", "16", "32"],
    "answer": 1
  },
  {
    "question": "Which subnet mask is used to divide a Class C network into 2 subnets?",
    "options": ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
    "answer": 1
  },
  {
    "question": "What is the CIDR notation for the subnet mask 255.255.255.128?",
    "options": ["/24", "/25", "/26", "/27"],
    "answer": 1
  },
  {
    "question": "What is the CIDR notation for the subnet mask 255.255.255.248?",
    "options": ["/28", "/29", "/30", "/27"],
    "answer": 1
  },
  {
    "question": "What is the broadcast address of the network 172.16.0.0/16?",
    "options": ["172.16.0.255", "172.16.255.0", "172.16.255.255", "172.255.255.255"],
    "answer": 2
  },
  {
    "question": "What is the Subnet ID (Network Address) for the host 192.168.1.55/27?",
    "options": ["192.168.1.0", "192.168.1.32", "192.168.1.48", "192.168.1.64"],
    "answer": 1
  },
  {
    "question": "How many bits must be borrowed from the host portion to create at least 16 subnets?",
    "options": ["2", "3", "4", "5"],
    "answer": 2
  },
  {
    "question": "What is the decimal subnet mask for a /13 prefix?",
    "options": ["255.240.0.0", "255.248.0.0", "255.252.0.0", "255.224.0.0"],
    "answer": 1
  },
  {
    "question": "What is the decimal subnet mask for a /18 prefix?",
    "options": ["255.255.0.0", "255.255.128.0", "255.255.192.0", "255.255.224.0"],
    "answer": 2
  },
  {
    "question": "Is 172.16.128.0/17 a valid Network ID?",
    "options": ["Yes", "No"],
    "answer": 0
  },
  {
    "question": "What is the broadcast address for 10.0.0.0/30?",
    "options": ["10.0.0.1", "10.0.0.2", "10.0.0.3", "10.0.0.4"],
    "answer": 2
  },
  {
    "question": "How many usable host IP addresses are available in a /25 subnet?",
    "options": ["128", "127", "126", "62"],
    "answer": 2
  }
]
};