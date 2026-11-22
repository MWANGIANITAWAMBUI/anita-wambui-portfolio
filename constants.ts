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

export const HERO_CONTENT = `I turn real business problems into intuitive, scalable software, from payment infrastructure and blockchain-enabled wallets to mobile apps on Google Play and websites for clients.`;

export const ABOUT_TEXT = `I'm a BBIT graduate who started at ElementPay as a Software Development Intern and was promoted to Junior Software Developer within six months. I work on production systems: payment workflows, blockchain-enabled wallets, transaction dashboards, and the admin tools that keep them running. Outside of that, I build client platforms and personal projects that solve real problems in finance, education, and workplace productivity. I'm always looking for the next technology worth learning.`;

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
    intro: 'Independent projects showcasing my frontend development, UI engineering and problem-solving skills.',
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
      'Contributed to the Android release of Songa, a Kenya-focused mobility app, taking it from development builds through Google Play testing tracks to a live launch: EAS production builds, signing, Play Console setup, the store listing and data-safety forms, and fixes for issues found in testing.',
    role: 'Junior developer · Android release and Play Store launch',
    contributions: [
      'Produced Android production builds with Expo Application Services (EAS)',
      'Set up release signing for the Android app',
      'Set up Google Play Console and managed the testing tracks',
      'Completed the store listing and the data-safety forms',
      'Fixed bugs found during testing',
    ],
    technologies: ['React Native', 'Expo', 'EAS', 'Android', 'Google Play Console', 'Git', 'GitHub'],
    status: { label: 'Live on Google Play', tone: 'live' },
    // Add the public Play Store link here when you have it:
    // liveUrl: 'https://play.google.com/store/apps/details?id=...',
    // liveLabel: 'View on Google Play',
    sourceNote: 'Source code: private · professional work',
    featured: true,
    visual: 'phone',
    caseStudy: {
      problem:
        'A Kenya-focused mobility app needed to get from a working build to a public Android release, with signed builds, a proper testing process and everything Google Play requires for a store listing.',
      solution:
        'I produced the EAS production builds and signing, set up Google Play Console and its testing tracks, completed the store listing and data-safety forms, and fixed the issues that testing turned up.',
      impact:
        'Songa moved through testing to a live Google Play release. I handled the release process as part of the team.',
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
    id: 'elementpay-payments',
    title: 'ElementPay payment workflows',
    tagline: 'Bank payouts, refunds and transaction validation.',
    category: 'professional',
    kindLabel: 'Production features · FinTech payments',
    description:
      "Built payment workflows for ElementPay's applications, including bank payouts, refund management and transaction validation, and integrated the backend APIs behind them in close collaboration with backend engineers.",
    role: 'Junior developer · frontend features',
    contributions: [
      'Built bank payout workflows',
      'Built refund management',
      'Implemented transaction validation',
      'Integrated backend APIs and worked closely with backend engineers throughout',
      'Tested APIs with Postman and validated backend integrations',
      'Worked in Agile sprints with code reviews and Git-based pull requests',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'Postman', 'Git'],
    status: { label: 'Production feature', tone: 'public' },
    sourceNote: 'Source code: private · company work',
    visual: 'phone',
    caseStudy: {
      problem:
        'A payments product has to move money out reliably, let it be reversed when needed, and check transactions before they go through.',
      solution:
        'I built the bank payout, refund management and transaction validation features, and connected them to the backend APIs while working closely with the backend engineers.',
      impact:
        'These features shipped to production as part of the ElementPay product. I contributed as a junior developer within a team, so I am not reporting company-level numbers.',
    },
  },
  {
    id: 'elementpay-wallets',
    title: 'Multi-chain wallets and liquidity validation',
    tagline: 'Blockchain-enabled wallet features for payments.',
    category: 'professional',
    kindLabel: 'Production features · Blockchain and wallets',
    description:
      'Implemented blockchain-enabled liquidity validation and multi-chain wallet functionality for ElementPay, and improved wallet management and blockchain balance visibility in the payment experience.',
    role: 'Junior developer · frontend features',
    contributions: [
      'Implemented blockchain-enabled liquidity validation to improve payment reliability',
      'Built multi-chain wallet functionality',
      'Improved wallet management and blockchain balance visibility',
      'Improved the payment user experience around wallets',
      'Integrated backend APIs with backend engineers',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Web3', 'Wallet integration', 'REST APIs'],
    status: { label: 'Production feature', tone: 'public' },
    sourceNote: 'Source code: private · company work',
    visual: 'phone',
    caseStudy: {
      problem:
        'Payments that involve blockchains depend on there being enough liquidity, and on users being able to see and manage their balances across chains. Without that, payments can fail and users get confused.',
      solution:
        'I implemented liquidity validation and multi-chain wallet functionality, and improved wallet management and how blockchain balances are shown.',
      impact:
        'The validation was built to improve payment reliability, and wallet balances became easier to see. These features shipped to production.',
    },
  },
  {
    id: 'elementpay-admin',
    title: 'Transaction analytics and admin dashboards',
    tagline: 'Filtering, reporting and monitoring tools for operations.',
    category: 'professional',
    kindLabel: 'Production features · Dashboards and admin',
    description:
      'Built transaction management with advanced filtering, pagination, analytics and reporting, plus responsive admin dashboards for monitoring users, transactions and operational metrics, with role-based access control.',
    role: 'Junior developer · intern, then junior developer',
    contributions: [
      'Advanced filtering and pagination for transaction lists',
      'Analytics and reporting for transactions',
      'Responsive admin dashboards for users, transactions and operational metrics',
      'Role-based access control and administrative functionality',
      'Started on transaction dashboards, analytics and pagination as an intern, under mentorship',
      'Investigated and fixed production bugs and UI issues across mobile and web applications',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'Responsive design', 'Git'],
    status: { label: 'Production feature', tone: 'public' },
    sourceNote: 'Source code: private · company work',
    visual: 'dashboard',
    caseStudy: {
      problem:
        'Teams that run a payments product need to find and review transactions quickly, see how the system is performing, and give each person access only to what they should see.',
      solution:
        'I built filtering, pagination, analytics and reporting for transactions, responsive admin dashboards for monitoring users, transactions and operational metrics, and role-based access control for administrative functions.',
      impact:
        'The team gained dashboards to monitor users, transactions and operational metrics in one place. This work grew from intern tasks into production features, and I contributed as part of a team.',
    },
  },
  {
    id: 'isafari',
    title: 'iSafari',
    tagline: 'React Native travel app, being prepared for Google Play.',
    category: 'professional',
    kindLabel: 'Mobile application · Travel',
    description:
      'Contributed to getting iSafari, a React Native travel app, ready for Google Play: in-app Privacy Policy and Terms screens, signup consent, and the release work around them, including EAS builds, signing, Play Console testing tracks, the store listing and data-safety forms.',
    role: 'Junior developer · Android release preparation',
    contributions: [
      'Produced Android builds with Expo Application Services (EAS) and set up release signing',
      'Set up Google Play Console and the testing tracks',
      'Completed the store listing and the data-safety forms',
      'Built the in-app Privacy Policy and Terms screens',
      'Added the signup consent step',
      'Fixed bugs found during testing',
    ],
    technologies: ['React Native', 'Expo', 'EAS', 'Android', 'Google Play Console', 'Git', 'GitHub'],
    status: { label: 'Play Store preparation', tone: 'prep' },
    sourceNote: 'Source code: private · professional work',
    visual: 'phone',
    caseStudy: {
      problem:
        'The app needed to be ready for Google Play: users had to be able to read the Privacy Policy and Terms in the app and give consent when signing up, and the release itself needed builds, signing, testing tracks and an accurate store listing.',
      solution:
        'I built the in-app Privacy Policy and Terms screens and the signup consent step, produced the EAS builds and signing, set up Play Console and its testing tracks, completed the store listing and data-safety forms, and fixed issues found in testing.',
      impact:
        'These changes moved iSafari toward Google Play distribution. The app is in release preparation, so I am not presenting it as live.',
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
      'Added a light and dark theme with a persisted toggle',
      'Deployed the completed website to Vercel',
    ],
    // Confirmed from the project's package.json
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Responsive design', 'Vercel'],
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
    id: 'nails-by-annie',
    title: 'Nails by Annie',
    tagline: 'Booking and finance app for a mobile nail business.',
    category: 'personal',
    kindLabel: 'Full-stack web application · Booking and finance',
    description:
      'A booking and business-management web app for an independent mobile nail technician in Kenya. Clients request appointments online against live availability; the owner confirms them, records payments made outside the site (M-Pesa, cash, bank transfer), tracks expenses and sees accurate financial summaries.',
    role: 'Developer · product, build and documentation',
    contributions: [
      'Public site with a five-step booking flow that only offers genuinely free times',
      'Owner studio: dashboard, bookings, rescheduling, payments, clients, expenses, reports and service catalogue',
      'Database rules that make double bookings and overpayments impossible, with tests',
      'Money handled in whole cents, with revenue defined as money actually received',
      'Unit tests, database rule tests and a CI pipeline that typechecks, tests and builds on every push',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Zod', 'Vitest', 'Vercel'],
    status: { label: 'Live web project', tone: 'live' },
    liveUrl: 'https://nails-by-annie-app-foundation.vercel.app/',
    liveLabel: 'View live project',
    sourceNote: 'Source code: private · independent project',
    visual: 'platform',
    caseStudy: {
      problem:
        'A one-person mobile nail business ran entirely on WhatsApp, calls and memory. Double bookings were possible, nobody could say quickly who still owed what after deposits and part-payments, and money in and out were never tracked together.',
      solution:
        'A booking site where clients request real free times, and an owner studio where the diary, payments, expenses and reports live in one place. The rules that must never break (no overlapping confirmed bookings, no overpayment) are enforced by the database itself, not only by the screens.',
      impact:
        'One system for the whole business: every request is visible, the diary cannot hold two confirmed bookings at once, and for any date range the owner sees revenue received, expenses, net cash flow and outstanding balances that reconcile.',
      howBuilt:
        'The UI was scaffolded with v0 from written prompts, then reviewed and refactored. The backend, business logic, tests and documentation were built with Claude (Anthropic) from requirements I wrote. The problem, users, business rules and priorities come from running the business.',
      decisions: [
        {
          title: 'The database has the last word',
          detail: 'The app checks first so the owner gets a friendly message; a database constraint and trigger decide last, so bugs and race conditions cannot corrupt bookings or payments.',
        },
        {
          title: 'Revenue means money received',
          detail: 'Unpaid work shows as outstanding instead of counting as income, so the numbers answer "how much did I actually get?".',
        },
        {
          title: 'Money in whole cents, logic in pure functions',
          detail: 'Floating-point drift is avoided by summing integer cents, and finance and scheduling rules sit in small tested functions with no UI or database code in them.',
        },
        {
          title: 'No all-powerful key',
          detail: 'Visitors reach data only through narrow, validated database functions, and owner data sits behind several layers of protection.',
        },
      ],
      limitations: [
        'Payments are recorded manually: no payment gateway and no refund workflow',
        'No SMS or email notifications; the owner contacts clients through WhatsApp',
        'No browser end-to-end tests yet; logic and database rules are tested, the screens are checked by hand',
      ],
    },
  },
  {
    id: 'bahari',
    title: 'Bahari Maritime Academy',
    tagline: 'Learning platform and exam-prep site for Kenyan maritime officers.',
    category: 'personal',
    kindLabel: 'Web application · Maritime education',
    description:
      'A learning management platform for maritime training in Kenya, built around deck and engine officers preparing for their professional exams. It combines a public exam-preparation site with role-based portals for trainees, instructors, assessors and administrators.',
    role: 'Developer · frontend, with the backend in progress',
    contributions: [
      'Public site: study materials by topic, small-group clinics, private sessions and a booking checkout',
      'Trainee portal: dashboard, courses, module player with knowledge checks, and two-tier certificates',
      'Instructor portal: cohort dashboard and a course builder organised by units and lessons',
      'Assessor sign-off queue with competence criteria, and an institution overview for admins',
      'A shared component library and a "nautical chart" visual theme, refined through supervisor review',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    status: { label: 'In development', tone: 'prep' },
    sourceNote: 'Source code: private · in development',
    visual: 'platform',
    caseStudy: {
      problem:
        'Maritime courses combine content that can be taught online with parts that need a physical simulator. Trainees need to study and be assessed online where it is allowed, and institutions need to track progress and sign-off without losing the in-person requirements.',
      solution:
        'A role-based platform: trainees study and are tested online; instructors build courses in units and lessons; assessors sign off the practical competence that cannot be taught online; admins see the institution overview. Certificates are planned in two tiers, so online completion can be upgraded once practical assessment is signed off. A bridge resource management course is the pilot used to design the flow.',
      impact:
        'The frontend for all four roles is built, and supervisors reviewed it and approved the design direction. A quieter second version of the interface was built to compare against a cleaner reference UI. The backend is next, so there are no usage numbers to report yet.',
      howBuilt:
        'The screens currently run on sample data and some actions are simulated (for example payment and certificate download), with the API layer still to be connected. I am building the project end to end, with supervisor guidance on the backend setup.',
      limitations: [
        'Backend, authentication and real data are not connected yet',
        'Certification through the Kenya Maritime Authority is a plan, not something already in place',
      ],
    },
  },
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

/* ------------------------------------------------------------------
   SCREENSHOTS: one table, one naming rule.
   Save a screenshot as public/projects/<project-id>/<file> using the exact
   file name below (replacing the placeholder) and it appears in that
   project's case study automatically. Delete a line to hide a screenshot.
   Use demo data only: never real clients, users, tokens or internal URLs.
------------------------------------------------------------------- */
export const SCREENSHOT_FILES: Record<string, [file: string, label: string][]> = {
  'elementpay-payments': [
    ['01-payment-flow.png', 'A payout or refund screen (test data only)'],
  ],
  'elementpay-wallets': [
    ['01-wallet.png', 'A wallet or balance screen (test data only)'],
  ],
  'elementpay-admin': [
    ['01-dashboard.png', 'Admin dashboard or transaction list (test data only)'],
  ],
  fintrack: [
    ['01-dashboard.png', 'Dashboard with charts and filters'],
  ],
  ecologic: [
    ['01-gameplay.png', 'Food chain gameplay screen'],
  ],
  'task-system': [
    ['01-dashboard.png', 'Productivity dashboard'],
  ],
  songa: [
    ['01-play-store-listing.png', 'The public Google Play listing'],
    ['02-testing-tracks.png', 'Play Console testing tracks (no private details)'],
    ['03-eas-builds.png', 'EAS build list'],
  ],
  isafari: [
    ['01-signup-consent.png', 'Signup with consent checkboxes'],
    ['02-privacy-policy.png', 'In-app Privacy Policy screen'],
    ['03-terms.png', 'In-app Terms screen'],
  ],
  corevoo: [
    ['01-hero-desktop.png', 'Hero section on desktop'],
    ['02-services.png', 'Services section'],
    ['03-process.png', 'Process steps'],
    ['04-dark-mode.png', 'Dark theme'],
    ['05-mobile.png', 'Mobile layout'],
  ],
  daltoma: [
    ['01-investor-dashboard.png', 'Investor dashboard (demo data only)'],
    ['02-onboarding.png', 'Invite-only onboarding'],
    ['03-document-center.png', 'Document center (no real documents)'],
  ],
  'nails-by-annie': [
    ['01-landing.png', 'Home page'],
    ['02-services.png', 'Services'],
    ['03-booking-time.png', 'Booking step 2 with available times'],
    ['04-booking-confirmation.png', 'Request received'],
    ['05-dashboard.png', 'Studio overview with a date range'],
    ['06-appointment-payments.png', 'Appointment with a deposit and balance'],
    ['07-reports.png', 'Reports page'],
    ['08-mobile-booking.png', 'Booking on a phone-width screen'],
  ],
  bahari: [
    ['01-landing.png', 'Public landing page'],
    ['02-trainee-dashboard.png', 'Trainee dashboard'],
    ['03-module-player.png', 'Module player with a knowledge check'],
    ['04-course-builder.png', 'Instructor course builder'],
    ['05-assessor-queue.png', 'Assessor sign-off queue'],
    ['06-admin-overview.png', 'Institution overview'],
  ],
  inakaso: [
    ['01-home.png', 'Home page'],
    ['02-browse.png', 'Browsing products'],
    ['03-outfit.png', 'An AI-generated outfit'],
  ],
};

PROJECTS.forEach((p) => {
  const files = SCREENSHOT_FILES[p.id];
  if (files) {
    p.screenshots = files.map(([file, label]) => ({
      src: `/projects/${p.id}/${file}`,
      alt: `${p.title}: ${label}`,
      caption: label,
    }));
  }
});

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
  { id: 2, title: 'Shipped to Google Play', description: 'Contributed to the Android release of Songa: EAS builds, signing, Play Console testing tracks and store listing. It is now live on Google Play.' },
  { id: 3, title: 'Production FinTech software', description: 'Delivered production features across FinTech, blockchain and mobility platforms, from payment workflows to admin dashboards.' },
  { id: 4, title: 'Client websites and platforms', description: 'Built a live consultancy website and designed AI-powered and investment platforms for clients.' },
  { id: 5, title: 'Team collaboration', description: 'Worked in Agile teams using Git-based workflows, pull requests and peer code reviews.' },
];