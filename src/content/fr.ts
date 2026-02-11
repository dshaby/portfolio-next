import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Developpeur Full Stack',
    location: 'Los Angeles, CA',
    tagline: 'Je construis des produits web rapides, propres et centres sur les personnes.',
    availabilityLabel: 'Ouvert aux opportunites',
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
    headline: 'Systemes fiables. Livraison rapide. UX soignee.',
    subhead:
      'Je conçois et livre des produits de bout en bout avec une execution claire et fiable. De l idee au lancement, je privilegie vitesse, clarte et finition.',
    primaryCta: { label: 'Voir les projets', href: '#projects' },
    secondaryCta: { label: 'Contact', href: '#contact' },
    stats: [
      { label: 'Annees de pratique', value: '5+' },
      { label: 'Projets livres', value: '20+' },
      { label: 'Focus actuel', value: 'Produit + IA' }
    ]
  },
  about: {
    title: 'A propos',
    body: [
      'Je suis Daniel Shaby, developpeur full stack base a Los Angeles.',
      'Je travaille actuellement a distance chez Bynder, ou je livre des experiences produit simples, rapides et fiables.',
      'Ma formation a UC Berkeley est devenue la base de ma rigueur, de ma communication claire et de ma resolution pratique des problemes.',
      'Je me suis passionne pour l informatique grace a des cours de structures de donnees et d algorithmes, puis j ai construit ma carriere autour de produits utiles et bien concus.',
      'Multilingue: anglais, espagnol, portugais et francais.',
    ],
    highlights: [
      {
        title: 'Ingenierie orientee produit',
        description: 'Je commence par le parcours utilisateur puis je construis le systeme qui le soutient.'
      },
      {
        title: 'Livraison full stack',
        description: 'De l experience frontend a la fiabilite backend, je livre de bout en bout.'
      },
      {
        title: 'Performance comme fonctionnalite',
        description: 'Je priorise vitesse, accessibilite et architecture propre.'
      }
    ]
  },
  projects: {
    title: 'Projets selectionnes',
    description: 'Des projets qui montrent ma polyvalence en produit, UX et systemes.',
    items: [
      {
        title: 'Solveur de Problemes de Mathematiques',
        year: '2024',
        description:
          'Prenez une photo d un probleme de mathematiques et obtenez une solution pas a pas avec une UX mobile-first.',
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React']
      },
      {
        title: 'App d Achat Immobilier',
        year: '2024',
        description:
          'Recherche immobiliere en langage naturel avec OpenAI, RapidAPI et Google Places.',
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'Redux', 'Material UI', 'TypeScript']
      },
      {
        title: 'Locations de Maisons',
        year: '2024',
        description:
          'Experience marketplace pour locations, visites et contrats.',
        images: [
          '/images/portfolio/home_rentals/home_rentals_landing.png',
          '/images/portfolio/home_rentals/home_rentals_page_two.png'
        ],
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
      },
      {
        title: 'Blog Python Django',
        year: '2024',
        description: 'Plateforme de blog complete avec commentaires, favoris et hebergement AWS.',
        images: [
          '/images/portfolio/python_django_blog/home.png',
          '/images/portfolio/python_django_blog/article.png'
        ],
        stack: ['Python', 'Django', 'PostgreSQL', 'AWS']
      },
      {
        title: 'App E-commerce',
        year: '2022',
        description:
          'Boutique complete avec authentification, Redux et interface responsive.',
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'Restaurant',
        year: '2021',
        description:
          'Site oriente marque avec carte, menus et experience conviviale.',
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
          'Developpement et optimisation d experiences React 18 pour des utilisateurs enterprise.',
          'Collaboration avec produit et design pour livrer des fonctionnalites a fort impact.'
        ],
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes']
      },
      {
        company: 'Crown Clothing',
        title: 'Software Developer',
        years: '2022',
        highlights: [
          'Livraison de fonctionnalites e-commerce, authentification et flux de donnees.',
          'Amelioration de la conversion grace a des ajustements UX.'
        ],
        stack: ['React', 'Redux', 'Firebase', 'Node.js', 'Sass']
      },
      {
        company: 'BOTE',
        title: 'Cofounder, Dev Team Lead',
        years: '2020 - 2022',
        highlights: [
          'Cofondateur d un produit grand public et pilotage de la livraison full stack.',
          'Ownership du roadmap, execution et validation avec les premiers clients.'
        ],
        stack: ['React', 'JavaScript', 'CSS']
      },
      {
        company: 'myPlaces',
        title: 'Backend Engineer',
        years: '2020',
        highlights: [
          'Construction d APIs pour des fonctionnalites geolocalisees.',
          'Amelioration des performances et de la fiabilite des donnees.'
        ],
        stack: ['Node.js', 'MongoDB', 'Express']
      }
    ]
  },
  skills: {
    title: 'Competences',
    description: 'Une boite a outils pratique, de l MVP a la production.',
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
        name: 'Fondamentaux',
        skills: ['JavaScript', 'HTML', 'CSS', 'System Design', 'Collaboration UX']
      }
    ]
  },
  contact: {
    title: 'Construisons quelque chose que les gens aiment',
    body: 'Si vous cherchez un partenaire fiable pour donner vie a un produit, parlons-en.',
    ctaLabel: 'M ecrire'
  }
};

export default content;
