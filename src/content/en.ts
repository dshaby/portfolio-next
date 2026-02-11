import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Full Stack Software Engineer',
    location: 'Los Angeles, CA',
    tagline: 'I build type-safe, high-performance web products with strong UX and reliable cloud architecture.',
    availabilityLabel: 'Open to opportunities',
    email: 'dshaby@berkeley.edu',
    resumeUrl: '/Daniel_Shaby_Resume.pdf',
    social: [
      {
        name: 'GitHub',
        label: 'github.com/dshaby',
        url: 'https://github.com/dshaby'
      },
      {
        name: 'LinkedIn',
        label: 'linkedin.com/in/danielshaby',
        url: 'https://www.linkedin.com/in/danielshaby'
      }
    ],
    avatarImage: '/images/github-avatar.png',
    profileImage: '/images/myProfile.jpg'
  },
  hero: {
    headline: 'I build full-stack product and AI systems that ship fast and scale reliably.',
    subhead:
      'I build and ship end-to-end products with measurable outcomes: speed, reliability, and conversion.',
    primaryCta: { label: 'View Work', href: '#projects' },
    secondaryCta: { label: 'Contact', href: '#contact' },
    tertiaryCta: { label: 'Resume', href: '/Daniel_Shaby_Resume.pdf' },
    stats: [
      { label: 'Years building projects', value: '5+' },
      { label: 'Professional experience', value: '4+' },
      { label: 'Current focus', value: 'Product + AI Systems' }
    ]
  },
  about: {
    title: 'About',
    body: [
      "I'm Daniel Shaby, a full stack software engineer based in Los Angeles.",
      'I fell in love with software through data structures and algorithms, then built a career shipping products that are both useful and well-crafted.',
      'I currently lead full-stack modernization work at TS Industrial, focused on serverless microservices, type-safe contracts, and production-grade CI/CD.',
      'My UC Berkeley training in Economics and Public Health shaped how I approach complex systems: structured thinking, clear communication, and practical execution.',
      'I enjoy taking ambiguous product problems and turning them into fast, maintainable user experiences with measurable business impact.',
      'Multilingual: English, Spanish, Portuguese, French.'
    ],
    highlights: [
      {
        title: 'Product-minded engineering',
        description: 'I prioritize user and business outcomes, then design systems to support scale.'
      },
      {
        title: 'Full-stack delivery',
        description: 'From frontend UX to backend reliability and deployment pipelines.'
      },
      {
        title: 'Performance + quality',
        description: 'Type-safe contracts, testing, observability, and maintainable architecture.'
      }
    ]
  },
  projects: {
    title: 'Selected Work',
    description: 'Projects and launches that show product execution, technical depth, and real-world impact.',
    items: [
      {
        title: 'TS Industrial Platform Modernization',
        year: '2025',
        description:
          'Leading migration of a legacy industrial e-commerce platform to a cloud-native architecture with Next.js 15 and AWS serverless services.',
        outcomes: [
          'Standardized API patterns across products, users, and orders microservices.',
          'Implemented multi-environment CI/CD (dev, test, UAT, prod) with AWS CodePipeline and CodeBuild.',
          'Improved maintainability and release confidence through shared type-safe contracts.'
        ],
        url: 'https://d1dgd5bt142kl1.cloudfront.net/',
        images: [
          '/images/portfolio/ts_industrial/tsi_product_listings_v2.png',
          '/images/portfolio/ts_industrial/tsi_platform_v2.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'AWS Lambda', 'Serverless v4', 'DynamoDB', 'AWS CDK']
      },
      {
        title: 'Homekey MVP Launch',
        year: '2025',
        description:
          'Shipped Homekey from zero code to production in one month with a 6-person team and AI-powered user workflows.',
        outcomes: [
          'Launched MVP and enabled 30+ active users to buy and sell homes.',
          'Built onboarding and scheduling flows that converted 20 waitlisted users to active testers.',
          'Mentored engineers on scalable React, TypeScript, and backend patterns.'
        ],
        url: 'https://www.homekey.casa/',
        images: [
          '/images/portfolio/homekey/homekey_mvp_launch_v2.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS S3', 'Clerk']
      },
      {
        title: 'AI Math Problem Solver',
        year: '2024',
        description:
          'Built a mobile-first AI math solver that combines Wolfram Alpha API + OpenAI APIs for accurate, step-by-step solutions.',
        outcomes: [
          'Orchestrated symbolic reasoning from Wolfram Alpha with LLM explanation quality from OpenAI.',
          'Designed end-to-end flow from camera capture to parsed, human-readable solution output.',
          'Deployed production-ready app on Vercel with fast rendering and polished UX.'
        ],
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React', 'Wolfram Alpha API', 'OpenAI APIs']
      },
      {
        title: 'E-Commerce App',
        year: '2022',
        description:
          'Built a full-featured storefront with authentication, catalog browsing, and a responsive purchasing flow.',
        outcomes: [
          'Implemented account auth and cart workflows with predictable client-side state.',
          'Built responsive catalog and product pages optimized for conversion.',
          'Shipped an end-to-end commerce experience with reusable UI components.'
        ],
        url: 'https://sourcedfashion.netlify.app/',
        images: [
          '/images/portfolio/animal-shelter/p1.jpg',
          '/images/portfolio/animal-shelter/p2.jpg'
        ],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'Real Estate Search App',
        year: '2024',
        description:
          'Implemented a natural-language home search app that combines OpenAI APIs, RapidAPI listing feeds, and Google Places.',
        outcomes: [
          'Enabled intent-based property discovery with non-traditional filters and chat-style search.',
          'Integrated external listing data and location autocomplete for richer, more relevant results.',
          'Built scalable global state and predictable data fetching with production-style API boundaries.'
        ],
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'RTK Query', 'Material UI', 'OpenAI APIs', 'RapidAPI', 'Google Places API']
      },
      {
        title: 'Restaurant',
        year: '2021',
        description:
          'Created a brand-forward restaurant website with location awareness, menu navigation, and responsive design.',
        outcomes: [
          'Delivered a polished visual identity tailored to local business goals.',
          'Integrated map-driven location context for easier customer discovery.',
          'Optimized layout and content hierarchy for mobile-first browsing.'
        ],
        url: 'https://davidchubistro.netlify.app/',
        images: [
          '/images/portfolio/photography/p1.jpg',
          '/images/portfolio/photography/p2.jpg'
        ],
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: "Daniel's Blog (Django)",
        year: '2024',
        description:
          'Built full-stack blogging platform with authentication, media uploads, and admin publishing workflow.',
        outcomes: [
          'Implemented secure user auth and content ownership flows.',
          'Integrated media upload pipeline with AWS S3.',
          'Deployed on AWS infrastructure for reliable delivery.'
        ],
        images: [
          '/images/portfolio/python_django_blog/home.png',
          '/images/portfolio/python_django_blog/article.png'
        ],
        stack: ['Python', 'Django', 'PostgreSQL', 'AWS S3', 'Elastic Beanstalk']
      },
      {
        title: "Daniel's Home Rentals",
        year: '2024',
        description:
          'Built a rental marketplace experience for listing discovery, landlord calls, and digital lease workflows.',
        outcomes: [
          'Designed a conversion-focused listing and inquiry journey.',
          'Implemented responsive UI patterns for mobile and desktop.',
          'Shipped a practical product used in a real client engagement.'
        ],
        images: [
          '/images/portfolio/home_rentals/home_rentals_landing.png',
          '/images/portfolio/home_rentals/home_rentals_page_two.png'
        ],
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
      }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'TS Industrial LLC',
        title: 'Full Stack Engineer',
        years: 'Mar 2025 - Present',
        highlights: [
          'Spearheading migration of a legacy e-commerce platform to TypeScript serverless microservices on AWS.',
          'Built Next.js 15 App Router frontend and standardized backend service contracts across domains.',
          'Defined infrastructure and deployment workflows using AWS CDK, Serverless v4, CodePipeline, and CodeBuild.'
        ],
        stack: ['Next.js 15', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'AWS CDK']
      },
      {
        company: 'Homekey',
        title: 'Founding Full Stack Engineer',
        years: 'Jan 2025 - Feb 2025',
        highlights: [
          'Launched MVP from scratch in one month and enabled 30+ active users.',
          'Mentored engineers and set technical patterns for frontend and backend quality.',
          'Built onboarding, scheduling, and AI-assisted workflows to accelerate early product traction.'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS', 'Clerk']
      },
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Jan 2023 - Feb 2024',
        highlights: [
          'Built micro-frontend tooling for enterprise-scale asset migration workflows.',
          'Modernized legacy image tooling from jQuery/ColdFusion to React.',
          'Improved performance with skeleton loaders and caching strategies, reducing perceived load time.'
        ],
        stack: ['React', 'TypeScript', 'Next.js', 'Docker', 'Kubernetes', 'Jest']
      },
      {
        company: 'Crown Clothing',
        title: 'Full Stack Software Engineer',
        years: 'Mar 2022 - Dec 2022',
        highlights: [
          'Redesigned checkout and React UI, increasing online sales by 15 percent.',
          'Improved Lighthouse performance from 77 to 93 through asset optimization and lazy loading.',
          'Integrated GraphQL and improved API reliability for high-traffic flows.'
        ],
        stack: ['React', 'Redux', 'Node.js', 'GraphQL', 'Sass', 'Firebase']
      },
      {
        company: 'BOTE',
        title: 'Cofounder and Product Team Lead',
        years: 'Apr 2020 - Feb 2022',
        highlights: [
          'Led cross-functional team of 8+ contributors to deliver MVP.',
          'Built core product flows with React, Node.js, and Stripe.',
          'Scaled early growth to 10K monthly views and 600 monthly users.'
        ],
        stack: ['React', 'Node.js', 'Stripe', 'Bootstrap', 'Product Leadership']
      }
    ]
  },
  skills: {
    title: 'Skills',
    description: 'A modern full-stack toolkit for shipping reliable products from MVP to scale.',
    categories: [
      {
        name: 'Frontend',
        skills: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux Toolkit Query']
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'REST APIs', 'GraphQL']
      },
      {
        name: 'Cloud and DevOps',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'AWS CDK', 'Serverless v4', 'Docker', 'Kubernetes', 'CodePipeline', 'CodeBuild', 'GitHub Actions']
      },
      {
        name: 'Foundations',
        skills: ['System Design', 'Type-safe Contracts', 'Testing', 'Performance Optimization', 'UX Collaboration']
      }
    ]
  },
  contact: {
    title: 'Let us build something people actually use',
    body: 'If you need an engineer who can move from product strategy to production delivery, I would be glad to connect.',
    ctaLabel: 'Email me'
  }
};

export default content;
