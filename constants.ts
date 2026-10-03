import {
  Project,
  ProjectGroup,
  Experience,
  ContactInfo,
  Achievement,
  TechCategory,
} from './types';

export const GITHUB_URL = 'https://github.com/MWANGIANITAWAMBUI';

export const HERO_HEADLINE = 'Software engineer building FinTech, mobility and AI products.';

export const HERO_CONTENT = `I turn real business problems into intuitive, scalable software — from payment infrastructure and blockchain-enabled wallets to mobile apps on Google Play and websites for clients.`;

export const ABOUT_TEXT = `I'm a BBIT graduate who started at ElementPay as a Software Development Intern and was promoted to Junior Software Developer within six months. I work on production systems: payment workflows, blockchain-enabled wallets, transaction dashboards, and the admin tools that keep them running. Outside of that, I build client platforms and personal projects that solve real problems in finance, education, and workplace productivity — and I'm always looking for the next technology worth learning.`;

export const ABOUT_MILESTONES: string[] = [
  'Graduated with a Bachelor of Business Information Technology, Technical University of Mombasa',
  'Joined ElementPay as a Software Development Intern',
  'Promoted to Junior Software Developer within six months',
  'Contributed to Songa, a mobility app now live on Google Play',
  'Built a live website for Corevoo Consultancy and platforms for investment and fashion clients',
  'Currently deepening Web3 and AI application skills',
];

export const EXPERIENCES: Experience[] = [
  {
    year: 'April 2026 – Present',
    role: 'Junior Software Developer',
    company: 'ElementPay',
    description: `Developed production features using React Native, Expo, TypeScript and REST APIs. Built payment workflows including bank payouts, refund management and transaction validation. Implemented blockchain-enabled liquidity validation and multi-chain wallet functionality, enhanced transaction management with advanced filtering and analytics, and built responsive admin dashboards for monitoring users, transactions and operational metrics.`,
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST API', 'Blockchain', 'Wallet Integration'],
  },
  {
    year: 'October 2025 – March 2026',
    role: 'Software Development Intern',
    company: 'ElementPay',
    description: `Built frontend features under mentorship while learning enterprise software development. Tested APIs using Postman and validated backend integrations. Worked on transaction dashboards, analytics, responsive interfaces and pagination, and investigated production bugs across multiple application modules alongside senior developers.`,
    technologies: ['React Native', 'TypeScript', 'Postman', 'Git', 'Agile'],
  },
];

/* ------------------------------------------------------------------
   PROJECTS
   Everything on the Work and Case Studies sections is generated from
   this list. To add a project, add one object here: no JSX needed.
   Rules used throughout: collaborative wording for team work, no
   invented metrics, and no repository link unless a public repo exists.
------------------------------------------------------------------- */

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'professional',
    filterLabel: 'Professional',
    title: 'Professional work',
    intro: 'Production applications and platforms I have contributed to as part of professional development teams.',
    note: 'Some professional projects are represented through case studies because their source code is maintained in private company repositories.',
  },
  {
    id: 'client',
    filterLabel: 'Client work',
    title: 'Client work',
    intro: 'Websites and digital experiences I have designed and developed for clients and organizations.',
    note: 'Client projects may use private repositories and are presented here to demonstrate the work and outcomes without exposing proprietary source code.',
  },
  {
    id: 'personal',
    filterLabel: 'Personal',
    title: 'Selected projects',
    intro: 'Independent and public projects showcasing my frontend development, UI engineering and problem-solving skills.',
  },
];

