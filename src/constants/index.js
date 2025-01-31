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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "MongoDB",
    icon: mongodb,
  },
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

const experiences = [
  {
    title: "Intern Machine Learning",
    company_name: "EZLINE Technologies",
    icon: starbucks, // Reusing Starbucks icon
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Improved image and video analysis accuracy by 20% through fine-tuning and optimizing algorithms.",
      "Enhanced model accuracy by 15% by implementing data augmentation techniques and reducing overfitting.",
      "Evaluated model performance using metrics such as precision, recall, and F1 score.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Anetly",
    icon: tesla, // Reusing Tesla icon
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Increased data retrieval efficiency by 30% through optimized SQL queries and database management.",
      "Streamlined data pipelines, resulting in a 25% reduction in data processing time.",
      "Integrated data solutions with Google Cloud Platform and successfully deployed data solutions that scaled to handle a 50% increase in data volume.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with him was a game-changer. His AI solutions helped our business processes.",
    name: "Ali",
  },
  {
    testimonial:
      "The AI-powered analytics provided by him helped us uncover critical insights, boosting our revenue by 30%.",
    name: "Mariam",
  },
  {
    testimonial:
      "His expertise in machine learning and AI-driven automation allowed us to streamline our operations, saving both time and resources.",
    name: "Faizan ",
  },
];


const projects = [
  {
    name: "AI-Driven HR System",
    description:
      "An intelligent HR management platform leveraging AI to automate recruitment, automatic interview scheduling, and enhance workforce productivity with data-driven insights.",
    tags: [
      {
        name: "Natural Language Processing",
        color: "blue-text-gradient",
      },
      {
        name: "Generative AI",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent, // Replace this with the appropriate image for your project
    source_code_link: "https://github.com/", // Replace with your actual GitHub repo link
  },
  {
    name: "ShopHub ",
    description:
      "This eCommerce application is a modern, responsive web platform  to provides users with a seamless shopping experience, allowing them to browse products, add items to their cart, and complete purchases. It has engaging animations and chatbot to improve user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java Script",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ubaidullaah/Shop_HUB_ECOMMERCE_PLATFORM",
  },
  {
    name: "Chatbot for Youtube",
    description:
      "A chatbot that extracts audio from YouTube videos, converts speech to text with timestamps, and lets users ask questions about the transcription. It provides relevant answers, generates summaries, and shows timestamps to find key moments in the audio",
    tags: [
      {
        name: "Natural Language Processing",
        color: "blue-text-gradient",
      },
      {
        name: "Generative AI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
