import project_one from "@/assets/images/project_one.png";
import project_two from "@/assets/images/project_two.png";
import project_three from "@/assets/images/project_three.png";
import project_four from "@/assets/images/project_four.png";
import project_five from "@/assets/images/project_five.png";

export const projectsData = [
  {
    id: 1,
    title: "ToDoList",
    description:
      "A full-stack task management app that lets users create custom lists, add and edit items, and delete tasks — all persisted in MongoDB.",
    image: project_one,
    liveSiteUrl: "https://to-do-list-app-m7vn.onrender.com",
    type: "Productivity Tool",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    extendedDescription:
      "Built with Node.js and Express.js, using MongoDB with Mongoose for data persistence. Users can create multiple custom lists, add items to each list, edit item details, and delete tasks as needed. The app provides a clean and intuitive interface for managing tasks efficiently across sessions.",
    featured: true,
    category: "featured",
  },
  {
    id: 2,
    title: "Daily Journal",
    description:
      "A password-protected full-stack journal app where users can create, view, edit, and delete personal blog posts stored in PostgreSQL.",
    image: project_two,
    liveSiteUrl: "https://daily-journal-fuvd.onrender.com/",
    type: "Personal Tool",
    stack: ["Node.js", "Express.js", "PostgreSQL", "bcrypt", "EJS"],
    extendedDescription:
      "Built with Express.js and PostgreSQL for persistent storage. Each post is password-protected using bcrypt hashing — users must authenticate before editing or deleting entries. Features include full CRUD operations, secure password comparison, and a clean EJS-rendered interface for managing personal journal entries.",
    featured: true,
    category: "featured",
  },
  {
    id: 3,
    title: "Puff of Air",
    description:
      "A real-time weather app that lets you search current conditions for any city worldwide, built with a clean server-rendered architecture.",
    image: project_three,
    liveSiteUrl: "https://puff-of-air.onrender.com/",
    type: "Utility",
    stack: ["Node.js", "Express", "EJS", "OpenWeatherMap API", "Helmet.js"],
    extendedDescription:
      "Built with Node.js and Express using a clean separation of concerns — config, middleware, services, and routes each in their own layer. Uses the OpenWeatherMap Geocoding API to convert city names to coordinates before fetching live weather data. Features include Helmet.js security headers, rate limiting, request logging, and graceful error handling.",
    featured: true,
    category: "featured",
  },
  {
    id: 4,
    title: "Dice Roll Game",
    description:
      "A two-player turn-based dice game where the first player to reach 100 points wins. Roll, hold, and strategize your way to victory.",
    image: project_four,
    liveSiteUrl: "https://alzubi-omar.github.io/dice-roll-game/",
    type: "Game",
    stack: ["HTML5", "CSS3", "JavaScript"],
    extendedDescription:
      "A fun interactive game built with vanilla JavaScript. Players take turns rolling a dice — rolling a 1 resets the round score, while holding adds it to the total. Features dynamic dice animations, turn switching, winner detection, and a reset option for new rounds.",
    featured: false,
    category: "experiment",
  },
  {
    id: 5,
    title: "Guess the Number",
    description:
      "A number guessing game where players try to find the secret number between 1 and 30, with high/low feedback and score tracking.",
    image: project_five,
    liveSiteUrl: "https://alzubi-omar.github.io/guess-the-number-game/",
    type: "Game",
    stack: ["HTML5", "CSS3", "JavaScript"],
    extendedDescription:
      "Built with vanilla JavaScript. Players guess a randomly generated number between 1 and 30, receiving feedback if their guess is too high or too low. Tracks current score and highscore across sessions, supports keyboard input via Enter key, and includes smooth animations.",
    featured: false,
    category: "experiment",
  },
];
