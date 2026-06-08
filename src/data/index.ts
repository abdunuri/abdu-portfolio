export const siteConfig = {
  name: 'Abdulaziz Nuri',
  displayName: 'Abdulaziz Nuri',
  handle: 'ANBU',
  initials: 'AN',
  title: 'Full-Stack & Automation Developer',
  tagline: 'I build practical software for real-world workflows.',
  subtitle:
    'Software Engineering student at HiLCoE focused on full-stack web apps, automation systems, Telegram bots, and business tools using Next.js, TypeScript, Python, and Playwright.',
  availability: 'Available for internships, freelance & junior roles',
  location: 'Addis Ababa, Ethiopia',
  email: 'abdulaziznuri495@gmail.com',
  bio: "I'm a Software Engineering student at HiLCoE based in Addis Ababa. My work focuses on building practical software that solves real problems — from bakery operations platforms and event discovery tools to Telegram bots and browser automation systems. I enjoy working close to the problem, understanding the workflow, and turning it into clean, usable software. Most of my projects come from real business needs, not tutorial clones.",
  currentlyBuilding: 'Gagari — Bakery Operations Platform',
  links: {
    github: 'https://github.com/abdunuri',
    telegram: 'https://t.me/ANBU_H',
    telegramChannel: 'https://t.me/LazyDevANBU',
    upwork: 'https://www.upwork.com/freelancers/~01f82185cb154c03a9?mp_source=share',
    fiverr: 'https://www.fiverr.com/s/42m0qyR',
    nursadTech: 'https://www.nursad.tech',
  },
}

export const projects = [
  {
    id: 'gagari',
    title: 'Gagari',
    tagline: 'Bakery operations platform for orders, stock, sales, expenses, and owner reporting.',
    description:
      'A full SaaS-style bakery management system currently used in production by Zad Bakery. Handles orders, inventory, staff workflows, daily sales, expenses, cash transfers, and owner dashboards — not a demo project, a real operational system.',
    url: 'https://gagari.app/',
    github: 'https://github.com/abdunuri/GAGARI',
    githubPrivate: true,
    featured: true,
    status: 'Live · In active development',
    statusColor: 'cyan' as const,
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth', 'Tailwind CSS', 'Vitest'],
    highlights: [
      'Used in production by a real bakery',
      'Role-based access for staff, admins & owners',
      'Telegram notifications for key events',
      'Owner reporting dashboard',
      'PWA direction for offline use',
    ],
    category: 'SaaS / Full-Stack',
    size: 'large' as const,
  },
  {
    id: 'techvent',
    title: 'Techvent',
    tagline: 'Event discovery platform with admin review and Telegram-powered event ingestion.',
    description:
      'An event discovery and booking platform focused on tech events in Ethiopia. Features event ingestion, an admin review workflow, and a clean public UI for browsing and submitting events.',
    url: 'https://techvent.nursad.tech/',
    github: null,
    githubPrivate: false,
    featured: true,
    status: 'Live',
    statusColor: 'cyan' as const,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Telegram Bot API'],
    highlights: [
      'Event discovery for tech community',
      'Admin review and approval workflow',
      'Telegram-based content ingestion',
      'Clean public browsing UI',
    ],
    category: 'Full-Stack / Platform',
    size: 'medium' as const,
  },
  {
    id: 'passport-bot',
    title: 'Passport Booking Bot',
    tagline: 'Telegram-powered automation for complex multi-step booking workflows.',
    description:
      'A Telegram bot + Playwright automation system that automates the Ethiopian passport booking process end-to-end — handling user input, form filling, dropdown selections, file uploads, and multi-step navigation.',
    url: null,
    github: null,
    githubPrivate: false,
    featured: true,
    status: 'Completed',
    statusColor: 'violet' as const,
    tech: ['Python', 'Playwright', 'python-telegram-bot', 'Telegram Bot API'],
    highlights: [
      'End-to-end booking automation',
      'Telegram inline navigation UI',
      'File upload & form automation',
      'Multi-step workflow handling',
    ],
    category: 'Automation / Bot',
    size: 'medium' as const,
  },
  {
    id: 'linkedin-bot',
    title: 'LinkedIn Post Automation',
    tagline: 'AI-assisted LinkedIn posting automation controlled through Telegram.',
    description:
      'An automation system for generating and scheduling LinkedIn posts with image support, controlled entirely through a Telegram bot interface with AI-generated content direction.',
    url: null,
    github: null,
    githubPrivate: false,
    featured: false,
    status: 'Completed',
    statusColor: 'violet' as const,
    tech: ['Python', 'Playwright', 'Telegram Bot API', 'OpenAI API'],
    highlights: [
      'Daily post scheduling automation',
      'Image upload handling',
      'Telegram-controlled workflow',
      'Session persistence with Playwright',
    ],
    category: 'Automation',
    size: 'small' as const,
  },
  {
    id: 'nursad-tech',
    title: 'NURSAD TECH',
    tagline: 'Developer brand website for software services, automation, and web development.',
    description:
      'Personal software brand and studio website used to present development services, projects, and software identity. An agency-style presence for freelance and product work.',
    url: 'https://www.nursad.tech',
    github: 'https://github.com/abdunuri/nursad',
    githubPrivate: true,
    featured: false,
    status: 'Live',
    statusColor: 'cyan' as const,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: ['Agency-style brand presence', 'Service and project showcase', 'Deployed on Vercel'],
    category: 'Web / Brand',
    size: 'small' as const,
  },
  {
    id: 'trade-bot',
    title: 'Trade Signal Automation',
    tagline: 'Telegram signal parser and browser automation experiment for trading workflows.',
    description:
      'A browser automation experiment that connects Telegram trade signals to broker actions — parsing signal text, detecting entry times, and executing browser interactions via Playwright.',
    url: null,
    github: null,
    githubPrivate: false,
    featured: false,
    status: 'Experiment',
    statusColor: 'violet' as const,
    tech: ['Python', 'Playwright', 'Telethon', 'pandas', 'APScheduler'],
    highlights: [
      'Telegram signal parsing',
      'Currency pair & direction extraction',
      'Scheduled execution',
      'Broker UI automation',
    ],
    category: 'Automation / Experiment',
    size: 'small' as const,
  },
]

