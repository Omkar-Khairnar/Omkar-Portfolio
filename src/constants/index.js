import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vinnovate,
  Fitwell,
  ImagiAI,
  newsapp,
  IIITSlogo,
  NSSlogo,
  abhisargalogo,
  sqllogo,
  cpplogo,
  javalogo,
  linuxlogo
} from "../assets";

export const navLinks = [
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
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Problem Solver: DSA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CPP",
    icon: cpplogo,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SQl",
    icon: sqllogo,
  },
  {
    name: "Linux",
    icon: linuxlogo,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Eng. Intern",
    company_name: "vInnovate Technologies",
    icon: vinnovate,
    iconBg: "#383E56",
    date: "May 2023 - October 2023",
    points: [ 
      " Actively working as Full Stack Developer, encompassing front-end, back-end, and the successful creation of an Admin panel.",
      "Designed andimplemented a high-performance API that handled 1000+ concurrent requests per second, resulting in 30% reduction in response time.",
      "Conducted rigorous testing and debugging, reducing critical software bugs by 40% and improving the overall user experience, resulting in a 25% increase in user satisfaction",
    ],
  },
  {
    title: "IOTA: Domain Lead",
    company_name: "IOTA-IIITS",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "It is Project club of IIIT SriCity. Worked as a Core Member in Academic year 2022-23 and now promoted as Domain Lead",
      "Organized competitions and skill development sessions for freshers and peers, promoting continuous learning and skill enhancement.",
      "Worked on Industry Level Projects and provided user friendly solutions",
    ],
  },
];

const volunteerExperience=[
  {
    title: "NSS Core Volunteer",
    company_name: "@NSS-IIITS",
    image:NSSlogo,
    date: "May 2022 - Aug 2023",
    points: [
      "Active participant in various government-related drives through NSS, contributing to community development initiatives.",
      "Organized events for village children to explore IIITS institute and its facilities.",
      "Led educational programs introducing rural students to the institute environment.",
      "Facilitated career-oriented talks, providing valuable insights for informed decision-making.",
    ],
  },
  {
    title: "Organizing Team Member",
    company_name: "Techno Cultural Fest @IIITS",
    image:abhisargalogo,
    date: "March 2024",
    points: [
      "Served as an Organizing Team Member for the Techno Cultural Fest @IIITS, contributing to the successful execution of the event.",
      "Played a key role in planning and coordinating various aspects of the fest, ensuring a seamless and engaging experience for participants.",
      "Collaborated with team members to organize cultural and technological events, showcasing diverse talents within the institute.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ImagiAI",
    description:
          "ImagiAI: An innovative NEXT.js SaaS platform leveraging AI-powered image editing capabilities, featuring precise tools for image restoration, generative fill, object removal, object recoloring, and background removal. Integrated with Clerk for authentication and Stripe for seamless payments.",
    tags: [
      {
        name: "NextJS",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-shadcn",
        color: "purple-text-gradient",
      },
      {
        name: "Stripe Payment",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Clerk Auth",
        color: "pink-text-gradient",
      },
    ],
    image: ImagiAI,
    source_code_link: "https://github.com/Omkar-Khairnar/ImagiAI",
    project_url:"https://imagiai.vercel.app/"
  },
  {
    name: "FitWell",
    description:
      "Fitwell is a MERN Application providing health facilities to users. Many Fitness centers are registered on applications and also providing wokouts and daily challenges to users based on the registering pricing plan. E-Commerce facility is health products also provided.",
    tags: [
      {
        name: "ReactJS",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstarp",
        color: "purple-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
    ],
    image: Fitwell,
    source_code_link: "https://github.com/Omkar-Khairnar/FitWell-ReactJS",
    project_url: "https://fitwell-fitnessapp.vercel.app",
  },
  {
    name: "Code Search",
    description:
      "Code Search is a Information Retrieval project searching javascript and DSA queries from more than 100000 documents in less than second. Django application is created for user friendly interface..",
    tags: [
      {
        name: "Information Retrieval",
        color: "white-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Omkar-Khairnar/CODE-SEARCH-Information-Retrieval/",
    project_url:"#"
  },
  {
    name: "NewsMonkey",
    description:
      "Web application that enables users search for latest news based on different categories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "NEWSAPI",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/Omkar-Khairnar/newsMonkey",
    project_url: "https://news-monkey-sepia-pi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, volunteerExperience };
