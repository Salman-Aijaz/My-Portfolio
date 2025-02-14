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
  tailwind,
  nodejs,
  fastapi,
  git,
  docker,
  developer,
  sql,
  postgres,
  python,
  qms,
  pms,
  skstore,
  gallerygaze,
  turbotyping,
  writeflow
} from "../assets";
// import developer from "../assets"
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Fast Api",
    icon: fastapi,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "Postgres Sql",
  //   icon: postgres,
  // },
  // {
  //   name: "sql",
  //   icon: sql,
  // } 
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "Panacloud",
    icon: developer,
    iconBg: "#383E56",
    date: "Sep 2023 - Sep 2024",
    points: [
      "Developed and maintained responsive, user-friendly, and visually appealing websites using frameworks and libraries",
      "Collaborated with cross-functional teams to optimize website performance and user experience. ",
      "Designed and implemented efficient APIs and managed databases using Node.js, Python, Fast API and PostgreSQL.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Q-Solution",
    icon: developer,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Developed scalable backend solutions with Python, leveraging FastAPI for high-performance APIs.",
      "Utilized Docker for efficient containerization and Redis for optimized caching, enhancing application performance.",
      "Worked on various management systems, implementing robust features to meet business needs and improve user workflows.",
      "Employed Test-Driven Development (TDD) with Pytest, ensuring reliable, maintainable code through unit testing.",
    ],
  }
];

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
    name: "Park Pro",
    description:
      "A parking management system using FastAPI, PostgreSQL (Neon DB), SQLAlchemy, Redis, Pydantic, and Pytest for efficient queuing and testing.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "pytest",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: pms,
    source_code_link: "https://github.com/Salman-Aijaz/ParkPro",
  },
  {
    name: "Spot Queue",
    description:
      "Spot Queue with FastAPI, SQLAlchemy, PostgreSQL, and Redis. Integrated with third-party APIs, deployed via Docker, and tested with Pytest for optimal performance.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgressql",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: qms,
    source_code_link: "https://github.com/Salman-Aijaz/SpotQueue",
  },
  {
    name: "Turbo Typing",
    description:
      "Developed an online typing speed test with Next.js, Tailwind CSS, Python, FastAPI, providing real-time results, efficient backend, and seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: turbotyping,
    source_code_link: "https://github.com/Salman-Aijaz/Turbo-Typing",
  },
  {
    name: "Sk-Store",
    description:
      "Built with the MERN stack, this web app features a sleek design, intuitive admin panel, and scalable backend for efficient management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "mongo db",
        color: "blue-text-gradient",
      },
    ],
    image: skstore,
    source_code_link: "https://github.com/Salman-Aijaz/sk-store",
  },
  {
    name: "Gallery Gaze",
    description:
      "Gallery Gaze combines art and AI, built with Next.js, TypeScript, ShadCN UI, and Tailwind CSS, offering sleek design and seamless image management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },

    ],
    image: gallerygaze,
    source_code_link: "https://github.com/Salman-Aijaz/GalleryGaze",
  },
  {
    name: "WriteFlow",
    description:
      "WriteFlow is a Node.js & Express backend with PostgreSQL, enabling efficient article creation, updates, and management with role-based access and robust validation. 🚀",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: writeflow,
    source_code_link: "https://github.com/Salman-Aijaz/WriteFlow",
  }
];

export { services, technologies, experiences, testimonials, projects };
