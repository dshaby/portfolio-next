import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Ingenieur Logiciel Full Stack',
    location: 'Los Angeles, CA',
    tagline: 'Je construis des produits web performants, type-safe et centres sur une UX claire.',
    availabilityLabel: 'Ouvert aux opportunites',
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
    headline: 'Systemes full stack produit et IA, concus pour etre livres vite et passer a l echelle de facon fiable.',
    subhead:
      'Je conçois et livre des produits de bout en bout avec des resultats mesurables: vitesse, fiabilite et conversion.',
    primaryCta: { label: 'Voir les projets', href: '#projects' },
    secondaryCta: { label: 'Contact', href: '#contact' },
    tertiaryCta: { label: 'CV', href: '/Daniel_Shaby_Resume.pdf' },
    stats: [
      { label: 'Annees a creer des projets', value: '5+' },
      { label: 'Experience professionnelle', value: '4+' },
      { label: 'Focus actuel', value: 'Produit + Systemes IA' }
    ]
  },
  about: {
    title: 'A propos',
    body: [
      'Je suis Daniel Shaby, ingenieur logiciel full stack base a Los Angeles.',
      'Je construis des systemes de niveau production qui equilibrent une experience frontend soignee avec une architecture backend scalable.',
      'Chez TS Industrial, je mene la modernisation d une plateforme e-commerce de 9M+ SKU vers des microservices serverless bases sur TypeScript sur AWS, avec un frontend Next.js 15 et des pipelines CI/CD multi-environnement.',
      'Avant cela, comme Founding Engineer chez HomeKey, j ai lance un MVP 0->1 en 30 jours et fait evoluer la recherche IA d un prototype base sur des prompts vers un systeme scalable en couches avec filtrage structure et ranking semantique. Mon focus est de livrer vite sans creer de dette architecturale a long terme.',
      'J ai double-majore en economie et sante publique a UC Berkeley, ou des cours de CS ont lance mon parcours en ingenierie logicielle. Cette formation a faconne ma facon de penser en systemes et d equilibrer tradeoffs, contraintes et impact reel dans les decisions d ingenierie.',
      'J aime transformer des problemes produit ambigus en systemes propres, maintenables et a impact business mesurable.',
      'Multilingue: anglais, espagnol, portugais et francais.'
    ],
    highlights: [
      {
        title: 'Ingenierie orientee produit',
        description: 'Je priorise les resultats utilisateur et business avant le choix de l architecture.'
      },
      {
        title: 'Livraison full stack',
        description: 'De l UX frontend a la fiabilite backend et aux pipelines de deploiement.'
      },
      {
        title: 'Performance et qualite',
        description: 'Contrats types, tests, observabilite et architecture maintenable.'
      }
    ]
  },
  projects: {
    title: 'Projets selectionnes',
    description: 'Des projets qui montrent execution produit, profondeur technique et impact reel.',
    items: [
      {
        title: 'Modernisation de la Plateforme TS Industrial',
        year: '2025',
        description:
          'Je pilote la migration d un stack legacy React + serverless monolithique vers une plateforme moderne Next.js 15 avec microservices AWS et contrats partages.',
        outcomes: [
          'Mise en place d une architecture frontend moderne avec Next.js App Router et cible de deploiement OpenNext.',
          'Standardisation de contrats API type-safe entre les domaines produits, utilisateurs et commandes.',
          'Implementation d un CI/CD multi-environnement (dev, test, UAT, prod) avec CodePipeline et CodeBuild pour des releases plus fiables.'
        ],
        url: 'https://d1dgd5bt142kl1.cloudfront.net/',
        images: [
          '/images/portfolio/ts_industrial/tsi_product_listings_v2.png',
          '/images/portfolio/ts_industrial/tsi_platform_v2.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'AWS Lambda', 'Serverless v4', 'DynamoDB', 'AWS CDK']
      },
      {
        title: 'Lancement MVP Homekey',
        year: '2025',
        description:
          'Lancement de Homekey de zero a production en un mois avec une equipe de 6 personnes et des parcours assistes par IA.',
        outcomes: [
          'MVP en production avec 30+ utilisateurs actifs achetant et vendant des biens.',
          'Onboarding et planification ayant converti 20 utilisateurs en file d attente vers des testeurs actifs.',
          'Mentorat technique en React, TypeScript et architecture backend evolutive.'
        ],
        url: 'https://www.homekey.casa/',
        images: [
          '/images/portfolio/homekey/homekey_mvp_launch_v2.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS S3', 'Clerk']
      },
      {
        title: 'Site Marketing SOS Standing Ovation',
        year: '2025',
        description:
          'Concu et lance sur Next.js pour des services AV, avec un focus conversion, performance et SEO local.',
        outcomes: [
          'Mise en place des metadata par page avec App Router pour renforcer la visibilite organique locale.',
          'Developpement d une galerie complexe par sections avec highlights selectionnes et lightbox fluide.',
          'Livraison d un flux de contact avec anti-spam et stockage des leads via Supabase.'
        ],
        url: 'https://laproav.com',
        images: [
          '/images/portfolio/sos/sos_laproav_hero_v1.png',
          '/images/portfolio/sos/sos_laproav_hero_alt_v1.jpg'
        ],
        stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'SEO Metadata', 'Supabase']
      },
      {
        title: 'Solveur IA de Mathematiques',
        year: '2024',
        description:
          'Developpement d un solveur mathematique par photo sur Next.js 15, capable de transformer des problemes manuscrits en explications verifiees pas a pas.',
        outcomes: [
          'Mise en place d un pipeline OCR -> verification de calcul via Wolfram|Alpha -> explication IA, avec signaux de precision explicites.',
          'Livraison d un parcours upload camera + carrousel d exemples avec UX mobile-first fluide.',
          'Rendu mathematique clair avec KaTeX/Markdown pour un apprentissage pas a pas.'
        ],
        url: 'https://math-photo-solver.vercel.app',
        images: [
          '/images/portfolio/math_made_easy/math_solver_pipeline_v2.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'tRPC', 'React Query', 'Tailwind CSS', 'KaTeX', 'Wolfram|Alpha API', 'OpenAI API']
      },
      {
        title: 'Application de Recherche Immobiliere',
        year: '2024',
        description:
          'Implementation d une app de recherche immobiliere en langage naturel combinant APIs OpenAI, feeds RapidAPI et Google Places.',
        outcomes: [
          'Recherche orientee intention avec filtres non traditionnels et experience type conversation.',
          'Integration de listings externes et autocomplete geographique pour des resultats plus pertinents.',
          'Mise en place d un state management evolutif et d un fetching previsible avec frontieres API robustes.'
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
          'Livraison d un site de restaurant pense pour de vrais clients, avec focus sur confiance de marque, navigation mobile rapide et conversion locale.',
        outcomes: [
          'Conception d un systeme visuel soigne qui renforce la credibilite commerciale.',
          'Mise en place de parcours clairs menu + localisation pour accelerer la prise de decision.',
          'Livraison d une UX responsive prete pour un trafic client reel.'
        ],
        url: 'https://davidchubistro.netlify.app/',
        images: [
          '/images/portfolio/photography/p1.jpg',
          '/images/portfolio/photography/p2.jpg'
        ],
        stack: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: 'Application E-Commerce',
        year: '2022',
        description:
          'Creation d une boutique complete avec authentification, catalogue produit et parcours d achat responsive.',
        outcomes: [
          'Implementation de l authentification et du panier avec un state client fiable.',
          'Conception de pages catalogue et produit responsives avec objectif conversion.',
          'Livraison d une experience e-commerce complete avec composants reutilisables.'
        ],
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: "Daniel's Blog (Django)",
        year: '2024',
        description:
          'Plateforme de blog full stack avec authentification, upload media et workflow de publication administrateur.',
        outcomes: [
          'Authentification securisee et ownership du contenu.',
          'Pipeline de media uploads via AWS S3.',
          'Deployment AWS pour une livraison stable et scalable.'
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
          'J ai construit une experience marketplace de location pour la recherche de biens, les appels proprietaires et les parcours de contrat numerique.',
        outcomes: [
          'Conception d un parcours listing et prise de contact oriente conversion.',
          'Mise en place d une UI responsive pour desktop et mobile.',
          'Livraison d un produit concret utilise dans un projet client reel.'
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
          'Pilotage de la migration d une plateforme e-commerce legacy vers des microservices serverless AWS.',
          'Developpement frontend en Next.js 15 App Router et contrats backend partages.',
          'Definition de l infrastructure et des deploiements avec AWS CDK, Serverless v4, CodePipeline et CodeBuild.'
        ],
        stack: ['Next.js 15', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'AWS CDK']
      },
      {
        company: 'Homekey',
        title: 'Founding Full Stack Engineer',
        years: 'Jan 2025 - Feb 2025',
        highlights: [
          'Lancement MVP from scratch en un mois avec 30+ utilisateurs actifs.',
          'Mentorat technique de l equipe et mise en place de standards qualite.',
          'Livraison des parcours onboarding, planning et IA pour accelerer la traction initiale.'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS', 'Clerk']
      },
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Jan 2023 - Feb 2024',
        highlights: [
          'Developpement d outils micro-frontend pour des flux enterprise de migration d assets.',
          'Modernisation d outils legacy image de jQuery/ColdFusion vers React.',
          'Amelioration de la performance percue avec skeleton loaders et cache.'
        ],
        stack: ['React', 'TypeScript', 'Next.js', 'Docker', 'Kubernetes', 'Jest']
      },
      {
        company: 'Crown Clothing',
        title: 'Full Stack Software Engineer',
        years: 'Mar 2022 - Dec 2022',
        highlights: [
          'Refonte checkout et UI React avec +15 pourcent de ventes en ligne.',
          'Score Lighthouse passe de 77 a 93 via optimisation assets et lazy loading.',
          'Integration GraphQL et amelioration de la fiabilite sur endpoints critiques.'
        ],
        stack: ['React', 'Redux', 'Node.js', 'GraphQL', 'Sass', 'Firebase']
      },
      {
        company: 'BOTE',
        title: 'Cofounder et Product Team Lead',
        years: 'Apr 2020 - Feb 2022',
        highlights: [
          'Direction d une equipe cross-fonctionnelle de 8+ contributeurs pour livrer le MVP.',
          'Developpement des flux coeur avec React, Node.js et Stripe.',
          'Croissance initiale a 10K vues mensuelles et 600 utilisateurs mensuels.'
        ],
        stack: ['React', 'Node.js', 'Stripe', 'Bootstrap', 'Leadership Produit']
      }
    ]
  },
  skills: {
    title: 'Competences',
    description: 'Stack full stack moderne pour passer d un MVP a une plateforme scalable.',
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
        name: 'Cloud et DevOps',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'AWS CDK', 'Serverless v4', 'Docker', 'Kubernetes', 'CodePipeline', 'CodeBuild', 'GitHub Actions']
      },
      {
        name: 'Fondamentaux',
        skills: ['System Design', 'Contrats types', 'Testing', 'Optimisation performance', 'Collaboration UX']
      }
    ]
  },
  contact: {
    title: 'Construisons quelque chose que les gens utilisent vraiment',
    body: 'Si vous cherchez un ingenieur capable d aller de la strategie produit a la livraison production, parlons-en.',
    ctaLabel: 'M ecrire'
  }
};

export default content;
