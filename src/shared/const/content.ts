import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  sbertransport,
  jobit,
  portfolio,
  threejs,
  sber,
  erochem,
} from "../assets/index.ts";

export const navLinks: { id: string; title: string; isOutLink?: boolean }[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/drive/folders/1RNh3J_Yginnp5BGvx2qCT7Sr6Rirawd7?usp=sharing",
    title: "Download resume",
    isOutLink: true
  }
];

const services: {title: string, icon: string}[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: {name: string, icon: string}[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export interface ExperienceProps {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const experiences: ExperienceProps[] = [
  {
    title: "Full Stack Developer",
    company_name: "Eurochem",
    icon: erochem,
    iconBg: "#383E56",
    date: "Feb 2021 - Apr 2022",
    points: [
      "Full Stack Developer at Eurochem, where I focused primarily on frontend development using React, HBS (but very rarely), Redux (Thunk), redux-toolkit, react router dom, Material UI, CSS Modules, Bootstrap, HTML5, CSS3, and Figma. I was responsible for the development and maintenance of web applications. I also had some exposure to the server-side of the applications using Node.js, Express, PostgreSQL, Sequelize ORM, but my main focus was on the frontend.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Sber",
    icon: sber,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2023",
    points: [
      "Frontend Developer at Sberbank, where I developed and maintained web applications using React 16+, Mobx, React Query, and TypeScript. Implemented webpack and styled components to improve the performance and style of the applications. Worked with JIRA and Bitbucket to manage project development and collaboration. Improved user experience by implementing interactive features and animations.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "TypingHero",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export type TestimonialsType = {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}

const testimonials: TestimonialsType[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Petr proved me wrong.",
    name: "Nikolay V.",
    designation: "Product manager",
    company: "Sberbank",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Petr does.",
    name: "Zamir Boriev",
    designation: "CTO",
    company: "Exponenta Realty",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Petr optimized our website, the waiting time to load our site has decreased by 35%. We can't thank them enough!",
    name: "Andrey Maslov",
    designation: "COO",
    company: "Greenwood St.Petersburg",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];



const projects: {
  name: string,
  description: string,
  tags: {name: string, color: string}[],
  image: string,
  source_code_link: string
}[] = [
  {
    name: "SberTransport",
    description:
      "The SberTransport platform allows you to manage the full life cycle of transport service orders",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      {
        name: "Mobx",
        color: "pink-text-gradient",
      },
      {
        name: "Ant Design",
        color: "blue-text-gradient",
      },
    ],
    image: sbertransport,
    source_code_link: "http://www.sberbank.ru/ru/s_m_business/businessapps/transport",
  },
  {
    name: "Typing Hero",
    description:
      "Keyboard speed training app (in progress). Here I focus more on optimization, tuning the webpack builder, presenting each module as a public api, and moving the project to Feature-Sliced Design Architectural methodology for frontend projects",
    tags: [

      {
        name: "webpack",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "Future-Sliced Design",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KolesnikovP/typing-hero",
  },
  {
    name: "This portfolio",
    description:
      "This portfolio where I just told a little bit about myself and decided to work with Three.js and Tailwind.css",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/KolesnikovP/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
