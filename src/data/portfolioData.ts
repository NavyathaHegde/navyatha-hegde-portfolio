import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, SocialLink } from '../types';
import { certificateFiles, hackathonCertificateImage } from './certificateAssets';

export const personalInfo = {
  name: "Navyatha R Hegde",
  title: "Java Full-Stack Developer",
  tagline: "Java Full-Stack Developer (Java 8+) with hands-on experience building full-stack applications using Spring Boot microservices, Kafka, Spring MVC RESTful APIs, Hibernate/JPA, MySQL, ReactJS, Docker, and Kubernetes.",
  email: "navyathahegde0605@gmail.com",
  phone: "+91-9741045934",
  location: "Bannerghatta, Bengaluru",
  college: "AMC Engineering College (2022 - 2026)",
  cgpa: "CGPA: 8.36",
  pucPercentage: "93.7%",
  timezone: "IST (UTC +5:30)",
  availability: "Seeking Entry-Level Java Developer / Java Full-Stack Developer Role",
  roles: [
    "Java Full-Stack Developer",
    "Java Backend Developer",
    "Spring Boot & Microservices Developer",
    "ReactJS & RESTful API Developer",
    "Software Engineer"
  ],
  bioParagraphs: [
    "I am a passionate Java Full-Stack Developer (Java 8+) with hands-on experience building full-stack applications using Spring Boot microservices, Kafka, Spring MVC RESTful APIs, Hibernate/JPA, MySQL, ReactJS, Docker, and Kubernetes with 12+ REST endpoints across projects.",
    "Strong in Core/Advanced Java, Object-Oriented Programming (OOP), Multithreading, Exception Handling, Collections Framework, and Data Structures & Algorithms (100+ problems solved in Java across Arrays, Strings, Linked Lists, Trees, Graphs, and Collections).",
    "Currently pursuing my Bachelor of Engineering in Computer Science and Engineering at AMC Engineering College, Bengaluru (CGPA: 8.36). Led a 4-member team in developing CampusConnect, co-authoring and presenting research published at the iThink Conference (Paper ID: 2508091), and participated in Smart India Hackathon 2025."
  ],
  stats: [
    { label: "DSA in Java", value: "100+ Solved", description: "Arrays, Trees, Graphs & Collections" },
    { label: "REST Endpoints", value: "36+ Endpoints", description: "SkillSwap (9) & BankOps (27)" },
    { label: "B.E. in CSE (2022-26)", value: "8.36 CGPA", description: "AMC Engineering College" },
    { label: "PUC Percentage", value: "93.7%", description: "Holy Spirit PU College (PCMC)" }
  ],
  achievements: [
    {
      title: "CampusConnect Research Publication (Paper ID: 2508091)",
      event: "iThink Conference 2025",
      description: "Led a 4-member team in developing CampusConnect – Where Questions Meet Instant Solutions; co-authored and presented the project research at the iThink Conference, with the paper accepted and published in 2025 (Paper ID: 2508091)."
    },
    {
      title: "Smart India Hackathon (SIH) 2025 Prototype",
      event: "Smart India Hackathon 2025",
      description: "Participated in Smart India Hackathon 2025, developing a prototype for a Gamified Learning Platform for Rural Education under the Game Development theme."
    }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/navyatha-hegde-4821a9316",
    iconName: "Linkedin",
    label: "Connect on LinkedIn",
    username: "navyatha-hegde-4821a9316"
  },
  {
    platform: "GitHub",
    url: "https://github.com/NavyathaHegde",
    iconName: "Github",
    label: "Explore GitHub Repositories",
    username: "NavyathaHegde"
  },
  {
    platform: "Email",
    url: "mailto:navyathahegde0605@gmail.com",
    iconName: "Mail",
    label: "Send an Email",
    username: "navyathahegde0605@gmail.com"
  },
  {
    platform: "Phone",
    url: "tel:+919741045934",
    iconName: "Phone",
    label: "+91-9741045934",
    username: "+91-9741045934"
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Java Full-Stack Development Trainee",
    company: "JSpiders",
    location: "Bengaluru, Karnataka",
    period: "Jan 2026 - Aug 2026",
    type: "Internship & Training",
    description: [
      "Built REST APIs and full-stack applications using Core Java, Java 8+ (Streams, Lambda Expressions, Functional Interfaces), JDBC, Spring Boot, Hibernate, MySQL, and ReactJS through structured, project-based training.",
      "Solved 100+ Data Structures and Algorithms problems in Java, covering Arrays, Strings, Linked Lists, Trees, Graphs, and Collections.",
      "Engineered layered backend architectures following Controller–Service–Repository design patterns with secure MySQL persistence.",
      "Integrated responsive ReactJS frontends with Spring Boot RESTful APIs for end-to-end user journeys."
    ],
    techStack: [
      "Java (Java 8+)",
      "Streams & Lambdas",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "ReactJS",
      "JDBC",
      "REST APIs",
      "DSA in Java (100+ Solved)"
    ],
    achievements: [
      "Built production-ready REST APIs & microservices architectures",
      "Solved 100+ DSA problems covering Arrays, Strings, Linked Lists, Trees, Graphs, and Collections",
      "Java Full Stack Development Certificate awarded by JSpiders"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "SkillSwap Platform",
    tagline: "Peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers, Spring Security, BCrypt password hashing, and MySQL persistence.",
    category: "Full Stack",
    description: "Built a peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers, enabling profile management, skill-based user discovery, and an end-to-end swap request lifecycle (send → pending → accept/reject).",
    longDescription: "Built a peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers, enabling profile management, skill-based user discovery, and an end-to-end swap request lifecycle (send → pending → accept/reject). Designed and implemented a layered backend architecture using Controller–Service–Repository, with MySQL persistence and BCrypt password hashing for secure credential storage. Developed and integrated a React frontend with the Spring Boot backend through REST APIs, delivering a complete end-to-end user journey from registration and profile creation to skill discovery and swap request management.",
    keyFeatures: [
      "Built a peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers",
      "Enables profile management, skill-based user discovery, and an end-to-end swap request lifecycle (send → pending → accept/reject)",
      "Designed and implemented layered backend architecture using Controller–Service–Repository pattern",
      "MySQL persistence and BCrypt password hashing for secure credential storage",
      "Integrated React frontend with Spring Boot backend through REST APIs delivering a complete end-to-end user journey"
    ],
    techStack: ["React", "Spring Boot", "Spring Security", "MySQL", "REST API", "BCrypt", "Java 8+"],
    githubUrl: "https://github.com/NavyathaHegde/skillswap-platform",
    liveUrl: "https://skillswap-platform.example.com",
    status: "Completed",
    githubStatus: "Coming Soon",
    featured: true,
    metrics: "9 REST APIs across 4 controllers with end-to-end swap request lifecycle",
    architectureHighlights: [
      "Controller–Service–Repository layered backend",
      "BCrypt password hashing for credential storage",
      "Complete swap lifecycle (send → pending → accept/reject)"
    ],
    imagePlaceholderColor: "from-purple-900 to-indigo-950"
  },
  {
    id: "proj-2",
    title: "BankOps - Core Banking Management System",
    tagline: "Core banking management system with 27 REST endpoints across Account, Bank, Address entities with ACID transaction consistency.",
    category: "Java Backend",
    description: "Built 27 REST endpoints across 3 entities (Account, Bank, Address) covering account management, deposits, withdrawals, fund transfers, and transaction history.",
    longDescription: "Built 27 REST endpoints across 3 entities (Account, Bank, Address) covering account management, deposits, withdrawals, fund transfers, and transaction history. Designed relational entity mappings with Spring Data JPA and Hibernate, adding pagination, sorting, and field-level validation across list and search endpoints. Handled failure cases through 6 custom exception classes and a global exception handler, keeping fund-transfer operations transactionally consistent under concurrent requests.",
    keyFeatures: [
      "Built 27 REST endpoints across 3 entities (Account, Bank, Address)",
      "Covers account management, deposits, withdrawals, fund transfers, and transaction history",
      "Designed relational entity mappings with Spring Data JPA and Hibernate ORM",
      "Added pagination, sorting, and field-level validation across list and search endpoints",
      "Handled failure cases through 6 custom exception classes and a global exception handler, ensuring transactional consistency under concurrent requests"
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST API", "Postman"],
    githubUrl: "https://github.com/NavyathaHegde/bankops-banking-system",
    liveUrl: "https://bankops-core.example.com",
    status: "Completed",
    githubStatus: "Coming Soon",
    featured: true,
    metrics: "27 REST endpoints across 3 entities with transactional consistency",
    architectureHighlights: [
      "27 REST endpoints across Account, Bank, and Address entities",
      "6 custom exception classes with global exception handler",
      "Pagination, sorting, and field-level validation on search endpoints"
    ],
    imagePlaceholderColor: "from-blue-900 to-slate-950"
  },
  {
    id: "proj-3",
    title: "CampusConnect – Where Questions Meet Instant Solutions",
    tagline: "Academic campus Q&A platform; co-authored research paper accepted and published at the iThink Conference 2025 (Paper ID: 2508091).",
    category: "Full Stack",
    description: "Led a 4-member team in developing CampusConnect – Where Questions Meet Instant Solutions; co-authored and presented the project research at the iThink Conference, with the paper accepted and published in 2025 (Paper ID: 2508091).",
    longDescription: "Led a 4-member team in developing CampusConnect – Where Questions Meet Instant Solutions; co-authored and presented the project research at the iThink Conference, with the paper accepted and published in 2025 (Paper ID: 2508091). Enables structured peer-to-peer campus query resolution, thread categorization, and verified student solutions.",
    keyFeatures: [
      "Led a 4-member engineering team in project conceptualization and development",
      "Co-authored and presented research paper published at the iThink Conference 2025 (Paper ID: 2508091)",
      "Instant query resolution and category-tagged discussion threads",
      "Spring Boot REST API backend with responsive React frontend and MySQL database"
    ],
    techStack: ["Java", "Spring Boot", "React", "MySQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/NavyathaHegde/campus-connect",
    liveUrl: "https://campus-connect.example.com",
    status: "Published Research",
    githubStatus: "Coming Soon",
    featured: true,
    metrics: "Research published in iThink Conference 2025 (Paper ID: 2508091)",
    architectureHighlights: [
      "Team leadership & full SDLC execution",
      "Conference peer-reviewed architecture",
      "Structured Q&A database entity modeling"
    ],
    imagePlaceholderColor: "from-violet-900 to-purple-950"
  },
  {
    id: "proj-4",
    title: "OrderFlow — Food Ordering Platform",
    tagline: "Full-stack food ordering application with a live cart, restaurant menu browsing, secure JWT checkout, and real-time order status tracking via Spring Boot REST APIs.",
    category: "Full Stack",
    description: "Built a full-stack food ordering platform enabling customers to browse restaurant menus, build carts, place orders, and track order status in real time through Spring Boot REST APIs.",
    longDescription: "Built a full-stack food ordering platform enabling customers to browse restaurant menus, build carts, place orders, and track order status in real time through Spring Boot REST APIs. Designed a layered Controller–Service–Repository backend with JWT authentication and role-based access for customer, restaurant, and delivery flows, persisted on MySQL with relational menu, order, and order-item entities. Integrated a responsive React frontend with the Spring Boot backend through REST APIs, delivering an end-to-end journey from menu discovery and cart management to checkout and live order tracking.",
    keyFeatures: [
      "Browse restaurant menus and add items to a live cart with quantity updates and bill breakdown",
      "Secure checkout with JWT authentication and role-based access for customer, restaurant, and delivery flows",
      "Real-time order status tracking (Placed → Accepted → Preparing → Out for Delivery → Delivered)",
      "Layered Controller–Service–Repository backend with MySQL relational schema for menu, order, and order-item entities",
      "Responsive React frontend integrated with Spring Boot REST APIs for an end-to-end ordering journey"
    ],
    techStack: ["React", "Spring Boot", "Spring Security", "JWT", "MySQL", "REST API", "Java 8+"],
    githubUrl: "https://github.com/NavyathaHegde/orderflow-food-ordering",
    liveUrl: "https://orderflow-food.example.com",
    status: "Completed",
    githubStatus: "Coming Soon",
    featured: true,
    metrics: "Full-stack food ordering platform with JWT auth and real-time order tracking",
    architectureHighlights: [
      "Controller–Service–Repository layered backend",
      "JWT authentication with role-based access control",
      "Relational menu, order, and order-item entity model with an order-status state machine"
    ],
    imagePlaceholderColor: "from-orange-900 to-rose-950"
  },
  {
    id: "proj-5",
    title: "HabitHive — Habit Tracker",
    tagline: "Full-stack habit tracking app with daily check-ins, streak analytics, and progress insights powered by Spring Boot REST APIs and MySQL persistence.",
    category: "Full Stack",
    description: "Built a full-stack habit tracking app that helps users build consistent routines through daily check-ins, streak tracking, and progress analytics.",
    longDescription: "Built a full-stack habit tracking app that helps users build consistent routines through daily check-ins, streak tracking, and progress analytics. Designed a layered Controller–Service–Repository backend with JWT authentication, persisting habits, check-ins, and streaks on a relational MySQL schema. Integrated a responsive React frontend with the Spring Boot backend through REST APIs, delivering an end-to-end journey from habit creation and daily check-ins to streak analytics and weekly progress insights.",
    keyFeatures: [
      "Create and manage personal habits with daily check-ins and automatic streak calculation",
      "Streak analytics with weekly and monthly completion-rate progress insights",
      "JWT authentication and per-user habit isolation with MySQL relational persistence",
      "Layered Controller–Service–Repository backend with relational habit, check-in, and streak entities",
      "Responsive React frontend integrated with Spring Boot REST APIs for an end-to-end tracking journey"
    ],
    techStack: ["React", "Spring Boot", "Spring Security", "JWT", "MySQL", "REST API", "Java 8+"],
    githubUrl: "https://github.com/NavyathaHegde/habithive-habit-tracker",
    liveUrl: "https://habithive-tracker.example.com",
    status: "Completed",
    githubStatus: "Coming Soon",
    featured: true,
    metrics: "Full-stack habit tracker with streak analytics and JWT-secured check-ins",
    architectureHighlights: [
      "Controller–Service–Repository layered backend",
      "JWT authentication with per-user habit isolation",
      "Relational habit, check-in, and streak entity model with automatic streak computation"
    ],
    imagePlaceholderColor: "from-emerald-900 to-teal-950"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    description: "Core languages for building performant backend algorithms and frontends.",
    skills: [
      { name: "Java (Java 8+ features)", level: 96, experience: "Primary", tags: ["Java 8+", "Streams", "Lambdas", "Functional Interfaces", "Multithreading", "OOP"] },
      { name: "SQL", level: 92, experience: "Advanced", tags: ["MySQL", "Oracle SQL", "Queries", "Joins", "Indexing", "Constraints"] },
      { name: "JavaScript", level: 88, experience: "Hands-on", tags: ["ES6+", "Async/Await", "DOM", "Fetch API", "Event Handling"] },
      { name: "Python", level: 80, experience: "Proficient", tags: ["Scripting", "Data Structures", "Algorithms"] },
      { name: "Basics of C, C++", level: 75, experience: "Basics", tags: ["C", "C++", "Pointers", "Memory Logic", "OOP in C++"] }
    ]
  },
  {
    name: "Backend & Frameworks",
    description: "Enterprise Java server-side development, MVC architectures, and ORM mapping.",
    skills: [
      { name: "Spring Boot", level: 94, experience: "Hands-on", tags: ["Microservices", "REST APIs", "Auto-configuration", "Layered Architecture"] },
      { name: "Spring Core & Spring MVC", level: 92, experience: "Hands-on", tags: ["Dependency Injection", "IoC", "Controllers", "RESTful Web Services"] },
      { name: "Spring Security", level: 88, experience: "Hands-on", tags: ["BCrypt", "Authentication", "Credential Hashing"] },
      { name: "Spring Data JPA & Hibernate", level: 92, experience: "Hands-on", tags: ["ORM", "Entity Mappings", "Pagination", "Sorting", "Validation"] },
      { name: "RESTful APIs & Kafka", level: 94, experience: "Hands-on", tags: ["REST APIs", "HTTP Methods", "Status Codes", "Microservices", "Kafka"] },
      { name: "JDBC", level: 90, experience: "Hands-on", tags: ["Connection Management", "PreparedStatement", "ResultSet", "Transactions"] }
    ]
  },
  {
    name: "Frontend",
    description: "Modern, reactive, and responsive user interfaces.",
    skills: [
      { name: "HTML5", level: 95, experience: "Advanced", tags: ["Semantic HTML", "Forms", "Accessibility", "Modern Standards"] },
      { name: "CSS3", level: 92, experience: "Advanced", tags: ["Flexbox", "Grid", "Animations", "Responsive Layouts"] },
      { name: "Bootstrap", level: 90, experience: "Hands-on", tags: ["Grid System", "Components", "Utilities", "Responsive"] },
      { name: "ReactJS", level: 90, experience: "Hands-on", tags: ["Components", "Hooks", "State Management", "REST API Integration"] }
    ]
  },
  {
    name: "Databases",
    description: "Relational data modeling, schema design, and query optimization.",
    skills: [
      { name: "MySQL", level: 94, experience: "Hands-on", tags: ["Relational Schema", "Foreign Keys", "Transactions", "Query Optimization"] },
      { name: "Oracle SQL", level: 88, experience: "Certified", tags: ["Oracle Data Platform", "Relational Models", "Queries", "Data Integrity"] }
    ]
  },
  {
    name: "Tools",
    description: "Development tools, build automation, version control, and containerization.",
    skills: [
      { name: "Git & GitHub", level: 92, experience: "Daily", tags: ["Version Control", "Repositories", "Commits", "Branching"] },
      { name: "Maven", level: 90, experience: "Hands-on", tags: ["pom.xml", "Dependencies", "Build Lifecycle", "Packaging"] },
      { name: "Eclipse & VS Code", level: 92, experience: "Daily", tags: ["IDE Debugging", "Java Extensions", "Code Navigation"] },
      { name: "Postman", level: 94, experience: "Daily", tags: ["REST API Testing", "Collections", "Request Validation"] },
      { name: "PostgreSQL admin (pgAdmin 4)", level: 86, experience: "Hands-on", tags: ["pgAdmin 4", "PostgreSQL Admin", "Database Management"] },
      { name: "Docker & Kubernetes", level: 80, experience: "Hands-on", tags: ["Docker", "Kubernetes", "Containerized Apps"] }
    ]
  },
  {
    name: "Core Concepts",
    description: "Strong theoretical foundations and problem-solving methodologies.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 96, experience: "Core Mastery", tags: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] },
      { name: "Data Structures and Algorithms", level: 92, experience: "100+ Solved", tags: ["Arrays", "Strings", "Linked Lists", "Trees", "Graphs", "Collections"] },
      { name: "Collections Framework", level: 95, experience: "Core Mastery", tags: ["List", "Set", "Map", "Queue", "Iterators", "Generics"] },
      { name: "Multithreading & Concurrency", level: 88, experience: "Hands-on", tags: ["Thread Lifecycle", "Synchronization", "Concurrent Consistency"] },
      { name: "Exception Handling", level: 94, experience: "Hands-on", tags: ["Custom Exceptions", "Global Exception Handler", "Robust Error Flow"] },
      { name: "RESTful Web Services & MVC Architecture", level: 94, experience: "Hands-on", tags: ["Controller-Service-Repository", "REST APIs", "DBMS"] },
      { name: "Database Management Systems (DBMS)", level: 92, experience: "Hands-on", tags: ["Relational Design", "ACID Properties", "Normalization"] }
    ]
  }
];

export const educations: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "AMC Engineering College",
    location: "Bengaluru, Karnataka",
    period: "2022 - 2026",
    grade: "CGPA - 8.36",
    coursework: [
      "Object-Oriented Programming with Java",
      "Data Structures and Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems & Multithreading",
      "Software Engineering & Agile Methodologies",
      "Computer Networks & Web Technologies"
    ],
    highlights: [
      "Bachelor of Engineering in Computer Science and Engineering (CGPA - 8.36).",
      "Led a 4-member team in developing CampusConnect, presenting research published at the iThink Conference (Paper ID: 2508091).",
      "Participated in Smart India Hackathon 2025 developing a Gamified Learning Platform for Rural Education prototype."
    ]
  },
  {
    id: "edu-2",
    degree: "Physics, Chemistry, Mathematics and Computer Science",
    institution: "Holy Spirit PU College",
    location: "Bengaluru, Karnataka",
    period: "2020 - 2022",
    grade: "Percentage - 93.7%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    highlights: [
      "Achieved 93.7% high distinction, demonstrating strong mathematical and analytical foundations."
    ]
  }
];