export const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express.js', 'Next.js API Routes', 'Prisma', 'Better Auth', 'REST APIs'],
  automation: ['Python', 'Playwright', 'BeautifulSoup', 'Telegram Bot API', 'Web Scraping', 'Browser Automation'],
  database: ['PostgreSQL', 'SQLite', 'SQL', 'Prisma Studio'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Linux/WSL', 'Vitest', 'ESLint'],
}

export const whatIBuild = [
  {
    icon: '⬡',
    title: 'Full-Stack Web Apps',
    description: 'End-to-end products with Next.js, TypeScript, Prisma, and PostgreSQL. From auth to dashboard.',
  },
  {
    icon: '⚙',
    title: 'Automation Systems',
    description: 'Playwright-powered browser automation, form filling, scheduled workflows, and data extraction.',
  },
  {
    icon: '✦',
    title: 'Telegram Bots',
    description: 'Multi-step inline bots for user input, notifications, admin workflows, and automation triggers.',
  },
  {
    icon: '▦',
    title: 'Dashboards & Admin Panels',
    description: 'Role-based dashboards with real-time data, reporting views, and operational controls.',
  },
  {
    icon: '◈',
    title: 'Web Scraping & Data Extraction',
    description: 'Structured data collection from complex sites, with CSV/Excel export and scheduling.',
  },
  {
    icon: '◎',
    title: 'Business Workflow Tools',
    description: 'Software that replaces manual operations — orders, inventory, bookings, and reporting.',
  },
]

export const experience = [
  {
    role: 'Freelance Automation & Full-Stack Developer',
    company: 'Upwork / Independent',
    period: '2024 – Present',
    type: 'Freelance',
    points: [
      '100% Job Success Score with 5-star rating on Upwork',
      'Built automation scripts, scraping tools, and Telegram bots for real clients',
      'Delivered Playwright-based booking automation, order systems, and data extraction workflows',
      'Solved messy real-world problems, not just demo projects',
    ],
  },
  {
    role: 'Founder & Developer',
    company: 'NURSAD TECH',
    period: '2025 – Present',
    type: 'Builder',
    points: [
      'Building software products and web systems under the NURSAD TECH brand',
      'Developed and deployed live projects: Gagari, Techvent, nursad.tech',
      'Full ownership of product design, development, and deployment',
      'Using the brand to present freelance services and SaaS-direction products',
    ],
  },
  {
    role: 'BSc Software Engineering',
    company: 'HiLCoE School of Computer Science & Technology',
    period: '2025 – Expected 2028',
    type: 'Education',
    points: [
      'Transferred to HiLCoE in 2025 as a second-year student',
      '4.0 GPA in first semester at HiLCoE',
      'Active in student council and campus tech community',
      'Building real products alongside academic study',
    ],
  },
]

export const certifications = [
  { name: "CS50's Introduction to Programming with Python", issuer: 'Harvard / edX' },
  { name: 'Python Basics Certificate', issuer: 'UniAthena' },
  { name: 'HTML, CSS & JavaScript', issuer: 'Scrimba' },
  { name: 'Node.js and Express.js', issuer: 'Scrimba' },
]
