import { Quiz } from "../../../../types";

export const ictInfrastructure: Quiz = {
  id: "04-ict-infrastructure",
  title: "ICT Infrastructure 01",
  description: "Deep dive into BGP, subnetting, and network security.",
  timeLimit: 3000,
  questions: [
  {
    "question": "Which certification is the entry-level standard for Data Center professionals?",
    "options": ["CDCP", "CDCS", "CDCE", "RCDD"],
    "answer": 0
  },
  {
    "question": "In a Data Center, the 'Hot Aisle/Cold Aisle' design is primarily used for:",
    "options": ["Fire suppression", "Airflow management and cooling efficiency", "Physical security", "Cable management"],
    "answer": 1
  },
  {
    "question": "Tier IV Data Center infrastructure according to Uptime Institute must have:",
    "options": ["99.671% availability", "99.741% availability", "99.991% availability", "99.995% availability (Fault Tolerant)"],
    "answer": 3
  },
  {
    "question": "Which protocol is commonly used for Voice over IP (VoIP) signaling?",
    "options": ["SIP", "FTP", "SNMP", "SMTP"],
    "answer": 0
  },
  {
    "question": "A PDU in a Data Center context stands for:",
    "options": ["Packet Data Unit", "Power Distribution Unit", "Primary Data Utility", "Personal Digital Unit"],
    "answer": 1
  },
  {
    "question": "What is the standard height of one Rack Unit (1U)?",
    "options": ["1.5 inches", "1.75 inches", "2.0 inches", "2.25 inches"],
    "answer": 1
  },
  {
    "question": "Which standard covers 'Telecommunications Infrastructure Standard for Data Centers'?",
    "options": ["TIA-942", "TIA-568", "ISO 9001", "IEEE 802.11"],
    "answer": 0
  },
  {
    "question": "In 'Structured Cabling,' the main cross-connect is usually located in the:",
    "options": ["Entrance Facility", "Equipment Room (ER)", "Telecommunications Room (TR)", "Work Area"],
    "answer": 1
  },
  {
    "question": "Which organization provides the RCDD (Registered Communications Distribution Designer) certification?",
    "options": ["Cisco", "BICSI", "ISACA", "PMI"],
    "answer": 1
  },
  {
    "question": "The 'Three-Tier' Data Center network architecture consists of:",
    "options": ["Core, Distribution, Access", "Spine, Leaf, Root", "Data, Voice, Video", "WAN, LAN, PAN"],
    "answer": 0
  },
  {
    "question": "Which type of fiber is best suited for long-distance transmission?",
    "options": ["Multimode (OM3)", "Multimode (OM4)", "Single-mode (OS2)", "Step-index Multimode"],
    "answer": 2
  },
  {
    "question": "The standard core diameter of a Single-mode fiber is approximately:",
    "options": ["9 microns", "50 microns", "62.5 microns", "100 microns"],
    "answer": 0
  },
  {
    "question": "Which device is used to measure the loss and identify break locations in a fiber cable?",
    "options": ["Multimeter", "OTDR (Optical Time-Domain Reflectometer)", "Oscilloscope", "Spectrum Analyzer"],
    "answer": 1
  },
  {
    "question": "Which connector type is often referred to as a 'Subscriber Connector'?",
    "options": ["LC", "ST", "SC", "FC"],
    "answer": 2
  },
  {
    "question": "What process is used to permanently join two fiber cores using heat?",
    "options": ["Mechanical splicing", "Fusion splicing", "Gluing", "Soldering"],
    "answer": 1
  },
  {
    "question": "What is the primary cause of signal weakening in optical fiber?",
    "options": ["Reflection", "Refraction", "Attenuation", "Dispersion"],
    "answer": 2
  },
  {
    "question": "An 'OFC Termination Plan' primarily details:",
    "options": ["The cost of the fiber", "The mapping of fiber strands to patch panel ports", "The speed of the laser", "The color of the outer jacket"],
    "answer": 1
  },
  {
    "question": "Which color jacket typically identifies Single-mode fiber?",
    "options": ["Orange", "Aqua", "Yellow", "Blue"],
    "answer": 2
  },
  {
    "question": "The loss of signal power when a connector is inserted into a link is called:",
    "options": ["Return Loss", "Insertion Loss", "Crosstalk", "Impedance"],
    "answer": 1
  },
  {
    "question": "OM4 fiber is a type of:",
    "options": ["Laser-optimized Multimode fiber", "Long-haul Single-mode fiber", "Plastic Optical Fiber", "High-voltage copper cable"],
    "answer": 0
  },
  {
    "question": "In CCTV, what does WDR stand for?",
    "options": ["Wide Dynamic Range", "Wireless Data Recording", "Web Digital Resolution", "Water Damage Resistance"],
    "answer": 0
  },
  {
    "question": "Which protocol allows video from different manufacturers' cameras to work with one NVR?",
    "options": ["ONVIF", "HTTP", "FTP", "SMTP"],
    "answer": 0
  },
  {
    "question": "What is the primary advantage of an IP Camera over an Analog Camera?",
    "options": ["Lower cost", "Higher resolution and PoE capability", "Needs more cabling", "Harder to install"],
    "answer": 1
  },
  {
    "question": "In Access Control, 'Biometrics' refers to:",
    "options": ["Using a plastic card", "Using a physical key", "Identification via physical traits (fingerprint, iris)", "Using a PIN code"],
    "answer": 2
  },
  {
    "question": "The term 'PTZ' in camera systems stands for:",
    "options": ["Point, Tilt, Zoom", "Pan, Tilt, Zoom", "Power, Time, Zone", "Picture, Total, Zero"],
    "answer": 1
  },
  {
    "question": "Which component of an Access Control system makes the decision to unlock a door?",
    "options": ["The Card Reader", "The Door Contact", "The Controller/Panel", "The Request-to-Exit (REX) sensor"],
    "answer": 2
  },
  {
    "question": "'Perimeter Surveillance' integration usually combines cameras with:",
    "options": ["Ground sensors and fence-mounted vibrations sensors", "Office printers", "Employee monitors", "Wireless routers"],
    "answer": 0
  },
  {
    "question": "What is 'LPR' technology used for in surveillance?",
    "options": ["Lighting Power Reset", "License Plate Recognition", "Low Picture Resolution", "Laser Perimeter Radius"],
    "answer": 1
  },
  {
    "question": "Which storage technology is purpose-built for 24/7 surveillance recording?",
    "options": ["SSD", "Surveillance-grade HDD (e.g., WD Purple/Skyhawk)", "SD Card", "Magnetic Tape"],
    "answer": 1
  },
  {
    "question": "What does 'Video Analytics' refer to?",
    "options": ["Repairing a broken camera", "Automated detection of events like 'line crossing' or 'object left behind'", "Cleaning the camera lens", "Selling video footage"],
    "answer": 1
  },
  {
    "question": "A 'Video Wall Controller' is responsible for:",
    "options": ["Powering the displays", "Managing and splitting the signal across multiple screens", "Recording the video", "Cooling the room"],
    "answer": 1
  },
  {
    "question": "Which interface is most common for high-definition video wall inputs?",
    "options": ["VGA", "HDMI/DisplayPort", "RCA", "S-Video"],
    "answer": 1
  },
  {
    "question": "The gap between the active screen areas of two adjacent monitors in a video wall is called:",
    "options": ["Margin", "Bezel", "Border", "Frame"],
    "answer": 1
  },
  {
    "question": "What is the main benefit of a 'Direct View LED' wall over an LCD video wall?",
    "options": ["Higher cost", "Seamless appearance (no bezels)", "Lower brightness", "Heavier weight"],
    "answer": 1
  },
  {
    "question": "In a projection system, 'Lumens' measures:",
    "options": ["The resolution", "The weight of the projector", "The brightness of the light output", "The lifespan of the bulb"],
    "answer": 2
  },
  {
    "question": "A 'Video Matrix Switcher' allows:",
    "options": ["Only one input to one output", "Any input to be routed to any output(s)", "Only digital to analog conversion", "Only voice signals to pass"],
    "answer": 1
  },
  {
    "question": "Aspect ratio 16:9 is commonly known as:",
    "options": ["Widescreen", "Square", "Portrait", "Vertical"],
    "answer": 0
  },
  {
    "question": "Which technology is used in 'High-End' projectors for superior color and contrast?",
    "options": ["CRT", "DLP or 3LCD", "VHS", "LED indicator"],
    "answer": 1
  },
  {
    "question": "Resolution 3840x2160 is also known as:",
    "options": ["Full HD", "720p", "4K UHD", "8K"],
    "answer": 2
  },
  {
    "question": "EDID (Extended Display Identification Data) helps a video processor to:",
    "options": ["Record the video", "Automatically detect the display's capabilities (resolution, refresh rate)", "Encrypt the signal", "Delete the signal"],
    "answer": 1
  },
  {
    "question": "What is the current entry-level Cisco networking certification?",
    "options": ["CCT", "CCNA", "CCNP", "CCIE"],
    "answer": 1
  },
  {
    "question": "HCNA/HCNP (now HCIA/HCIP) are certifications from which vendor?",
    "options": ["Cisco", "Juniper", "Huawei", "HP"],
    "answer": 2
  },
  {
    "question": "Which CCNP concentration exam focuses on Security?",
    "options": ["ENCOR", "SCOR", "DCCOR", "CLCOR"],
    "answer": 1
  },
  {
    "question": "The 'I' in HCIA stands for:",
    "options": ["International", "Intelligence", "Infrastructure", "Information"],
    "answer": 2
  },
  {
    "question": "Which protocol is used for secure shell access in network management?",
    "options": ["Telnet", "SSH", "HTTP", "FTP"],
    "answer": 1
  },
  {
    "question": "OSPF is categorized as a:",
    "options": ["Distance Vector Protocol", "Link State Protocol", "Path Vector Protocol", "Static Protocol"],
    "answer": 1
  },
  {
    "question": "Access Control Lists (ACLs) are primarily used for:",
    "options": ["Speeding up the network", "Traffic filtering and security", "Assigning IP addresses", "Compressing data"],
    "answer": 1
  },
  {
    "question": "What is a 'Next-Generation Firewall' (NGFW) capability that traditional firewalls lack?",
    "options": ["IP Filtering", "Deep Packet Inspection (DPI) and Intrusion Prevention (IPS)", "NAT", "Port Blocking"],
    "answer": 1
  },
  {
    "question": "In Cisco terminology, what is a 'VTP'?",
    "options": ["Voice Trunking Protocol", "VLAN Trunking Protocol", "Virtual Transport Path", "Video Transfer Protocol"],
    "answer": 1
  },
  {
    "question": "Which device provides wireless connectivity to users in an enterprise?",
    "options": ["Switch", "Wireless Access Point (WAP)", "Firewall", "Router"],
    "answer": 1
  }
]
};