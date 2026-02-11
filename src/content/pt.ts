import type { Content } from './types';

const content: Content = {
  site: {
    name: 'Daniel Shaby',
    role: 'Engenheiro de Software Full Stack',
    location: 'Los Angeles, CA',
    tagline: 'Construo produtos web de alta performance, com tipagem segura e UX clara.',
    availabilityLabel: 'Aberto a oportunidades',
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
    headline: 'Sistemas full stack de produto e IA, construidos para lancar rapido e escalar com confiabilidade.',
    subhead:
      'Projeto e entrego produtos ponta a ponta com resultados mensuraveis: velocidade, confiabilidade e conversao.',
    primaryCta: { label: 'Ver projetos', href: '#projects' },
    secondaryCta: { label: 'Contato', href: '#contact' },
    tertiaryCta: { label: 'Curriculo', href: '/Daniel_Shaby_Resume.pdf' },
    stats: [
      { label: 'Anos criando projetos', value: '5+' },
      { label: 'Experiencia profissional', value: '4+' },
      { label: 'Foco atual', value: 'Produto + Sistemas de IA' }
    ]
  },
  about: {
    title: 'Sobre',
    body: [
      'Sou Daniel Shaby, engenheiro de software full stack baseado em Los Angeles.',
      'Me apaixonei por software com estruturas de dados e algoritmos, e depois construi uma carreira entregando produtos uteis e bem acabados.',
      'Atualmente lidero modernizacao full stack na TS Industrial, com foco em microservicos serverless, contratos tipados e CI/CD de producao.',
      'Minha formacao na UC Berkeley em Economia e Saude Publica define meu metodo: pensamento estruturado, comunicacao clara e execucao pratica.',
      'Gosto de transformar problemas ambiguos de produto em experiencias rapidas, sustentaveis e com impacto mensuravel.',
      'Multilingue: ingles, espanhol, portugues e frances.'
    ],
    highlights: [
      {
        title: 'Engenharia orientada a produto',
        description: 'Priorizo resultados de usuario e negocio antes de definir arquitetura.'
      },
      {
        title: 'Entrega full stack',
        description: 'Da UX no frontend a confiabilidade do backend e pipelines de deploy.'
      },
      {
        title: 'Performance e qualidade',
        description: 'Contratos tipados, testes, observabilidade e arquitetura limpa.'
      }
    ]
  },
  projects: {
    title: 'Projetos em destaque',
    description: 'Projetos que mostram execucao de produto, profundidade tecnica e impacto real.',
    items: [
      {
        title: 'Modernizacao da Plataforma TS Industrial',
        year: '2025',
        description:
          'Liderando migracao de um stack legado em React + serverless monolitico para uma plataforma moderna com Next.js 15, microservicos AWS e contratos compartilhados.',
        outcomes: [
          'Construcao de frontend moderno com Next.js App Router e alvo de deploy OpenNext.',
          'Padronizacao de contratos API tipados entre dominios de produtos, usuarios e pedidos.',
          'Implementacao de CI/CD multi-ambiente (dev, test, UAT, prod) com CodePipeline e CodeBuild para releases mais seguros.'
        ],
        url: 'https://d1dgd5bt142kl1.cloudfront.net/',
        images: [
          '/images/portfolio/ts_industrial/tsi_product_listings_v2.png',
          '/images/portfolio/ts_industrial/tsi_platform_v2.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'AWS Lambda', 'Serverless v4', 'DynamoDB', 'AWS CDK']
      },
      {
        title: 'Lancamento do MVP Homekey',
        year: '2025',
        description:
          'Lancei o Homekey do zero em um mes com equipe de 6 pessoas e fluxos assistidos por IA.',
        outcomes: [
          'MVP em producao com 30+ usuarios ativos comprando e vendendo imoveis.',
          'Onboarding e agendamento convertendo 20 usuarios em fila para testes ativos.',
          'Mentoria tecnica em React, TypeScript e arquitetura backend escalavel.'
        ],
        url: 'https://www.homekey.casa/',
        images: [
          '/images/portfolio/homekey/homekey_mvp_launch_v2.png',
          '/images/portfolio/homekey/search-results.png'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS S3', 'Clerk']
      },
      {
        title: 'Site de Marketing SOS Standing Ovation',
        year: '2025',
        description:
          'Construido e lancado em Next.js para servicos AV, com foco em conversao, performance e SEO local.',
        outcomes: [
          'Implementei metadata por pagina no App Router para aumentar descoberta organica local.',
          'Desenvolvi galeria complexa por secoes com highlights curados e lightbox navegavel.',
          'Entreguei fluxo de contato com protecao anti-spam e persistencia via Supabase.'
        ],
        url: 'https://laproav.com',
        images: [
          '/images/portfolio/sos/sos_laproav_hero_v1.png',
          '/images/portfolio/sos/sos_laproav_hero_alt_v1.jpg'
        ],
        stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'SEO Metadata', 'Supabase']
      },
      {
        title: 'Solucionador de Matematica com IA',
        year: '2024',
        description:
          'Construi um solucionador de matematica por foto com Next.js 15, convertendo exercicios escritos a mao em explicacoes verificadas passo a passo.',
        outcomes: [
          'Implementei pipeline OCR -> verificacao computacional com Wolfram|Alpha -> explicacao por IA, com sinais claros de precisao.',
          'Entreguei fluxo de upload por camera + carrossel de exemplos com UX mobile-first fluida.',
          'Renderizei saida matematica legivel com KaTeX/Markdown para aprendizagem passo a passo.'
        ],
        url: 'https://math-photo-solver.vercel.app',
        images: [
          '/images/portfolio/math_made_easy/math_solver_pipeline_v2.png',
          '/images/portfolio/math_made_easy/solution.png'
        ],
        stack: ['Next.js 15', 'TypeScript', 'tRPC', 'React Query', 'Tailwind CSS', 'KaTeX', 'Wolfram|Alpha API', 'OpenAI API']
      },
      {
        title: 'App E-Commerce',
        year: '2022',
        description:
          'Construi uma loja completa com autenticacao, catalogo de produtos e fluxo de compra responsivo.',
        outcomes: [
          'Implementei autenticacao e carrinho com estado de cliente consistente.',
          'Desenvolvi catalogo e paginas de produto responsivas com foco em conversao.',
          'Entreguei experiencia de e-commerce ponta a ponta com componentes reutilizaveis.'
        ],
        url: 'https://sourcedfashion.netlify.app/',
        images: ['/images/portfolio/animal-shelter/p1.jpg', '/images/portfolio/animal-shelter/p2.jpg'],
        stack: ['React', 'Redux', 'Sass', 'TypeScript']
      },
      {
        title: 'App de Busca Imobiliaria',
        year: '2024',
        description:
          'Implementei app de busca imobiliaria em linguagem natural combinando APIs da OpenAI, feeds da RapidAPI e Google Places.',
        outcomes: [
          'Habilitei descoberta por intencao com filtros nao tradicionais e experiencia estilo chat.',
          'Integrei dados externos de listings e autocomplete geografico para resultados mais relevantes.',
          'Estruturei estado global e fetching previsivel com limites de API prontos para producao.'
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
          'Entreguei um site de restaurante voltado para clientes reais, com foco em confianca de marca, navegacao mobile rapida e conversao local.',
        outcomes: [
          'Desenhei um sistema visual polido que passa credibilidade comercial.',
          'Implementei caminhos claros de menu e localizacao para acelerar decisao e contato.',
          'Lancei UX responsiva pronta para trafego real de clientes.'
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
          'Plataforma de blog full stack com autenticacao, upload de midia e fluxo administrativo de publicacao.',
        outcomes: [
          'Autenticacao segura e ownership de conteudo.',
          'Pipeline de upload de midia com AWS S3.',
          'Deploy em infraestrutura AWS para entrega confiavel.'
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
          'Desenvolvi uma experiencia de marketplace de aluguel para busca de imoveis, chamadas com proprietarios e fluxo digital de contrato.',
        outcomes: [
          'Desenhei um fluxo de listagem e interesse com foco em conversao.',
          'Implementei padroes de UI responsiva para desktop e mobile.',
          'Entreguei um produto aplicado em um projeto real com cliente.'
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
          'Liderando migracao de plataforma e-commerce legada para microservicos serverless em AWS.',
          'Desenvolvimento de frontend com Next.js 15 App Router e contratos backend compartilhados.',
          'Definicao de infraestrutura e deploy com AWS CDK, Serverless v4, CodePipeline e CodeBuild.'
        ],
        stack: ['Next.js 15', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'AWS CDK']
      },
      {
        company: 'Homekey',
        title: 'Founding Full Stack Engineer',
        years: 'Jan 2025 - Feb 2025',
        highlights: [
          'Lancei MVP do zero em um mes com 30+ usuarios ativos.',
          'Mentoria tecnica da equipe e padroes de qualidade.',
          'Onboarding, agendamento e fluxos com IA para acelerar tracao inicial.'
        ],
        stack: ['Next.js', 'TypeScript', 'Flask', 'RTK Query', 'AWS', 'Clerk']
      },
      {
        company: 'Bynder',
        title: 'Front End Engineer',
        years: 'Jan 2023 - Feb 2024',
        highlights: [
          'Construi ferramentas de micro-frontend para fluxos enterprise de migracao de assets.',
          'Modernizei ferramentas legadas de imagem de jQuery/ColdFusion para React.',
          'Melhorei performance percebida com skeleton loaders e cache.'
        ],
        stack: ['React', 'TypeScript', 'Next.js', 'Docker', 'Kubernetes', 'Jest']
      },
      {
        company: 'Crown Clothing',
        title: 'Full Stack Software Engineer',
        years: 'Mar 2022 - Dec 2022',
        highlights: [
          'Redesenho de checkout e UI React com aumento de 15 por cento nas vendas online.',
          'Melhoria de Lighthouse de 77 para 93 com otimizacao de assets e lazy loading.',
          'Integracao GraphQL e melhoria de confiabilidade em endpoints criticos.'
        ],
        stack: ['React', 'Redux', 'Node.js', 'GraphQL', 'Sass', 'Firebase']
      },
      {
        company: 'BOTE',
        title: 'Cofounder e Product Team Lead',
        years: 'Apr 2020 - Feb 2022',
        highlights: [
          'Liderei equipe multifuncional de 8+ colaboradores para entregar MVP.',
          'Desenvolvimento de fluxos principais com React, Node.js e Stripe.',
          'Escala inicial para 10K visualizacoes mensais e 600 usuarios mensais.'
        ],
        stack: ['React', 'Node.js', 'Stripe', 'Bootstrap', 'Lideranca de Produto']
      }
    ]
  },
  skills: {
    title: 'Habilidades',
    description: 'Stack full stack moderno para levar produtos de MVP ate escala.',
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
        name: 'Cloud e DevOps',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'AWS CDK', 'Serverless v4', 'Docker', 'Kubernetes', 'CodePipeline', 'CodeBuild', 'GitHub Actions']
      },
      {
        name: 'Fundamentos',
        skills: ['System Design', 'Contratos tipados', 'Testing', 'Otimizacao de performance', 'Colaboracao UX']
      }
    ]
  },
  contact: {
    title: 'Vamos construir algo que as pessoas realmente usam',
    body: 'Se voce busca um engenheiro que consegue ir da estrategia de produto ate entrega em producao, vamos conversar.',
    ctaLabel: 'Me envie um email'
  }
};

export default content;
