export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  highlights: string[];
  role: string;
  category: string;
  howItWorks: string[];
  githubUrl?: string;
  liveDemoUrl?: string | null;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location?: string;
  period: string;
  score?: string;
  type?: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  institution: string;
  platform: string;
  year: string;
  credentialTopic: string;
  credentialId?: string;
  skillsAcquired: string[];
  verificationNote: string;
}

export interface QuickStat {
  label: string;
  value: string;
  description: string;
  icon: 'FolderGit2' | 'Award' | 'Server' | 'Sparkles';
}

export const PERSONAL_DETAILS = {
  name: "Madhumati B S",
  title: "Aspiring Java Developer | Backend Developer",
  websiteTitle: "Madhumati B S | Java Developer Portfolio",
  location: "Karnataka, India",
  email: "madhumathibs386@gmail.com",
  phone: "+91 9035429359",
  linkedin: "https://linkedin.com/in/madhumati-bs",
  github: "https://github.com/MadhumatiBS",
  typingRoles: [
    "Java Developer",
    "Backend Developer",
    "Spring Boot Developer"
  ],
  internshipMessage:
    "Open to internship opportunities in Java Development, Backend Development, and Software Development to build high-performance, real-world systems.",
  summary:
    "I am a Computer Science Engineering student passionate about Java development, backend technologies, and building practical software applications. I enjoy solving problems and developing efficient, user-friendly applications using Java, Spring Boot, MySQL, and other technologies.",
  aboutText: [
    "I am a Computer Science Engineering student at Alva's Institute of Engineering and Technology, Mijar–Moodbidri. I have hands-on experience in Java, Spring Boot, MySQL, Python, and web development technologies.",
    "I have developed projects involving recruitment matching, report card automation, inventory management, and hotel management. I am interested in backend development, REST APIs, database management, and building practical applications.",
    "I am currently looking for internship opportunities in Java Development, Backend Development, and Software Development where I can improve my technical skills and contribute to real-world projects."
  ],
  highlights: [
    {
      title: "Computer Science Engineering Student",
      subtitle: "AIET, Mijar–Moodbidri (Autonomous)",
      icon: "GraduationCap"
    },
    {
      title: "Java & Spring Boot Developer",
      subtitle: "Backend Services & REST APIs",
      icon: "Server"
    },
    {
      title: "4 Projects",
      subtitle: "Enterprise & Academic Dashboards",
      icon: "FolderGit2"
    },
    {
      title: "Internship Seeker",
      subtitle: "Open to Immediate Opportunities",
      icon: "Sparkles"
    }
  ]
};

export const QUICK_STATS: QuickStat[] = [
  {
    value: "4 Projects",
    label: "Practical Systems",
    description: "Enterprise & academic dashboards built with Java, Spring Boot & Python",
    icon: "FolderGit2"
  },
  {
    value: "3 Certifications",
    label: "Accredited Credentials",
    description: "Coursera credentials from Duke University, Michigan & Infosys",
    icon: "Award"
  },
  {
    value: "Java & Spring Boot",
    label: "Core Specialization",
    description: "Backend REST APIs, Spring Data JPA & relational MySQL persistence",
    icon: "Server"
  },
  {
    value: "Open to Internships",
    label: "Availability Status",
    description: "Seeking Java, Backend & Software Development internship roles",
    icon: "Sparkles"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "C", "Python"]
  },
  {
    name: "Frameworks",
    icon: "Layers",
    skills: ["Spring Boot", "Spring Data JPA"]
  },
  {
    name: "Web Technologies",
    icon: "Globe",
    skills: ["HTML", "CSS", "JSP", "Servlets", "REST API"]
  },
  {
    name: "Database",
    icon: "Database",
    skills: ["MySQL", "SQL"]
  },
  {
    name: "Core Concepts",
    icon: "Cpu",
    skills: [
      "Data Structures",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)"
    ]
  },
  {
    name: "Tools",
    icon: "Terminal",
    skills: ["Git", "GitHub", "Maven", "Apache Tomcat"]
  },
  {
    name: "Libraries & Other Technologies",
    icon: "FileText",
    skills: ["OpenCV", "Pandas", "Excel", "ReportLab"]
  }
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time Management"
];

