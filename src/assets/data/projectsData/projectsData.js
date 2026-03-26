import project_one from "@/assets/images/project_one.png";
import project_two from "@/assets/images/project_two.png";
import project_three from "@/assets/images/project_three.png";
import project_four from "@/assets/images/project_four.png";

export const projectsData = [
  {
    id: 1,
    title: "Web Design",
    description:
      "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: project_one,
    liveSiteUrl: "https://puff-of-air-1.onrender.com/",
    type: "E-Commerce",
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Stripe API",
    ],
    extendedDescription:
      "This project is an end-to-end e-commerce solution that allows users to browse products, add items to their cart, and securely check out using Stripe. The platform includes an admin panel for product and order management.",
    featured: true,
    category: "featured",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects, skills, and contact information.",
    image: project_two,
    liveSiteUrl: "https://to-do-list-app-6sqc.onrender.com/",
    type: "Personal Portfolio",
    stack: ["HTML", "CSS", "JavaScript", "React", "Netlify"],
    extendedDescription:
      "Built with a responsive design to provide a seamless experience on all devices. Features include a projects showcase, skillsets, and a contact form integrated with a serverless backend.",
    featured: true,
    category: "featured",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A task management app to help individuals and teams stay organized and productive.",
    image: project_three,
    liveSiteUrl: "https://alzubi-omar.github.io/Dice-Roll-Game/",
    type: "Productivity Tool",
    stack: ["React", "TypeScript", "Firebase", "Material-UI"],
    extendedDescription:
      "This app offers features like task creation, deadlines, and team collaboration. Data persistence is handled through Firebase, and the UI is styled with Material-UI for a professional look and feel.",
    featured: true,
    category: "featured",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "A financial dashboard for tracking income, expenses, and savings goals.",
    image: project_four,
    type: "Financial Services",
    stack: ["Next.js", "Apollo GraphQL", "PostgreSQL", "AWS Lambda"],
    extendedDescription:
      "The dashboard provides real-time insights into financial data. It integrates with multiple APIs to pull data and provides customizable visualizations for users to track their financial health.",
    featured: false,
    category: "experiment",
  },
  {
    id: 5,
    title: "web Design",
    description:
      "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: project_four,
    type: "Event Management",
    stack: ["React", "Node.js", "Express", "MySQL", "Docker"],
    extendedDescription:
      "This platform simplifies the event booking process by providing features like seat selection, ticket generation, and payment processing. The backend is containerized with Docker for scalability.",
    featured: false,
    category: "experiment",
  },
  {
    id: 6,
    title: "web Design",
    description:
      "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: project_four,
    type: "Content Management",
    stack: ["React", "GraphQL", "Apollo Server", "MongoDB"],
    extendedDescription:
      "The platform supports user authentication, WYSIWYG editors for writing content, and SEO optimization for articles. Built with a focus on scalability and performance.",
    featured: false,
    category: "experiment",
  },
  {
    id: 7,
    title: "web Design",
    description:
      "7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: project_four,
    type: "Utility",
    stack: ["React", "CSS", "OpenWeather API"],
    extendedDescription:
      "The app fetches weather data using the OpenWeather API and presents it in a clean and intuitive interface. Features include location search, hourly and weekly forecasts, and weather alerts.",
    featured: false,
    category: "experiment",
  },
  {
    id: 8,
    title: "web Design",
    description:
      "8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: project_four,
    type: "Business Management",
    stack: [
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS Elastic Beanstalk",
    ],
    extendedDescription:
      "Designed to streamline inventory tracking, reduce manual errors, and provide real-time analytics. The system includes role-based access control and integration with third-party tools like QuickBooks.",
    featured: false,
    category: "experiment",
  },
];
