// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import Supabaselogo from './assets/tech_logo/Supabase.jpeg';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';


// Project Section Logo's
import Welthlogo from './assets/work_logo/welth.png';
import Hirredlogo from './assets/work_logo/Hirred.png';
import Passwordlogo from './assets/work_logo/password.png';
import AIlogo from './assets/work_logo/AIlogo.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Supabase', logo: Supabaselogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const projects = [
  {
    id: 0,
    title: "Welth - Personal Finance Dashboard",
    description:
      "A modern and responsive full-stack finance dashboard that helps users manage their expenses, income, and accounts in one place. Users can add, track, and visualize their financial transactions, set recurring payments, and monitor account-specific data with dynamic charts and tables.",
    image: Welthlogo, // replace with your screenshot URL
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Supabase", "Clerk", "Resend", "Arcjet"],
    github: "https://github.com/Gaurav-athare/Finance-Platform", 
    webapp: "https://finance-platform-pi.vercel.app/",
  },
  {
    id: 1,
    title: "Job Hiring Portal",
    description:
      "A full-stack job portal where recruiters can post jobs and manage applications, while candidates can browse, filter, and apply to jobs. Includes role-based authentication, profile management, and resume uploads with real-time updates via Supabase.",
    image: Hirredlogo, // replace with your screenshot URL
    tags: ["React.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Clerk"],
    github: "https://github.com/Gaurav-athare/Hired", 
    webapp: "https://hired-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "Password Manager",
    description:
      "A responsive React.js web app that allows users to securely store, manage, and retrieve their website credentials. Uses localStorage for data persistence so credentials remain accessible across browser sessions.",
    image: Passwordlogo, // replace with your screenshot URL
    tags: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gaurav-athare/PasswordManager",
    webapp: "https://github.com/Gaurav-athare/PasswordManager",
  },
  {
    id: 3,
    title: "AI Virtual Assistant",
    description:
      "A smart virtual assistant with voice recognition (Web Speech API) to process user commands such as opening websites, fetching information, and providing AI-driven responses. Features an interactive and animated frontend with React.js, Tailwind CSS, and Framer Motion, plus secure authentication using JWT and bcrypt.js. The backend is built with Node.js, Express.js, and MongoDB for scalable data management and assistant personalization.",
    image: AIlogo, // replace with your screenshot URL
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Context API", "Web Speech API", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Gaurav-athare/AI-Virtual-Assistant", // add repo link if you want
    webapp: "https://ai-virtual-assistant-qq41.onrender.com",
  }
];