export const PROJECTS: Project[] = [
  /* ---------------- Professional ---------------- */
  {
    id: 'songa',
    title: 'Songa',
    tagline: 'Mobility and ride-sharing app, live on Google Play.',
    category: 'professional',
    kindLabel: 'Mobile application · Mobility',
    description:
      'Contributed to the development and Google Play Store launch of Songa, a Kenya-focused mobility platform for booking and sharing rides. Worked on React Native/Expo features, production configuration, Android builds, testing, and release preparation, helping take the application from development through Play Store testing and launch.',
    role: 'Junior developer · mobile contribution',
    contributions: [
      'Contributed to production development of the Songa mobile application',
      'Worked with React Native and Expo; implemented and refined frontend features and user flows',
      'Worked on Android production builds using Expo Application Services (EAS)',
      'Assisted with production environment configuration',
      'Worked on API integration and production backend connectivity',
      'Fixed mobile UI and functionality issues found during testing',
      'Worked through GitHub branches and pull requests',
      'Supported Google Play Store testing and release preparation',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'Android', 'EAS', 'Git', 'GitHub'],
    status: { label: 'Live on Google Play', tone: 'live' },
    // Add the public Play Store link here when you have it:
    // liveUrl: 'https://play.google.com/store/apps/details?id=...',
    // liveLabel: 'View on Google Play',
    sourceNote: 'Source code: private · professional work',
    featured: true,
    visual: 'phone',
    caseStudy: {
      problem:
        'A Kenya-focused mobility platform needed a production-ready mobile app for booking and sharing rides, and a clear path from a development build to a public Android release.',
      solution:
        'I contributed React Native and Expo features and user flows, API integration with the production backend, production configuration and EAS Android builds. I fixed issues found in testing and worked through GitHub branches and pull requests with the team.',
      impact:
        'The app moved through internal testing and Play Store preparation to a live Google Play release. I contributed to that journey as part of the team.',
      timeline: [
        'Development',
        'Testing',
        'Android build',
        'Internal testing',
        'Play Store preparation',
        'Live release',
      ],
    },
  },
  {
    id: 'isafari',
    title: 'iSafari',
    tagline: 'React Native travel app, being prepared for Google Play.',
    category: 'professional',
    kindLabel: 'Mobile application · Travel',
    description:
      'Contributed to the development and Android/Google Play Store preparation of iSafari, a React Native mobile application. Worked on frontend features, signup flows, privacy and terms experiences, mobile configuration, testing, and release-readiness improvements.',
    role: 'Junior developer · mobile contribution',
    contributions: [
      'Contributed to React Native frontend development',
      'Worked on mobile UI and user interaction flows',
      'Implemented an in-app Privacy Policy and Terms experience',
      'Added and refined signup consent functionality',
      'Worked on Android application configuration',
      'Tested mobile flows and identified UI and functional issues',
      'Worked with Git branches and GitHub pull requests',
      'Helped prepare the application for Google Play Store distribution',
    ],
    technologies: ['React Native', 'TypeScript', 'Android', 'Git', 'GitHub'],
    status: { label: 'Play Store preparation', tone: 'prep' },
    sourceNote: 'Source code: private · professional work',
    visual: 'phone',
    caseStudy: {
      problem:
        'The app needed to be release-ready for Google Play: users had to be able to read the Privacy Policy and Terms in the app and give consent when signing up, and the Android configuration had to be in place.',
      solution:
        'I built the in-app Privacy Policy and Terms experience, added and refined signup consent, worked on Android configuration, and tested mobile flows to find UI and functional issues before release.',
      impact:
        'These changes helped move iSafari toward Google Play distribution. The app is in release preparation and I am not presenting it as live.',
    },
  },

  /* ---------------- Client ---------------- */
  {
    id: 'corevoo',
    title: 'Corevoo Consultancy',
    tagline: 'Business website for a consultancy, live on Vercel.',
    category: 'client',
    kindLabel: 'Business website · Web development',
    description:
      "Designed and developed a professional business website for Corevoo Consultancy, creating a polished digital presence that communicates the company's services, value proposition and brand identity through a responsive and user-friendly web experience.",
    role: 'Developer · client delivery',
    contributions: [
      'Worked directly on the development of the client website',
      "Translated the client's business needs into a structured web experience",
      'Built responsive layouts for desktop, tablet and mobile',
      "Created clear sections presenting the consultancy's services and information",
      'Implemented responsive UI and reusable components',
      'Deployed the completed website to Vercel',
    ],
    // Only technologies confirmed for this project belong here. Edit if the stack differs.
    technologies: ['Responsive design', 'Vercel'],
    status: { label: 'Live client website', tone: 'live' },
    liveUrl: 'https://corevooo-consultancy.vercel.app/',
    liveLabel: 'View live website',
    sourceNote: 'Source code: private · client project',
    visual: 'browser',
    caseStudy: {
      problem:
        'Corevoo Consultancy needed a professional online presence that clearly communicates its services and establishes a credible digital presence.',
      solution:
        "I translated the client's requirements and brand direction into a responsive, structured and easy-to-navigate website, built with reusable components and clear service sections.",
      impact:
        'A live, publicly accessible consultancy website deployed on Vercel.',
    },
  },
  {
    id: 'daltoma',
    title: 'Daltoma Capital AM',
    tagline: 'White-label investor platform for alternative investment funds.',
    category: 'client',
    kindLabel: 'Investment platform · Next.js',
    description:
      'Designed and implemented a mobile-first digital investment platform that modernizes how alternative investment funds onboard, manage and communicate with investors, replacing paper-based processes with secure digital onboarding, portfolio management and document access.',
    role: 'Developer · client delivery',
    contributions: [
      'Investor dashboard',
      'Digital KYC document management',
      'Deposit and withdrawal workflows',
      'Invite-only onboarding',
      'Secure document center',
      'White-label branding architecture and responsive mobile-first design',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    status: { label: 'Client platform', tone: 'public' },
    sourceNote: 'Source code: private · client project',
    visual: 'dashboard',
    caseStudy: {
      problem:
        'Alternative investment funds often rely on manual onboarding, paper documentation and fragmented communication, which makes the investor experience slow and inefficient.',
      solution:
        'A configurable investor platform with an investor dashboard, digital KYC document management, deposit and withdrawal workflows, invite-only onboarding, a secure document center and a white-label branding architecture, all mobile-first.',
      impact:
        'Infrastructure that lets multiple investment funds launch branded investor portals from a shared codebase, reducing operational overhead while improving investor accessibility.',
    },
  },

  /* ---------------- Personal / selected ---------------- */
  {
    id: 'inakaso',
    title: 'Inakaso',
    tagline: 'AI-assisted second-hand fashion marketplace.',
    category: 'personal',
    kindLabel: 'Web application · Marketplace',
    description:
      'A fashion marketplace that connects shoppers with independent sellers. Sellers upload individual garments, AI generates complete styled outfits, and buyers browse curated looks as well as single pieces.',
    role: 'Developer',
    contributions: [
      'Product discovery and category browsing',
      'AI-generated outfit combinations from single garments',
      'Responsive, mobile-friendly, product-focused UI',
      'Buying individual pieces or complete outfits',
    ],
    technologies: ['Next.js', 'TypeScript', 'AI integration', 'Responsive design', 'Vercel'],
    status: { label: 'Live web project', tone: 'live' },
    liveUrl: 'https://inakaso-2.vercel.app/',
    liveLabel: 'View live project',
    sourceNote: 'Source code: not publicly available',
    visual: 'browser',
    caseStudy: {
      problem:
        'Second-hand shoppers often struggle to picture how single clothing items work together, which lowers buyer confidence and reduces sales.',
      solution:
        'An AI-first marketplace where sellers upload individual garments, AI generates complete outfit combinations, and buyers browse curated looks instead of isolated products.',
      impact:
        'Better product discovery and more purchase confidence through AI-assisted styling, while encouraging sustainable fashion.',
    },
  },
  {
    id: 'fintrack',
    title: 'FinTrack',
    tagline: 'Personal finance analytics dashboard.',
    category: 'personal',
    kindLabel: 'Web application · Finance',
    description:
      'A finance dashboard that helps users analyze transactions through interactive filtering and visualization, built with plain JavaScript ES modules.',
    role: 'Developer',
    contributions: [
      'Real-time and debounced search',
      'Transaction filtering, sorting and pagination',
      'SVG analytics charts',
      'CSV export',
    ],
    technologies: ['JavaScript (ES Modules)', 'HTML', 'CSS', 'Fetch API'],
    status: { label: 'Public project', tone: 'public' },
    repoUrl: GITHUB_URL,
    repoLabel: 'View on GitHub',
    sourceNote: 'Source code: public on GitHub',
    visual: 'dashboard',
    caseStudy: {
      problem:
        'Managing a large transaction history is hard without efficient search, categorization and reporting tools.',
      solution:
        'Real-time search, transaction filtering, sorting and pagination, SVG analytics charts, CSV export and debounced search.',
      impact:
        'Users get to financial insight faster and can manage personal transactions more effectively.',
    },
  },
  {
    id: 'ecologic',
    title: 'EcoLogic',
    tagline: 'Browser game that teaches ecology.',
    category: 'personal',
    kindLabel: 'Browser game · Education',
    description:
      'An educational browser game that teaches ecological concepts through interactive gameplay.',
    role: 'Developer',
    contributions: [
      'Drag-and-drop food chain challenges',
      'Progressive difficulty and randomized gameplay',
      'Achievement badges, leaderboards and daily challenges',
      'Species collection',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    status: { label: 'Public project', tone: 'public' },
    repoUrl: GITHUB_URL,
    repoLabel: 'View on GitHub',
    sourceNote: 'Source code: public on GitHub',
    visual: 'game',
    caseStudy: {
      problem:
        'Environmental education often relies on passive learning that struggles to keep learners engaged.',
      solution:
        'A browser game with drag-and-drop food chain challenges, progressive difficulty, achievement badges, leaderboards, daily challenges and species collection.',
      impact:
        'Encourages active learning and raises environmental awareness through play.',
    },
  },
  {
    id: 'task-system',
    title: 'Gamified Employee Task Management',
    tagline: 'Final-year project: tasks, attendance and XP for teams.',
    category: 'personal',
    kindLabel: 'Full-stack application · Productivity',
    description:
      'A multi-user employee task management system developed as a final-year university project, adding gamification to everyday task and attendance tracking.',
    role: 'Developer',
    contributions: [
      'Role-based access control and secure authentication',
      'Task assignment, attendance tracking and clock-in/clock-out',
      'XP points and achievement badges',
      'Productivity dashboards and REST APIs',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    status: { label: 'Public project', tone: 'public' },
    repoUrl: GITHUB_URL,
    repoLabel: 'View on GitHub',
    sourceNote: 'Source code: public on GitHub',
    visual: 'platform',
    caseStudy: {
      problem:
        'Traditional task management systems lack motivation mechanisms and give managers limited visibility into productivity.',
      solution:
        'Role-based access control, task assignment, attendance tracking, clock-in/clock-out, XP points, achievement badges, productivity dashboards, REST APIs and secure authentication.',
      impact:
        'Improves accountability, raises engagement through gamification and gives managers real-time productivity insight.',
    },
  },
];

export const CONTACT: ContactInfo = {
  address: 'Mombasa, Kenya',
  phoneNo: '0115096868',
  email: 'anitawambui101@gmail.com',
  linkedin: 'https://linkedin.com/in/anita-wambui-a01512203',
  github: GITHUB_URL,
};

export const TECH_CATEGORIES: TechCategory[] = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'] },
  { category: 'Mobile', skills: ['React Native', 'Expo', 'EAS builds', 'Android'] },
  { category: 'Backend', skills: ['REST APIs', 'PHP', 'MySQL', 'Authentication', 'Session management'] },
  { category: 'FinTech & Blockchain', skills: ['Web3', 'viem', 'ERC-20', 'Wallet integration', 'Multi-chain apps'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Figma', 'VS Code'] },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: 'Intern to Junior Developer', description: 'Progressed from Software Development Intern to Junior Software Developer at ElementPay within six months.' },
  { id: 2, title: 'Live on Google Play', description: 'Contributed to Songa, a mobility app that went from development and testing to a public Google Play release.' },
  { id: 3, title: 'Production FinTech software', description: 'Delivered production features across FinTech, blockchain and mobility platforms, from payment workflows to admin dashboards.' },
  { id: 4, title: 'Client websites and platforms', description: 'Built a live consultancy website and designed AI-powered and investment platforms for clients.' },
  { id: 5, title: 'Team collaboration', description: 'Worked in Agile teams using Git-based workflows, pull requests and peer code reviews.' },
];
