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
      id: "work",
      title: "Projects",
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
      title: "Alcruit",
      image: tripguide,
      icon: shopify,
      iconBg: "black",
      date: "project 1",
      points: [
        "Built a real-time video conferencing platform using Next.js, Clerk, and Socket.io with secure user authentication, group chat, and end-to-end encrypted streaming. Leveraged SSR for fast load times and low-latency communication across devices.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Clark",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
      ],
      source_link: "https://alcruit-nnq6.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/Alcruit",
    },
    {
      title: "Fashion Finds",
      image: carrent,
      icon: starbucks,
      iconBg: "white",
      date: "project 2",
      points: [
        "Built a full-featured e-commerce platform using Next.js, React.js, Node.js, MongoDB, Stripe, and Firebase. It offers product search, filtering, and smooth cart management for a user-friendly shopping experience. Stripe handles secure payments, while Firebase powers real-time data and authentication for fast, reliable access.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
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
          name: "FireBase",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "blue-text-gradient",
        },
      ],
      source_link: "https://e-commerce-chi-flax.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/E-commerce",
    },
    {
      title: "Fizzi",
      image: jobit,
      icon: logo1,
      iconBg: "white",
      date: "project 3",
      points: [
        "Fizzi is a 3D web project built with Three.js, Next.js, TypeScript, and Tailwind CSS. In making this website i learn 3D model integration, scene layering, and interactive visuals within a modern, responsive UI.",
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
          name: "Three.js",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "blue-text-gradient",
        },
       
      ],
      source_link: "https://fizzz.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/fizzz",
    },
    {
      title: "Dream X Store",
      image: Designer,
      icon: logo5,
      iconBg: "white",
      date: "project 4",
      points: [
        "Designers Den is a production-level freelancing project I built with my team, aimed at helping designers showcase and sell their work without needing a personal website. It features 2D and 3D T-shirt customizers for artists to upload and monetize their designs. The platform includes full e-commerce functionality—filters, cart, secure checkout with Razorpay, and an admin panel for managing users, products, and orders.",
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
      title: "Suburbia",
      image: Skate,
      icon: logo2,
      iconBg: "white",
      date: "project 6",
      points: [
        "In the Suburbia website project, I integrated Three.js with Next.js and Tailwind CSS to create an interactive 3D experience. I built a 3D skateboard customizer that allows users to personalize their boards in real-time. Through this, I learned about layering, lighting, and rotation in 3D models, enhancing my skills in immersive web development.",
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
      source_link: "https://suburbia-alpha.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/suburbia",
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
    {
      title: "Fit Rahoo",
      image: Fit,
      icon: logo3,
      iconBg: "white",
      date: "project 8",
      points: [
        "Developed a fitness website that serves as an AI-powered personal trainer, offering personalized diet and exercise plans based on user goals.The platform's standout feature uses OpenCV to analyze and correct exercise form in real-time.This ensures users perform workouts safely and effectively while staying on track with their fitness journey.The site combines intelligent guidance with interactive feedback for a complete virtual training experience.",
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
          name: "Stripe",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
      ],
      source_link: "https://fit-rahoo2.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/fit-rahoo2",
    },
  ];
  
  
  export { experiences, services, technologies };
