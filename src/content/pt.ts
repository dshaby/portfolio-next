import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Desenvolvedor Full Stack',
    location: 'Los Angeles, CA',
    tagline: 'Construo produtos web limpos, rapidos e centrados nas pessoas.',
    availabilityLabel: 'Aberto a oportunidades',
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
    headline: 'Sistemas bem pensados. Entregas rapidas. UX elegante.',
    subhead:
      'Projeto e entrego produtos ponta a ponta com um processo de engenharia claro e confiavel. Do conceito ao lancamento, foco em velocidade, clareza e acabamento.',
    primaryCta: { label: 'Ver projetos', href: '#projects' },
    secondaryCta: { label: 'Contato', href: '#contact' },
    stats: [
      { label: 'Anos construindo', value: '5+' },
      { label: 'Projetos entregues', value: '20+' },
      { label: 'Foco atual', value: 'Produto + IA' }
    ]
  },
  about: {
    title: 'Sobre',
    body: [
      'Sou Daniel Shaby, desenvolvedor full stack baseado em Los Angeles.',
      'Atualmente trabalho remotamente na Bynder, criando experiencias de produto simples, rapidas e confiaveis.',
      'Minha formacao na UC Berkeley se tornou base para pensamento disciplinado, comunicacao clara e solucao pratica de problemas.',
      'Passei a gostar de ciencia da computacao em cursos de estruturas de dados e algoritmos, e construi minha carreira criando produtos uteis e bem executados.',
      'Multilingue: ingles, espanhol, portugues e frances.',
    ],
    highlights: [
      {
        title: 'Engenharia orientada a produto',
        description: 'Comeco pela jornada do usuario e depois desenho o sistema para sustenta-la.'
      },
      {
        title: 'Entrega full stack',
        description: 'Da experiencia no frontend a confiabilidade no backend, entrego de ponta a ponta.'
      },
      {
        title: 'Performance como recurso',
        description: 'Priorizo velocidade, acessibilidade e arquitetura limpa.'
      }
    ]
  },
  projects: {
    title: 'Projetos em destaque',
    description: 'Projetos que mostram minha atuacao em produto, UX e sistemas.',
    items: [
      {
        title: 'Solucionador de Problemas de Matematica',
        year: '2024',
        description:
          'Tire uma foto de um problema de matematica e receba solucoes passo a passo em uma experiencia mobile-first.',
        url: 'https://mathmadeeasy.vercel.app/',
        images: [
          '/images/portfolio/math_made_easy/home.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Tailwind CSS', 'React']
      },
      {
        title: 'App de Compra de Casas',
        year: '2024',
        description:
          'Busca imobiliaria em linguagem natural com OpenAI, RapidAPI e Google Places.',
        url: 'https://homekey-dshaby.vercel.app/',
        images: [
          '/images/portfolio/homekey/home-page.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'Redux', 'Material UI', 'TypeScript']
      },
      {
        title: 'Aluguel de Casas',
        year: '2024',
        description:
          'Experiencia de marketplace para anuncios de aluguel, visitas e contratos.',
        images: [
          '/images/portfolio/home_rentals/home_rentals_landing.png',
          '/images/portfolio/home_rentals/home_rentals_page_two.png'
        ],
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS']
      },
      {
        title: 'Blog com Django',
        year: '2024',
        description: 'Plataforma de blog com comentarios, favoritos e hospedagem na AWS.',
        images: [
          '/images/portfolio/python_django_blog/home.png',
          '/images/portfolio/python_django_blog/article.png'
        ],
        stack: ['Python', 'Django', 'PostgreSQL', 'AWS']
      },
      {
        title: 'App de E-commerce',
        year: '2022',
        description:
          'Loja completa com autenticacao, Redux e interface responsiva.',
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'Restaurante',
        year: '2021',
        description:
          'Site orientado a marca com mapa, menus e uma experiencia acolhedora.',
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
        years: 'Jan 2023 - Presente',
        highlights: [
          'Desenvolvi e otimizei experiencias React 18 para usuarios enterprise.',
          'Trabalhei com produto e design para entregar funcionalidades de alto impacto.'
        ],
        stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes']
      },
      {
        company: 'Crown Clothing',
        title: 'Software Developer',
        years: '2022',
        highlights: [
          'Entreguei funcionalidades de e-commerce, autenticacao e fluxos de dados.',
          'Melhorei conversao com refinamentos de UX.'
        ],
        stack: ['React', 'Redux', 'Firebase', 'Node.js', 'Sass']
      },
      {
        company: 'BOTE',
        title: 'Cofounder, Dev Team Lead',
        years: '2020 - 2022',
        highlights: [
          'Cofundei um produto de consumo e liderei a entrega full stack.',
          'Conduzi roadmap, execucao e validacao com clientes iniciais.'
        ],
        stack: ['React', 'JavaScript', 'CSS']
      },
      {
        company: 'myPlaces',
        title: 'Backend Engineer',
        years: '2020',
        highlights: [
          'Construi APIs para funcionalidades baseadas em localizacao.',
          'Melhorei performance e confiabilidade dos dados.'
        ],
        stack: ['Node.js', 'MongoDB', 'Express']
      }
    ]
  },
  skills: {
    title: 'Habilidades',
    description: 'Ferramentas praticas que escalam de MVP ate producao.',
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
        skills: ['JavaScript', 'HTML', 'CSS', 'System Design', 'Colaboracao UX']
      }
    ]
  },
  contact: {
    title: 'Vamos construir algo que as pessoas adorem',
    body: 'Se voce procura um parceiro confiavel para tirar um produto do papel, vamos conversar.',
    ctaLabel: 'Me envie um e-mail'
  }
};

export default content;
