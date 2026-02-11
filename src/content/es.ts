import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Desarrollador Full Stack',
    location: 'Los Ángeles, CA',
    tagline: 'Construyo productos web rápidos, claros y centrados en las personas.',
    availabilityLabel: 'Abierto a oportunidades',
    email: 'dshaby@berkeley.edu',
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
    headline: 'Sistemas con intención. Entregas rápidas. UX elegante.',
    subhead:
      'Diseño y entrego productos de principio a fin con un proceso confiable. Del concepto al lanzamiento, priorizo velocidad, claridad y detalle.',
    primaryCta: { label: 'Ver trabajo', href: '#projects' },
    secondaryCta: { label: 'Contactar', href: '#contact' },
    stats: [
      { label: 'Años construyendo', value: '5+' },
      { label: 'Proyectos lanzados', value: '20+' },
      { label: 'Enfoque actual', value: 'Producto + IA' }
    ]
  },
  about: {
    title: 'Sobre mí',
    body: [
      'Soy Daniel Shaby, desarrollador full stack basado en Los Ángeles.',
      'Actualmente trabajo de forma remota en Bynder, creando experiencias de producto simples, rápidas y confiables.',
      'Mi formación en UC Berkeley es la base de mi enfoque: pensamiento disciplinado, comunicación clara y resolución práctica de problemas.',
      'Me apasioné por la informática a través de cursos de estructuras de datos y algoritmos, y luego construí una carrera creando productos útiles y bien diseñados.',
      'Multilingüe: inglés, español, portugués y francés.'
    ],
    highlights: [
      {
        title: 'Ingeniería con mentalidad de producto',
        description: 'Primero pienso en el recorrido del usuario; luego diseño el sistema.'
      },
      {
        title: 'Entrega full stack',
        description: 'Del frontend a la confiabilidad del backend, lo llevo de principio a fin.'
      },
      {
        title: 'Rendimiento como parte del producto',
        description: 'Prioridad en velocidad, accesibilidad y arquitectura limpia.'
      }
    ]
  },
  projects: {
    title: 'Trabajo seleccionado',
    description: 'Proyectos que muestran mi rango en producto, UX y sistemas.',
    items: [
      {
        title: 'Solucionador de Matemáticas',
        year: '2024',
        description:
          'Captura un problema matemático y recibe soluciones paso a paso con una UX limpia y mobile-first.',
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React']
      },
      {
        title: 'App de Compras de Casas',
        year: '2024',
        description:
          'Búsqueda en lenguaje natural para bienes raíces con OpenAI, RapidAPI y Google Places.',
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'Redux', 'Material UI', 'TypeScript']
      },
      {
        title: 'Alquiler de Casas',
        year: '2024',
        description:
          'Experiencia de mercado para subarriendos, visitas y contratos digitales.',
        images: [
          '/images/portfolio/home_rentals/home_rentals_landing.png',
          '/images/portfolio/home_rentals/home_rentals_page_two.png'
        ],
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
      },
      {
        title: 'Blog con Django',
        year: '2024',
        description: 'Plataforma completa de blog con comentarios, guardados y AWS.',
        images: [
          '/images/portfolio/python_django_blog/home.png',
          '/images/portfolio/python_django_blog/article.png'
        ],
        stack: ['Python', 'Django', 'PostgreSQL', 'AWS']
      },
      {
        title: 'App E-Commerce',
        year: '2022',
        description:
          'Tienda con autenticación, Redux y una interfaz responsiva.',
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'Restaurante',
        year: '2021',
        description:
          'Sitio con personalidad de marca, mapas y una experiencia cálida.',
        url: 'https://davidchubistro.netlify.app/',
        images: ['/images/portfolio/photography/p1.jpg', '/images/portfolio/photography/p2.jpg'],
        stack: ['HTML', 'CSS', 'JavaScript']
      }
    ]
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Enero 2023 - Presente',
        highlights: [
          'Construí experiencias React 18 optimizadas para usuarios empresariales.',
          'Colaboré con producto y diseño para lanzar funcionalidades clave.'
        ],
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes']
      },
      {
        company: 'Crown Clothing',
        title: 'Software Developer',
        years: '2022',
        highlights: [
          'Entregué features de e-commerce, autenticación y flujos de datos.',
          'Mejoré conversiones con ajustes de UX.'
        ],
        stack: ['React', 'Redux', 'Firebase', 'Node.js', 'Sass']
      },
      {
        company: 'BOTE',
        title: 'Cofundador, Dev Team Lead',
        years: '2020 - 2022',
        highlights: [
          'Cofundé un producto de consumo y lideré la entrega full stack.',
          'Definí la hoja de ruta y validé con clientes tempranos.'
        ],
        stack: ['React', 'JavaScript', 'CSS']
      },
      {
        company: 'myPlaces',
        title: 'Backend Engineer',
        years: '2020',
        highlights: [
          'Construí APIs para funcionalidades basadas en ubicación.',
          'Mejoré rendimiento y confiabilidad de datos.'
        ],
        stack: ['Node.js', 'MongoDB', 'Express']
      }
    ]
  },
  skills: {
    title: 'Habilidades',
    description: 'Un kit práctico que escala desde MVPs hasta producción.',
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
        name: 'Fundamentos',
        skills: ['JavaScript', 'HTML', 'CSS', 'System Design', 'Colaboración UX']
      }
    ]
  },
  contact: {
    title: 'Construyamos algo que la gente disfrute',
    body: 'Si buscas un partner confiable para dar vida a un producto, me encantaría conversar.',
    ctaLabel: 'Escríbeme'
  }
};

export default content;
