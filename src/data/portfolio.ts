import {
  BadgeCheck,
  Bot,
  BookOpen,
  Cloud,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Monitor,
  Music,
  Plane,
  Server,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import photoUrl from '../../assets/photo-suresh.jpg';
import resumeUrl from '../../assets/Suresh_DotNet_FullStack_8Yrs.pdf?url';

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  display: string;
  href: string;
  icon: LucideIcon;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface ExperienceRole {
  title: string;
  company: string;
  client?: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
}

export interface Interest {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROFILE = {
  name: 'Suresh',
  initials: 'S',
  // Local profile photo stored in the assets folder.
  photoUrl,
  photoAlt: 'Portrait of Suresh, AI and full-stack software engineer',
  headline: 'AI & Full-Stack Software Engineer',
  subheadline:
    'Building scalable software, cloud-native systems, and intelligent AI-powered applications.',
  expertise: ['.NET', 'C#', 'ASP.NET', 'Azure', 'Microservices', 'AI Agents', 'MCP'],
  email: 'sureshuppathi@gmail.com',
  resumeUrl,
  copyright: '© 2026 • Built with ❤️ by Suresh',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'beyond-code', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    display: 'github.com/suresh',
    href: 'https://github.com/UppathiSuresh',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/suresh-uppathi',
    href: 'https://www.linkedin.com/in/suresh-uppathi/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    display: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
  },
];

export const ABOUT_PARAGRAPHS: string[] = [
  'Senior AI & .NET Full-Stack Engineer with 8+ years of experience building scalable applications, distributed systems, and enterprise software.',
  'Passionate about using technology to solve complex business problems, I enjoy taking products from concept to delivery and turning challenging requirements into simple, resilient, and maintainable architectures.',
  'My interests span modern .NET engineering, cloud solutions, full-stack development, and applied Generative AI, including AI agents, Retrieval-Augmented Generation (RAG), and Model Context Protocol (MCP).',
];

export const ABOUT_FOCUS_AREAS: string[] = [
  'Modern .NET engineering',
  'Cloud solutions',
  'Full-stack development',
  'Applied Generative AI',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['C#', '.NET', '.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'LINQ', 'REST APIs'],
  },
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['SQL Server', 'SQL', 'Stored Procedures', 'Functions', 'Triggers', 'Views'],
  },
  {
    title: 'AI and Generative AI',
    icon: Bot,
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'AI Agents',
      'Retrieval-Augmented Generation (RAG)',
      'Model Context Protocol (MCP)',
      'OpenAI / LLM Integration',
    ],
  },
  {
    title: 'Architecture and Engineering',
    icon: Layers,
    skills: ['Microservices', 'Distributed Systems', 'API Design', 'Application Performance', 'Unit Testing'],
  },
  {
    title: 'Cloud and DevOps',
    icon: Cloud,
    skills: ['Microsoft Azure', 'Azure DevOps', 'Docker', 'Git'],
  },
];

export const EXPERIENCE: ExperienceRole[] = [
  {
    title: 'Software Engineer',
    company: 'Concentrix',
    period: 'November 2022 – Present',
    highlights: [
      'Improved application performance by up to 40% through server-side pagination, SQL query optimization, and efficient data retrieval.',
      'Troubleshot and resolved production application issues using Azure Application Insights, improving application monitoring, reliability, and system stability.',
      'Researched, introduced, and integrated an API testing framework, improving test coverage and code quality by 30%.',
      'Optimized frontend dependencies by streamlining npm packages, reducing unnecessary dependencies by 20% and improving application maintainability.',
      'Modernized legacy applications by migrating .NET Framework functionality to a modern ASP.NET Core Web API architecture, improving scalability and maintainability.',
      'Supported end-to-end application development, debugging, production troubleshooting, and maintenance to improve application stability and minimize recurring issues.',
      'Translated business requirements into technical specifications and solution designs, ensuring alignment between business objectives and software architecture.',
      'Analyzed functional requirements and designed new application features, improving system functionality and development efficiency.',
    ],
  },
  {
    title: 'System Analyst',
    company: 'Speridian Technologies',
    period: 'October 2021 – November 2022',
    highlights: [
      'Built reusable C# classes and data access components, improving code reusability and maintainability.',
      'Developed responsive, reusable UI components using Angular, JavaScript, HTML5, and CSS3.',
      'Designed and integrated RESTful APIs and ASP.NET Web API services for seamless system integration.',
      'Developed and optimized SQL queries, stored procedures, functions, triggers, and views in SQL Server.',
      'Implemented Azure cloud deployments and streamlined CI/CD workflows using Azure DevOps.',
      'Managed source control, branching, merging, and code integration using Git.',
      'Applied SOLID principles and OOP practices to build modular, maintainable applications.',
      'Implemented Repository Pattern to improve separation of concerns, testability, and data access maintainability.',
    ],
  },
  {
    title: '.NET Developer',
    company: 'MSC Technology',
    period: 'July 2018 – October 2021',
    highlights: [
      'Developed reusable C# classes, collections, and data access components to streamline business logic and SQL Server integration.',
      'Designed, developed, and consumed RESTful APIs and ASP.NET Web API services for seamless application integration.',
      'Developed and optimized SQL Server queries, stored procedures, functions, triggers, and views to improve database performance and data retrieval.',
      'Deployed and maintained cloud-based applications using Microsoft Azure and Azure DevOps.',
      'Managed source control, branching, merging, and code integration using Git to support collaborative development and deployment.',
      'Applied SOLID principles and object-oriented programming (OOP) to build modular, scalable, and maintainable applications.',
      'Implemented Repository Pattern to separate business logic from data access, improving code reusability, testability, and maintainability.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'AtShop',
    category: 'E-commerce',
    description:
      'A .NET-powered e-commerce application focused on delivering a seamless and intelligent shopping experience.',
    tags: ['.NET', 'C#', 'Microservices', 'SQL', 'Azure', 'AI', 'MCP', 'Docker'],
    repoUrl: 'https://github.com/UppathiSuresh/shop',
  },
  {
    name: 'StockTank',
    category: 'Stock Data API',
    description:
      'Developed StockTank API to deliver stock data and support financial application integrations.',
    tags: ['.NET', 'Angular', 'SQL', 'Azure', 'OpenAI', 'Kafka', 'Docker'],
    repoUrl: 'https://github.com/UppathiSuresh/stocksearch',
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Bachelor of Engineering, Computer Science',
    institution: 'Anna University',
    period: '2014 – 2018',
    details:
      'Completed a Bachelor of Engineering in Computer Science at Velammal Engineering College, an autonomous institution with NAAC A Grade accreditation.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Machine Learning and Generative AI',
    issuer: 'Udemy',
    description: 'Completed Machine Learning and Generative AI courses.',
    icon: BadgeCheck,
  },
  {
    title: 'Full Stack Developer',
    issuer: 'HackerRank',
    description: 'Verified certifications in Angular, React, and Problem Solving.',
    icon: BadgeCheck,
  },
  {
    title: 'Star Performer Award',
    issuer: 'Concentrix',
    description: 'Recognized for outstanding contributions to trading and fintech tools.',
    icon: Trophy,
  },
];

export const INTERESTS: Interest[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Exploring emerging AI technologies and practical applications.',
    icon: Bot,
  },
  {
    title: 'Reading',
    description: 'Technology blogs and science-fiction novels.',
    icon: BookOpen,
  },
  {
    title: 'Music',
    description: 'Enjoying classic and melodic genres.',
    icon: Music,
  },
  {
    title: 'Travel',
    description: 'Discovering new cultures and experiences.',
    icon: Plane,
  },
];
