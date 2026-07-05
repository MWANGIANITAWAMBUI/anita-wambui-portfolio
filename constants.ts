
import { Project, Experience, ContactInfo, WritingPost, Achievement, TechCategory } from './types';

export const HERO_CONTENT = `Software Engineer building modern web and mobile applications across FinTech, Web3, and AI-powered products. I turn real business problems into intuitive, scalable software — from payment infrastructure to blockchain-enabled platforms.`;

export const ABOUT_TEXT = `I'm a BBIT graduate who started at ElementPay as a Software Development Intern and was promoted to Junior Software Developer within six months. I work on production systems: payment workflows, blockchain-enabled wallets, transaction dashboards, and the admin tools that keep them running. Outside of work, I build client platforms and personal projects that solve real problems in finance, education, and workplace productivity — and I'm always looking for the next technology worth learning.`;

export const ABOUT_MILESTONES: string[] = [
  "Graduated with a Bachelor of Business Information Technology, Technical University of Mombasa",
  "Joined ElementPay as a Software Development Intern",
  "Promoted to Junior Software Developer within six months",
  "Shipped production FinTech, blockchain, and mobility features",
  "Delivered client platforms in AI and digital investment",
  "Always learning — currently deepening Web3 and AI application skills"
];

export const EXPERIENCES: Experience[] = [
  {
    year: "April 2026 - Present",
    role: "Junior Software Developer",
    company: "ElementPay",
    description: `Developed production features using React Native, Expo, TypeScript and REST APIs. Built payment workflows including bank payouts, refund management and transaction validation. Implemented blockchain-enabled liquidity validation and multi-chain wallet functionality, enhanced transaction management with advanced filtering and analytics, and built responsive admin dashboards for monitoring users, transactions and operational metrics.`,
    technologies: ["React Native", "Expo", "TypeScript", "REST API", "Blockchain", "Wallet Integration"]
  },
  {
    year: "October 2025 - March 2026",
    role: "Software Development Intern",
    company: "ElementPay",
    description: `Built frontend features under mentorship while learning enterprise software development. Tested APIs using Postman and validated backend integrations. Worked on transaction dashboards, analytics, responsive interfaces and pagination, and investigated production bugs across multiple application modules alongside senior developers.`,
    technologies: ["React Native", "TypeScript", "Postman", "Git", "Agile"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Daltoma Capital AM – White-Label Alternative Investment Platform",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    description: "Client project. Alternative investment funds often rely on manual onboarding, paper documentation, and fragmented investor communication. I designed and built a mobile-first digital investment platform with an investor dashboard, digital KYC document management, deposit and withdrawal workflows, invite-only onboarding, a secure document center, and white-label branding architecture. The result: infrastructure that lets multiple investment funds launch branded investor portals from a shared codebase, reducing operational overhead while improving investor accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "#",
    isClientProject: true
  },
  {
    title: "Inakaso – AI-Powered Second-Hand Fashion Marketplace",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
    description: "Client project. Second-hand shoppers often struggle to visualize how individual clothing items work together, which lowers buyer confidence. I built an AI-first marketplace where sellers upload individual garments, AI generates complete styled outfit combinations, and buyers browse curated looks instead of isolated products — improving product discovery, sustainable fashion adoption, and purchase confidence.",
    technologies: ["Next.js", "TypeScript", "AI Integration", "Responsive Design"],
    link: "#",
    isClientProject: true
  },
  {
    title: "FinTrack – Personal Finance Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    description: "Managing large transaction histories becomes difficult without efficient search, categorization, and reporting tools. FinTrack gives users real-time search, filtering, sorting, and pagination over their transactions, plus SVG analytics charts, CSV export, and debounced search — enabling faster financial insight and more effective personal finance management.",
    technologies: ["JavaScript (ES Modules)", "HTML", "CSS", "Fetch API"],
    link: "https://github.com/MWANGIANITAWAMBUI"
  },
  {
    title: "EcoLogic – Educational Ecology Learning Game",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
    description: "Traditional environmental education often relies on passive learning methods that struggle to hold attention. EcoLogic is a browser game teaching ecological concepts through drag-and-drop food chain challenges, progressive difficulty, achievement badges, leaderboards, daily challenges, and species collection — encouraging active learning and environmental awareness.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/MWANGIANITAWAMBUI"
  },
  {
    title: "Gamified Employee Task Management System",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    description: "Final-year university project. Traditional task management systems often lack motivation mechanisms and give managers limited visibility into productivity. This full-stack platform adds role-based access control, task assignment, attendance tracking, clock-in/clock-out, XP points, achievement badges, and productivity dashboards on top of secure authentication and REST APIs — improving accountability and engagement.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/MWANGIANITAWAMBUI"
  }
];

export const CONTACT: ContactInfo = {
  address: "Mombasa, Kenya",
  phoneNo: "0115096868",
  email: "anitawambui101@gmail.com",
  linkedin: "https://linkedin.com/in/anita-wambui-a01512203",
  github: "https://github.com/MWANGIANITAWAMBUI",
};

export const TECH_CATEGORIES: TechCategory[] = [
  { category: "Frontend", skills: ["React", "React Native", "Expo", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", skills: ["PHP", "MySQL", "REST APIs", "Authentication", "Session Management"] },
  { category: "FinTech & Blockchain", skills: ["Web3", "viem", "ERC-20", "Wallet Integration", "Multi-chain Apps"] },
  { category: "Tools", skills: ["Git", "GitHub", "Postman", "Vercel", "Figma", "VS Code"] }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: "Intern to Junior Developer", description: "Progressed from Software Development Intern to Junior Software Developer at ElementPay within six months." },
  { id: 2, title: "Production FinTech Software", description: "Delivered production software across FinTech, blockchain, and mobility platforms used by real customers and admins." },
  { id: 3, title: "AI & Blockchain Client Work", description: "Designed AI-powered and blockchain-enabled solutions for client platforms, from investment onboarding to fashion marketplaces." },
  { id: 4, title: "Cross-Functional Collaboration", description: "Experienced collaborating within Agile teams using Git-based workflows, pull requests, and peer code reviews." }
];

export const WRITING_POSTS: WritingPost[] = [
  { id: 1, date: "2024", title: "The Intersection of Aesthetics and Performance", category: "Design" },
  { id: 2, date: "2023", title: "Scaling React Applications: Beyond Basics", category: "Architecture" },
  { id: 3, date: "2023", title: "Why Elixir is the Secret Weapon", category: "Backend" }
];
