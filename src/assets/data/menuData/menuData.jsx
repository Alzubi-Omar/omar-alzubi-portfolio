import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const navMenuItems = [
  { name: "home", path: "#home", label: "Home" },
  { name: "projects", path: "#projects", label: "Projects" },
  { name: "about", path: "#about", label: "About" },
  { name: "skills", path: "#skills", label: "Skills" },
  { name: "contact", path: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/omaralzubi-007oa/",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Alzubi-Omar", Icon: FaGithub, label: "GitHub" },
  { href: "mailto:omaralzubi.dev@gmail.com", Icon: FaEnvelope, label: "Email" },
];
