import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Ingeniero de Software Full Stack',
    location: 'Los Angeles, CA',
    tagline: 'Construyo productos web de alto rendimiento, con tipado seguro y una experiencia de usuario clara.',
    availabilityLabel: 'Abierto a oportunidades',
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
    headline: 'Sistemas modernos full stack. Ejecucion de producto real.',
    subhead:
      'Diseno y lanzo productos end-to-end con Next.js, TypeScript, Node.js y AWS. Me enfoco en resultados: velocidad, confiabilidad y conversion.',
    primaryCta: { label: 'Ver trabajo', href: '#projects' },
    secondaryCta: { label: 'Contacto', href: '#contact' },
    stats: [
      { label: 'Anos construyendo', value: '4+' },
      { label: 'Proyectos lanzados', value: '20+' },
      { label: 'Enfoque actual', value: 'Producto + Sistemas de IA' }
    ]
  },
  about: {
    title: 'Sobre mi',
    body: [
      'Soy Daniel Shaby, ingeniero de software full stack basado en Los Angeles.',
      'Actualmente lidero modernizacion full stack en TS Industrial, centrada en microservicios serverless, contratos tipados y CI/CD de nivel produccion.',
      'Mi formacion en UC Berkeley (Economia y Salud Publica) define mi forma de trabajar: pensamiento estructurado, comunicacion clara y ejecucion practica.',
      'Disfruto convertir problemas ambiguos de producto en experiencias rapidas, mantenibles y con impacto medible.',
      'Multilingue: ingles, espanol, portugues y frances.'
    ],
    highlights: [
      {
        title: 'Ingenieria orientada a producto',
        description: 'Primero priorizo resultados de usuario y negocio, luego diseno el sistema.'
      },
      {
        title: 'Entrega full stack',
        description: 'Desde UX en frontend hasta backend confiable y pipelines de despliegue.'
      },
      {
        title: 'Rendimiento y calidad',
        description: 'Contratos tipados, testing, observabilidad y arquitectura mantenible.'
      }
    ]
  },
  projects: {
    title: 'Trabajo seleccionado',
    description: 'Proyectos que demuestran ejecucion de producto, profundidad tecnica e impacto real.',
    items: [
      {
        title: 'Modernizacion de Plataforma TS Industrial',
        year: '2025',
        description:
          'Liderando migracion de una plataforma e-commerce legacy hacia una arquitectura cloud-native con Next.js 15 y servicios serverless de AWS.',
        outcomes: [
          'Estandarizacion de patrones API entre microservicios de productos, usuarios y ordenes.',
          'Implementacion de CI/CD multi-entorno (dev, test, UAT, prod) con CodePipeline y CodeBuild.',
          'Mayor mantenibilidad y confianza de releases con contratos compartidos tipados.'
        ],
        url: 'https://d1dgd5bt142kl1.cloudfront.net/',
        images: [
          '/images/portfolio/ts_industrial/tsi_product_listings_v2.png',
          '/images/portfolio/ts_industrial/tsi_platform_v2.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'AWS Lambda', 'Serverless v4', 'DynamoDB', 'AWS CDK']
      },
      {
        title: 'Lanzamiento MVP Homekey',
        year: '2025',
        description:
          'Lance Homekey desde cero hasta produccion en un mes con un equipo de 6 personas y flujos asistidos por IA.',
        outcomes: [
          'MVP lanzado y 30+ usuarios activos comprando y vendiendo casas.',
          'Onboarding y scheduling que convirtieron 20 usuarios en lista de espera a testers activos.',
          'Mentoria tecnica en React, TypeScript y arquitectura backend escalable.'
        ],
        url: 'https://www.homekey.casa/',
        images: [
          '/images/portfolio/homekey/homekey_mvp_launch_v2.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS S3', 'Clerk']
      },
      {
        title: 'Solucionador de Matematicas con IA',
        year: '2024',
        description:
          'Desarrolle un solucionador matematico mobile-first que combina la API de Wolfram Alpha + APIs de OpenAI para respuestas precisas paso a paso.',
        outcomes: [
          'Orqueste razonamiento simbolico de Wolfram Alpha con explicaciones generadas por OpenAI.',
          'Disene un flujo completo desde captura de camara hasta resultado estructurado y entendible.',
          'Despliegue en Vercel con rendering rapido y experiencia visual cuidada.'
        ],
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React', 'Wolfram Alpha API', 'OpenAI APIs']
      },
      {
        title: 'App E-Commerce',
        year: '2022',
        description:
          'Construi una tienda full-featured con autenticacion, catalogo de productos y flujo de compra responsive.',
        outcomes: [
          'Implemente autenticacion y carrito con estado de cliente consistente.',
          'Desarrolle catalogo y paginas de producto responsive orientadas a conversion.',
          'Entregue una experiencia de e-commerce completa con componentes reutilizables.'
        ],
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'App de Busqueda Inmobiliaria',
        year: '2024',
        description:
          'Implemente una app de busqueda inmobiliaria en lenguaje natural combinando APIs de OpenAI, feeds de RapidAPI y Google Places.',
        outcomes: [
          'Habilite descubrimiento por intencion con filtros no tradicionales y experiencia tipo chat.',
          'Integre datos externos de listings y autocomplete geografico para resultados mas relevantes.',
          'Construi estado global y fetching predecible con limites de API listos para produccion.'
        ],
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'RTK Query', 'Material UI', 'OpenAI APIs', 'RapidAPI', 'Google Places API']
      },
      {
        title: 'Restaurante',
        year: '2021',
        description:
          'Cree un sitio web de restaurante con identidad de marca, navegacion de menu y diseno responsive.',
        outcomes: [
          'Entregue una identidad visual alineada a objetivos del negocio local.',
          'Integre contexto de ubicacion para facilitar descubrimiento de clientes.',
          'Optimice estructura de contenido para navegacion mobile-first.'
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
          'Plataforma full stack de blog con autenticacion, carga de medios y flujo de publicacion administrativo.',
        outcomes: [
          'Autenticacion segura y ownership de contenido.',
          'Pipeline de carga de medios con AWS S3.',
          'Deploy sobre infraestructura AWS para entrega confiable.'
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
          'Desarrolle una experiencia de marketplace de alquiler para busqueda de propiedades, llamadas con propietarios y flujos de contrato digital.',
        outcomes: [
          'Disene un recorrido de listados e intencion de contacto orientado a conversion.',
          'Implemente UI responsive para escritorio y mobile.',
          'Lance un producto util en un proyecto real para cliente.'
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
    title: 'Experiencia',
    items: [
      {
        company: 'TS Industrial LLC',
        title: 'Full Stack Engineer',
        years: 'Mar 2025 - Presente',
        highlights: [
          'Lidero migracion de una plataforma e-commerce legacy a microservicios serverless en AWS.',
          'Construccion de frontend con Next.js 15 App Router y contratos backend tipados compartidos.',
          'Definicion de infraestructura y despliegues con AWS CDK, Serverless v4, CodePipeline y CodeBuild.'
        ],
        stack: ['Next.js 15', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'AWS CDK']
      },
      {
        company: 'Homekey',
        title: 'Founding Full Stack Engineer',
        years: 'Jan 2025 - Feb 2025',
        highlights: [
          'Lance un MVP desde cero en un mes con 30+ usuarios activos.',
          'Mentoria tecnica del equipo y definicion de patrones de calidad.',
          'Desarrollo de onboarding, scheduling y flujos con IA para acelerar traccion.'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS', 'Clerk']
      },
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Jan 2023 - Feb 2024',
        highlights: [
          'Desarrolle tooling de micro-frontends para flujos enterprise de migracion de assets.',
          'Modernice herramientas legacy de imagen de jQuery/ColdFusion a React.',
          'Mejore performance percibida con skeleton loaders y estrategias de cache.'
        ],
        stack: ['React', 'TypeScript', 'Next.js', 'Docker', 'Kubernetes', 'Jest']
      },
      {
        company: 'Crown Clothing',
        title: 'Full Stack Software Engineer',
        years: 'Mar 2022 - Dec 2022',
        highlights: [
          'Rediseno de checkout y UI React con incremento de ventas online del 15 por ciento.',
          'Mejora de Lighthouse de 77 a 93 con optimizacion de assets y lazy loading.',
          'Integracion GraphQL y mayor confiabilidad en endpoints de alto trafico.'
        ],
        stack: ['React', 'Redux', 'Node.js', 'GraphQL', 'Sass', 'Firebase']
      },
      {
        company: 'BOTE',
        title: 'Cofundador y Product Team Lead',
        years: 'Apr 2020 - Feb 2022',
        highlights: [
          'Lidere equipo multifuncional de 8+ personas para entregar MVP.',
          'Construccion de flujos core con React, Node.js y Stripe.',
          'Escalamiento inicial a 10K vistas mensuales y 600 usuarios mensuales.'
        ],
        stack: ['React', 'Node.js', 'Stripe', 'Bootstrap', 'Product Leadership']
      }
    ]
  },
  skills: {
    title: 'Habilidades',
    description: 'Stack full stack moderno para llevar productos de MVP a escala.',
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
        name: 'Cloud y DevOps',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'AWS CDK', 'Serverless v4', 'Docker', 'Kubernetes', 'CodePipeline', 'CodeBuild', 'GitHub Actions']
      },
      {
        name: 'Fundamentos',
        skills: ['System Design', 'Contratos tipados', 'Testing', 'Optimizacion de performance', 'Colaboracion UX']
      }
    ]
  },
  contact: {
    title: 'Construyamos algo que la gente use de verdad',
    body: 'Si buscas un ingeniero que pueda ir de estrategia de producto a entrega en produccion, conversemos.',
    ctaLabel: 'Escribeme'
  }
};

export default content;