export const LANGUAGES = [
  { name: "Kannada", proficiency: "Native / Fluent" },
  { name: "English", proficiency: "Professional" },
  { name: "Hindi", proficiency: "Conversational" },
  { name: "Telugu", proficiency: "Conversational" }
];

export const PROJECTS: Project[] = [
  {
    id: "candidate-job-matching",
    title: "AI Candidate–Job Matching System",
    shortDescription:
      "AI-powered recruitment dashboard with candidate profiles, job listings, skill matching and compatibility scores.",
    fullDescription:
      "A comprehensive talent acquisition platform built with Java, Spring Boot, and MySQL. It computes compatibility scores between applicant resumes and enterprise job postings, streamlining recruiter workflows with algorithmic skill analysis and automated candidate profiling.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
    image: "/src/assets/images/project_recruitment_dashboard_1790674493775.jpg",
    role: "Backend Architecture & REST API Development",
    category: "Recruitment & AI Matching",
    highlights: [
      "Candidate profiles with parsed skills and experience records",
      "Job listings management with role-specific technical requirements",
      "Candidate skill matching engine calculating compatibility percentages",
      "Dynamic search and multi-criteria applicant filtering dashboard"
    ],
    howItWorks: [
      "Recruiters upload job descriptions defining required technical competencies and weightages.",
      "The system parses candidate profile attributes and indexes skill tags in a normalized MySQL schema.",
      "Spring Boot matching service runs a weighted compatibility algorithm comparing candidate competencies with role criteria.",
      "Results are rendered on the reactive dashboard with percentage gauges, match breakdown tags, and one-click applicant shortlist actions."
    ],
    githubUrl: "https://github.com/MadhumatiBS",
    liveDemoUrl: null
  },
  {
    id: "automated-report-card-generator",
    title: "Automated Report Card Generator",
    shortDescription:
      "Student report card dashboard showing student details, subject-wise marks, grades, GPA and report generation.",
    fullDescription:
      "An automated academic grading and reporting system developed using Python, Pandas, and ReportLab. It processes raw Excel mark sheets, validates student USN data, calculates SGPA/CGPA, and generates standardized high-quality PDF report cards instantly.",
    technologies: ["Python", "Pandas", "Excel", "ReportLab"],
    image: "/src/assets/images/project_report_card_dashboard_1790674508144.jpg",
    role: "Data Processing Pipeline & PDF Generation Engine",
    category: "Academic Automation",
    highlights: [
      "Instant student USN search and academic profile retrieval",
      "Subject-wise marks parsing with grade point calculation",
      "Automated SGPA/CGPA evaluation based on college grading rubrics",
      "Instant batch PDF report card generation and live preview"
    ],
    howItWorks: [
      "Raw Excel examination sheets are ingested via the Pandas data processing module.",
      "The engine verifies student USN identifiers, validates marks thresholds, and checks for grading inconsistencies.",
      "Grade points, SGPA, and cumulative CGPA are calculated using standard university credit formulas.",
      "ReportLab compiles the structured metrics into a print-ready, tamper-resistant PDF report card ready for distribution."
    ],
    githubUrl: "https://github.com/MadhumatiBS",
    liveDemoUrl: null
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    shortDescription:
      "Inventory dashboard with products, stock quantities, categories, low-stock alerts and inventory summaries.",
    fullDescription:
      "A full-featured warehouse and retail inventory system built with Java, SQL, HTML, CSS, and Excel export support. Features role-based access for Admins and Standard Users, automated stock replenishment alerts, and category summaries.",
    technologies: ["Java", "SQL", "HTML", "CSS", "Excel"],
    image: "/src/assets/images/project_inventory_dashboard_1790674522670.jpg",
    role: "Full-Stack Development & Database Schema Design",
    category: "Enterprise Resource Planning",
    highlights: [
      "Admin and User authentication with role-based access controls",
      "Product catalog management across categorized warehouse bins",
      "Real-time stock quantity tracking and low-stock warning banners",
      "Summary metrics dashboard and Excel report data export"
    ],
    howItWorks: [
      "Users log in through secure authentication distinguishing Admin permissions from staff accounts.",
      "Product records with SKU codes, unit costs, threshold minimums, and suppliers are stored in relational SQL tables.",
      "Automated stock listeners monitor inventory movements and flag items falling below safety stock limits.",
      "Managers generate real-time inventory valuations and export tabulated audit reports to Excel."
    ],
    githubUrl: "https://github.com/MadhumatiBS",
    liveDemoUrl: null
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    shortDescription:
      "Hotel management dashboard for managing rooms, reservations, customer information and room availability.",
    fullDescription:
      "A robust enterprise hospitality system developed with Java, MySQL, Servlets, and JSP. Streamlines front-desk operations including room booking status, guest profile management, check-in/check-out tracking, and room occupancy analytics.",
    technologies: ["Java", "MySQL", "JSP", "Servlets"],
    image: "/src/assets/images/project_hotel_dashboard_1790674543539.jpg",
    role: "Backend Servlets, JSP Views & Relational Database",
    category: "Hospitality Management",
    highlights: [
      "Visual room availability grid with live occupancy status",
      "Guest reservation workflows and check-in/check-out logs",
      "Customer information directory with booking history records",
      "Occupancy summary metrics and room revenue tracking"
    ],
    howItWorks: [
      "Front-desk staff view an interactive grid of room suites color-coded by current status (Vacant, Occupied, Maintenance).",
      "When a guest books, the Java Servlet creates a transactional reservation record in MySQL ensuring zero double-booking.",
      "Customer profiles capture government ID details, check-in/check-out dates, and billing charges.",
      "Daily occupancy rates and revenue metrics are dynamically computed and rendered on the administrative JSP portal."
    ],
    githubUrl: "https://github.com/MadhumatiBS",
    liveDemoUrl: null
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "Alva's Institute of Engineering and Technology (AIET)",
    location: "Mijar–Moodbidri",
    period: "2024 – Present",
    type: "Autonomous",
    description:
      "Pursuing Computer Science and Engineering with primary focus on Java programming, Data Structures, Relational Database Management Systems, and Object-Oriented Software Design."
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Sapthagiri PU College, Davanagere",
    period: "2024",
    score: "85.67%",
    description:
      "Completed Pre-University education with distinction, demonstrating strong analytical and mathematical fundamentals."
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Karnataka Cultural Association",
    period: "2022",
    score: "91.70%",
    description:
      "Graduated secondary school with high academic distinction and strong foundational aptitude."
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Java Programming: Solving Problems with Software",
    institution: "Duke University",
    platform: "Coursera",
    year: "2025",
    credentialTopic: "Java Core, Algorithms & Software Design",
    credentialId: "COURSERA-DUKE-JAVA-2025",
    skillsAcquired: ["Core Java", "Algorithmic Thinking", "File I/O", "CSV Data Analysis"],
    verificationNote: "Official course certification accredited by Duke University on Coursera."
  },
  {
    title: "Data Structures in C",
    institution: "University of Michigan",
    platform: "Coursera",
    year: "2025",
    credentialTopic: "Linear & Non-Linear Structures, Pointers & Memory",
    credentialId: "COURSERA-UMICH-DS-2025",
    skillsAcquired: ["Pointers & Dynamic Memory", "Linked Lists", "Trees & Graphs", "Complexity Analysis"],
    verificationNote: "Official course certification accredited by University of Michigan on Coursera."
  },
  {
    title: "Operating System Foundations",
    institution: "Infosys",
    platform: "Coursera",
    year: "2025",
    credentialTopic: "Process Management, Threads, Memory & Virtualization",
    credentialId: "COURSERA-INFOSYS-OS-2025",
    skillsAcquired: ["Process Scheduling", "Multi-threading", "Memory Virtualization", "File Systems"],
    verificationNote: "Official course certification accredited by Infosys on Coursera."
  }
];
