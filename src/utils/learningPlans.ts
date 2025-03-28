export type LearningPathType = {
  id: string;
  title: string;
  focus: string;
  keyTopics: string[];
};

export const mockLearningPaths: LearningPathType[] = [
  {
    id: "1",
    title: "Frontend Development",
    focus: "Focus on building the visual aspects of websites and applications.",
    keyTopics: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "Angular",
      "UI/UX Design",
      "Responsive Design",
      "Web Accessibility",
    ],
  },
  {
    id: "2",
    title: "Backend Development",
    focus:
      "Focus on server-side logic, databases, and application architecture.",
    keyTopics: [
      "Node.js",
      "Python (Django, Flask)",
      "Ruby on Rails",
      "Java",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "API Design",
      "Authentication",
      "Server Management",
    ],
  },
  {
    id: "3",
    title: "Full-Stack Development",
    focus: "Combination of frontend and backend development.",
    keyTopics: [
      "JavaScript (React + Node.js)",
      "MERN Stack",
      "MEAN Stack",
      "Database Management",
      "API Integration",
    ],
  },
  {
    id: "4",
    title: "Data Science & Machine Learning",
    focus:
      "Focus on working with data, statistics, and machine learning models.",
    keyTopics: [
      "Python",
      "R",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Data Visualization",
      "Deep Learning",
      "Natural Language Processing",
    ],
  },
  {
    id: "5",
    title: "Artificial Intelligence (AI)",
    focus: "Focus on developing intelligent systems and algorithms.",
    keyTopics: [
      "Machine Learning",
      "Neural Networks",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics",
      "AI in Business",
    ],
  },
  {
    id: "6",
    title: "DevOps & Cloud Engineering",
    focus:
      "Focus on the collaboration between development and operations, and managing cloud infrastructure.",
    keyTopics: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "AWS",
      "Azure",
      "Google Cloud",
      "Infrastructure as Code",
      "Automation",
    ],
  },
  {
    id: "7",
    title: "Cybersecurity",
    focus:
      "Focus on protecting systems, networks, and data from security breaches.",
    keyTopics: [
      "Ethical Hacking",
      "Penetration Testing",
      "Network Security",
      "Cryptography",
      "Firewalls",
      "Security Audits",
      "Incident Response",
    ],
  },
  {
    id: "8",
    title: "Mobile Development",
    focus:
      "Focus on building applications for mobile devices (iOS and Android).",
    keyTopics: [
      "Swift (iOS)",
      "Kotlin (Android)",
      "React Native",
      "Flutter",
      "App Store Optimization",
      "Mobile UX/UI Design",
    ],
  },
  {
    id: "9",
    title: "Game Development",
    focus: "Focus on designing and building interactive video games.",
    keyTopics: [
      "Unity",
      "Unreal Engine",
      "C#",
      "Game Design",
      "3D Modeling",
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Game Programming",
    ],
  },
  {
    id: "10",
    title: "Blockchain Development",
    focus:
      "Focus on building decentralized applications and systems using blockchain technology.",
    keyTopics: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "Cryptocurrency",
      "NFTs",
      "Blockchain Security",
      "DApps",
    ],
  },
  {
    id: "11",
    title: "Software Engineering",
    focus:
      "Focus on the engineering principles of building robust, scalable software systems.",
    keyTopics: [
      "Algorithms",
      "Data Structures",
      "System Design",
      "Testing",
      "Version Control (Git)",
      "Agile Development",
      "Software Architecture",
    ],
  },
  {
    id: "12",
    title: "UX/UI Design",
    focus:
      "Focus on the user experience and interface design for applications and websites.",
    keyTopics: [
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
      "Figma",
      "Sketch",
      "Adobe XD",
    ],
  },
  {
    id: "13",
    title: "Augmented Reality (AR) & Virtual Reality (VR)",
    focus: "Focus on immersive experiences and applications in AR and VR.",
    keyTopics: [
      "Unity",
      "3D Modeling",
      "XR Design",
      "Motion Tracking",
      "Interaction Design",
      "Oculus",
      "ARKit/ARCore",
    ],
  },
  {
    id: "14",
    title: "IoT (Internet of Things)",
    focus:
      "Focus on the connection of physical devices to the internet and cloud platforms.",
    keyTopics: [
      "Sensors",
      "Raspberry Pi",
      "Arduino",
      "Embedded Systems",
      "MQTT",
      "Cloud Integration",
      "Automation",
    ],
  },
  {
    id: "15",
    title: "Tech Entrepreneurship",
    focus: "Focus on building and scaling tech businesses.",
    keyTopics: [
      "Product Management",
      "Business Strategy",
      "Fundraising",
      "Lean Startup",
      "MVP Development",
      "Market Research",
      "Leadership",
    ],
  },
];
