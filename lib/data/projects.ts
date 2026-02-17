import { Project } from "./types";

export const projects: Project[] = [
  // === FREELANCE PROJECTS ===
  {
    id: "pma-grid",
    slug: "pma-grid",
    title: "PMA-Grid",
    shortDescription:
      "Organizational hierarchy grid for the Philippine Martial Arts community.",
    description:
      "My first professional project, built during college as part of a 4-person team at Dark Spot Inc via Upwork. PMA-Grid is a grid-based system for visualizing and managing the hierarchy of the Philippine Martial Arts (Arnis) organization — hundreds of organizational nodes representing instructors, masters, and regional heads.",
    challenge:
      "The PMA organization needed a way to visualize their complex hierarchy — with multiple levels of instructors, masters, and regional heads across hundreds of nodes. Existing spreadsheet-based tracking was confusing and hard to maintain. As a team of mostly juniors, we also had to learn professional workflows (git, agile, standups, ticket management) on the job.",
    solution:
      "Built a dynamic grid-based frontend in React that renders the organizational tree clearly, backed by a Node.js/Express API and MongoDB database. I focused on security, authentication, and frontend modules including node management and user management. Bootstrap ensured responsive design across devices. Working under a senior developer, I learned git workflows, agile practices (tickets, standups, demos), and how to ship production code.",
    features: [
      "Interactive organizational hierarchy grid with hundreds of nodes",
      "CRUD operations for managing members and positions",
      "User authentication and security",
      "Responsive design for desktop and mobile viewing",
      "Search and filter functionality",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    date: "March 2021",
    imageUrl: "/projects/freelance/pma-grid.png",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: true,
    order: 1,
    role: "Full Stack Developer",
    teamSize: "Team of 4",
  },
  {
    id: "react-form-builder",
    slug: "react-form-builder",
    title: "React Form Builder",
    shortDescription:
      "Drag-and-drop form designer that exports production-ready JSX with Material UI.",
    description:
      "A visual form builder for an Australian Upwork client whose development team had been hand-coding every form from scratch. The tool lets non-technical users design complex forms through drag-and-drop, then exports production-ready JSX code with Material UI components — eliminating hours of manual coding per form.",
    challenge:
      "The client's dev team was manually coding every form in React, a tedious and error-prone process. They needed a visual tool that could generate production-ready JSX with their existing Material UI component library, supporting complex layouts like nested grids and conditional fields.",
    solution:
      "Joined solo in the final stages to clear a backlog of features and bugs. Built complex drag-and-drop interactions including element reordering, nesting, and grid layout support. The builder exports clean, production-ready JSX with Material UI components. Impact: the team went from manually coding every form to visually generating them in minutes.",
    features: [
      "Drag-and-drop form element placement with reordering",
      "Nested elements and grid layout support",
      "Visual configuration panel for each element",
      "Real-time preview of form output",
      "Production-ready JSX export with Material UI components",
    ],
    technologies: ["React", "Tailwind CSS", "Material UI", "Webpack"],
    date: "May 2021",
    imageUrl: "/projects/freelance/react-form-builder.png",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: true,
    order: 2,
    role: "Full Stack Developer",
    teamSize: "Solo",
  },
  {
    id: "mp-expense-app",
    slug: "mp-expense-app",
    title: "MP Expense App",
    shortDescription:
      "Private expense tracking mobile app with a self-hosted database.",
    description:
      "A mobile expense tracking app built for the Dark Spot Inc founder's coffee shop business. Unlike generic expense trackers, all data is stored on the client's private, self-hosted database for complete control and privacy. A highlight of this project was quickly learning React Native and NestJS per the client's technology requirements.",
    challenge:
      "The client needed an expense tracking app that didn't rely on third-party cloud services — all data had to stay on their own infrastructure for privacy. The project also required React Native and NestJS, technologies I hadn't used before, with a tight delivery timeline.",
    solution:
      "Quickly ramped up on React Native and NestJS to meet the client's tech requirements and delivered within expectations. Developed a cross-platform mobile app with Expo, powered by NestJS backend APIs, with all data persisted on the client's self-hosted database.",
    features: [
      "Private, self-hosted expense data storage",
      "Categorized expense tracking and reporting",
      "Cross-platform mobile experience (iOS & Android)",
      "Secure authentication and data encryption",
    ],
    technologies: ["React Native", "NestJS", "Expo", "Android Suite"],
    date: "October 2022",
    imageUrl: "",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: false,
    order: 3,
    role: "Full Stack Developer",
    teamSize: "Solo",
  },
  {
    id: "meeting-organizer",
    slug: "meeting-organizer",
    title: "Meeting Organizer",
    shortDescription:
      "Meeting and chat management platform with real-time communication.",
    description:
      "An ambitious Google Meet and Google Chat alternative combining meeting scheduling with real-time team communication. I joined as the frontend developer, building the Next.js frontend on top of an existing Ruby on Rails backend, with Twilio powering real-time chat functionality.",
    challenge:
      "The client wanted an all-in-one platform for scheduling meetings and managing team communications without switching between multiple tools. The backend was already built in Ruby on Rails, so the frontend needed to integrate seamlessly with existing APIs.",
    solution:
      "Built the complete Next.js frontend from scratch, integrating with the existing Ruby on Rails backend. Implemented real-time chat using Twilio, meeting scheduling with calendar management, and a clean UI with shadcn/ui components.",
    features: [
      "Meeting scheduling and calendar management",
      "Real-time chat with Twilio integration",
      "Team member management and permissions",
      "Notification system for upcoming meetings",
    ],
    technologies: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Twilio",
      "Ruby on Rails",
      "shadcn/ui",
    ],
    date: "April 2023",
    imageUrl: "",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: false,
    order: 4,
    role: "Frontend Developer",
    teamSize: "Team",
  },
  {
    id: "deventa",
    slug: "deventa",
    title: "Deventa",
    shortDescription:
      "Corporate e-learning platform with video hosting and subscriptions.",
    description:
      "A corporate e-learning platform where companies subscribe to create onboarding courses for their employees — from desk jobs to coffee shop training. I handled everything except the main frontend: DevOps, Mux video pipeline, backend logic, and all integrations. My colleague focused on the frontend UI.",
    challenge:
      "Companies needed a private e-learning platform to onboard and upskill employees through curated video courses, with proper subscription management, secure video delivery, and scalable infrastructure.",
    solution:
      "Built the entire backend and DevOps infrastructure with Next.js and MongoDB. Implemented a complete Mux video pipeline: transcoding, adaptive streaming, DRM protection, S3 signed URLs for secure access, and viewing analytics. Stripe handles subscription billing, and AWS provides scalable hosting.",
    features: [
      "Company subscription and employee enrollment",
      "Mux video pipeline (transcoding, adaptive streaming, DRM)",
      "S3 signed URLs for secure video access",
      "Stripe subscription billing",
      "Progress tracking and course completion certificates",
      "Admin dashboard for course management",
    ],
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Twilio",
      "Stripe",
      "Mux",
      "AWS",
      "shadcn/ui",
    ],
    date: "April 2024",
    imageUrl: "/projects/freelance/deventa.png",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: true,
    order: 5,
    role: "Full Stack Developer & DevOps",
    teamSize: "Team of 2",
  },
  {
    id: "service-marketplace",
    slug: "service-marketplace",
    title: "Service Marketplace Platform",
    shortDescription:
      "Multi-role entertainment and lifestyle services marketplace with provider rankings.",
    description:
      "An entertainment and lifestyle services marketplace with distinct roles for providers, customers, and admins. Providers subscribe to list and advertise services, customers browse and connect, and admins moderate the platform. Uses CorePay for industry-specific payment compliance, as mainstream processors don't support this vertical.",
    challenge:
      "The client needed a multi-sided marketplace where service providers could create profiles and advertise, customers could discover and connect with providers, and admins could moderate content. Payment processing was especially challenging — mainstream processors don't support this industry, requiring a specialized solution.",
    solution:
      "Built a role-based marketplace with Next.js and MongoDB. Integrated CorePay for industry-specific payment compliance, implemented a provider ranking system for quality discovery, and built a comprehensive admin panel for content moderation. Twilio handles real-time communication between parties.",
    features: [
      "Multi-role system (providers, customers, admins)",
      "Provider ranking and discovery system",
      "Industry-specific payment processing via CorePay",
      "Provider subscription and profile management",
      "Admin moderation dashboard",
      "Real-time communication between parties",
    ],
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Twilio",
      "CorePay",
      "shadcn/ui",
    ],
    date: "June 2024",
    imageUrl: "",
    type: "freelance",
    category: "freelance",
    nda: false,
    featured: true,
    order: 6,
    role: "Full Stack Developer",
    teamSize: "Team",
  },

  // === FULL-TIME PROJECTS (HCX Technology Solutions) ===
  {
    id: "sos-employee-assist",
    slug: "sos-employee-assist",
    title: "Employee Assist Site/App",
    shortDescription:
      "Cross-platform employee help desk with web CMS and mobile app integration.",
    description:
      "A cross-platform employee assistance system (web + mobile) where the web app serves as the CMS for the React Native mobile app. I was the integration point between the web frontend, API layer, and mobile team — and handled DevOps (GitLab CI/CD, AWS deployment). Despite being a fresh grad, I became the most knowledgeable team member on the system architecture.",
    challenge:
      "A large corporation needed a centralized system for employees to request help, submit IT tickets, and access HR resources. The solution had to work across both web and mobile, with the web app feeding content to the mobile experience — requiring tight integration between multiple codebases.",
    solution:
      "Developed the full-stack web application using React and PHP/Laravel, serving as both a standalone portal and the CMS backend for the React Native mobile app. I became the integration lead, bridging the web frontend, API layer, and mobile team. Set up GitLab CI/CD pipelines and AWS deployment infrastructure.",
    features: [
      "Cross-platform: web portal + React Native mobile app",
      "Web CMS powering mobile app content",
      "Employee ticket submission and tracking",
      "Department-based routing and assignment",
      "GitLab CI/CD and AWS deployment pipeline",
    ],
    technologies: ["React", "React Native", "PHP", "Laravel", "MySQL", "AWS", "GitLab CI/CD"],
    date: "2023",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 7,
    role: "Full Stack Developer & Integration Lead",
    teamSize: "Team of 4+",
  },
  {
    id: "job-portal",
    slug: "job-portal",
    title: "Job Portal",
    shortDescription:
      "Job posting platform with AI resume parsing, inherited and maintained solo.",
    description:
      "An internal job portal I inherited completely solo after the previous developer resigned — with zero documentation. Built on WordPress/PHP with a Vue.js frontend, I reverse-engineered the entire codebase and integrated Sovereign, an AI-powered resume parser, to automate candidate screening.",
    challenge:
      "The previous developer resigned, leaving behind a WordPress/PHP + Vue.js codebase with no documentation. I had to reverse-engineer the entire system, maintain it, and integrate a new AI resume parsing service (Sovereign) — all completely alone.",
    solution:
      "Reverse-engineered the existing WordPress/PHP and Vue.js codebase to understand the architecture. Integrated Sovereign AI resume parser for automated candidate screening. Maintained and improved the platform solo, becoming the sole knowledge holder for the entire system.",
    features: [
      "Job listing creation and management",
      "AI-powered resume parsing (Sovereign integration)",
      "Applicant tracking system",
      "Role-based access control",
    ],
    technologies: ["Vue.js", "WordPress", "PHP", "MySQL", "AWS"],
    date: "2023",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 8,
    role: "Solo Full Stack Developer",
    teamSize: "Solo Dev + QA, BA, PM",
  },
  {
    id: "time-tracking",
    slug: "time-tracking",
    title: "Time Tracking Tool",
    shortDescription:
      "Employee time tracking system — optimized from 4-16 min to 2-4 sec load times.",
    description:
      "An employee time tracking and attendance monitoring system where I achieved a 99%+ performance improvement — reducing load times from 4-16 minutes down to 2-4 seconds. The root cause was every function encrypting and decrypting data individually. I refactored to middleware-based encryption at request boundaries only.",
    challenge:
      "The system was unusably slow — pages took 4-16 minutes to load. The codebase was spaghetti, with every function independently encrypting and decrypting data, creating massive computational overhead. HR couldn't accurately track overtime, leaves, and attendance across departments.",
    solution:
      "Diagnosed the root cause: encryption/decryption was happening in every function rather than at system boundaries. Refactored to middleware-based encryption that only runs at request/response boundaries, achieving a 99%+ performance improvement (4-16 min → 2-4 sec). Untangled the spaghetti code architecture along the way.",
    features: [
      "Automated time-in/time-out logging",
      "Overtime and leave calculation",
      "Department-level attendance reports",
      "Timesheet approval workflows",
      "99%+ performance improvement through architecture refactor",
    ],
    technologies: ["React", "PHP", "Laravel", "MySQL", "AWS"],
    date: "2023 - 2024",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 9,
    role: "Full Stack Developer",
    teamSize: "5+ Devs + 2 QA, BA, PM",
  },
  {
    id: "employee-dashboard",
    slug: "employee-dashboard",
    title: "Employee Dashboard (HR System)",
    shortDescription:
      "Comprehensive HR management dashboard — led a team of 5+ as tech lead.",
    description:
      "The biggest project at HCX Technology Solutions, similar to Sprout HR. I served as team lead: I picked the tech stack (Next.js + Material UI, an early adoption at the company), built coding standards, taught the team Next.js, code-reviewed everything, and caught AI-generated slop during reviews. I even ran a workshop to help the team level up.",
    challenge:
      "The HR department was managing employee data across multiple disconnected systems. This was the company's biggest project, requiring a unified platform — and I had to lead a team of 5+ developers while establishing new technology standards (Next.js) that the team hadn't used before.",
    solution:
      "Led the project as team lead, making key technology decisions (Next.js + Material UI). Built coding standards and onboarding documentation, taught the team Next.js through workshops, and code-reviewed every pull request to maintain quality. Built a centralized HR dashboard integrating employee data from multiple sources.",
    features: [
      "Centralized employee record management",
      "Department and team hierarchy views",
      "Leave management and approval system",
      "HR analytics and reporting",
      "Coding standards and team workshops",
    ],
    technologies: ["Next.js", "Material UI", "PHP", "Laravel", "MySQL", "AWS", "Docker"],
    date: "2023 - 2024",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 10,
    role: "Team Lead & Full Stack Developer",
    teamSize: "5+ Devs + 2 QA, BA, PM",
  },
  {
    id: "ac-motors-landing",
    slug: "ac-motors-landing",
    title: "AC Company Landing Page",
    shortDescription:
      "Automotive cooperative's used vehicle marketplace built from designer mockups.",
    description:
      "A corporate landing page for an automotive cooperative's used vehicle marketplace. Built from designer mockups, the site lets customers browse available vehicles and contact agents. Focused on responsive design and fast load times for the vehicle catalog.",
    challenge:
      "The automotive cooperative needed a modern web presence to showcase their used vehicle inventory with an easy way for customers to browse cars and contact sales agents.",
    solution:
      "Implemented the frontend from designer mockups using React and Laravel, with responsive design optimized for mobile browsing and SEO-friendly structure deployed on AWS.",
    features: [
      "Vehicle catalog with search and filtering",
      "Responsive hero section with brand messaging",
      "Agent contact functionality",
      "Mobile-optimized browsing experience",
    ],
    technologies: ["React", "PHP", "Laravel", "MySQL", "AWS"],
    date: "2024",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 11,
    role: "Frontend Developer",
    teamSize: "Team",
  },
  {
    id: "company-landing-page",
    slug: "company-landing-page",
    title: "Company Landing Page",
    shortDescription:
      "HCX Technology Solutions corporate website with WordPress CMS improvements.",
    description:
      "HCX Technology Solutions' own corporate website. A collaborative project with the designer and company leadership, I worked on WordPress/PHP CMS improvements to modernize the company's web presence and better reflect their service offerings.",
    challenge:
      "The company's existing website was outdated and didn't reflect their current brand identity or service offerings, leading to poor first impressions with potential clients.",
    solution:
      "Collaborated with the designer and leadership to redesign the corporate website, implementing WordPress/PHP CMS improvements with a modern design system and SEO optimization.",
    features: [
      "Modern responsive design",
      "WordPress CMS for content management",
      "Service and solution showcase",
      "Career listings integration",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "AWS"],
    date: "2024",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 12,
    role: "Frontend Developer",
    teamSize: "Collaborative",
  },

  // === FULL-TIME PROJECTS (MGX / Megaxcess) ===
  {
    id: "enterprise-regulatory-platform",
    slug: "enterprise-regulatory-platform",
    title: "Enterprise Regulatory Platform",
    shortDescription:
      "Regulatory compliance and transaction auditing across hundreds of registered games.",
    description:
      "An online gaming industry regulatory compliance platform for transaction auditing across hundreds of registered games. Every transaction is logged and auditable. The system generates daily, weekly, and monthly reports including volume analytics and revenue share calculations — all performance-critical, loading massive datasets in under 4 seconds.",
    challenge:
      "Government regulators needed a centralized platform to audit transactions across hundreds of registered online games. Every transaction must be logged. Reports spanning massive datasets (daily/weekly/monthly volumes, revenue share calculations) had to load in under 4 seconds. A dedicated database team handled query optimization.",
    solution:
      "Developed a comprehensive regulatory platform using Next.js for the frontend and PHP/Laravel for the backend. Built performance-critical report generation (under 4 seconds on massive datasets) working closely with a dedicated DB team. Implemented role-based access, audit trails, and automated report generation for government stakeholders.",
    features: [
      "Transaction auditing across hundreds of registered games",
      "Daily/weekly/monthly report generation",
      "Revenue share calculations",
      "Performance-critical: <4s on massive datasets",
      "Role-based access for government stakeholders",
      "Complete audit trail and activity logging",
    ],
    technologies: ["Next.js", "PHP", "Laravel", "MySQL", "Docker"],
    date: "2025 - Present",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 13,
    role: "Full Stack Developer",
    teamSize: "3-5 Devs + 2 QA, BA, Designer, PM",
  },
  {
    id: "admin-management-system",
    slug: "admin-management-system",
    title: "Administrative Management System",
    shortDescription:
      "Security-hardened entity management with CSP, JWT, and encrypted POST bodies.",
    description:
      "A security-focused management system for tracking regulated entities. I implemented Content Security Policy (CSP), JWT authentication, and POST body encryption of sensitive data at the code level — making it invisible in request/response payloads. Beyond this project, I led the Docker migration from Homestead/Vagrant to Docker for all MGX projects and built GitLab CI/CD pipelines for automated build/test/deploy workflows.",
    challenge:
      "The client needed a custom management system with strict security requirements: encrypted data handling on the frontend, secure status workflows, and proper access controls. The entire MGX development environment also needed modernization — migrating from Homestead/Vagrant to Docker.",
    solution:
      "Built the entire Next.js frontend with a strong focus on security: CSP headers, JWT authentication, and POST body encryption of sensitive data at the code level (invisible in request/response). Led the Docker migration from Homestead/Vagrant for all MGX projects and built GitLab CI/CD pipelines for automated build, test, and deploy workflows.",
    features: [
      "Entity CRUD management with status workflows",
      "CSP, JWT, and POST body encryption at code level",
      "Role-based UI rendering and access controls",
      "Docker migration for all MGX projects (Homestead/Vagrant → Docker)",
      "GitLab CI/CD pipelines (build/test/deploy)",
    ],
    technologies: ["Next.js", "PHP", "Laravel", "MySQL", "Docker", "GitLab CI/CD"],
    date: "2025 - Present",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "fulltime",
    category: "fulltime",
    nda: true,
    featured: false,
    order: 14,
    role: "Full Stack Developer & DevOps",
    teamSize: "2 Devs + 2 QA, BA, Designer, PM",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(
  category: "freelance" | "fulltime" | "all"
): Project[] {
  if (category === "all") return [...projects].sort((a, b) => a.order - b.order);
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order);
}
