import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Gabriel",
  lastName: "Lima Santana",
  name: `Gabriel Lima`,
  role: "Desenvolvedor Fullstack",
  avatar: "/images/avatar.jpg",
  email: "ga.lima2205@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: <>Artigos sobre desenvolvimento, segurança e inovação em tecnologia</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ranskyth",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabriel-devfullstack/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfólio de ${person.name}`,
  description: `Site de portfólio mostrando meu trabalho como ${person.role}`,
  headline: <>Transformando ideias em soluções escaláveis</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projetos Destacados</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Confira meus trabalhos
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Sou Gabriel, um desenvolvedor fullstack
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de São Paulo`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
Sou um desenvolvedor fullstack, com paixão por transformar desafios complexos em soluções elegantes e escaláveis. Meu trabalho abrange desenvolvimento web, APIs, sistemas backend e integração de tecnologias modernas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "OAK Cell",
        timeframe: "2021 - 2024",
        role: "Técnico de TI",
        achievements: [
          <>
            Atendimento ao cliente e suporte técnico para resolução de problemas em computadores, notebooks e periféricos.
          </>,
          <>
            Configuração de roteadores, câmeras IP e impressoras de rede para ambientes corporativos.
          </>,
          <>
            Manutenção preventiva e corretiva de hardware, instalação de sistemas operacionais e softwares essenciais.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educação",
    institutions: [
      {
        name: "FATEC - Faculdade de Tecnologia",
        description: <>Curso Superior de Tecnologia - Desenvolvimento de Software Multiplataforma (2025 - 2028)</>,
      },
      {
        name: "ETEC - Escola Técnica Estadual de São Paulo",
        description: <>Técnico em Desenvolvimento de Sistemas (2024 - 2025)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Backend",
        description: (
          <>APIs robustas com Node.js, Nest.js, Express, Elysia, Chi, Spring Boot Fastify e Bun.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Go",
            icon: "go",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>Interfaces modernas com React e Next.js, estilização com Tailwind e componentes UI.</>
        ),
        tags: [
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Database & DevOps",
        description: (
          <>Prisma, Drizzle, PostgreSQL, MySQL, Docker e Git para versionamento e deployment.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre desenvolvimento e tecnologia...",
  description: `Artigos de ${person.name} sobre desenvolvimento web e tecnologias modernas`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/trabalho",
  label: "Trabalho",
  title: `Projetos – ${person.name}`,
  description: `Projetos de desenvolvimento de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/galeria",
  label: "Galeria",
  title: `Galeria de fotos – ${person.name}`,
  description: `Uma coleção de ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
