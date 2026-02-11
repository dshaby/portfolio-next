import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Full Stack Developer',
    location: 'Los Angeles, CA',
    tagline: 'I build clean, fast, human-centered web products that feel effortless to use.',
    availabilityLabel: 'Open to opportunities',
    email: 'daniel.shaby@gmail.com',
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
    profileImage: '/images/myProfile.jpg'
  },
  hero: {
    headline: 'Thoughtful systems. Fast builds. Beautiful UX.',
    subhead:
      'I design and ship end-to-end products with a calm, reliable engineering process. From idea to launch, I focus on speed, clarity, and polish.',
    primaryCta: { label: 'View Work', href: '#projects' },
    secondaryCta: { label: 'Contact', href: '#contact' },
    stats: [
      { label: 'Years building', value: '5+' },
      { label: 'Projects shipped', value: '20+' },
      { label: 'Current focus', value: 'Product + AI' }
    ]
  },
  about: {
    title: 'About',
    body: [
      "I'm Daniel Shaby. I grew up in Los Angeles and studied Economics and Public Health at UC Berkeley.",
      'I fell in love with computer science through courses in data structures and algorithms, then built a career creating products that are both useful and beautifully crafted.',
      'Today I work remotely at Bynder and collaborate with founders and teams to ship software that feels simple, fast, and trustworthy.'
    ],
    highlights: [
      {
        title: 'Product-minded engineering',
        description: 'I focus on the user journey first, then build the system that supports it.'
      },
      {
        title: 'Full-stack delivery',
        description: 'From frontend experience to backend reliability, I ship end-to-end.'
      },
      {
        title: 'Performance as a feature',
        description: 'I prioritize speed, accessibility, and clean architecture.'
      }
    ]
  },
  projects: {
    title: 'Selected Work',
    description: 'A few projects that highlight my range — product, UX, and systems thinking.',
    items: [
      {
        title: 'Math Problem Solver',
        year: '2024',
        description:
          'Capture any math problem and get step-by-step solutions instantly with a clean, mobile-first UX.',
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React']
      },
      {
        title: 'Home Sales App',
        year: '2024',
        description:
          'Natural-language search for real estate with OpenAI, RapidAPI, and Google Places.',
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'Redux', 'Material UI', 'TypeScript']
      },
      {
        title: 'Home Rentals',
        year: '2024',
        description:
          'A marketplace experience for sublet listings, tours, and lease agreements.',
        images: [
          '/images/portfolio/home_rentals/home_rentals_landing.png',
          '/images/portfolio/home_rentals/home_rentals_page_two.png'
        ],
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
      },
      {
        title: 'Python Django Blog',
        year: '2024',
        description: 'A full blog platform with comments, saves, and AWS hosting.',
        images: [
          '/images/portfolio/python_django_blog/home.png',
          '/images/portfolio/python_django_blog/article.png'
        ],
        stack: ['Python', 'Django', 'PostgreSQL', 'AWS']
      },
      {
        title: 'E-Commerce App',
        year: '2022',
        description:
          'A full-featured storefront with authentication, Redux, and responsive UI.',
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'Restaurant',
        year: '2021',
        description:
          'A brand-forward site with maps, menus, and an inviting dining experience.',
        url: 'https://davidchubistro.netlify.app/',
        images: ['/images/portfolio/photography/p1.jpg', '/images/portfolio/photography/p2.jpg'],
        stack: ['HTML', 'CSS', 'JavaScript']
      }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Jan 2023 - Present',
        highlights: [
          'Built and optimized React 18 experiences for enterprise users.',
          'Partnered with product and design to ship high-impact features.'
        ],
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes']
      },
      {
        company: 'Crown Clothing',
        title: 'Software Developer',
        years: '2022',
        highlights: [
          'Shipped e-commerce features, authentication, and data workflows.',
          'Improved conversion rates through UX refinements.'
        ],
        stack: ['React', 'Redux', 'Firebase', 'Node.js', 'Sass']
      },
      {
        company: 'BOTE',
        title: 'Cofounder, Dev Team Lead',
        years: '2020 - 2022',
        highlights: [
          'Co-founded a consumer product and led full-stack delivery.',
          'Owned roadmap, execution, and early customer iterations.'
        ],
        stack: ['React', 'JavaScript', 'CSS']
      },
      {
        company: 'myPlaces',
        title: 'Backend Engineer',
        years: '2020',
        highlights: [
          'Built APIs for location-based features and listings.',
          'Improved performance and data reliability.'
        ],
        stack: ['Node.js', 'MongoDB', 'Express']
      }
    ]
  },
  skills: {
    title: 'Skills',
    description: 'A practical toolkit that scales from early MVPs to production systems.',
    categories: [
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material UI']
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'tRPC']
      },
      {
        name: 'DevOps',
        skills: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
      },
      {
        name: 'Foundations',
        skills: ['JavaScript', 'HTML', 'CSS', 'System Design', 'UX Collaboration']
      }
    ]
  },
  contact: {
    title: 'Let’s build something people love',
    body: 'If you’re looking for a calm, reliable partner to bring a product to life, I’d love to talk.',
    ctaLabel: 'Email me'
  }
};

export default content;