export const hackathonCertificate: CertificationItem = {
  id: "cert-10",
  imageUrl: hackathonCertificateImage,
  title: "Certificate of Participation — Gen AI Exchange Hackathon 2025",
  issuer: "Google Cloud & Hack2skill",
  issueDate: "Jan 14, 2026",
  credentialId: "",
  credentialUrl: "",
  skillsCovered: ["Generative AI", "Prototype Submission", "Youth Mental Wellness"],
  badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
};

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    imageUrl: certificateFiles["cert-1"]!.imageUrl,
    pdfUrl: certificateFiles["cert-1"]!.pdfUrl,
    title: "Java Full Stack Development Certificate",
    issuer: "JSpiders",
    issueDate: "2026",
    credentialId: "JSPIDERS-JFSD-2026",
    credentialUrl: "https://www.qspiders.com/",
    skillsCovered: ["Core Java", "Java 8+ (Streams, Lambdas)", "Spring Boot", "Hibernate", "MySQL", "ReactJS", "REST APIs", "DSA in Java"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    certType: "jspiders"
  },
  {
    id: "cert-2",
    imageUrl: certificateFiles["cert-2"]!.imageUrl,
    pdfUrl: certificateFiles["cert-2"]!.pdfUrl,
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issueDate: "2025",
    credentialId: "323392357OCI25DCFA",
    credentialUrl: "https://catalog-education.oracle.com/",
    skillsCovered: ["Oracle SQL", "Cloud Database Management", "Data Modeling", "Autonomous DB", "Query Optimization"],
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    certType: "oracle"
  },
  {
    id: "cert-3",
    imageUrl: certificateFiles["cert-3"]!.imageUrl,
    pdfUrl: certificateFiles["cert-3"]!.pdfUrl,
    title: "Software Engineering and Agile Software Development",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    credentialId: "https://verify.onwingspan.com",
    credentialUrl: "https://verify.onwingspan.com",
    skillsCovered: ["Agile Methodology", "Scrum Framework", "SDLC", "Software Architecture", "Code Quality"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    certType: "infosys"
  },
  {
    id: "cert-4",
    imageUrl: certificateFiles["cert-4"]!.imageUrl,
    pdfUrl: certificateFiles["cert-4"]!.pdfUrl,
    title: "AWS Cloud Virtual Internship",
    issuer: "AICTE & AWS Academy",
    issueDate: "2025",
    credentialId: "e78329cf76e597be130df938ed1f611e",
    credentialUrl: "https://aws.amazon.com/training/",
    skillsCovered: ["AWS Cloud Architecture", "Compute (EC2)", "Storage (S3)", "Identity (IAM)", "Cloud Security"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    certType: "aicte-aws-cloud"
  },
  {
    id: "cert-5",
    imageUrl: certificateFiles["cert-5"]!.imageUrl,
    pdfUrl: certificateFiles["cert-5"]!.pdfUrl,
    title: "Automation Developer Associate",
    issuer: "UiPath",
    issueDate: "2026",
    credentialId: "004632",
    credentialUrl: "https://credentials.uipath.com/6f8ccb7b-0834-4b58-a6a0-ff25b94eccd2?utm_source=whatsapp&utm_medium=social",
    skillsCovered: ["UiPath Studio", "Robotic Process Automation (RPA)", "Workflow Automation", "Process Orchestration"],
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    certType: "uipath"
  },
  {
    id: "cert-6",
    imageUrl: certificateFiles["cert-6"]!.imageUrl,
    pdfUrl: certificateFiles["cert-6"]!.pdfUrl,
    title: "Google Android Developer Virtual Internship",
    issuer: "AICTE & Google for Developers",
    issueDate: "2024",
    credentialId: "AICTE-GOOG-AND-2024",
    credentialUrl: "https://internship.aicte-india.org/",
    skillsCovered: ["Android Studio", "Kotlin Basics", "Mobile App Architecture", "REST API Integration", "UI/UX"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    certType: "aicte-google-android"
  },
  {
    id: "cert-7",
    imageUrl: certificateFiles["cert-7"]!.imageUrl,
    pdfUrl: certificateFiles["cert-7"]!.pdfUrl,
    title: "Google AI-ML Virtual Internship",
    issuer: "AICTE & Google for Developers",
    issueDate: "2024",
    credentialId: "AICTE-GOOG-AIML-2024",
    credentialUrl: "https://internship.aicte-india.org/",
    skillsCovered: ["Machine Learning Fundamentals", "TensorFlow Basics", "Python", "Data Preprocessing", "Model Evaluation"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    certType: "aicte-google-aiml"
  },
  {
    id: "cert-8",
    imageUrl: certificateFiles["cert-8"]!.imageUrl,
    pdfUrl: certificateFiles["cert-8"]!.pdfUrl,
    title: "Data Analysis with Python — Crash Course",
    issuer: "Innomatics Research Labs",
    issueDate: "2025",
    credentialId: "INNO-PYDS-2024-8842",
    credentialUrl: "https://www.innomatics.in/",
    skillsCovered: ["Python", "NumPy & Pandas", "Data Analysis", "Data Visualization"],

    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    certType: "innomatics"
  },
  {
    id: "cert-9",
    imageUrl: certificateFiles["cert-9"]!.imageUrl,
    pdfUrl: certificateFiles["cert-9"]!.pdfUrl,
    title: "Full Stack Web Development Internship",
    issuer: "Internz Learn",
    issueDate: "2024",
    credentialId: "INTZ-FSWD-2024-912",
    credentialUrl: "https://internzlearn.com/",
    skillsCovered: ["HTML5 / CSS3", "JavaScript ES6+", "ReactJS", "Node.js Basics", "Responsive Web Design"],
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    certType: "internz-learn"
  }
];

export const resumeTextContent = `
NAVYATHA R HEGDE
Bannerghatta, Bengaluru
+91-9741045934 | navyathahegde0605@gmail.com | LinkedIn: linkedin.com/in/navyatha-hegde-4821a9316 | GitHub: github.com/NavyathaHegde

SUMMARY
Java Full-Stack Developer (Java 8+) with hands-on experience building full-stack applications using Spring Boot microservices, Kafka, Spring MVC RESTful APIs, Hibernate/JPA, MySQL, and ReactJS, Docker, and Kubernetes with 12+ REST endpoints across projects. Strong in Core/Advanced Java, OOP, and DSA (100+ problems solved). Seeking an entry-level Java Developer / Java Full-Stack Developer role.

EDUCATION
AMC Engineering College (2022 - 2026)
Bachelor of Engineering in Computer Science and Engineering - CGPA - 8.36 | Bengaluru, Karnataka

Holy Spirit PU College (2020 - 2022)
Physics, Chemistry, Mathematics and Computer Science - Percentage - 93.7% | Bengaluru, Karnataka

EXPERIENCE
Java Full-Stack Development Trainee | JSpiders (Jan 2026 - Aug 2026)
• Built REST APIs and full-stack applications using Core Java, Java 8+ (Streams, Lambda Expressions, Functional Interfaces), JDBC, Spring Boot, Hibernate, MySQL, and ReactJS through structured, project-based training.
• Solved 100+ Data Structures and Algorithms problems in Java, covering Arrays, Strings, Linked Lists, Trees, Graphs, and Collections.

PROJECTS
SkillSwap Platform: React, Spring Boot, Spring Security, MySQL, REST API
• Built a peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers, enabling profile management, skill-based user discovery, and an end-to-end swap request lifecycle (send → pending → accept/reject).
• Designed and implemented a layered backend architecture using Controller–Service–Repository, with MySQL persistence and BCrypt password hashing for secure credential storage.
• Developed and integrated a React frontend with the Spring Boot backend through REST APIs, delivering a complete end-to-end user journey from registration and profile creation to skill discovery and swap request management.

BankOps - Core Banking Management System: Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, REST API
• Built 27 REST endpoints across 3 entities (Account, Bank, Address) covering account management, deposits, withdrawals, fund transfers, and transaction history.
• Designed relational entity mappings with Spring Data JPA and Hibernate, adding pagination, sorting, and field-level validation across list and search endpoints.
• Handled failure cases through 6 custom exception classes and a global exception handler, keeping fund-transfer operations transactionally consistent under concurrent requests.

TECHNICAL SKILLS
• Programming Languages: Java (Java 8+ features), SQL, JavaScript, Python, Basics of C, C++
• Backend & Frameworks: Spring Core, Spring MVC, Spring Boot, Spring Security, Spring Data JPA, Hibernate
• Frontend: HTML5, CSS3, Bootstrap, ReactJS
• Databases: MySQL, Oracle SQL.
• Tools: Git, GitHub, Maven, Eclipse, VS Code, Postman, PostgreSQL admin(pgAdmin 4)
• Concepts: Object-Oriented Programming (OOP), Data Structures and Algorithms, Collections Framework, Multithreading, Exception Handling, RESTful Web Services, MVC Architecture, Database Management Systems (DBMS)

ACHIEVEMENTS
• Led a 4-member team in developing CampusConnect – Where Questions Meet Instant Solutions; co-authored and presented the project research at the iThink Conference, with the paper accepted and published in 2025 (Paper ID: 2508091).
• Participated in Smart India Hackathon 2025, developing a prototype for a Gamified Learning Platform for Rural Education under the Game Development theme.

CERTIFICATIONS
• Java Full Stack Development Certificate - JSpiders
• Oracle Data Platform 2025 Certified Foundations Associate - Oracle
• Software Engineering and Agile Software Development - Infosys Springboard
• AWS Cloud Virtual Internship - AICTE & AWS Academy
• Automation Developer Associate-UiPath
`;
