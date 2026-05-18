export const profile = {
  name: "Janhavi Patil",
  handle: "@janhavi",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Java Backend Developer",
    "AI Enthusiast",
  ],
  tagline:
    "3rd year Computer Engineering student building production-grade backends, pixel-perfect interfaces, and AI-driven systems that solve real problems.",
  location: "Nashik, Maharashtra · India",
  email: "janhavi08511@gmail.com",
  phone: "+91 89834 27374",
  github: "https://github.com/janhavi08511",
  linkedin: "https://www.linkedin.com/in/janhavi-patil-699927289?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_product-engineer-6/artifacts/d41yaaig_Sukumar_Dodda_s_CV.pdf",
  avail: "3rd year Computer Engineering student open to new opportunities",
};

export const stats = [
  { value: 8.68, suffix: "/10", label: "CGPA", precision: 2 },
  { value: 8, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "+", label: "Production Systems" },
];

export const skills = [
  {
    category: "Languages",
    accent: "from-cyan-400 to-sky-500",
    items: ["Java", "Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    accent: "from-violet-400 to-fuchsia-500",
    items: ["Spring Boot", "Spring MVC", "JDBC", "REST APIs", "JWT", "OAuth"],
  },
  {
    category: "Frontend",
    accent: "from-pink-400 to-rose-500",
    items: ["React.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    category: "Databases",
    accent: "from-emerald-400 to-teal-500",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    accent: "from-orange-400 to-amber-500",
    items: ["Docker", "Git", "GitHub", "Maven", "Postman", "Jira", "IntelliJ", "VS Code"],
  },
  {
    category: "AI / ML",
    accent: "from-indigo-400 to-blue-500",
    items: ["NLP", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "EDA"],
  },
  {
    category: "Core CS",
    accent: "from-yellow-400 to-orange-500",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "SDLC", "Agile"],
  },
];

export const experience = [
  {
    company: "Xmega",
    role: "Software Engineer Intern",
    location: "Nashik, Maharashtra",
    period: "Dec 2025 — Present",
    bullets: [
      "Shipping production React.js features wired to a Supabase real-time backend and REST APIs across multiple product modules.",
      "Operating inside an Agile team — sprint planning via Jira, clean code reviews, and Git workflow in a professional engineering environment.",
    ],
    stack: ["React.js", "Supabase", "REST APIs", "Jira", "Git", "Agile"],
  },
  {
    company: "Teamwala",
    role: "Project Manager & Developer · Freelance",
    location: "Nashik, Maharashtra",
    period: "Oct 2025 — Present",
    bullets: [
      "Owning end-to-end delivery of multiple web projects as primary liaison between clients and dev team — ensuring on-time, on-spec releases.",
      "Driving technical execution, sprint planning, and client feedback cycles for both static and dynamic web applications.",
    ],
    stack: ["Project Management", "Full Stack", "Client Comms", "Sprint Planning"],
  },
];

export const projects = [
  {
    id: "ai-recommender",
    title: " Intelligent Job Recommendation system",
    summary:
      "An AI-powered recruitment platform that evaluates real candidate proficiency through NLP semantic skill mapping — not keyword matching.",
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["Spring Boot", "React.js", "SQL", "NLP", "Machine Learning"],
    highlights: [
      "NLP-based semantic skill mapping instead of brittle keyword matching",
      "ML models for job-role prediction & candidate-job matching with feature extraction",
      "Personalized learning roadmap engine that detects skill gaps & suggests targeted paths",
      "End-to-end pipeline: data preprocessing → prediction → recommendation",
    ],
    github: "https://github.com/janhavi08511",
    demo: "#",
    accent: "from-cyan-500 via-violet-500 to-fuchsia-500",
  },
  {
    id: "erp-lms",
    title: "ERP & LMS Platform · Sachitech Institute",
    summary:
      "Production-grade ERP + LMS system live at sachitechhub.in — JWT-secured, role-based access, fully containerized.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["Spring Boot", "React.js", "MySQL", "JWT", "Docker"],
    highlights: [
      "JWT-secured role-based access across admin, faculty & students",
      "Fee management, user management, notes, progress tracking & automated reports",
      "Containerized backend with Docker — clean deploy pipeline",
      "Owned full deployment: domain, DNS, hosting — live at sachitechhub.in",
    ],
    github: "https://github.com/janhavi08511",
    demo: "https://sachitechhub.in",
    accent: "from-emerald-500 via-cyan-500 to-blue-500",
  },
  {
    id: "aeic",
    title: "AEIC — Agentic Execution Intelligence Coordinator",
    summary:
      "An autonomous AI workflow coordinator that plans, executes, and tracks tasks across deadlines with intelligent agent loops.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["AI Agents", "Workflow Automation", "Python", "LLMs"],
    highlights: [
      "AI-driven autonomous workflow management with multi-step task execution",
      "Deadline-aware planner that re-prioritizes when blockers appear",
      "Execution analytics dashboard for visibility into agent decisions",
      "Won 5th position at AI Innovation & Sprint Competition",
    ],
    github: "https://github.com/janhavi08511",
    demo: "#",
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    id: "brainsync",
    title: "BrainSync — AI-Powered B.Tech Study Companion",
    summary:
     "Built and deployed Braille Sync, an AI-powered Braille translation platform using React.js, Python, and Supabase, featuring OCR, audio input, multilingual support, and accessibility-focused UI during internship at Xmenga.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["React.js", "Tailwind CSS", "python", "JavaScript"],
    highlights: [
      "Developed a full-stack accessibility platform named Braille Sync using React.js for frontend and Python backend services, enabling seamless Text-to-Braille and Braille-to-Text translation with a modern responsive UI.",
"Implemented multiple intelligent input methods including text, image, file, audio, and microphone-based translation, integrating OCR and AI-powered processing to improve accessibility for visually impaired users.",
"Integrated Supabase for cloud database management, authentication, and history tracking, allowing users to securely store and access previous translations with real-time synchronization.",
"Designed and deployed the application on Render, optimized performance with responsive components, multilingual support, audio playback, dark/light mode UI, and accessibility-focused features during an internship at Xmega"
    ],
    github: "https://github.com/janhavi08511/BrainSync_final",
    demo: "https://brainsync-final.onrender.com",
    accent: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance Management System",
    summary:
      "Built a secure BLE-based Smart Attendance System using Spring Boot, Flutter, MongoDB, and ESP32 beacons to automate classroom attendance with real-time beacon proximity detection, JWT authentication, QR fallback, role-based access control, and anti-proxy attendance mechanisms.",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["Spring boot , MongoDB , ESP32 , Flutter , Arduino"],
    highlights: [
      "Developed a BLE-based Smart Attendance System using Spring Boot, Flutter, MongoDB, and ESP32 beacons to automate classroom attendance with real-time proximity detection.",
"Implemented JWT-based authentication and role-based access control for Students and Teachers, ensuring secure attendance operations and protected REST APIs.",
"Built a Flutter mobile application with BLE scanning, QR fallback attendance, session persistence, and real-time attendance confirmation for seamless classroom usage.",
"Designed scalable backend architecture using Spring Boot REST APIs and MongoDB, managing lecture sessions, attendance logs, classroom records, and analytics efficiently.",
"Integrated anti-proxy mechanisms including beacon session validation, cooldown restrictions, and QR-based fallback security, supporting attendance management for 70–80 students per lecture."
    ],
    github: "https://github.com/janhavi08511",
    demo: "#",
    accent: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    id: "ovi-export",
    title: "Ovi Export – Agricultural Export Business Website",
    summary:
      "Built and deployed a responsive React.js-based export business website for Ovi Export, handling client communication, requirement analysis, UI development, domain deployment, and production hosting with modern responsive design principles.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["Spring Boot", "React.js", "REST APIs", "PostgreSQL", "JWT"],
    highlights: [
      "Developed a fully responsive React.js-based business website for an agricultural export company, showcasing products, certifications, export processes, and contact services with modern UI/UX design.",
      "Collaborated directly with the client for requirement analysis, feature planning, UI modifications, and iterative feedback implementation, improving practical experience in client communication and project delivery.",
      "Designed interactive sections including:",
      "Product showcase",
      "Export workflow visualization",
      "Certification details",
      "Contact & inquiry integration",
      "Social media and WhatsApp connectivity"
    ],
    github: "https://github.com/janhavi08511",
    demo: "https://www.oviexport.com/",
    accent: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    id: "smart-city",
    title: "Smart City Platform",
    summary:
      "A modern full-stack urban governance solution designed for real-time tracking of civic issues, emergency coordination, and interactive citizen services.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    stack: ["Java", "Spring Boot", "React.js", "MySQL"],
    highlights: [
      "Geo-tagged grievance and incident logging system featuring interactive map-based service tracking",
      "Robust microservices backend supporting multiple communication workflows and rule-based priority alert systems",
      "Interactive data visualization dashboard displaying live metrics for city-wide infrastructure updates",
      "Containerized delivery utilizing Docker for seamless orchestration across multiple distributed deployment pipelines",
    ],
    github: "https://github.com/janhavi08511",
    demo: "#",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },

];
export const achievements = [
  { title: "2nd Position — Campus to Corporate 4.0", note: "Earned a competitive internship opportunity", type: "award" },
  { title: "5th Position — AI Innovation & Sprint Competition", note: "Built AEIC autonomous workflow platform", type: "award" },
  { title: "NPTEL DSA using Java — Elite", note: "Jul–Oct 2024", type: "cert" },
  { title: "HackerRank Java (Basic)", note: "Jun 2024", type: "cert" },
  { title: "PostgreSQL RDBMS Training", note: "Certificate of Completion · Jul 2025", type: "cert" },
  { title: "Core Committee — Debuggers' Club", note: "Organized technical events & peer-learning workshops", type: "leadership" },
];