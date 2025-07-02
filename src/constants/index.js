import {
  backend,
  // c,
  carrent,
  creator,
  // css,
  // figma,
  // html,
  docker,
  git,
  github,
  pSQL,
  prisma,
  javascript,
  jobit,
  mongodb,
  nodejs,
  express,
  // python,
  reactjs,
  redux,
  next,
  shopify,
  // sql,
  starbucks,
  tailwind,
  tesla,
  tripguide,
  typescript,
  web,Skate, Celestial, Designer,Qorvia, Fit, logo1, logo2, logo3, logo4, logo5, logo6
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",

    },
    {
      id: "Project",
      title: "Projects",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
   
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
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
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgresSQL",
      icon: pSQL,
    },
 
    {
      name: "Prisma",
      icon: prisma,
    },
    
   
    {
      name: "Docker",
      icon: docker,
    }, 
    {
      name: "Git",
      icon: git,
    },
    // {
    //   name: "Github",
    //   icon: github,
    // },
   
    
  ];
  
  const experiences = [
    
    {
      title: "Dream X Store",
      image: Designer,
      icon: logo5,
      iconBg: "white",
      date: "project 4",
      points: [
        "Dream X Store is a production-level freelancing project I built with my team, aimed at helping designers showcase and sell their work without needing a personal website. It features 2D and 3D T-shirt customizers for artists to upload and monetize their designs. The platform includes full e-commerce functionality—filters, cart, secure checkout with Razorpay, and an admin panel for managing users, products, and orders.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
         {
          name: "Three.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "Razerpay",
          color: "blue-text-gradient",
        },
      ],
      source_link: "",
      source_code_link: "",
    },
    {
      title: "Qorvia-AI",
      image: Qorvia,
      icon: logo4,
      iconBg: "white",
      date: "project 5",
      points: [
        "Developed a landing page as a freelancer for a Qorvia-AI website using Next.js and Tailwind CSS, showcasing the functionality and benefits of eSIMs through a clean, responsive design.",
      ],
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "pink-text-gradient",
        },
       
      ],
      source_link: "https://qorvia-ai.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/Qorvia-Ai",
    },
 
     {
      title: "Celestial healing",
      image: Celestial,
      icon: logo6,
      iconBg: "white",
      date: "project 7",
      points: [
        "Developed a spiritual wellness website as a freelance Full Stack Developer using modern web technologies.Users can explore services like Reiki, Yoga, and Astrology with detailed descriptions of each healing process.The platform includes product listings with filters, a shopping cart, and secure payments via Razorpay.It delivers a seamless and informative experience for users interested in spiritual and holistic healing.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind.css",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },
        {
          name: "Razerpay",
          color: "blue-text-gradient",
        },
      ],
      source_link: "https://celestials-ten.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/celestials",
    },
  
  ];
  
  
  export { experiences, services, technologies };

  export const myProjects = [
     {
    title: "Fashion Finds - E-commerce Platform",
    desc: "A full-featured e-commerce store with product filtering, cart, authentication, and payment support.",
    subdesc: "Built using Next.js, Stripe, Firebase, MongoDB, and TailwindCSS with secure checkout and real-time data handling.",
    href: "https://e-commerce-chi-flax.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: starbucks,
    logoStyle: {
      backgroundColor: "#fff",
      border: "0.2px solid #ccc",
      boxShadow: "0px 0px 60px 0px #ccc",
    },
    spotlight: "https://github.com/Durgesh2022/E-commerce",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/reactjs.png" },
      { id: 2, name: "Next.js", path: "/assets/next.png" },
      { id: 1, name: "Next.js", path: "/assets/tailwind.png" },
      { id: 3, name: "Next.js", path: "/assets/nodejs.png" },
      { id: 3, name: "Next.js", path: "/assets/express.png" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.png" },
      { id: 5, name: "Firebase", path: "/assets/Firebase.png" },
      { id: 6, name: "Stripe", path: "/assets/stripe.png" },
      
    ],
  },
   {
    title: "Fit Rahoo - AI Fitness Trainer",
    desc: "A personal fitness platform that creates personalized plans and uses OpenCV to correct posture live.",
    subdesc: "Combines AI feedback with fitness tracking. Uses OpenCV, Three.js, Stripe & more.",
    href: "https://fit-rahoo2.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/logo2.jpg",
   
    spotlight: "https://github.com/Durgesh2022/fit-rahoo2",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/next.png" },
      { id: 1, name: "Next.js", path: "/assets/three.png" },
      { id: 1, name: "Next.js", path: "/assets/tailwind.png" },
      { id: 2, name: "OpenCV", path: "/assets/opencv.png" },
      { id: 3, name: "Next.js", path: "/assets/nodejs.png" },
      { id: 3, name: "Next.js", path: "/assets/express.png" },
      { id: 3, name: "MongoDB", path: "/assets/mongodb.png" },
      { id: 4, name: "Stripe", path: "/assets/stripe.png" },
    ],
  },
  {
    title: "Alcruit - Video Conferencing Platform",
    desc: "A real-time video conferencing app with secure auth, group chat, and encrypted streaming. Built using Next.js, Clerk, and Socket.io for low-latency collaboration.",
    subdesc: "Includes SSR, user auth, and encrypted calls — optimized for cross-device communication.",
    href: "https://alcruit-nnq6.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: shopify,
   
    spotlight: "https://github.com/Durgesh2022/Alcruit",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/next.png" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "Clerk", path: "/assets/clerk.png" },
      { id: 4, name: "Node.js", path: "/assets/nodejs.png" },
    ],
  },
 
  {
    title: "Fizzi - 3D Portfolio Website",
    desc: "An immersive 3D experience built with Three.js, showcasing interactive visuals and models.",
    subdesc: "Combines Next.js, TypeScript, and responsive UI using Tailwind CSS for a modern portfolio.",
    href: "https://fizzz.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: logo1,
    
    spotlight: "https://github.com/Durgesh2022/fizzz",
    tags: [
      { id: 1, name: "Three.js", path: "/assets/three.png" },
      { id: 2, name: "Next.js", path: "/assets/next.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  
  {
    title: "Suburbia - 3D Skateboard Customizer",
    desc: "Interactive 3D website that lets users personalize skateboards in real time using Three.js.",
    subdesc: "Focuses on immersive 3D web experiences, lighting, and model animation with Next.js and Tailwind CSS.",
    href: "https://suburbia-alpha.vercel.app/",
    texture: "/textures/project/project5.mp4",
    logo: logo2,
    
    spotlight: "https://github.com/Durgesh2022/suburbia",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/next.png" },
      { id: 2, name: "Three.js", path: "/assets/three.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  
 
];



export const workExperiences = [
  
  {
    id: 2,
    name: 'Celestial Healing',
    pos: 'Freelance Full Stack Developer',
    duration: 'April 2025 – Present (Remote)',
    title:
      'Designed and developed a full-featured wellness and holistic healing e-commerce website showcasing 50+ services and products. Integrated product filtering, shopping cart, and secure payments using Razorpay. Utilized Next.js for fast rendering, MongoDB for data storage, and Cloudinary for image handling to ensure a smooth and engaging user experience.',
    icon: '🌿',
    animation: 'victory',
  },
  
  
  {
    id: 3,
    name: 'Dream X Store',
    pos: 'Freelance Full Stack Developer',
    duration: 'January 2025 – May 2025 (Remote)',
    title:
      'Collaborated with a distributed team to create an innovative platform for fashion designers, featuring customizable 2D/3D T-shirt previews using WebGL. Built a comprehensive admin dashboard to manage inventory, orders, and users. Implemented full e-commerce functionality with secure checkout, user authentication, and responsive design to support seamless browsing on all devices.',
    icon: '👕',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Qorvia-AI',
    pos: 'Freelance Front-End Developer',
    duration: 'January 2024 (Remote)',
    title:
      'Delivered a responsive, mobile-first landing page for Qorvia-AI, an emerging eSIM startup, within 4 days. Used Next.js and Tailwind CSS to ensure fast performance, clean design, and accessibility. Focused on maximizing product visibility, call-to-action clarity, and SEO, contributing to improved user engagement and conversions.',
    icon: '📱',
    animation: 'victory',
  },
  {
    id: 1,
    name: 'Adam Innovations Co., Ltd',
    pos: 'Full Stack Developer Intern',
    duration: 'May 2024 – July 2024 (Remote)',
    title:
      'Led a remote team of 4 developers to build a scalable platform connecting over 100 investors with 200+ African businesses, driving economic inclusion and funding access. Designed and implemented core features using React, Node.js, Express, Prisma, and PostgreSQL. Collaborated with cross-functional teams to optimize onboarding workflows, resulting in a 25% increase in user engagement and reducing page load time by 40%.',
    icon: '💼',
    animation: 'salute',
  },
  {
    id: 5,
    name: 'Confidential',
    pos: 'Data Engineering Intern',
    duration: '2024 (Remote)',
    title:
      'Worked as a Data Engineering Intern where I utilized Snowflake and SnowSQL to extract, clean, and transform large datasets hosted on Microsoft Azure. Optimized ETL pipelines and data queries, resulting in a 35% reduction in latency and improved dashboard performance for internal analytics tools.',
    icon: '📊',
    animation: 'salute',
  },
];
